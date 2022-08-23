import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from './Dropdown';

export default {
  title: 'Elements/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Test label',
  placeHolder: 'Test placeHolder',
  items: ['Item 1', 'Item 2', 'Item 3'],
  onSelect: (value) => {
    alert('value changed, new value is: ' + value);
  },
};
