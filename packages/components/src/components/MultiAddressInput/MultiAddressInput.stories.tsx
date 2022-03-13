import React, { useEffect } from 'react';
import { NETWORKS, Provider, useReadOnlyProvider } from '@web3-ui/hooks';
import { MultiAddressInput, Entry } from './MultiAddressInput';

export default {
  title: 'Components/MultiAddressInput',
  component: MultiAddressInput,
};

const AddressUsingProvider = () => {
  const mainnetProvider = useReadOnlyProvider(
    'https://mainnet.infura.io/v3/21bc321f21a54c528dc084f5ed7f8df7'
  );
  const [value, setValue] = React.useState<Entry[]>([]);

  useEffect(() => {
    console.log({ value });
  }, [value]);

  if (!mainnetProvider) {
    return null;
  }

  return (
    <>
      <MultiAddressInput
        value={value}
        onChange={setValue}
        ensProvider={mainnetProvider}
        placeholder="Enter ENS names or addresses"
      />
    </>
  );
};

export const WithWallet = () => (
  <Provider network={NETWORKS.rinkeby}>
    <AddressUsingProvider />
  </Provider>
);
