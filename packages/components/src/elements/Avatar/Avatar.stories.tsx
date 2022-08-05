import React from 'react';
import { Avatar } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      type: 'string',
      defaultValue: '4',
      options: ['1', '2', '3', '4', '5', '6'],
      control: { type: 'select' },
    },
    shape: {
      type: 'string',
      defaultValue: 'circle',
      options: ['square', 'circle'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.developerdao.com/D_D_logo-light.svg',
};
