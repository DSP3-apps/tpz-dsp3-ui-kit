import { Meta, StoryFn } from '@storybook/react';

import { Paragraph, ParagraphProps } from './Paragraph';

export default {
  children: 'Paragraph',
  component: Paragraph,
} as Meta;

const Template: StoryFn<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: (
    <div>
      <p>Hello, this is some simple text</p>
    </div>
  ),
};

// export const SimpleJustText = Template.bind({});
// SimpleJustText.args = {
//   children: 'Hello, this is some simple text',
// };

// export const ImageAndText = Template.bind({});
// ImageAndText.args = {
//   children: (
//     <div>
//       <img
//         src="https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm8lMjBjb3B5cmlnaHR8ZW58MHx8MHx8fDA%3D"
//         alt="Paragraph"
//       />
//       <p>This is text about the image</p>
//     </div>
//   ),
// };
