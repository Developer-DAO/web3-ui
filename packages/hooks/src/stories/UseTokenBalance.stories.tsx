import { storiesOf } from '@storybook/react';
import React from 'react';
import { Provider, useWallet } from '..';
import { useTokenBalance } from '../hooks/useTokenBalance';

const SOME_OWNER = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const DAI_STABLECOIN_ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
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
  <Provider network='rinkeby'>
    <Default />
  </Provider>
));

const BalanceOfDai = () => {
  const [balance, loading, error] = useTokenBalance(DAI_STABLECOIN_ADDRESS, SOME_OWNER);

  return (
    <>
      <p>{loading ? 'Loading...' : balance}</p>
    </>
  );
};

const UnknownOwner = () => {
  const [balance, loading, error] = useTokenBalance(DAI_STABLECOIN_ADDRESS, '');

  return (
    <>
      <p>{loading ? 'Loading...' : 'Error ' + error}</p>
    </>
  );
};

const UnknownContract = () => {
  const [balance, loading, error] = useTokenBalance('', SOME_OWNER);

  return (
    <>
      <p>{loading ? 'Loading...' : 'Error ' + error}</p>
    </>
  );
};
