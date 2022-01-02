# @web3-ui/core

A set of React components made for web3-specific use cases. Fully compatible with and built on top of ChakraUI.

```bash
yarn add @web3-ui/core
```

## Getting started

At the root of your React app, wrap your app in the `<Provider>` component:

```tsx
// _app.tsx (or the root of your app)
import { Provider } from '@web3-ui/core';

// Passing in a theme is optional
function MyApp({ Component, pageProps }) {
  return (
    <Provider network={network}>
      <Component {...pageProps} />
    </Provider>
  );
}
```

---

## Components

This is the list of components the package currently provides:

- [@web3-ui/core](#web3-uicore)
  - [Getting started](#getting-started)
  - [Components](#components)
    - [Provider](#provider)
      - [Usage](#usage)
    - [ConnectWallet](#connectwallet)
      - [Usage](#usage-1)

---

### Provider

The Provider component is a parent provider, wrapping the `ComponentsProvider` and the `HooksProvider`. You need to wrap this component around your entire App.

#### Usage

See [Getting Started](#getting-started) for an example.

---

### ConnectWallet

The `ConnectWallet` is a `Button` based component with the following behaviour:

When wallet is connected,

- shows user address
- on click, disconnects wallet

When wallet is not connected,

- allows user to connect to their wallet via Metamask or WalletConnect

#### Usage

```tsx
<ConnectWallet />
```
