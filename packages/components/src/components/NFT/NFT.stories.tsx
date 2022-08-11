import { NFT } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WagmiDecorator } from '../../../../../apps/storybook/.storybook/decorator';

export default {
  title: 'Components/NFT',
  component: NFT,
  argTypes: {},
  decorators: [WagmiDecorator],
} as ComponentMeta<typeof NFT>;

const Template: ComponentStory<typeof NFT> = (args) => <NFT {...args} />;

export const Image = Template.bind({});
Image.args = {};

export const GIF = Template.bind({});
GIF.args = {};

export const Video = Template.bind({});
Video.args = {};

export const Audio = Template.bind({});
Audio.args = {};

export const Error = () => <NFT contractAddress="abcd" tokenId="1" />;
