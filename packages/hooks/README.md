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
- [useWriteContract](#usewritecontract)
- [useTransaction](#usetransaction)
- [useTokenBalance](#usetokenbalance)
- [useReadOnlyContract](#usereadonlycontract)
- [useReadOnlyProvider](#usereadonlyprovider)
- [usePoller](#usepoller)

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
  switchToCorrectNetwork,
} = useWallet();
```

---

### useWriteContract

The `useWriteContract` hook takes the ABI and address of a contract and returns the contract instance. This hook requires the user to have connected their wallet. If you don't want to force your users to connect their wallet in order to read from a contract, use [`useReadOnlyContract`](#usereadonlycontract) instead.

```tsx
import { useWriteContract } from '@web3-ui/hooks';

const [contract, isReady] = useWriteContract(
  'CONTRACT_ADDRESS',
  'CONTRACT_ABI'
);

// check that the contract has been loaded
if (isReady) {
  await contract.greeting();
}
```

A generic type argument can be passed down to the hook to create the type definitions based on the ABIs stored in a directory. To auto-generate the types it is highly recommended to use [typechain](https://www.npmjs.com/package/typechain) package.

Install [typechain](https://www.npmjs.com/package/typechain)

```bash
yarn add typechain @typechain/ethers-v5 --dev # or `npm i -D typechain @typechain/ethers-v5`
```

Add a "typechain" script to your `package.json` file as well as a "postinstall" script that executes the script after installing dependencies.

```json
"scripts": {
    "postinstall": "yarn typechain",
    "typechain": "typechain --target=ethers-v5 <ABI_DIRECTORY_PATH> --out-dir=<OUTPUT_DIRECTORY_PATH>",
}
```

- The `<ABI_DIRECTORY_PATH>` should be the path to where all of the ABIs are stored. e.g. `src/abis/*.json` (This depends on your preferred file structure)
- The `<OUTPUT_DIRECTORY_PATH>` will be your preferred path to where the generated type definitions should be placed. e.g. `src/types/contracts`
- For the `<OUTPUT_DIRECTORY_PATH>` it is also recommended to add the directory path on `.gitignore` since these can be generated via `typechain` script

For an actual example check below,

```json
"scripts": {
    "postinstall": "yarn typechain",
    "typechain": "typechain --target=ethers-v5 src/abis/**/*.json --out-dir=src/types/contracts",
}
```

Next is to put all of your ABI JSON files stored to the defined `ABI_DIRECTORY_PATH` directory.

- `src/abis/ERC20Token/ERC20Token.json`
- `src/abis/CoolProtocol/CoolProtocolLendingPool.json`

Then finally run the script to generate the type definitions.

```bash
yarn typechain # or `npm run typechain`
```

Example usage in utilizing the generic type argument for `useWriteContract` hook

```tsx
import React from 'react';
import { useWriteContract } from '@web3-ui/hooks';
import { ERC20Token } from 'types/contracts/ERC20Token';
import ERC20TokenABI from 'abis/ERC20Token/ERC20Token.json';

function App() {
  const [contract, isReady] = useWriteContract<ERC20Token>(
    'CONTRACT_ADDRESS',
    ERC20TokenABI
  );

  async function checkBalance() {
    const response = await contract.balanceOf('0x...');

    console.log('checkBalance', response);
  }

  return (
    <>{isReady ? <button onClick={checkBalance}></button> : 'Connect Wallet'}</>
  );
}

export default App;
```

---

### useTransaction

The `useTransaction` hook takes in a contract function. It returns an array of three elements:

- `execute`: Calling this function will execute the transaction. You should pass your arguments/parameters to this function as an array.

- `loading`: Will be true when the transaction is executing and will be false once the transaction has been confirmed.

- `error`

```tsx
import { useTransaction, useWriteContract } from '@web3-ui/hooks';

const greeterContract = useWriteContract('CONTRACT_ADDRESS', 'CONTRACT_ABI');
const [execute, loading, error] = useTransaction(greeter.setGreeting);

await execute([
  'Hello, world!',
  {
    value: ethers.utils.parseEther('0.1'), // you can also use this for payable transactions
  },
]); // will execute the transaction
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
  balanceInBigNumber,
} = useTokenBalance('TOKEN_CONTRACT_ADDRESS', 'ACCOUNT_ADDRESS');
```

---

### useReadOnlyContract

The `useReadOnlyContract` hook takes in a contract address and an ABI and returns a read-only contract instance. This is especially useful when you want to read data from a function without asking the user to connect their wallet. eg. When you are only 'reading' from a contract and not interacting with it.

In order for this hook to work, you need to pass in a `rpcUrl` to the `<Provider />`. eg. `https://rinkeby.infura.io/v3/YOUR_INFURA_ID`

```tsx
<Provider network={NETWORKS.rinkeby} rpcUrl='https://rinkeby.infura.io/v3/YOUR_INFURA_ID'>
```

```tsx
import { useReadOnlyContract } from '@web3-ui/hooks';

const [contract, isReady] = useReadOnlyContract(
  'CONTRACT_ADDRESS',
  'CONTRACT_ABI'
);
```

---

### useReadOnlyProvider

The `useReadOnlyProvider` takes in a RPC URL (think Infura, Alchemy, etc.) and returns a provider. This provider can be used to read data from the blockchain and from any contract.

```tsx
import { useReadOnlyProvider } from '@web3-ui/hooks';

const provider = useReadOnlyProvider(
  'https://rinkeby.infura.io/v3/YOUR_INFURA_ID'
);
```

---

### usePoller

The `usePoller` hook takes in a function and a delay in milliseconds. It will call the function in every delay.

```tsx
import { usePoller } from '@web3-ui/hooks';

usePoller(() => console.log(contract.balanceOf(account)), 1000); // will log the balance every second
```
