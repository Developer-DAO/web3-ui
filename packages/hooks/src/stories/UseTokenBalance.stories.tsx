import { storiesOf } from '@storybook/react';
import React from 'react';
import { Provider, useWallet } from '..';
import { useTokenBalance } from '../hooks/useTokenBalance';

const Default = () => {
  const { connectWallet, connected } = useWallet();

  if (connected) {
    return (
      <>
        <BalanceOfDai />
        <UnknownOwner />
        <UnknownContract />
      </>
    );
  }

  return <button onClick={connectWallet}>Connect Wallet</button>;
};

storiesOf('useTokenBalance', module).add('Default', () => (
  <Provider network='mainnet'>
    <Default />
  </Provider>
));

const BalanceOfDai = () => {
  const owner = '0x503828976D22510aad0201ac7EC88293211D23Da';
  const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
  const [loading, balance] = useTokenBalance(address, owner);

  return (
    <>
      <p>{loading ? 'Loading...' : balance}</p>
    </>
  );
};

const UnknownOwner = () => {
  const owner = '';
  const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
  const [loading, balance, hasError] = useTokenBalance(address, owner);

  return (
    <>
      <p>{loading ? 'Loading...' : 'Error ' + hasError}</p>
    </>
  );
};

const UnknownContract = () => {
  const owner = '0x503828976D22510aad0201ac7EC88293211D23Da';
  const address = '';
  const [loading, balance, hasError] = useTokenBalance(address, owner);

  return (
    <>
      <p>{loading ? 'Loading...' : 'Error ' + hasError}</p>
    </>
  );
};
