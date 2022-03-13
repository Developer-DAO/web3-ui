import { styled } from '@stitches/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Flex, VStack, Tag, AlertBox } from '../common';

export interface NFTProps {
  /**
   * The address of the NFT contract.
   */
  contractAddress: string;
  /**
   * The id of the NFT.
   */
  tokenId: string;
  /**
   * The size of the NFT card.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Use testnet API (Rinkeby) instead of mainnet
   */
  isTestnet?: boolean;
}

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
  contractAddress,
  tokenId,
  // width = '20rem',
  isTestnet = false,
}: NFTProps) => {
  const _isMounted = useRef(true);
  const [nftData, setNftData] = React.useState<NFTData>();
  const [errorMessage, setErrorMessage] = React.useState<string>();

  const fetchNFTData = useCallback(async () => {
    const apiSubDomain = isTestnet ? `rinkeby-api` : `api`;

    try {
      const res = await fetch(
        `https://${apiSubDomain}.opensea.io/api/v1/asset/${contractAddress}/${tokenId}/`
      );
      if (isTestnet)
        console.log(
          `⚠️ OpenSea currently only supports Rinkedby with testnets.`
        );
      if (!res.ok) {
        throw Error(
          `OpenSea request failed with status: ${res.status}. Make sure you are on mainnet.`
        );
      }
      const data = await res.json();
      if (_isMounted.current) {
        setNftData({
          tokenId: data.token_id,
          imageUrl: data.image_url,
          name: data.name,
          assetContractName: data.asset_contract.name,
          assetContractSymbol: data.asset_contract.symbol,
          animationUrl: data.animation_url,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unknown error occurred');
      }
    }
  }, [contractAddress, tokenId]);

  useEffect(() => {
    _isMounted.current = true;
    fetchNFTData();
    return () => {
      _isMounted.current = false;
    };
  }, [contractAddress, tokenId]);

  return <NFTCard data={nftData} errorMessage={errorMessage} />;
};

/**
 * Private component to display an NFT given the data
 */
export const NFTCard = ({
  data,
  errorMessage = '',
  width,
  hideIfError = false,
}: {
  data: NFTData | undefined | null;
  errorMessage?: string | undefined;
  width?: string;
  hideIfError?: boolean;
}) => {
  const [error, setError] = useState(false);
  const name = data?.name;
  const imageUrl = data?.imageUrl;
  const assetContractName = data?.assetContractName;
  const assetContractSymbol = data?.assetContractSymbol;
  const animationUrl = data?.animationUrl;
  const tokenId = data?.tokenId;
  const displayName = name || `${assetContractSymbol} #${tokenId}`;

  const NFTCardContainer = styled(VStack, {
    borderRadius: '7px',
    border: '1px solid #eaeaea',
    padding: '1rem',
    width: width || '20rem',
  });

  const NFTImage = styled('img', {
    borderRadius: '7px',
    width: width || '20rem',
  });

  const VideoContainer = styled(Flex, {
    backgroundColor: 'Black',
    justifyContent: 'center',
  });

  const NFTDetailsContainer = styled(Flex, {
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  });

  const LowerNFTDetailsContainer = styled('span', {
    overflowWrap: 'anywhere',
  });

  const Video = styled('video', {
    width: '20rem',
  });

  const Audio = styled('audio', {
    borderRadius: '7px',
  });

  if (errorMessage || error || imageUrl === '(unknown)' || !imageUrl) {
    if (hideIfError) return null;
    return <AlertBox>{errorMessage}</AlertBox>;
  }

  return (
    // TODO: Create skeleton
    // <Skeleton isLoaded={!!data} maxW={size} h="md">
    <NFTCardContainer data-testid="nft-container">
      {animationUrl ? (
        animationUrl.endsWith('.mp3') ? (
          <VStack>
            <NFTImage
              src={imageUrl}
              alt={displayName}
              onError={() => setError(true)}
            />
            <Audio src={animationUrl} controls autoPlay muted />
          </VStack>
        ) : (
          <VideoContainer>
            <Video src={animationUrl} controls autoPlay muted />
          </VideoContainer>
        )
      ) : (
        <NFTImage src={imageUrl} alt={displayName} />
      )}
      <div>
        <NFTDetailsContainer>
          <h3 style={{ overflowWrap: 'anywhere' }}>{displayName}</h3>
          {assetContractSymbol && <Tag>{assetContractSymbol}</Tag>}
        </NFTDetailsContainer>
        <LowerNFTDetailsContainer>
          {assetContractName} #{tokenId}
        </LowerNFTDetailsContainer>
      </div>
    </NFTCardContainer>
  );
};
