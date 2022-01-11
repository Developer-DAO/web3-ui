import React from 'react';
import { TokenGate } from '.';
import { NETWORKS, Provider, useTokenBalance, useWallet } from '@web3-ui/hooks';
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

const Component = ({ ...props }) => {
  /**
   * requiredQuantity was done this way because when requiredQuantity is not passed to the component, the required quantity
   * should default to 1 not 0
   */
  const requiredQuantity =
    props.requiredQuantity === undefined ? 1 : props.requiredQuantity;
  return (
    <>
      <TokenGate walletBalance={props.walletBalance} {...props}>
        <Text>
          {`This is the child component of TokenGate. You were able to access this component because you hold at least ${requiredQuantity} token. Your token balance: ${props.walletBalance} `}
        </Text>
      </TokenGate>
    </>
  );
};

const WithUseWallet = ({ ...props }) => {
  const { connected, connectWallet, connection } = useWallet();
  const { formattedBalance, error } = useTokenBalance({
    // GTC token contract address
    tokenAddress: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
    accountAddress: connection.userAddress!,
  });
  // TokenGate only returned if there is a connection and a balance. Done this way to accomplish rendering the loading state.
  // Using the loading state from useTokenBalance would not work because loading status changes simultaneously with connected status
  if (connected && formattedBalance) {
    return (
      <>
        <TokenGate
          walletBalance={Number(formattedBalance)}
          requiredQuantity={props.requiredQuantity}
          {...props}
        >
          <Text>
            {`This is the child component of TokenGate. You were able to access this component because you hold at least ${
              props.requiredQuantity === undefined ? 1 : props.requiredQuantity
            } of the required token: GTC`}
          </Text>
        </TokenGate>
      </>
    );
  }

  if (error) {
    return <Text>Error occured while trying to fetch balance.</Text>;
  }
  // Using the loading state from useTokenBalance hook does not work here because connected status and loading status change simultaneously.
  return !connected ? (
    <Button onClick={connectWallet}>Connect Wallet</Button>
  ) : (
    <Text>Loading...</Text>
  );
};

export const Default = () => <Component walletBalance={1} />;

export const UsingWeb3Hooks = () => {
  return (
    <Provider network={NETWORKS.mainnet}>
      <WithUseWallet requiredQuantity={0} />
    </Provider>
  );
};

export const AccessGrantedDefault = () => (
  <Component walletBalance={150} requiredQuantity={100} />
);

export const AccessDeniedDefault = () => (
  <Component walletBalance={0} requiredQuantity={1000} label="Denied" />
);

/**
 * Example of custom access denied node for the deniedMessage prop
 */
const DeniedAccess = (props) => (
  <div>
    <h1>This is a custom component for when access is denied</h1>
    <ul>
      <li>Make sure your wallet is connected</li>
      <li>Verify you are connected to the correct address</li>
      <li>
        {`Make sure you hold the number of tokens required to access this component: 
        ${props.requiredQuantity === undefined ? 1 : props.requiredQuantity}`}
      </li>
      <li>
        Not providing a "deniedMessage" will return null when access is denied
      </li>
    </ul>
  </div>
);

export const AccessDeniedWithCustomMessage = () => (
  <Component
    requiredQuantity={1000}
    deniedMessage={<DeniedAccess requiredQuantity={1000} />}
    label="Denied With Message"
  />
);
