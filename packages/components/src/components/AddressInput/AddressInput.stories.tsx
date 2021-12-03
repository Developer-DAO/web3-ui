import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { AddressInput } from '.';
import { ethers } from 'ethers';
import { Provider, useWallet } from '@web3-ui/hooks';

storiesOf('AddressInput', module).add('default', () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [value, setValue] = React.useState('');
  return <AddressInput value={value} onChange={setValue} provider={provider} />;
});

storiesOf('AddressInput', module).add('using @web3-hook', () => {
  const [value, setValue] = React.useState('');
  const { connectWallet, connection } = useWallet();

  useEffect(() => {
    connectWallet();
  }, []);
  return (
    <Provider>
      <AddressInput value={value} onChange={setValue} provider={connection.signer} />
    </Provider>
  );
});
