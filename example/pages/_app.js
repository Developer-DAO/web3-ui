import '../styles/globals.css';
import { Provider } from '@web3-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <Provider network={4}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
