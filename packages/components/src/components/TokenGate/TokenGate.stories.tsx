import React, { useContext } from 'react';
import { TokenGate } from '.';
import { ethers } from 'ethers';
import { NETWORKS, Provider, useWallet, Web3Context } from '@web3-ui/hooks';
import { Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Components/TokenGate',
  component: TokenGate,
  parameters: {
    // TODO: Fix window.ethereum is undefined breaking chromatic
    chromatic: { disableSnapshot: true },
  },
};

const WalletContextTestWrapper = ({ children }): JSX.Element => {
  const { connected, connectWallet } = useContext(Web3Context);

  return !connected ? <Button onClick={connectWallet}>Connect wallet</Button> : children;
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
        contractAddress='0x25ed58c027921e14d86380ea2646e3a1b5c55a8b'
        {...props}
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

export const AccessGranted = () => <Component requiredQuantity={0} />;

export const UsingWeb3Hooks = () => {
  return (
    <Provider network={NETWORKS.mainnet}>
      <WalletContextTestWrapper>
        <WithUseWallet
          deniedMessage={'Must have 1 DeveloperDAO genesis NFT to access this content'}
        />
      </WalletContextTestWrapper>
    </Provider>
  );
};

export const WithLoader = () => <Component loader={true} label='Loader' />;

export const AccessDeniedDefault = () => <Component requiredQuantity={10000} label='Denied' />;

const DeniedAccess = ({ requiredQuantity }) => (
  <div>
    <h1>This is a custom component for when access is denied</h1>
    <ul>
      <li>Make sure your wallet is connected</li>
      <li>Verify you are connected to the correct address</li>
      <li>
        Make sure you hold the number of tokens required to access this component:{' '}
        {requiredQuantity}
      </li>
    </ul>
  </div>
);

export const AccessDeniedWithCustomMessage = () => (
  <Component
    requiredQuantity={10000}
    deniedMessage={<DeniedAccess requiredQuantity={100000} />}
    label='Denied With Message'
  />
);
