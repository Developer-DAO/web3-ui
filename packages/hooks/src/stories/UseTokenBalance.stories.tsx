import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { NETWORKS, Provider, useTokenBalance, useWallet } from '..';

const GTC_ADDRESS = '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f';

const Default = () => {
  const { connection, connectWallet, disconnectWallet, connected } = useWallet();
  const { balance, formattedBalance, loading, error } = useTokenBalance({
    tokenAddress: GTC_ADDRESS,
    accountAddress: connection.userAddress!, // you can test using 0x0ED6Cec17F860fb54E21D154b49DAEFd9Ca04106
  });

  if (connected) {
    return (
      <div>
        <Button onClick={disconnectWallet}>Disconnect wallet</Button>
        <p>{connection.ens || connection.userAddress}</p>
        {error ? (
          <p>Error occured while trying to fetch balance.</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <p>
            GTC balance: {balance} wei, {formattedBalance} GTC
          </p>
        )}
      </div>
    );
  }

  return <button onClick={connectWallet}>Connect Wallet</button>;
};

storiesOf('Hooks/useTokenBalance', module).add('Default', () => (
  <Provider network={NETWORKS.mainnet}>
    <Default />
  </Provider>
));
