import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownSeparator,
  DropdownCheckboxItem,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
} from './Dropdown';

import { Button } from '../Button';

export default {
  title: 'Elements/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    <DropdownTrigger asChild>
      <Button>Dropdown</Button>
    </DropdownTrigger>
    <DropdownContent align="end">
      <DropdownGroup>
        <DropdownItem>Item</DropdownItem>
        <DropdownItem>Item</DropdownItem>
        <DropdownItem>Item</DropdownItem>
        <DropdownSeparator />
        <DropdownCheckboxItem>Item</DropdownCheckboxItem>
        <DropdownCheckboxItem checked>Item</DropdownCheckboxItem>
        <DropdownCheckboxItem>Item</DropdownCheckboxItem>
        <DropdownSeparator />
        <DropdownLabel>Choose one</DropdownLabel>
        <DropdownRadioGroup value="one">
          <DropdownRadioItem value="one">Item</DropdownRadioItem>
          <DropdownRadioItem value="two">Item</DropdownRadioItem>
          <DropdownRadioItem value="three">Item</DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownGroup>
    </DropdownContent>
  </Dropdown>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Dropdown',
};
