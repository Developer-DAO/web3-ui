import React from 'react';
import { Story } from '@storybook/react';

import { chain, createClient, configureChains, WagmiConfig } from 'wagmi';
import { MockConnector } from '@wagmi/core/connectors/mock';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { Wallet } from 'ethers';

const { chains, provider, webSocketProvider } = configureChains(
  [chain.hardhat],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: 'http://localhost:8545',
        webSocket: 'ws://localhost:8545',
      }),
    }),
  ]
);

/**
 * A wagmi client which provides access to the given Wallet instance.
 */
export const mockWagmiClient = (wallet: Wallet) =>
  createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
    connectors: [
      new MockConnector({
        chains,
        options: {
          signer: wallet,
          chainId: 31337,
        },
      }),
    ],
  });

/**
 * A storybook decorator which wraps components in a mock wagmi context.
 */
export const MockWagmiDecorator = (wallet: Wallet) => (Story: Story) => {
  return (
    <WagmiConfig client={mockWagmiClient(wallet)}>
      <Story />
    </WagmiConfig>
  );
};
