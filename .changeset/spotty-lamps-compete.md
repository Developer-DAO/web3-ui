---
'@web3-ui/hooks': minor
---

The network/chain ID was not being converted to hexadecimal before requesting a switch from MetaMask. This was only a problem for networks with chain IDs greater than 9, like the Mumbai Testnet (80001).
