import { storiesOf } from '@storybook/react';
import React from 'react';
import { Address } from '.';

import { useWallet, Provider } from '@web3-ui/hooks';
import { Button } from '@chakra-ui/react';

storiesOf('Address', module).add('Default', () => <Address value='testaddress.eth' />);

const WithWallet = () => {
  const { connected, connectWallet, connection } = useWallet();

  return (
    <Provider network='rinkeby'>
      <Address
        value={connected ? connection.ens || connection.userAddress || '' : 'Not connected'}
      />
      <Button onClick={connectWallet}>Connect wallet</Button>
    </Provider>
  );
};

storiesOf('Address', module).add('WithWallet', () => <WithWallet />);
