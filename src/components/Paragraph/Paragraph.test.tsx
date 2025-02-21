import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  it('renders with text', () => {
    render(<Paragraph>Some test text</Paragraph>);

    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });
});
