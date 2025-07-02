import { describe, expect, it } from 'vitest';

import { DropdownMenu, DropdownMenuItem, DrowndownMenuButton } from './DropdownMenu';

import { render, screen, userEvent, waitFor } from '@/utils/renderers';

type Item = { label: string };

const ITEMS: Item[] = [{ label: 'A' }, { label: 'B' }, { label: 'C' }, { label: 'D' }];

const CustomButton = ({ ...props }: DrowndownMenuButton) => {
  return <button {...props}>Some Custom Text</button>;
};

const CustomItem = ({ label, ...props }: DropdownMenuItem<Item>) => {
  return (
    <a {...props} role="link">
      {label}
    </a>
  );
};

describe('DropdownMenu Component', () => {
  it('should render with no menu when unopened', () => {
    render(<DropdownMenu items={ITEMS}></DropdownMenu>);

    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    expect(() => screen.getByRole('menu')).toThrow();
  });

  it('should render with menu when opened', async () => {
    render(<DropdownMenu items={ITEMS}></DropdownMenu>);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /menu/i }));

    for (const item of ITEMS) {
      expect(await screen.findByRole('menuitem', { name: item.label })).toBeInTheDocument();
    }
  });

  it('should render with a custom item component', async () => {
    render(<DropdownMenu items={ITEMS} itemRenderer={CustomItem}></DropdownMenu>);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /menu/i }));

    for (const item of ITEMS) {
      expect(await screen.findByRole('link', { name: item.label })).toBeInTheDocument();
    }
  });

  it('should render with a custom button component', () => {
    render(<DropdownMenu items={ITEMS} buttonRenderer={CustomButton}></DropdownMenu>);

    expect(screen.getByRole('button', { name: /some custom text/i })).toBeInTheDocument();
  });

  it('should open the menu when button is clicked', async () => {
    render(<DropdownMenu items={ITEMS} />);

    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /menu/i });

    await user.click(button);

    expect(await screen.findByRole('menu')).toBeInTheDocument();
  });

  it('should open the menu when Space or Enter is pressed', async () => {
    render(<DropdownMenu items={ITEMS} />);

    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /menu/i });
    button.focus();

    await user.keyboard(' ');

    expect(await screen.findByRole('menu')).toBeInTheDocument();

    // pressing another key will close the menu but assuming the menu wasnt open already this would open it anyway
    await user.keyboard('{Enter}');

    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('should close when Escape is pressed', async () => {
    render(<DropdownMenu items={ITEMS} />);

    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /menu/i });

    await user.click(button);

    expect(await screen.findByRole('menu')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('should close when clicking outside', async () => {
    render(
      <>
        <DropdownMenu items={ITEMS} />
        <button>Outside</button>
      </>,
    );

    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /menu/i });

    await user.click(button);

    expect(await screen.findByRole('menu')).toBeInTheDocument();

    // click away to another element, which should close the menu
    await user.click(screen.getByRole('button', { name: /outside/i }));

    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('should close when focus moves outside (blur)', async () => {
    render(
      <>
        <DropdownMenu items={ITEMS} />
        <button>Outside</button>
      </>,
    );

    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /menu/i });

    await user.click(button);

    expect(await screen.findByRole('menu')).toBeInTheDocument();

    // move focus away from the menu, which should close it
    await user.tab();

    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('should navigate items with ArrowUp/ArrowDown', async () => {
    render(<DropdownMenu items={ITEMS} />);

    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /menu/i });

    await user.click(button);

    const items = screen.getAllByRole('menuitem');

    // first element is focussed when the menu is open
    expect(items[0]).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(items[1]).toHaveFocus();

    await user.keyboard('{ArrowUp}');
    expect(items[0]).toHaveFocus();
  });

  it('should select an item with Enter or Space', async () => {
    render(<DropdownMenu items={ITEMS} />);

    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /menu/i });

    await user.click(button);
    const items = screen.getAllByRole('menuitem');

    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');

    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());

    await user.click(button);

    expect(items[0]).toHaveFocus();
  });

  it('should move focus away when pressing Tab', async () => {
    render(
      <>
        <DropdownMenu items={ITEMS} />
        <button>Other Button</button>
      </>,
    );

    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /menu/i });
    await user.click(button);

    await user.tab();

    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });
});
