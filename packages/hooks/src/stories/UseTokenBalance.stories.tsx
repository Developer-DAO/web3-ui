import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, VStack, Text } from '@chakra-ui/react';
import { NETWORKS, Provider, useTokenBalance, useWallet } from '..';

const GTC_ADDRESS = '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f';

const Default = () => {
  const { connection, connectWallet, disconnectWallet, connected } =
    useWallet();
  const { balance, formattedBalance, loading, error } = useTokenBalance({
    tokenAddress: GTC_ADDRESS,
    accountAddress: connection.userAddress!, // you can test using 0x0ED6Cec17F860fb54E21D154b49DAEFd9Ca04106
  });

  if (connected) {
    return (
      <VStack>
        <Button onClick={disconnectWallet}>Disconnect wallet</Button>
        <Text>{connection.ens || connection.userAddress}</Text>
        {error ? (
          <Text>Error occured while trying to fetch balance.</Text>
        ) : loading ? (
          <Text>Loading...</Text>
        ) : (
          <Text>
            GTC balance: {balance} wei, {formattedBalance} GTC
          </Text>
        )}
      </VStack>
    );
  }

  return <Button onClick={connectWallet}>Connect Wallet</Button>;
};

storiesOf('Hooks/useTokenBalance', module).add('Default', () => (
  <Provider network={NETWORKS.mainnet}>
    <Default />
  </Provider>
));
