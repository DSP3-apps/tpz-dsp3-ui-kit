import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  it('renders with text', () => {
    render(<Paragraph>Some test text</Paragraph>);

    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });
});
