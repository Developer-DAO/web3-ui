import React, { useCallback, useEffect, useRef } from 'react';
import { Box, Heading, Image, Flex, Tag, Text, VStack } from '@chakra-ui/react';
import fetch from 'cross-fetch';

export interface NFTProps {
  contractAddress: string;
  tokenId: string;
}

interface NFTData {
  tokenId: string;
  imageUrl?: string;
  name: string;
  assetContractSymbol: string;
  assetContractName: string;
  animationUrl?: string;
}

/**
 * Component to display an NFT given render params
 */
export const NFT = ({ contractAddress, tokenId }: NFTProps) => {
  const _isMounted = useRef(true);
  const [nftData, setNftData] = React.useState<NFTData>();

  const fetchNFTData = useCallback(async () => {
    const response = await (
      await fetch(`https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}/`)
    ).json();
    if (_isMounted.current) {
      setNftData({
        tokenId: response.token_id,
        imageUrl: response.image_url,
        name: response.name,
        assetContractName: response.asset_contract.name,
        assetContractSymbol: response.asset_contract.symbol,
        animationUrl: response.animation_url,
      });
    }
  }, [contractAddress, tokenId]);

  useEffect(() => {
    _isMounted.current = true;
    fetchNFTData();
    return () => {
      _isMounted.current = false;
    };
  }, [contractAddress, tokenId]);

  if (!nftData) {
    return null;
  }

  let {
    name: displayName,
    imageUrl,
    assetContractName,
    assetContractSymbol,
    animationUrl,
  } = nftData;

  return (
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
  );
};
