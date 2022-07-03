import React from 'react';
import { NFT } from './';

export default {
  title: 'Components/NFT',
  component: NFT,
};

export const image = () => (
  <NFT
    tokenId="1"
    contractAddress="0x25ed58c027921e14d86380ea2646e3a1b5c55a8b"
  />
);

export const GIF = () => (
  <NFT
    contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
    tokenId="107788331033457039753851660026809005506934842002275129649229957686061111967745"
  />
);

export const Video = () => (
  <NFT
    contractAddress="0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0"
    tokenId="29192"
  />
);

export const Audio = () => (
  <NFT
    contractAddress="0x0eede4764cfdfcd5dac0e00b3b7f4778c0cc994e"
    tokenId="1"
  />
);

export const Big = () => (
  <NFT
    contractAddress="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
    tokenId="1"
    size="lg"
  />
);

export const Rinkeby = () => (
  <NFT
    contractAddress="0xd067fae3311a5daefe21b81ec17224c7b2652ca6"
    tokenId="20"
    isTestnet
  />
);

export const Error = () => <NFT contractAddress="abcd" tokenId="1" />;
