import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders with primary style', () => {
    render(<Button type="primary">Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-brand');
    expect(button).toHaveTextContent('Primary');
  });

  it('renders with secondary style', () => {
    render(<Button type="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-slate-100');
    expect(button).toHaveTextContent('Secondary');
  });

  it('renders with inverse style', () => {
    render(<Button type="inverse">Inverse</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-white');
    expect(button).toHaveTextContent('Inverse');
  });

  it('renders with disabled style', () => {
    render(
      <Button type="primary" disabled>
        Primary Disabled
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Primary Disabled');
  });

  it('renders with custom styles', () => {
    render(
      <Button type="primary" className="bg-orange-500">
        Primary Modified
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-orange-500');
    expect(button).not.toHaveClass('bg-green-500');
    expect(button).toHaveTextContent('Primary Modified');
  });
});
