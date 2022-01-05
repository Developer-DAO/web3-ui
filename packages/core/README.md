# @web3-ui/core

A set of React [components](#components) and [hooks](#hooks) made for web3-specific use cases. Fully compatible with and built on top of ChakraUI.

This package is an opinionated combination of `@web3-ui/components` and `@web3-ui/hooks`.

```bash
yarn add @web3-ui/core
```

## Getting started

At the root of your React app, wrap your app in the `<Provider>` component:

```tsx
// _app.tsx (or the root of your app)
import { Provider, NETWORKS } from '@web3-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <Provider network={NETWORKS.rinkeby}>
      <Component {...pageProps} />
    </Provider>
  );
}
```

---

## Components

This is the list of components the package currently provides:

- [Provider](#provider)
- [ConnectWallet](#connectwallet)
- [TokenGate](#tokengate)

---

### Provider

The Provider component is a parent provider, wrapping the `ComponentsProvider` and the `HooksProvider`. You need to wrap this component around your entire App.

#### Usage

See [Getting Started](#getting-started) for an example.

---

### ConnectWallet

`ConnectWallet` is a `Button` based component with the following behaviour:

When wallet is connected,

- shows user's address or ENS
- on click, disconnects wallet

When wallet is not connected,

- allows the user to connect to their wallet via Metamask or WalletConnect

#### Usage

```tsx
import { ConnectWallet } from '@web3-ui/core';

<ConnectWallet />;
```

---

### TokenGate

`TokenGate` lets you conditionally render some content depending on whether the current connected user has enough amount of a specific token. The component only supports ERC20 tokens at the moment but support for other standards is coming soon.

#### Usage

```tsx
import { TokenGate } from '@web3-ui/core';

<TokenGate
  tokenContractAddress="0x08149745590e9025b52b6801e9dd3E752e60F3A2"
  requiredQuantity={+ethers.utils.parseEther('1')} // the component expects the amount in wei.
  deniedContent={
    <p>This message will show up if the user doesn't have enough tokens.</p>
  }
>
  <h1>This message will be visible if the user has enough tokens.</h1>
</TokenGate>;
```

---

## Hooks

This package exports all the hooks provided by the [`@web3-ui/hooks` package](https://npmjs.com/package/@web3-ui/hooks).

```tsx
// Example
import { useWallet } from '@web3-ui/core';

const { connectWallet } = useWallet();
```
