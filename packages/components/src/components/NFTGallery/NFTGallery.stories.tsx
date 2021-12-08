import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { NFTGallery } from '.';

export default {
  title: 'Components/NFTGallery',
  component: NFTGallery,
  parameters: {
    // TODO: Fix window.ethereum is undefined breaking chromatic
    chromatic: { disableSnapshot: true },
  },
};

export const nftsOwnedByAnAccount = () => (
  <NFTGallery address='0x1A16c87927570239FECD343ad2654fD81682725e' />
);

export const nftsOwnedByAnENS = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
  }, []);

  if (!provider) {
    return <>Loading...</>;
  }

  return <NFTGallery address='dhaiwat.eth' web3Provider={provider} />;
};

export const WithAnError = () => <NFTGallery address='bad_address' />;
