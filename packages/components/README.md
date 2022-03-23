# @web3-ui/components

A set of React components made for web3-specific use cases. Fully compatible with and built on top of ChakraUI.

```bash
yarn add @web3-ui/components ethers
```

## Getting started

At the root of your React app, wrap your app in the `<Provider>` component:

```tsx
// _app.tsx (or the root of your app)
import { Provider } from '@web3-ui/components';

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

## Components

This is the list of components the package currently provides:

- [Address](#address)
- [AddressInput](#addressinput)
- [NFT](#nft)
- [NFTGallery](#nftgallery)
- [Provider](#provider)
- [EtherInput](#etherinput)
- [TokenBalance](#tokenbalance)

---

### Address

The Address component takes in an Ethereum address or ENS name and displays it in a human-readable format.

```tsx
<Address value='dhaiwat.eth' shortened copiable>
```

`shortened` and `copiable` are optional props.

---

### AddressInput

The AddressInput component is an input for Ethereum addresses. It supports ENS names too.

```tsx
<AddressInput value={value} onChange={setValue} provider={provider} />
```

You need to pass in a `provider` prop if you want to use ENS names.

---

### NFT

The NFT component takes in the contract address and the token ID of an NFT and displays it as a card. You can also pass in `isTestnet` to fetch the NFT data from the testnet API (only Rinkeby for now).

```tsx
<NFT contractAddress="0xxxxx0x0x0x0x0x" tokenId={30} size="md" />
```

The `size` prop is optional.

---

### NFTGallery

The NFTGallery component renders a grid of all the NFTs owned by an account. It accepts ENS names too. You can also pass in `isTestnet` to fetch the NFT data from the testnet API (only Rinkeby for now).

```tsx
<NFTGallery address="vitalik.eth" web3Provider={provider} gridWidth={4} />
```

You need to pass in a `web3Provider` if you want to support ENS names. We know this is not ideal and are fixing it.

`gridWidth` is an optional prop.

---

### Provider

The Provider component is the `web3-ui` equivalent of ChakraUI's `ChakraProvider` component. You need to wrap this component around your entire App. See [Getting Started](#getting-started) for an example.

---

### EtherInput

EtherInput is an input field that accepts values in _wei_ or _ether_. It always returns the value to you in _wei_ so that you can easily use it to interact with contracts without any conversions.

```tsx
const [value, setValue] = useState();

<EtherInput value={value} setValue={setValue} unit="ether" />; // value will always be in wei. eg. if someone enters 1 in the input, value will be 10^18
```

---

### TokenBalance

TokenBalance is a stateless component that displays the name, symbol, balance, and USD value of an ERC20 token.

```tsx
<TokenBalance
  name="Devs 4 Revolution"
  symbol="$CODE"
  balance={200}
  usdValue={100}
  imgUrl={D_D_LOGO}
/>
```
