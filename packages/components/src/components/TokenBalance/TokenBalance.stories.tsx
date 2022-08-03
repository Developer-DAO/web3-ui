import React from 'react';
import { chain } from 'wagmi';

import { TokenBalance } from './TokenBalance';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WagmiDecorator } from '../../../../../apps/storybook/.storybook/decorator';

const UNI_TOKEN_ADDRESS = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

export default {
  title: 'Components/TokenBalance',
  component: TokenBalance,
  decorators: [WagmiDecorator],
} as ComponentMeta<typeof TokenBalance>;

export const Default: ComponentStory<typeof TokenBalance> = (args) => (
  <TokenBalance {...args} />
);

export const AddressOrNameParam = () => (
  <TokenBalance addressOrName="vitalik.eth" suspense={true} />
);

export const TokenParam = () => (
  <TokenBalance
    addressOrName="andriishupta.eth"
    token={UNI_TOKEN_ADDRESS}
    suspense={true}
  />
);

export const ChainParam = () => (
  <TokenBalance
    addressOrName="0x0000000000000000000000000000000000000000"
    chainId={chain.polygon.id}
    suspense={true}
  />
);

export const FormatParam = () => (
  <TokenBalance
    addressOrName="0x0000000000000000000000000000000000000000"
    formatUnits={'gwei'}
  />
);
