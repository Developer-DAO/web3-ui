import React, { useEffect } from 'react';
import { ethers } from 'ethers';
import { NFTCard } from '../NFT';
import { AlertBox, Grid, VStack } from '../common';
import { styled } from '@stitches/react';

export interface NFTGalleryProps {
  /**
   * The owner of the NFTs. Can be a wallet address, or an ENS name. If the address is an ENS
   * name, then you must also provide the provider.
   */
  address: string;
  /**
   * The number of columns in the grid
   */
  gridWidth?: number;
  /**
   * A Web3Provider. Only needed if the address will be an ENS name.
   */
  web3Provider?: ethers.providers.Web3Provider;
  /**
   * Use testnet api instead of mainnet
   */
  isTestnet?: boolean;
}

export interface OpenSeaAsset {
  token_id: string;
  image_url: string;
  name: string | null;
  asset_contract: {
    name: string;
    address: string;
    symbol: string;
  };
}

/**
 * Component to display a grid of NFTs owned by an address. It uses the OpenSea API to fetch
 * the NFTs.
 */
export const NFTGallery = ({
  address,
  gridWidth = 4,
  web3Provider,
  isTestnet = false,
}: NFTGalleryProps) => {
  const [nfts, setNfts] = React.useState<OpenSeaAsset[]>([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const NFTGrid = styled(Grid, {
    gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
    gap: '6px',
  });

  useEffect(() => {
    async function exec() {
      let resolvedAddress: string | null = address;
      const apiSubDomain = isTestnet ? `rinkeby-api` : `api`;
      if (isTestnet)
        console.error(
          `⚠️ OpenSea currently only supports Rinkedby with testnets.`
        );
      if (address.endsWith('.eth')) {
        if (!web3Provider) {
          return console.error('Please provide a web3 provider');
        }
        resolvedAddress = await web3Provider.resolveName(address);
      }
      fetch(
        `https://${apiSubDomain}.opensea.io/api/v1/assets?owner=${resolvedAddress}`
      )
        .then((res) => {
          if (!res.ok) {
            throw Error(
              `OpenSea request failed with status: ${res.status}. Make sure you are on mainnet.`
            );
          }
          return res.json();
        })
        .then((data) => {
          setNfts(data.assets);
          setErrorMessage(null);
        })
        .catch((err) => setErrorMessage(err.message));
    }
    exec();
  }, [address, web3Provider]);

  return (
    <VStack>
      {errorMessage && <AlertBox>{errorMessage}</AlertBox>}
      <NFTGrid>
        {nfts.map((nft) => (
          <NFTCard
            key={`${nft.asset_contract.symbol}-${nft.token_id}`}
            data={{
              name: nft.name as string,
              imageUrl: nft.image_url,
              tokenId: nft.token_id,
              assetContractName: nft.asset_contract.name,
              assetContractSymbol: nft.asset_contract.symbol,
            }}
            hideIfError
          />
        ))}
      </NFTGrid>
    </VStack>
  );
};
