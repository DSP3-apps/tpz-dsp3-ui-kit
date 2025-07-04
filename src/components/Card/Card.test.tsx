import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Card } from './Card';

describe('Card', () => {
  it('renders with default color blue', () => {
    render(<Card>Some test text</Card>);

    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
