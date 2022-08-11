import { Address } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WagmiDecorator } from '../../../../../apps/storybook/.storybook/decorator';

export default {
  title: 'Components/Address',
  component: Address,
  argTypes: {},
  decorators: [WagmiDecorator],
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
