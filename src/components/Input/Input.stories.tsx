import { Meta, StoryFn } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  children: 'Input',
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});

export const TypeNumber = Template.bind({});
TypeNumber.args = {
  type: 'number',
  defaultValue: '1234567890',
};

export const TypeEmail = Template.bind({});
TypeEmail.args = {
  type: 'email',
  defaultValue: 'abc@domain.com',
};

export const TypePassword = Template.bind({});
TypePassword.args = {
  type: 'password',
  defaultValue: '123456789',
};

export const ErrorStyle = Template.bind({});
ErrorStyle.args = {
  className: 'border-error focus:border-border-input',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  className: 'border-border p-2 h-full w-[1/2]',
};
