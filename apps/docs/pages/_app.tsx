import * as React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { WagmiConfig, createClient, configureChains, chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { Web3uiProvider } from '@web3-ui/components';

import { AppLayout } from '../components/layout/AppLayout';

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
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Web3uiProvider>
    </WagmiConfig>
  );
};

export default App;
