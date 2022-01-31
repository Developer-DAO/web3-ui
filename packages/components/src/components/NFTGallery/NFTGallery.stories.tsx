import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { NFTGallery } from '.';

export default {
  title: 'Components/NFTGallery',
  component: NFTGallery,
};

export const nftsOwnedByAnAccount = () => (
  <NFTGallery
    address="0x1A16c87927570239FECD343ad2654fD81682725e"
    gridWidth={2}
  />
);

const nftsOwnedByAnENSStory = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
  }, []);

  if (!provider) {
    return <>Loading...</>;
  }

  return <NFTGallery address="dhaiwat.eth" web3Provider={provider} />;
};

export const nftsOwnedByAnENS = nftsOwnedByAnENSStory.bind({});
// @ts-expect-error attaching parameters is fine when binding stories
nftsOwnedByAnENS.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true },
};

export const rinkeby = () => (
  <NFTGallery
    address="0x0ED6Cec17F860fb54E21D154b49DAEFd9Ca04106"
    gridWidth={2}
    isTestnet
  />
);

export const WithAnError = () => <NFTGallery address="bad_address" />;
