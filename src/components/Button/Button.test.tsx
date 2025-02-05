import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders with default color blue', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-govukBlue');
    expect(button).toHaveTextContent('Click me');
  });

  it('renders with red color when color is "red"', () => {
    render(<Button color="red">Click me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-govukRed');
    expect(button).toHaveTextContent('Click me');
  });

  it('renders with green color when color is "green"', () => {
    render(<Button color="green">Click me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-govukGreen');
    expect(button).toHaveTextContent('Click me');
  });

  it('renders with correct children content', () => {
    render(<Button color="green">Submit</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Submit');
  });
});
