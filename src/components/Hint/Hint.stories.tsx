import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import { Hint, HintProps } from './Hint';
import { Button } from '../Button/Button';

export default {
  children: 'Hint',
  component: Hint,
} as Meta;

const Template: StoryFn<HintProps> = (args) => <Hint {...args} />;

export const DefaultHint = Template.bind({});
DefaultHint.args = {
  children: 'Hint message',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  className: 'text-3xl',
  children: 'Error message with extra large text',
};

export const ComplexChildren = Template.bind({});
ComplexChildren.args = {
  children: (
    <div>
      Hint message with link and button{' '}
      <a className="underline text-link" href="/">
        Link
      </a>
      <Button type="primary" onClick={action('primary-click')}>
        Click
      </Button>
    </div>
  ),
};
