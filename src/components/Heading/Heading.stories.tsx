import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  children: 'Heading',
  component: Heading,
} as Meta;

export const AllHeadings: StoryObj<typeof Heading> = {
  render: () => (
    <div>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as HeadingProps['type'][]).map((type) => (
        <Heading key={type} type={type}>
          {type.toUpperCase()} Example
        </Heading>
      ))}
    </div>
  ),
};
