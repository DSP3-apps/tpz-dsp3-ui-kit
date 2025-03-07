import { Meta, StoryFn } from '@storybook/react';

import { TextArea, TextAreaProps } from './TextArea';

export default {
  children: 'TextArea',
  component: TextArea,
} as Meta;

const Template: StoryFn<TextAreaProps> = (args) => <TextArea {...args} />;

export const DefaultTextarea = Template.bind({});

export const ErrorStyle = Template.bind({});
ErrorStyle.args = {
  className: 'border-error focus:border-border-input',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  className: 'border-border p-2 h-full w-[1/2]',
};
