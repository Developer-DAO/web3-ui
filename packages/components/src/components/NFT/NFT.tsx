import React, { useCallback, useEffect, useRef } from 'react';
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
import fetch from 'cross-fetch';

export interface NFTProps {
  contractAddress: string;
  tokenId: string;
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
export const NFT = ({ contractAddress, tokenId }: NFTProps) => {
  const _isMounted = useRef(true);
  const [nftData, setNftData] = React.useState<NFTData>();
  const [errorMessage, setErrorMessage] = React.useState<string>();

  const fetchNFTData = useCallback(async () => {
    try {
      const res = await fetch(`https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}/`);
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
    } catch (error: any) {
      setErrorMessage(error.message);
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
}: {
  data: NFTData | undefined | null;
  errorMessage?: string | undefined;
}) => {
  const name = data?.name;
  const imageUrl = data?.imageUrl;
  const assetContractName = data?.assetContractName;
  const assetContractSymbol = data?.assetContractSymbol;
  const animationUrl = data?.animationUrl;
  const tokenId = data?.tokenId;
  const displayName = name || `${assetContractSymbol} #${tokenId}`;

  if (errorMessage) {
    return (
      <Alert status='error'>
        <AlertIcon />
        {errorMessage}
      </Alert>
    );
  }

  return (
    <Skeleton isLoaded={!!data} maxW='xs' h='md'>
      <Box maxW='xs' borderRadius='lg' borderWidth='1px' overflow='hidden'>
        {animationUrl ? (
          animationUrl.endsWith('.mp3') ? (
            <VStack>
              <Image src={imageUrl} alt={displayName} borderRadius='lg' />
              <audio src={animationUrl} controls autoPlay muted style={{ borderRadius: '7px' }} />
            </VStack>
          ) : (
            <video src={animationUrl} controls autoPlay muted />
          )
        ) : (
          <Image src={imageUrl} alt={displayName} borderRadius='lg' />
        )}
        <Box p='6'>
          <Flex alignItems='center' justifyContent='space-between' pb='2'>
            <Heading as='h3' size='sm'>
              {displayName}
            </Heading>
            {assetContractSymbol && <Tag size='sm'>{assetContractSymbol}</Tag>}
          </Flex>
          <Text fontSize='xs'>
            {assetContractName} #{tokenId}
          </Text>
        </Box>
      </Box>
    </Skeleton>
  );
};
