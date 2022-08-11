import * as React from 'react';
import type { AppProps } from 'next/app';
import './global.css';
import { Header } from '../components';
import { Box } from '@web3-ui/components/src';

import { WagmiConfig, createClient, configureChains, chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { Web3uiProvider } from '@web3-ui/components/src';

const { provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <Web3uiProvider>
        <Box css={{ backgroundColor: '$background' }}>
          <Header />
          <Component {...pageProps} />
        </Box>
      </Web3uiProvider>
    </WagmiConfig>
  );
};

export default App;
