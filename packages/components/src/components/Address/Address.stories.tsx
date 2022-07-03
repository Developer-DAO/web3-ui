import React from 'react';
import { Address } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Address',
  component: Address,
  argTypes: {},
} as ComponentMeta<typeof Address>;

const Template: ComponentStory<typeof Address> = (args) => (
  <Address {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: '0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5',
  copiable: false,
  shortened: false,
  ens: false,
};

export const DefaultShortenedWithProvidedENS = Template.bind({});
DefaultShortenedWithProvidedENS.args = {
  value: 'nick.eth',
  copiable: false,
  shortened: false,
  ens: false,
};

export const DefaultShortenedWithHexAddress = Template.bind({});
DefaultShortenedWithHexAddress.args = {
  value: '0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5',
  copiable: false,
  shortened: true,
  ens: false,
};

export const CanBeCopied = Template.bind({});
CanBeCopied.args = {
  value: '0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5',
  copiable: true,
  shortened: false,
  ens: false,
};
