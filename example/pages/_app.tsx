import '../styles/globals.css';
import { Provider, NETWORKS } from '@web3-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <Provider network={NETWORKS.mainnet}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
