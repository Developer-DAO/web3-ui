import React, { useEffect } from 'react';
import fetch from 'cross-fetch';

import { VStack, Heading, Grid, Alert, AlertIcon } from '@chakra-ui/react';
import { NFT } from '../NFT';

export interface NFTGalleryProps {
  address: string;
  gridWidth?: number;
}

export interface OpenSeaAsset {
  token_id: string;
  image_url: string;
  name: string | null;
  asset_contract: {
    name: string;
    symbol: string;
  };
}

/**
 * @dev Component to display a grid of NFTs owned by an address. It uses the OpenSea API to fetch
 * the NFTs.
 */
export const NFTGallery = ({ address, gridWidth = 4 }: NFTGalleryProps) => {
  const [nfts, setNfts] = React.useState<OpenSeaAsset[]>([]);
  const [errorMessage, setErrorMessage] = React.useState();

  useEffect(() => {
    fetch(`https://api.opensea.io/api/v1/assets?owner=${address}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(`OpenSea request failed with status: ${res.status}.`);
        }
        return res.json();
      })
      .then((data) => setNfts(data.assets))
      .catch((err) => setErrorMessage(err.message));
  }, [address]);

  return (
    <VStack>
      <Heading size='lg'>NFT Gallery</Heading>
      {errorMessage && (
        <Alert status='error'>
          <AlertIcon />
          {errorMessage}
        </Alert>
      )}
      <Grid templateColumns={`repeat(${gridWidth}, 1fr)`} gap={6}>
        {nfts.map((nft) => (
          <NFT
            key={`${nft.asset_contract.symbol}-${nft.token_id}`}
            tokenId={nft.token_id}
            name={nft.name}
            imageUrl={nft.image_url}
            assetContractName={nft.asset_contract.name}
            assetContractSymbol={nft.asset_contract.symbol}
          />
        ))}
      </Grid>
    </VStack>
  );
};
