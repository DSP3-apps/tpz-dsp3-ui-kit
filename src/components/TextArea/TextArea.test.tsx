import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('renders a textarea with default rows', () => {
    const { getByRole } = render(<TextArea />);
    const textAreaElement = getByRole('textbox');

    expect(textAreaElement).toBeInTheDocument();
    expect(textAreaElement).toHaveAttribute('rows', '5');
  });

  it('renders a textarea with custom rows', () => {
    const { getByRole } = render(<TextArea rows={10} />);
    const textAreaElement = getByRole('textbox');

    expect(textAreaElement).toHaveAttribute('rows', '10');
  });

  it('applies custom className', () => {
    const { getByRole } = render(<TextArea className="custom-style" />);
    const textAreaElement = getByRole('textbox');

    expect(textAreaElement).toHaveClass('custom-style');
  });

  it('renders as disabled when disabled prop is passed', () => {
    const { getByRole } = render(<TextArea disabled />);
    const textAreaElement = getByRole('textbox');

    expect(textAreaElement).toBeDisabled();
  });
});
