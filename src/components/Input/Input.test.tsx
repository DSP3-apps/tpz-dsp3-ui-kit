import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
  it('renders with default Input', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders with type email', () => {
    render(<Input type="email" />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders with type number', () => {
    render(<Input type="number" />);

    const input = screen.getByRole('spinbutton');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'number');
  });

  it('renders with type password', () => {
    render(
      <label htmlFor="test-id">
        Password
        <Input id="test-id" type="password" />
      </label>,
    );

    // type="password" has no role and is therefore not suitable for getByRole
    const input = screen.getByLabelText(/password/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('renders with custom styling', () => {
    render(<Input id="test-id" type="text" className="input-styles" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(/input-styles/i);
  });
});
