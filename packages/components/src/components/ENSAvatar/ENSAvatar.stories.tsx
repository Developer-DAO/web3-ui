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

export const Template: ComponentStory<typeof ENSAvatar> = (args) => (
  <ENSAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  address: 'https://www.developerdao.com/D_D_logo-light.svg',
};
