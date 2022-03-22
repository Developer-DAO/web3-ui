import React from 'react';
import { Address } from '.';

import { useWallet, Provider, NETWORKS } from '@web3-ui/hooks';
import { Button, VStack } from '@chakra-ui/react';

export default {
  title: 'Components/Address',
  component: Address,
};

export const Default = () => <Address value="testaddress.eth" />;

export const DefaultShortenedWithProvidedENS = () => (
  <Address shortened value="testaddress.eth" />
);

export const DefaultShortenedWithHexAddress = () => (
  <Address shortened value="0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b" />
);

type AddressProps = {
  shortened?: boolean;
  ens?: boolean;
};

const AddressUsingProvider = (props: AddressProps) => {
  const { connected, connectWallet, connection, provider } = useWallet();

  return (
    <VStack>
      <Address
        copiable
        value={connected ? connection.userAddress || '' : 'Not connected'}
        shortened={props.shortened}
        provider={provider || undefined}
        ens={props.ens}
      />
      <Button onClick={connectWallet}>Connect wallet</Button>
    </VStack>
  );
};

export const WithWallet = () => (
  <Provider network={NETWORKS.rinkeby}>
    <AddressUsingProvider />
  </Provider>
);

export const WithWalletShortened = () => (
  <Provider network={NETWORKS.rinkeby}>
    <AddressUsingProvider shortened />
  </Provider>
);

export const EnsLookupWithProvider = () => (
  <Provider network={NETWORKS.rinkeby}>
    <AddressUsingProvider shortened ens={true} />
  </Provider>
);

export const CanBeCopied = () => <Address value="0x00000000000000" copiable />;
