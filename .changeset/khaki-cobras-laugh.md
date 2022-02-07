---
'@web3-ui/components': minor
'@web3-ui/hooks': minor
---

!! BREAKING CHANGE !!
`ethers` has been moved to peer dependencies for both the `components` and `hooks` packages. (It was already a peer dependency for `core`)

This means that you will users will now have to install `ethers` along side our packages manually.
