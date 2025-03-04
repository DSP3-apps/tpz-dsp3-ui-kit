import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

export default {
  children: 'Label',
  component: Label,
} as Meta;

export const defaultLabel: StoryObj<typeof Label> = {
  render: () => <Label id="test-id">Label text</Label>,
};

export const customizedLabel: StoryObj<typeof Label> = {
  render: () => (
    <Label id="test-id" className="p-4 text-gary-900">
      <h1 className="text-static-5xl font-bold">Label styles customized with heading tag</h1>
    </Label>
  ),
};
