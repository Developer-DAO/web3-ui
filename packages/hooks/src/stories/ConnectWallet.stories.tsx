import React from 'react';
import { Button } from '@chakra-ui/react';
import { Provider, useWallet } from '..';

export default {
  title: 'Hooks/useWallet',
};

const DefaultUsingProvider = () => {
  const { connection, connectWallet, disconnectWallet, connected } = useWallet();

  if (connected) {
    return (
      <div>
        <Button onClick={disconnectWallet}>Disconnect wallet</Button>
        <p>{connection.ens || connection.userAddress}</p>
      </div>
    );
  }

  return <Button onClick={connectWallet}>Connect Wallet</Button>;
};

export const Default = () => (
  <Provider network='rinkeby'>
    <DefaultUsingProvider />
  </Provider>
);
