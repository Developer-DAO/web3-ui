import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Box,
  Heading,
  Image,
  Flex,
  Tag,
  Text,
  VStack,
  Skeleton,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

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
  size = 'xs',
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

  return <NFTCard data={nftData} errorMessage={errorMessage} size={size} />;
};

/**
 * Private component to display an NFT given the data
 */
export const NFTCard = ({
  data,
  errorMessage = '',
  size,
  hideIfError = false,
}: {
  data: NFTData | undefined | null;
  errorMessage?: string | undefined;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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

  if (errorMessage || error || imageUrl === '(unknown)' || !imageUrl) {
    if (hideIfError) return null;
    return (
      <Alert status="error">
        <AlertIcon />
        {errorMessage}
      </Alert>
    );
  }

  return (
    <Skeleton isLoaded={!!data} maxW={size} h="md">
      <Box maxW={size} borderRadius="lg" borderWidth="1px" overflow="hidden">
        {animationUrl ? (
          animationUrl.endsWith('.mp3') ? (
            <VStack>
              <Image
                src={imageUrl}
                alt={displayName}
                borderRadius="lg"
                w={size}
                onError={() => setError(true)}
              />
              <audio
                src={animationUrl}
                controls
                autoPlay
                muted
                style={{ borderRadius: '7px' }}
              />
            </VStack>
          ) : (
            <Flex w={size} h={size} bg="black" justifyContent="center">
              <video src={animationUrl} controls autoPlay muted />
            </Flex>
          )
        ) : (
          <Image src={imageUrl} alt={displayName} borderRadius="lg" w={size} />
        )}
        <Box p="6">
          <Flex alignItems="center" justifyContent="space-between" pb="2">
            <Heading as="h3" size="sm" style={{ overflowWrap: 'anywhere' }}>
              {displayName}
            </Heading>
            {assetContractSymbol && <Tag size="sm">{assetContractSymbol}</Tag>}
          </Flex>
          <Text fontSize="xs">
            {assetContractName} #{tokenId}
          </Text>
        </Box>
      </Box>
    </Skeleton>
  );
};
