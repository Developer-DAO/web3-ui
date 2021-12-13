import React from 'react';
import { Avatar } from '.';
import { AddressInput } from '../AddressInput';
import { ethers } from 'ethers';

import { useWallet, Provider, NETWORKS } from '@web3-ui/hooks';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

export const Default = () => (
  <Avatar address='0x983110309620D911731Ac0932219af06091b6744' size={50} />
);

const AvatarUsingProvider = () => {
  const { connected, connectWallet, connection } = useWallet();

  return (
    <>
      <Avatar
        address={connected ? connection.ens || connection.userAddress || '' : 'Not connected'}
        size={50}
      />
      <Button onClick={connectWallet}>Connect wallet</Button>
    </>
  );
};

export const WithWallet = () => (
  <Provider network={NETWORKS.rinkeby}>
    <AvatarUsingProvider />
  </Provider>
);

const Component = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [address, setAddress] = React.useState('');

  return (
    <>
      <Avatar address={address} />
      <AddressInput value={address} provider={provider} onChange={e => setAddress(e)} />
    </>
  );
};

export const WithAddressInput = () => {
  return <Component />;
};
