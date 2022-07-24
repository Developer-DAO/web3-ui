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
        'red',
        'blue',
        'green',
        'crimson',
        'pink',
        'purple',
        'violet',
        'indigo',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange',
        'gold',
        'bronze',
        'gray',
        'contrast',
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
