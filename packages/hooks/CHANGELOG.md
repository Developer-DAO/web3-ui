# @web3-ui/hooks

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
