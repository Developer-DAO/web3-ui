import React from 'react';
import { Address } from '.';

import { useWallet, Provider, NETWORKS } from '@web3-ui/hooks';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Components/Address',
  component: Address,
};

export const Default = () => <Address value='testaddress.eth' />;

export const DefaultShortenedWithENS = () => <Address value='testaddress.eth' shortened={true} />;

export const DefaultShortenedWithHexAddress = () => (
  <Address value='0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b' shortened={true} />
);

const AddressUsingProvider = ({ shortened }) => {
  const { connected, connectWallet, connection } = useWallet();

  return (
    <>
      <Address
        value={connected ? connection.ens || connection.userAddress || '' : 'Not connected'}
        shortened={shortened}
      />
      <Button onClick={connectWallet}>Connect wallet</Button>
    </>
  );
};

export const WithWallet = () => (
  <Provider network={NETWORKS.rinkeby}>
    <AddressUsingProvider shortened={false} />
  </Provider>
);

export const WithWalletShortened = () => (
  <Provider network={NETWORKS.rinkeby}>
    <AddressUsingProvider shortened />
  </Provider>
);
