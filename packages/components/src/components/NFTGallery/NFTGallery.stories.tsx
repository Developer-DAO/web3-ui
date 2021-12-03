import { storiesOf } from '@storybook/react';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { NFTGallery } from '.';

storiesOf('NFTGallery', module)
  .add('Renders a list of nfts owned by an account', () => (
    <NFTGallery address='0x1A16c87927570239FECD343ad2654fD81682725e' />
  ))
  .add('Renders a list of NFTs owned by an ENS address', () => {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

    useEffect(() => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    }, []);

    if (!provider) {
      return <>Loading...</>;
    }

    return <NFTGallery address='dhaiwat.eth' web3Provider={provider} />;
  });

export const Default = () => <NFTGallery address='0x1A16c87927570239FECD343ad2654fD81682725e' />;

export const WithAnError = () => <NFTGallery address='bad_address' />;
