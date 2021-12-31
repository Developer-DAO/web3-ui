---
'@web3-ui/hooks': patch
---

`useContract` now initializes the contract only after the user has connected their wallet. This helps prevent errors from calling contracts without a connection.
