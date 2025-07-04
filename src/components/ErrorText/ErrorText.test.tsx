import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { ErrorText } from './ErrorText';

describe('ErrorText', () => {
  it('renders with default ErrorText', () => {
    render(<ErrorText>Error message</ErrorText>);

    expect(screen.getByRole('alert')).toHaveTextContent(/error message/i);
  });

  it('renders with custom styles', () => {
    render(<ErrorText className="bg-orange-500">Error text</ErrorText>);

    const error = screen.getByRole('alert');

    expect(error).toHaveClass(/bg-orange-500/i);
    expect(error).not.toHaveClass(/bg-green-500/i);
    expect(error).toHaveTextContent(/error text/i);
  });

  it('renders with complex children', () => {
    render(
      <ErrorText>
        <a href="/">Error link</a>
      </ErrorText>,
    );

    const linkElement = screen.getByRole('link', { name: /error link/i });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
