import React from 'react';
import { Address } from '.';

import { useWallet, Provider } from '@web3-ui/hooks';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Components/Address',
  component: Address,
};

export const Default = () => <Address value='testaddress.eth' />;

const AddressUsingProvider = () => {
  const { connected, connectWallet, connection } = useWallet();

  return (
    <>
      <Address
        value={connected ? connection.ens || connection.userAddress || '' : 'Not connected'}
      />
      <Button onClick={connectWallet}>Connect wallet</Button>
    </>
  );
};

export const WithWallet = () => (
  <Provider network='rinkeby'>
    <AddressUsingProvider />
  </Provider>
);
