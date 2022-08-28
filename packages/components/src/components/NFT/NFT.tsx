// import React, { useCallback, useEffect, useRef } from 'react';
import React, { useEffect } from 'react';
// import { useNFTsByOwner } from '@web3-ui/hooks';
import { useNFTMetadata } from 'ankr-react';

export type NFTProps = {
  /**
   * The address of the NFT contract.
   */
  contractAddress?: string;
  /**
   * The id of the NFT.
   */
  tokenId?: string;
  /**
   * The size of the NFT card.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export interface NFTData {
  tokenId: string;
  imageUrl?: string;
  name: string | null;
  assetContractSymbol: string;
  assetContractName: string;
  animationUrl?: string;
}

/**
 * Component to fetch and display NFT data
 */
export const NFT = ({
  // contractAddress,
  // tokenId,
  size = 'xs',
}: NFTProps) => {
  // const { data, error, isLoading } = useNFTMetadata({
  //   blockchain: 'eth',
  //   contractAddress: '0xEdB61f74B0d09B2558F1eeb79B247c1F363Ae452',
  //   tokenId: '2276'
  // });

  // console.log('data', data);

  // working ankr api hook for nfts by owner
  // const { data, error, isLoading } = useNFTsByOwner({
  //   walletAddress: '0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5',
  //   blockchain: ['eth', 'polygon']
  // });
  // console.log('loading', isLoading);
  // console.log('error', error);
  // console.log(data);

  return <div>nft here</div>;
};
