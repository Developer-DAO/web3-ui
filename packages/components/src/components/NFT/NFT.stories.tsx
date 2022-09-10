import { NFT } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WagmiDecorator } from '../../../../../apps/storybook/.storybook/decorator';

export default {
  title: 'Components/NFT',
  component: NFT,
  argTypes: {
    size: {
      type: 'string',
      defaultValue: 'md',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'select' },
    },
  },
  decorators: [WagmiDecorator],
} as ComponentMeta<typeof NFT>;

const Template: ComponentStory<typeof NFT> = (args) => <NFT {...args} />;

export const Default = Template.bind({});

Default.args = {
  contractAddress: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
  tokenId: '6240',
};
