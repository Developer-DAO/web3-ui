import { ENSAvatar } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WagmiDecorator } from '../../../../../apps/storybook/.storybook/decorator';

export default {
  title: 'Components/ENSAvatar',
  component: ENSAvatar,
  argTypes: {},
  decorators: [WagmiDecorator],
} as ComponentMeta<typeof ENSAvatar>;

export const Default: ComponentStory<typeof ENSAvatar> = (args) => (
  <ENSAvatar {...args} />
);

export const ImageAvatar = () => (
  <ENSAvatar address="0xc37c41601bC88C91b6569c701f08D37FA0F565f0" />
);

export const DefaultAvatar = () => (
  <ENSAvatar address="0xF9D26888427ab76e4Dc5b9ACB23793bdd30D8000" />
);
