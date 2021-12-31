import React, { useEffect, useState } from 'react';

import { NFTGallery } from '@web3-ui/components';
import { Stack, Input, Button, Heading, Text } from '@chakra-ui/react';
import { useWallet, ConnectWallet } from '@web3-ui/core';
import { Container } from '@chakra-ui/react';
export default function Home() {
  const [address, setAddress] = useState('');
  const [nftGallery, setNftGallery] = useState(null);
  const {
    correctNetwork,
    switchToCorrectNetwork,
    connected,
    provider
  } = useWallet();

  useEffect(() => {
    console.log('correctNetwork', correctNetwork);
  }, [correctNetwork]);

  return (
    <Container>
      <ConnectWallet />
      {!correctNetwork && (
        <Button onClick={switchToCorrectNetwork}>Switch to Mainnet.</Button>
      )}
      <Stack p={3}>
        <Heading>Demo</Heading>
        <Text>Type in an address to view their NFTs</Text>
        <Input
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <Button
          disabled={!connected}
          onClick={() =>
            setNftGallery(
              <NFTGallery
                address={address}
                gridWidth={2}
                web3Provider={provider}
              />
            )
          }
        >
          {connected ? 'Submit' : 'Connect your wallet first!'}
        </Button>
        {nftGallery}
      </Stack>
    </Container>
  );
}
