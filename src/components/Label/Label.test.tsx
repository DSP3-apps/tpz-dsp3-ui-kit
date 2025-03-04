import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Label } from './Label';

describe('Label', () => {
  it('renders with default Label', () => {
    render(<Label id="test-id">Label text</Label>);
    const label = screen.getByRole('presentation');
    expect(label).toHaveClass('block sm:text-static-base md:text-static-lg text-black mb-1');
    expect(label).toHaveTextContent(/Label text/i);
  });
  it('renders with custom styles', () => {
    render(
      <Label id="test-id" className="bg-orange-500">
        Label with custom style
      </Label>,
    );
    const label = screen.getByRole('presentation');
    expect(label).toHaveClass(/bg-orange-500/i);
    expect(label).not.toHaveClass(/bg-green-500/i);
    expect(label).toHaveTextContent(/Label with custom style/i);
  });
});
