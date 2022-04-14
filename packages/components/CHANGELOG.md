# @web3-ui/components

## 0.12.0

### Minor Changes

- [#324](https://github.com/Developer-DAO/web3-ui/pull/324) [`ef8df06`](https://github.com/Developer-DAO/web3-ui/commit/ef8df06dea5b36c4f5d65bf6e37288eaa9571146) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - The `TokenGate` component has been removed since its implementation was insecure.

## 0.11.0

### Minor Changes

- [#296](https://github.com/Developer-DAO/web3-ui/pull/296) [`01bac08`](https://github.com/Developer-DAO/web3-ui/commit/01bac080afdd85310c62927de9ed3dc92498af14) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - Add `MultiAddressInput` component

## 0.10.1

### Patch Changes

- [#314](https://github.com/Developer-DAO/web3-ui/pull/314) [`0676e04`](https://github.com/Developer-DAO/web3-ui/commit/0676e044f600db04ab01540aa4fb4e3ce011e91d) Thanks [@ernestognw](https://github.com/ernestognw)! - Fix some types/imports so that the packages work well with Next.js & ts

## 0.10.0

### Minor Changes

- [#293](https://github.com/Developer-DAO/web3-ui/pull/293) [`be483bd`](https://github.com/Developer-DAO/web3-ui/commit/be483bd66022466578ed8ab7782db04b04c1b6c3) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - !! BREAKING CHANGE !!
  `ethers` has been moved to peer dependencies for both the `components` and `hooks` packages. (It was already a peer dependency for `core`)

  This means that you will users will now have to install `ethers` along side our packages manually.

## 0.9.0

### Minor Changes

- [#270](https://github.com/Developer-DAO/web3-ui/pull/270) [`daafb02`](https://github.com/Developer-DAO/web3-ui/commit/daafb02dc9a00374fa28b139c0da2423ccb985fc) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - The NFT and NFTGallery components now support testnets (rinkeby only for now)! You can pass in `isTestnet` to the components if you want to fetch the NFT data from the testnet API. 🎉

  ```tsx
  <NFT
    contractAddress="0xd067fae3311a5daefe21b81ec17224c7b2652ca6"
    tokenId="20"
    isTestnet
  />

  <NFTGallery
    address="0x0ED6Cec17F860fb54E21D154b49DAEFd9Ca04106"
    gridWidth={2}
    isTestnet
  />
  ```

## 0.8.0

### Minor Changes

- [#241](https://github.com/Developer-DAO/web3-ui/pull/241) [`b5d89eb`](https://github.com/Developer-DAO/web3-ui/commit/b5d89eb1a24b81b45c3f49034213f87eb1ad3ce8) Thanks [@hone1er](https://github.com/hone1er)! - Removed RPC Url from address component

## 0.7.0

### Minor Changes

- [#207](https://github.com/Developer-DAO/web3-ui/pull/207) [`4bfc16a`](https://github.com/Developer-DAO/web3-ui/commit/4bfc16afc6c47781acdc69d103d0cb1ae7888ac5) Thanks [@hone1er](https://github.com/hone1er)! - Added ENS lookup directly to Address component

### Patch Changes

- [#239](https://github.com/Developer-DAO/web3-ui/pull/239) [`5e46f38`](https://github.com/Developer-DAO/web3-ui/commit/5e46f384589defc6c5034ef857370bf45bb0991a) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - The unnecessary static heading at the top of the NFTGallery component has been removed.

## 0.6.0

### Minor Changes

- [#237](https://github.com/Developer-DAO/web3-ui/pull/237) [`6cd020e`](https://github.com/Developer-DAO/web3-ui/commit/6cd020ea5f8d492cdad178a8bc4544b8b8ab1335) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - The components and core packages now have a TokenBalance component. TokenBalance can be used to fetch and render the balance of an ERC20 token for a given account address.

## 0.5.0

### Minor Changes

- [#90](https://github.com/Developer-DAO/web3-ui/pull/90) [`16b8481`](https://github.com/Developer-DAO/web3-ui/commit/16b8481995f3f934f94305fbae5f3a6370e4fb20) Thanks [@swetshaw](https://github.com/swetshaw)! - Added a EtherInput component that supports input in wei or ether and automatically converts it to wei for you!

## 0.4.1

### Patch Changes

- [#170](https://github.com/Developer-DAO/web3-ui/pull/170) [`53da320`](https://github.com/Developer-DAO/web3-ui/commit/53da320bdaeb28ac4b82152b7c289f7aa9d7b695) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - Add README for the components package

## 0.4.0

### Minor Changes

- [#150](https://github.com/Developer-DAO/web3-ui/pull/150) [`f0c96df`](https://github.com/Developer-DAO/web3-ui/commit/f0c96df7468fbe0993b8e90979407c27ba7a22bd) Thanks [@Ibby-devv](https://github.com/Ibby-devv)! - Accept any ChakraProvider-compatible props in our Provider

* [#163](https://github.com/Developer-DAO/web3-ui/pull/163) [`01ce580`](https://github.com/Developer-DAO/web3-ui/commit/01ce5809debb2284545620861d11893e4f9675f0) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - Add missing exports

- [#164](https://github.com/Developer-DAO/web3-ui/pull/164) [`184ec43`](https://github.com/Developer-DAO/web3-ui/commit/184ec43e0542a0057f7847a9c696eb0479f96438) Thanks [@hone1er](https://github.com/hone1er)! - Bug fix. Added null check to address component for value prop

## 0.3.1

### Patch Changes

- [#149](https://github.com/Developer-DAO/web3-ui/pull/149) [`4c2056d`](https://github.com/Developer-DAO/web3-ui/commit/4c2056d9c8b2c1eebdd7135a5581447941a65ad8) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Remove the `cross-fetch` polyfill

## 0.3.0

### Minor Changes

- [#105](https://github.com/Developer-DAO/web3-ui/pull/105) [`6064be0`](https://github.com/Developer-DAO/web3-ui/commit/6064be033150ccd4df52c913a3d55ce2c63c262b) Thanks [@maximebonhomme](https://github.com/maximebonhomme)! - Address component now accept copiable prop to allow users to copy the address value into their clipboard

* [#130](https://github.com/Developer-DAO/web3-ui/pull/130) [`825561b`](https://github.com/Developer-DAO/web3-ui/commit/825561bd2ea2abc541fe7bde59446ddea3aae49d) Thanks [@etr2460](https://github.com/etr2460)! - Fix NFT sizes

- [#121](https://github.com/Developer-DAO/web3-ui/pull/121) [`aa9b2f6`](https://github.com/Developer-DAO/web3-ui/commit/aa9b2f6cccdcda1d443bacb306d0a83398a19368) Thanks [@hone1er](https://github.com/hone1er)! - Added a TokenGate component that restricts access to child components unless erc-20/erc-721 token quantity requirements are met.

### Patch Changes

- [#132](https://github.com/Developer-DAO/web3-ui/pull/132) [`2b7b5c7`](https://github.com/Developer-DAO/web3-ui/commit/2b7b5c7295e5fb389740a9f4fab4e3fcea7e5e7d) Thanks [@maximebonhomme](https://github.com/maximebonhomme)! - Address component now uses Text component instead of unnecesary Input

## 0.2.2

### Patch Changes

- [#116](https://github.com/Developer-DAO/web3-ui/pull/116) [`c843555`](https://github.com/Developer-DAO/web3-ui/commit/c843555369f56c01653f0486e54a31a382353ed4) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Add babel-runtime to deps so we can have regenerator runtime at runtime

## 0.2.1

### Patch Changes

- [#111](https://github.com/Developer-DAO/web3-ui/pull/111) [`d5c3358`](https://github.com/Developer-DAO/web3-ui/commit/d5c3358e0a487359619c4fe234d573b0940b34a8) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - move build to prepublishOnly so we also build when someone manually publishes

## 0.2.0

### Minor Changes

- [#108](https://github.com/Developer-DAO/web3-ui/pull/108) [`da89020`](https://github.com/Developer-DAO/web3-ui/commit/da89020b0ccf5bfc170bbdede25d2bb379c376ba) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - Fix builds

## 0.1.1

### Patch Changes

- [#101](https://github.com/Developer-DAO/web3-ui/pull/101) [`02e0f20`](https://github.com/Developer-DAO/web3-ui/commit/02e0f202d0682f8af502c63b5c2ec73a6518205e) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Add README and LICENSE to published packages

## 0.1.0

### Minor Changes

- [#102](https://github.com/Developer-DAO/web3-ui/pull/102) [`06fc2e4`](https://github.com/Developer-DAO/web3-ui/commit/06fc2e4f9a7934bde04d001f39685f0560205107) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - add missing exports
