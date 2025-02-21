import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Heading, HeadingProps } from './Heading';

describe('Heading Component', () => {
  const headingTypes: HeadingProps['type'][] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  it.each(headingTypes)('renders correct HTML element for type "%s"', (type) => {
    render(<Heading type={type}>Test {type}</Heading>);

    const heading = screen.getByRole('heading', { name: `Test ${type}` });
    expect(heading).toBeInTheDocument();
  });

  it.each(headingTypes)('applies correct styles for type "%s"', (type) => {
    render(<Heading type={type}>Styled {type}</Heading>);

    const heading = screen.getByText(`Styled ${type}`);
    expect(heading).toHaveClass('font-bold text-govukBlack');
  });
});
