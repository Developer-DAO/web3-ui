import * as React from 'react';
import type { AppProps } from 'next/app';
import './global.css';
import { Header } from '../components';
import { Box } from '@web3-ui/components/src';

import { WagmiConfig, createClient, configureChains, chain } from 'wagmi';
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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <Box css={{ backgroundColor: '$loContrast' }}>
        <Header />
        <Component {...pageProps} />
      </Box>
    </WagmiConfig>
  );
};

export default App;
