import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { NETWORKS, Provider, useWallet } from '..';

export default {
  title: 'Hooks/useWallet',
};

const DefaultUsingProvider = () => {
  const { connection, connectWallet, disconnectWallet, connected, correctNetwork } = useWallet();

  useEffect(() => {
    if (!correctNetwork) {
      alert('Please connect to the correct network');
    }
  }, [correctNetwork]);

  if (connected) {
    return (
      <div>
        <Button onClick={disconnectWallet}>Disconnect wallet</Button>
        <p>{connection.ens || connection.userAddress}</p>
        <p>Connected to the correct network: {correctNetwork ? 'Yes' : 'no'}</p>
      </div>
    );
  }

  return <Button onClick={connectWallet}>Connect Wallet</Button>;
};

export const Default = () => (
  <Provider network={NETWORKS.rinkeby}>
    <DefaultUsingProvider />
  </Provider>
);
