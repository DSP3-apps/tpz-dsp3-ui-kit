import { Meta, StoryObj } from '@storybook/react';

import { ErrorText } from './ErrorText';

export default {
  children: 'Error text',
  component: ErrorText,
} as Meta;

export const defaultError: StoryObj<typeof ErrorText> = {
  render: () => <ErrorText>Error message</ErrorText>,
};

export const customizedError: StoryObj<typeof ErrorText> = {
  render: () => <ErrorText className="p-4">Error message</ErrorText>,
};
