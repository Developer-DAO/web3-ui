import { storiesOf } from '@storybook/react';
import React from 'react';
import { Provider, useWallet } from '..';

const Default = () => {
  const { connection, connectWallet, disconnectWallet, connected } = useWallet();

  if (connected) {
    return (
      <div>
        <button onClick={disconnectWallet}>Disconnect wallet</button>
        <p>{connection.ens || connection.userAddress}</p>
      </div>
    );
  }

  return <button onClick={connectWallet}>Connect Wallet</button>;
};

storiesOf('ConnectWallet', module).add('Default', () => (
  <Provider network='rinkeby'>
    <Default />
  </Provider>
));
