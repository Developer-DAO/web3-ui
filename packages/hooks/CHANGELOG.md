# @web3-ui/hooks

## 0.13.0

### Minor Changes

- [#340](https://github.com/Developer-DAO/web3-ui/pull/340) [`16ac4cc`](https://github.com/Developer-DAO/web3-ui/commit/16ac4cc35fc96284f7940724be2ebbd20f8fb022) Thanks [@jamescharlesworth](https://github.com/jamescharlesworth)! - [hooks] `<Provider />` now exposes a `cacheProvider` prop to allow persistence with Web3Modal.

## 0.12.0

### Minor Changes

- [#311](https://github.com/Developer-DAO/web3-ui/pull/311) [`f95d2dd`](https://github.com/Developer-DAO/web3-ui/commit/f95d2ddecbe7b4d56a463deab676a1470037f492) Thanks [@swellander](https://github.com/swellander)! - Add `NetworkSwitch` component and `useChainId` hook

* [#312](https://github.com/Developer-DAO/web3-ui/pull/312) [`0d12c98`](https://github.com/Developer-DAO/web3-ui/commit/0d12c98ce76e8bdde2627df6daa86ced69a5acca) Thanks [@swellander](https://github.com/swellander)! - The network/chain ID was not being converted to hexadecimal before requesting a switch from MetaMask. This was only a problem for networks with chain IDs greater than 9, like the Mumbai Testnet (80001).

## 0.11.1

### Patch Changes

- [#297](https://github.com/Developer-DAO/web3-ui/pull/297) [`b39249e`](https://github.com/Developer-DAO/web3-ui/commit/b39249eee07246fe24ab0e11876eb05fb4a6ceb1) Thanks [@shamoilarsi](https://github.com/shamoilarsi)! - closes #273
  fix: save chainId on chainChanged event without formatting

* [#314](https://github.com/Developer-DAO/web3-ui/pull/314) [`0676e04`](https://github.com/Developer-DAO/web3-ui/commit/0676e044f600db04ab01540aa4fb4e3ce011e91d) Thanks [@ernestognw](https://github.com/ernestognw)! - Fix some types/imports so that the packages work well with Next.js & ts

## 0.11.0

### Minor Changes

- [#283](https://github.com/Developer-DAO/web3-ui/pull/283) [`29281c6`](https://github.com/Developer-DAO/web3-ui/commit/29281c6727aa74f5bb0807b4adf06428804bf319) Thanks [@Nazeeh21](https://github.com/Nazeeh21)! - Bug fixing for adding network to MetaMask

* [#293](https://github.com/Developer-DAO/web3-ui/pull/293) [`be483bd`](https://github.com/Developer-DAO/web3-ui/commit/be483bd66022466578ed8ab7782db04b04c1b6c3) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - !! BREAKING CHANGE !!
  `ethers` has been moved to peer dependencies for both the `components` and `hooks` packages. (It was already a peer dependency for `core`)

  This means that you will users will now have to install `ethers` along side our packages manually.

- [#284](https://github.com/Developer-DAO/web3-ui/pull/284) [`b23d01b`](https://github.com/Developer-DAO/web3-ui/commit/b23d01b93cf74626f33913cbaa270ddd6f111636) Thanks [@juliankrispel](https://github.com/juliankrispel)! - Catch errors in connectWallet and expose them, correct type for connectWallet

## 0.10.0

### Minor Changes

- [#274](https://github.com/Developer-DAO/web3-ui/pull/274) [`00be153`](https://github.com/Developer-DAO/web3-ui/commit/00be153264a5efc1ad883156f942b76c214e4cde) Thanks [@juliankrispel](https://github.com/juliankrispel)! - Relaxed network attribute

* [#289](https://github.com/Developer-DAO/web3-ui/pull/289) [`8127709`](https://github.com/Developer-DAO/web3-ui/commit/8127709b63417096c5dd3bd9c1ec5eea84e9f6e5) Thanks [@with-heart](https://github.com/with-heart)! - Renamed the `useContract` hook to `useWriteContract` (#249). This helps ensure that consumers of this hook know that it requires the user's wallet signature.

- [#276](https://github.com/Developer-DAO/web3-ui/pull/276) [`f18bff0`](https://github.com/Developer-DAO/web3-ui/commit/f18bff025fdc16d5805ee3bdc466499629068a52) Thanks [@berteotti](https://github.com/berteotti)! - You can now pass in args to the exec fn in useTransaction just like you would with ethers. You don't need to pass it all inside an array anymore.

  ```tsx
  execute(['Hello', { value: '10' }]);

  // is now
  execute('Hello', { value: '10' });
  ```

* [#286](https://github.com/Developer-DAO/web3-ui/pull/286) [`8037de7`](https://github.com/Developer-DAO/web3-ui/commit/8037de7968cf23bfdd4804699b0d6706a2053005) Thanks [@patcito](https://github.com/patcito)! - Arbitrum, Optimism and Metis have been to the list of networks available in the NETWORKS mapping export

## 0.9.0

### Minor Changes

- [#217](https://github.com/Developer-DAO/web3-ui/pull/217) [`0c5209b`](https://github.com/Developer-DAO/web3-ui/commit/0c5209b987665a3875b297733e6dde8205cd3965) Thanks [@with-heart](https://github.com/with-heart)! - Added `ERC20ABI` as an export of `@web3-ui/hooks` in order to resolve an incorrect import in the `@web3-ui/core` package.

* [#216](https://github.com/Developer-DAO/web3-ui/pull/216) [`ece14b2`](https://github.com/Developer-DAO/web3-ui/commit/ece14b2ea025772eef0251432dc43e41e3e219c0) Thanks [@Redarcher9](https://github.com/Redarcher9)! - Added docstring to the `useContract` and `useTokenBalance` hooks

- [#234](https://github.com/Developer-DAO/web3-ui/pull/234) [`b66e93a`](https://github.com/Developer-DAO/web3-ui/commit/b66e93a97f9c260b903ba0545fd368ec4842f349) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - You can now pass in your arguments directly to the execute function in useTransaction.

## 0.8.1

### Patch Changes

- [#223](https://github.com/Developer-DAO/web3-ui/pull/223) [`d52e750`](https://github.com/Developer-DAO/web3-ui/commit/d52e75078af16aa851c834624e5130a741d66556) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - The TokenGate component in the core package now supports ERC721 tokens. The hooks package now also exports the ERC721 ABI

## 0.8.0

### Minor Changes

- [#168](https://github.com/Developer-DAO/web3-ui/pull/168) [`000c2f8`](https://github.com/Developer-DAO/web3-ui/commit/000c2f8a8f15e963d090f305f7d6e6073ec41e4c) Thanks [@Ibby-devv](https://github.com/Ibby-devv)! - A new hook usePoller has been added. This hook can be used to call a function at a certain interval repeatedly

* [#205](https://github.com/Developer-DAO/web3-ui/pull/205) [`674078c`](https://github.com/Developer-DAO/web3-ui/commit/674078c28ea2b32229b119dd2f01bfa9a6b9e8af) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - The `hooks` package now has two new hooks: `useReadOnlyProvider` which gives you a read-only provider and `useReadOnlyContract` which lets you interact with a smart contract without needing a signer.

## 0.7.1

### Patch Changes

- [#192](https://github.com/Developer-DAO/web3-ui/pull/192) [`90d43df`](https://github.com/Developer-DAO/web3-ui/commit/90d43df64873e6a35c1d0b1deabbfc1fe594f62c) Thanks [@Nazeeh21](https://github.com/Nazeeh21)! - Add README

* [#189](https://github.com/Developer-DAO/web3-ui/pull/189) [`0914840`](https://github.com/Developer-DAO/web3-ui/commit/0914840b6081b1e4b6ab14afb36064d6666b40e3) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - `useContract` now initializes the contract only after the user has connected their wallet. This helps prevent errors from calling contracts without a connection.

## 0.7.0

### Minor Changes

- [#185](https://github.com/Developer-DAO/web3-ui/pull/185) [`2b39709`](https://github.com/Developer-DAO/web3-ui/commit/2b3970987eff7c9aeabbce027477079a43a61220) Thanks [@CatalinCsnMaster](https://github.com/CatalinCsnMaster)! - useContract status indicator

## 0.6.0

### Minor Changes

- [#163](https://github.com/Developer-DAO/web3-ui/pull/163) [`01ce580`](https://github.com/Developer-DAO/web3-ui/commit/01ce5809debb2284545620861d11893e4f9675f0) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - Add missing exports

## 0.5.1

### Patch Changes

- [#146](https://github.com/Developer-DAO/web3-ui/pull/146) [`169021d`](https://github.com/Developer-DAO/web3-ui/commit/169021df19ebc7819f68d74213dc74380d8a71d6) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - Wait for tx to be confirmed inside `useTransaction`

* [#155](https://github.com/Developer-DAO/web3-ui/pull/155) [`e611ef9`](https://github.com/Developer-DAO/web3-ui/commit/e611ef9860ac0179e3c3dcfc64f05aac3b88baa7) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - Fix issues related to accountChange and networkChange

## 0.5.0

### Minor Changes

- [#134](https://github.com/Developer-DAO/web3-ui/pull/134) [`da536ed`](https://github.com/Developer-DAO/web3-ui/commit/da536ed8df37c768764ca616a9bb83fc91a01d5e) Thanks [@Nazeeh21](https://github.com/Nazeeh21)! - Add useTransaction hook

* [#125](https://github.com/Developer-DAO/web3-ui/pull/125) [`3f0bc64`](https://github.com/Developer-DAO/web3-ui/commit/3f0bc640cc4d0d4ee4e656afd16c6fc2fbfc9cbd) Thanks [@Nazeeh21](https://github.com/Nazeeh21)! - Added a new method "switchToCorrectNetwork" to the useWallet hook. This method allows the user to switch to the required network without manually heading over to the MetaMask and switching the network. Users can use this function by directly passing this method in the click handler of a button.

## 0.4.1

### Patch Changes

- [#116](https://github.com/Developer-DAO/web3-ui/pull/116) [`c843555`](https://github.com/Developer-DAO/web3-ui/commit/c843555369f56c01653f0486e54a31a382353ed4) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Add babel-runtime to deps so we can have regenerator runtime at runtime

## 0.4.0

### Minor Changes

- [#114](https://github.com/Developer-DAO/web3-ui/pull/114) [`a893f34`](https://github.com/Developer-DAO/web3-ui/commit/a893f34036844b8b7100bac98eea8b62036c8491) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - Remove Ledger and Coinbase wallet providers

### Patch Changes

- [#111](https://github.com/Developer-DAO/web3-ui/pull/111) [`d5c3358`](https://github.com/Developer-DAO/web3-ui/commit/d5c3358e0a487359619c4fe234d573b0940b34a8) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - move build to prepublishOnly so we also build when someone manually publishes

## 0.3.0

### Minor Changes

- [#108](https://github.com/Developer-DAO/web3-ui/pull/108) [`da89020`](https://github.com/Developer-DAO/web3-ui/commit/da89020b0ccf5bfc170bbdede25d2bb379c376ba) Thanks [@Dhaiwat10](https://github.com/Dhaiwat10)! - Fix builds

## 0.2.0

### Minor Changes

- [#93](https://github.com/Developer-DAO/web3-ui/pull/93) [`94718e7`](https://github.com/Developer-DAO/web3-ui/commit/94718e75c480d493f32808746a3d485c3cc9f9ff) Thanks [@swellander](https://github.com/swellander)! - add useContract hook

## 0.1.1

### Patch Changes

- [#101](https://github.com/Developer-DAO/web3-ui/pull/101) [`02e0f20`](https://github.com/Developer-DAO/web3-ui/commit/02e0f202d0682f8af502c63b5c2ec73a6518205e) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Add README and LICENSE to published packages
