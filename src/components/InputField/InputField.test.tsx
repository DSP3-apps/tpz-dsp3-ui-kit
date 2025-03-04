import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { InputField } from './InputField';

describe('InputField', () => {
  it('renders with default InputField', () => {
    render(<InputField id="test-id" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders with type email', () => {
    render(<InputField id="test-id" type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders with type number', () => {
    render(<InputField id="test-id" type="number" />);
    const input = screen.getByRole('spinbutton');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('renders with type password', () => {
    render(
      <label htmlFor="test-id">
        Password
        <InputField id="test-id" type="password" />
      </label>,
    );
    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('renders with custom className', () => {
    render(<InputField id="test-id" type="text" className="input-styles" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('input-styles');
  });
});
