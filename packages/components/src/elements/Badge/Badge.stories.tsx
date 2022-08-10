import React from 'react';
import { Badge } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/Badge',
  component: Badge,
  argTypes: {
    variant: {
      type: 'string',
      defaultValue: 'green',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'neutral',
        'blue',
        'cyan',
        'gray',
        'green',
        'orange',
        'yellow',
        'orange',
        'pink',
        'purple',
        'red',
        'yellow',
      ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Badge',
};
