---
'@web3-ui/components': minor
---

The NFT and NFTGallery components now support testnets (rinkeby only for now)! You can pass in `isTestnet` to the components if you want to fetch the NFT data from the testnet API. 🎉

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
