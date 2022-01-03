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

---

### Provider

The Provider component is a parent provider, wrapping the `ComponentsProvider` and the `HooksProvider`. You need to wrap this component around your entire App.

#### Usage

See [Getting Started](#getting-started) for an example.

---

### ConnectWallet

The `ConnectWallet` is a `Button` based component with the following behaviour:

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

## Hooks

This package exports all the hooks provided by the [`@web3-ui/hooks` package](https://npmjs.com/package/@web3-ui/hooks).

```tsx
// Example
import { useWallet } from '@web3-ui/core';

const { connectWallet } = useWallet();
```
