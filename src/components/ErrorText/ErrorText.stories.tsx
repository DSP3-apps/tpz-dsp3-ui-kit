import { Meta, StoryFn } from '@storybook/react';

import { ErrorText, ErrorTextProps } from './ErrorText';

export default {
  children: 'Error text',
  component: ErrorText,
} as Meta;

const Template: StoryFn<ErrorTextProps> = (args) => <ErrorText {...args} />;

export const defaultError = Template.bind({});
defaultError.args = {
  children: 'Error message',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  className: 'text-3xl',
  children: 'Error message with large text',
};

export const ComplexChildren = Template.bind({});
ComplexChildren.args = {
  children: (
    <div>
      Error message with link{' '}
      <a className="underline text-link" href="/">
        Link
      </a>
    </div>
  ),
};
