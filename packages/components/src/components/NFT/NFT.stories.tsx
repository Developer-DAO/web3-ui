import React from 'react';
import { NFT } from '.';

storiesOf('NFT', module)
  .add('Image', () => (
    <NFT tokenId='1' contractAddress='0x25ed58c027921e14d86380ea2646e3a1b5c55a8b' />
  ))
  .add('GIF', () => (
    <NFT
      contractAddress='0x495f947276749ce646f68ac8c248420045cb7b5e'
      tokenId='107788331033457039753851660026809005506934842002275129649229957686061111967745'
    />
  ))
  .add('Video', () => (
    <NFT contractAddress='0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0' tokenId='29192' />
  ));
