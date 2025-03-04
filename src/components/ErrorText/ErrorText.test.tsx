import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ErrorText } from './ErrorText';

describe('ErrorText', () => {
  it('renders with default ErrorText', () => {
    render(<ErrorText>Error message</ErrorText>);
    const error = screen.getByRole('paragraph');
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent(/Error message/i);
  });
  it('renders with custom styles', () => {
    render(<ErrorText className="bg-orange-500">Error text</ErrorText>);
    const error = screen.getByRole('paragraph');
    expect(error).toHaveClass(/bg-orange-500/i);
    expect(error).not.toHaveClass(/bg-green-500/i);
    expect(error).toHaveTextContent(/Error text/i);
  });
});
