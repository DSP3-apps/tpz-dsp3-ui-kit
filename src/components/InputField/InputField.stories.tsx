import { Meta, StoryObj } from '@storybook/react';

import { InputField } from './InputField';
import { ErrorText } from '../ErrorText/ErrorText';
import { Hint } from '../Hint/Hint';
import { Label } from '../Label/Label';

export default {
  id: 'input',
  component: InputField,
} as Meta;

export const defaultInput: StoryObj<typeof InputField> = {
  render: () => <InputField id="test-id" type="text" />,
};

export const defaultInputOfTypePassword: StoryObj<typeof InputField> = {
  render: () => <InputField id="test-id" type="password" />,
};

export const defaultInputOfTypeNumber: StoryObj<typeof InputField> = {
  render: () => <InputField id="test-id" type="number" />,
};

export const defaultInputOfTypeEmail: StoryObj<typeof InputField> = {
  render: () => <InputField id="test-id" type="email" />,
};

export const inputWithLabel: StoryObj<typeof InputField> = {
  render: () => (
    <div>
      <Label id="test-id">Name</Label>
      <InputField id="test-id" />
    </div>
  ),
};

export const inputWithLabelAndHint: StoryObj<typeof InputField> = {
  render: () => (
    <div>
      <Label id="test-id">Address</Label>
      <Hint>Some hint message</Hint>
      <InputField id="test-id" />
    </div>
  ),
};

export const inputWithLabelHintAndError: StoryObj<typeof InputField> = {
  render: () => (
    <div className="border-l-[5px] border-red-500 pl-3">
      <Label id="test-id" className="md:text-static-3xl font-bold">
        Address
      </Label>
      <Hint>Some hint message</Hint>
      <ErrorText>This field is required</ErrorText>
      <InputField id="test-id" className="border-red-500" />
    </div>
  ),
};
