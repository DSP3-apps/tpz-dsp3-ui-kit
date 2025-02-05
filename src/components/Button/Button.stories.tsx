// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  children: 'Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'blue',
  children: 'Click me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'red',
  children: 'Click me',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'green',
  children: 'Click me',
};
