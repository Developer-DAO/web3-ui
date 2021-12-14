import React, { useContext } from 'react';
import { TokenGate } from '.';
import { ethers } from 'ethers';
import { NETWORKS, Provider, useWallet, Web3Context } from '@web3-ui/hooks';
import { Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

const WalletContextTestWrapper = ({ children }): JSX.Element => {
  const { connected, connectWallet } = useContext(Web3Context);
  return !connected ? <Button onClick={connectWallet}>Connect wallet</Button> : children;
};
export default {
  title: 'Components/TokenGate',
  component: TokenGate,
  parameters: {
    // TODO: Fix window.ethereum is undefined breaking chromatic
    chromatic: { disableSnapshot: true },
  },
};

const WithUseWallet = ({ ...props }) => {
  const { provider } = useWallet();

  return (
    <>
      <TokenGate
        provider={provider!}
        requiredQuantity={props.requiredQuantity}
        contractAddress='0x25ed58c027921e14d86380ea2646e3a1b5c55a8b'
      >
        <Text>
          You were able to access this component because you hold at least{' '}
          {props.requiredQuantity == 0 ? 0 : props.requiredQuantity ? props.requiredQuantity : 1}{' '}
          DeveloperDAO genesis NFT(s)
        </Text>
      </TokenGate>
    </>
  );
};

const Component = ({ ...props }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return (
    <>
      <TokenGate
        provider={provider!}
        requiredQuantity={props.requiredQuantity}
        contractAddress='0x25ed58c027921e14d86380ea2646e3a1b5c55a8b'
        deniedMessage={props.deniedMessage!}
      >
        <Text>
          You were able to access this component because you hold at least{' '}
          {props.requiredQuantity == 0 ? 0 : props.requiredQuantity ? props.requiredQuantity : 1}{' '}
          DeveloperDAO genesis NFT(s)
        </Text>
      </TokenGate>
    </>
  );
};

export const Default = () => <Component />;

export const UsingWeb3Hooks = () => {
  return (
    <Provider network={NETWORKS.mainnet}>
      <WalletContextTestWrapper>
        <WithUseWallet deniedMessage={'Must have 1 tokens to access this content'} />
      </WalletContextTestWrapper>
    </Provider>
  );
};

export const AccessDeniedDefault = () => <Component requiredQuantity={10000} label='Denied' />;

export const AccessDeniedWithMessage = () => (
  <Component
    requiredQuantity={10000}
    deniedMessage={'Must have 10000 tokens to access this content'}
    label='Denied With Message'
  />
);
