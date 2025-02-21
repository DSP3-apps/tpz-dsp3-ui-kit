import { Meta, StoryFn } from '@storybook/react';

import { Card, CardProps } from './Card';

export default {
  children: 'Card',
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const JustText = Template.bind({});
JustText.args = {
  children: 'Hello, this is some simple text',
};

export const ParagraphOfText = Template.bind({});
ParagraphOfText.args = {
  children: <p>Hello, this is some simple text</p>,
};

export const ImageAndText = Template.bind({});
ImageAndText.args = {
  children: (
    <div>
      <img
        src="https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm8lMjBjb3B5cmlnaHR8ZW58MHx8MHx8fDA%3D"
        alt="Card"
      />
      <p>This is text about the image</p>
    </div>
  ),
};
