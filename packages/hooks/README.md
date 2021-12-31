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

---

## Hooks

The list of hooks package currently provides:

- [useWallet](#usewallet)
- [useContract](#usecontract)
- [useTransaction](#usetransaction)
- [useTokenBalance](#usetokenbalance)

---

### useWallet

The `useWallet` hook can be used to get the current web3 context including information about the connection. This hook will return an object with the following properties.

- connectWallet: A function that will open the web3modal and will allow the user to connect using different web3 providers.
- disconnectWallet: A function that will clear the connected user cache from the web3modal.
- connection: This object contains the following properties:
  - userAddress: currently connected wallet address
  - network: current network
  - signer: signer object
  - ens: provide ENS of current wallet address if exists
- connected: a boolean indicating if the wallet is connected to the website
- provider: the provider object
- correctNetwork: a boolean indicating if the current network is the correct network
- switchToCorrectNetwork: a function that will switch to the correct network

For using the `useWallet` hook, you need to import the hook by adding the following import statement:

```javascript
import { useWallet } from '@web3-ui/hooks';
```

After importing, you can use the hook by adding the following line in your React component.

```javascript
const {
  connection,
  connectWallet,
  disconnectWallet,
  connected,
  correctNetwork,
  switchToCorrectNetwork
} = useWallet();
```

---

### useContract

The `useContract` hook takes the ABI and address of a contract and returns the contract instance. Thus, user will no longer need to manually initialize the contract using `ethers`.

For using the `useContract` hook, you need to import the hook by adding the following import statement:

```javascript
import { useContract } from '@web3-ui/hooks';
```

After importing, you can use the hook by adding the following line in your React component.

```javascript
const contract = useContract('YOUR_CONTRACT_ADDRESS', 'YOUR_CONTRACT_ABI');
```

---

### useTransaction

The `useTransaction` hook takes the function and an array of arguments to pass to the function as an argument to the hook and will return an array.

This array will contain `execute` method, `loading` state and `error` state.

- `execute` method will execute the function and return the result.

- `loading` state will be true while the function is executing and will be false when execution gets completed.

- `error` state will contain an **error** if there is an error while executing the function, otherwise it will be _null_.

For using the `useTransaction` hook, you need to import the hook by adding the following import statement:

```javascript
import { useTransaction } from '@web3-ui/hooks';
```

After importing, you can use the hook by adding the following line in your React component.

```javascript
const [execute, loading, error] = useTransaction(FUNCTION_TO_EXECUTE, [
  FUNCTION_ARGUMENTS
]);
```

---

### useTokenBalance

The `useTokenBalance` hook takes the tokenAddress and accountAddress as arguments and returns an object with the following properties:

- balance: The balance of the token in the user account in wei.
- loading: A boolean value to indicate if the balance is being fetched.
- error: An error if there is any.
- decimals: The number of decimals of the token.
- formattedBalance: The balance of the token in the user account in ethers.
- balanceInBigNumber: The balance of the token in the user account in BigNumber.

For using the `useTokenBalance` hook, you need to import the hook by adding the following import statement:

```javascript
import { useTokenBalance } from '@web3-ui/hooks';
```

After importing, you can use the hook by adding the following line in your React component.

```javascript
const {
  balance,
  loading,
  error,
  decimals,
  formattedBalance,
  balanceInBigNumber
} = useTokenBalance('YOUR_TOKEN_ADDRESS', 'YOUR_ACCOUNT_ADDRESS');
```
