import * as React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { WagmiConfig, createClient, configureChains, chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

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
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </WagmiConfig>
  );
};

export default App;
