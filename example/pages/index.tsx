import React, { useState } from 'react';

import { NFTGallery } from '@web3-ui/components';
import { Stack, Input, Button, Heading, Text } from '@chakra-ui/react';
export default function Home() {
  const [address, setAddress] = useState('');
  const [nftGallery, setNftGallery] = useState(null);

  return (
    <Stack p={3}>
      <Heading>Demo</Heading>
      <Text>Type in an address to view their NFTs</Text>
      <Input
        placeholder="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <Button
        onClick={() =>
          setNftGallery(<NFTGallery address={address} gridWidth={4} />)
        }
      >
        Submit
      </Button>
      {nftGallery}
    </Stack>
  );
}
