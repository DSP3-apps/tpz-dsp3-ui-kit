import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
  children: 'Button',
  component: Button,
} as Meta;

export const AllButtons: StoryObj<typeof Button> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <Button type="primary" onClick={action('primary-click')}>
          Primary
        </Button>
      </div>
      <div>
        <Button type="secondary" onClick={action('secondary-click')}>
          Secondary
        </Button>
      </div>
      <div className="p-4 bg-brand">
        <Button type="inverse" onClick={action('inverse-click')}>
          Inverse
        </Button>
      </div>
      <div>
        <Button type="primary" disabled>
          Disabled Button
        </Button>
      </div>
    </div>
  ),
};
