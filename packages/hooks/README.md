# @web3-ui/hooks

A set of React hooks developed for web3 use cases.

```bash
yarn add @web3-ui/hooks
```

## Getting started

At the root of your React app, wrap your app in the <Provider> component:

```tsx
// _app.tsx (or the root of your app)
import { Provider } from '@web3-ui/hooks';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
```

---

## Hooks

The following hooks are available:

- [useWallet](#usewallet)
- [useContract](#usecontract)
- [useTransaction](#usetransaction)
- [useTokenBalance](#usetokenbalance)

---

### useWallet

The `useWallet` hook lets you request and interact with the active wallet connection.

- `connectWallet`: Calling this function will open up a modal that will let the user connect their wallet.
- `disconnectWallet`
- `connection`: This object contains the following properties:
  - `userAddress`
  - `network`
  - `signer`
  - `ens`
- `connected`: a boolean indicating if the user has connected their wallet
- `provider`
- `correctNetwork`: a boolean indicating if the user is connected to the correct network
- `switchToCorrectNetwork`: a function that will switch to the correct network. (only MetaMask supported)

```tsx
import { useWallet } from '@web3-ui/hooks';

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

The `useContract` hook takes the ABI and address of a contract and returns the contract instance.

```tsx
import { useContract } from '@web3-ui/hooks';

const [contract, isReady] = useContract('CONTRACT_ADDRESS', 'CONTRACT_ABI');

//check that the contract has been loaded
if (isReady) {
  await contract.greeting();
}
```

---

### useTransaction

The `useTransaction` hook takes in a contract function and a list of arguments to pass to it. It returns an array of three elements:

- `execute`: Calling this function will execute the transaction.

- `loading`: Will be true when the transaction is executing and will be false once the transaction has been confirmed.

- `error`

```tsx
import { useTransaction, useContract } from '@web3-ui/hooks';

const greeterContract = useContract('CONTRACT_ADDRESS', 'CONTRACT_ABI');
const [execute, loading, error] = useTransaction(greeter.setGreeting, [
  'Hello, world!',
  {
    value: ethers.utils.parseEther('0.1') // you can also use this for payable transactions
  }
]);

execute(); // will execute the transaction
```

---

### useTokenBalance

The `useTokenBalance` hook takes in a ERC20 token contract address and an account address as arguments and returns an object with the following properties:

- `balance`: The balance of the token for the given account in wei.
- `loading`
- `error`
- `decimals`: The number of decimals the token contract is using.
- `formattedBalance`: Balance in ethers. eg. 20 GTC, 31.2 USDT, etc.
- `balanceInBigNumber`

```tsx
import { useTokenBalance } from '@web3-ui/hooks';

const {
  balance,
  loading,
  error,
  decimals,
  formattedBalance,
  balanceInBigNumber
} = useTokenBalance('TOKEN_CONTRACT_ADDRESS', 'ACCOUNT_ADDRESS');
```
