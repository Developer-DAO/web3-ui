import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from './DropdownMenu';

import { Button } from '../Button';

export default {
  title: 'Elements/DropdownMenu',
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args}>
    <DropdownMenuTrigger asChild>
      <Button>Dropdown</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuGroup>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>Item</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Choose one</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="one">
          <DropdownMenuRadioItem value="one">Item</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="two">Item</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="three">Item</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {
  children: 'DropdownMenu',
};
