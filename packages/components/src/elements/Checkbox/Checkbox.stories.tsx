import React from 'react';
import { Checkbox } from './Checkbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Checkbox',
};
