import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Hint } from './Hint';

describe('Hint', () => {
  it('renders with default Hint', () => {
    render(<Hint>Hint text</Hint>);
    expect(screen.getByText(/Hint text/i)).toBeInTheDocument();
  });
  it('renders with custom styles', () => {
    render(<Hint className="bg-orange-500">Hint text</Hint>);
    const hint = screen.getByText(/Hint text/i);
    expect(hint).toHaveClass(/bg-orange-500/i);
    expect(hint).not.toHaveClass(/bg-green-500/i);
    expect(hint).toHaveTextContent(/Hint text/i);
  });
});
