import React from 'react';
import { Story } from '@storybook/react';

import { chain, createClient, configureChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

/**
 * A storybook decorator which wraps components in a mock wagmi context.
 */
export const WagmiDecorator = (Story: Story) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <Story />
    </WagmiConfig>
  );
};
