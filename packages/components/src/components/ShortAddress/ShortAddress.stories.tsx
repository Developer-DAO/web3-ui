import React from 'react';
import { ShortAddress } from '.';

import { useWallet, Provider, NETWORKS } from '@web3-ui/hooks';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Components/ShortAddress',
  component: ShortAddress,
};

// Default => no address
export const Default = () => <ShortAddress value='' />;

const ShortAddressWithProvider = () => {
  const { connected, connection, connectWallet } = useWallet();

  return (
    <>
      <ShortAddress
        value={connected ? connection.ens || connection.userAddress || '' : 'not connected'}
      />
      <Button onClick={connectWallet}>Connect wallet</Button>
    </>
  );
};

// Get address from connected wallet
export const WithWallet = () => {
  return (
    <Provider network={NETWORKS.rinkeby}>
      <ShortAddressWithProvider />
    </Provider>
  );
};

// Address is ENS format
export const ENSAddress = () => {
  return <ShortAddress value='testaddress.eth' />;
};

// Address is hex format
export const HexAddress = () => {
  return <ShortAddress value='0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b' />;
};
