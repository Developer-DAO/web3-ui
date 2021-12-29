# @web3-ui/hooks

A set of React hooks developed for web3 use cases.

```shell
yarn add @web3-ui/hooks
```

## Getting started
At the root of your React app, wrap your app in the <Provider> component:

```javascript
  // _app.tsx (or the root of your app)
import { Provider } from '@web3-ui/hooks';

// Passing in a theme is optional
function MyApp({ Component, pageProps }) {
  return (
    <Provider theme={yourChakraTheme}>
      <Component {...pageProps} />
    </Provider>
  );
}
```
 ----------------------------
  
  ## Hooks
  
  The list of hooks package currently provides:
  - [useWallet](#usewallet)
  - [useContract](#usecontract)
  - [useTransaction](#usetransaction)
  - [useTokenBalance](#usetokenbalance)
  ----------------------------
  
  ### useWallet
  The useWallet hook to get the current web3 context including information about the connection and the following methods.
  
  
  ### useContract
  
  ### useTransaction
  
  ### useTokenBalance
  
