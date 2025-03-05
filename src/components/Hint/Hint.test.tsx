import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Hint } from './Hint';

describe('Hint', () => {
  it('renders with default Hint message', () => {
    render(<Hint>Hint text</Hint>);
    expect(screen.getByText(/hint text/i)).toHaveTextContent(/hint text/i);
  });

  it('renders with custom styles', () => {
    render(<Hint className="bg-orange-500">hint message</Hint>);

    const hintElement = screen.getByText(/hint message/i);

    expect(hintElement).toHaveClass(/bg-orange-500/i);
    expect(hintElement).not.toHaveClass(/bg-green-500/i);
  });

  it('renders with complex children', () => {
    render(
      <Hint>
        Some description text <a href="/">Link</a>
      </Hint>,
    );

    const linkElement = screen.getByRole('link', { name: /link/i });

    expect(screen.getByText(/some description text/i)).toBeInTheDocument();

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
