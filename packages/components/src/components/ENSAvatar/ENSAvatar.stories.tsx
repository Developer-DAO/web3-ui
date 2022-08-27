import { ENSAvatar } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WagmiDecorator } from '../../../../../apps/storybook/.storybook/decorator';

export default {
  title: 'Components/ENSAvatar',
  component: ENSAvatar,
  argTypes: {
    address: {
      type: 'string',
      control: 'text',
    },
    size: {
      type: 'string',
      defaultValue: 'xl',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
  },
  decorators: [WagmiDecorator],
} as ComponentMeta<typeof ENSAvatar>;

const Template: ComponentStory<typeof ENSAvatar> = (args) => (
  <ENSAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  address: '0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5',
};
