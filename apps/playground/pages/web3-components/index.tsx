import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { chain, useConnect, useAccount, useNetwork } from 'wagmi';

import {
  Button,
  Flex,
  Box,
  Text,
  Address,
  TokenBalance,
  NFT,
  ENSAvatar,
} from '@web3-ui/components/src';

const UNI_TOKEN_ADDRESS = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

const Web3ComponentsPage: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { chain: connectedChain } = useNetwork();
  const allowENS = connectedChain?.id === chain.mainnet.id || !connectedChain;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main>
      {mounted && <ConnectButton />}
      <div className={`section`}>
        <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
          Components
        </Text>
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Address
          </Text>
          <Address
            value="0x0000000000000000000000000000000000000000"
            copiable
          />
        </div>

        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Token Balance:{' '}
            {mounted && (connectedChain?.name || 'not connected')}
          </Text>

          {allowENS && (
            <Flex>
              <Text>
                ENS <b>vitalik.eth</b>:&nbsp;
              </Text>
              <TokenBalance addressOrName="vitalik.eth" suspense={true} />
            </Flex>
          )}

          <Flex>
            <Text>
              0x0 on <b>Polygon</b>:&nbsp;
            </Text>
            <TokenBalance
              addressOrName="0x0000000000000000000000000000000000000000"
              chainId={chain.polygon.id}
              suspense={true}
            />
          </Flex>

          {/*Example to avoid Hydration error - SSR specific
          https://nextjs.org/docs/messages/react-hydration-error*/}
          {mounted && allowENS && (
            <Flex>
              <Text>
                Using <b>mounted</b> flag to manually avoid Hydration
                error:&nbsp;
              </Text>
              <TokenBalance
                addressOrName="andriishupta.eth"
                token={UNI_TOKEN_ADDRESS}
              />
            </Flex>
          )}

          {mounted && (
            <Flex>
              <Text>Connected wallet:&nbsp;</Text>
              <TokenBalance />
            </Flex>
          )}
        </div>

        {mounted && (
          <div className="item">
            <Text
              size={`lg`}
              as={`p`}
              weight={'semibold'}
              css={{ padding: '$4' }}
            >
              Address
            </Text>
            <ENSAvatar address="0xc37c41601bc88c91b6569c701f08d37fa0f565f0" />
          </div>
        )}

        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            NFT
          </Text>
          <NFT />
        </div>
      </div>
    </main>
  );
};

const ConnectButton = () => {
  const { connector: activeConnector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <>
      {isConnected && <Text>Connected to {activeConnector?.name}</Text>}
      {connectors
        .filter((connector) => connector.id !== activeConnector?.id)
        .map((connector) => (
          <Button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            Connect to {connector.name}
            {isLoading &&
              pendingConnector?.id === connector.id &&
              ' (connecting)'}
          </Button>
        ))}
      {error && (
        <Text>
          Error <b>useConnect</b>: {error.message}
        </Text>
      )}
    </>
  );
};

export default Web3ComponentsPage;
