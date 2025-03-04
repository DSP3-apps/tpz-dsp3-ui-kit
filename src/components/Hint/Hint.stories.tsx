import { Meta, StoryObj } from '@storybook/react';

import { Hint } from './Hint';

export default {
  children: 'Hint',
  component: Hint,
} as Meta;

export const defaultHint: StoryObj<typeof Hint> = {
  render: () => <Hint>Hint text</Hint>,
};

export const customizedHint: StoryObj<typeof Hint> = {
  render: () => <Hint className="p-4 text-gary-900">Hint styles customized </Hint>,
};
