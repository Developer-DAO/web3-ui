import React, { useCallback, useEffect } from 'react';
import { Box, Heading, Image, Flex, Tag, Text } from '@chakra-ui/react';
import fetch from 'cross-fetch';

export interface NFTProps {
  contractAddress: string;
  tokenId: string;
}

interface NFTData {
  tokenId: string;
  imageUrl: string;
  name: string;
  assetContractSymbol: string;
  assetContractName: string;
}

/**
 * Component to display an NFT given render params
 */
export const NFT = ({ contractAddress, tokenId }: NFTProps) => {
  const [nftData, setNftData] = React.useState<NFTData>();

  const fetchNFTData = useCallback(async () => {
    const response = await (
      await fetch(`https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}/`)
    ).json();
    setNftData({
      tokenId: response.tokenId,
      imageUrl: response.image_url,
      name: response.name,
      assetContractName: response.asset_contract.name,
      assetContractSymbol: response.asset_contract.symbol,
    });
  }, [contractAddress, tokenId]);

  useEffect(() => {
    fetchNFTData();
  }, [contractAddress, tokenId]);

  if (!nftData) {
    return <div>Loading...</div>;
  }

  const { name: displayName, imageUrl, assetContractName, assetContractSymbol } = nftData;

  return (
    <Box maxW='xs' borderRadius='lg' borderWidth='1px' overflow='hidden'>
      <Image src={imageUrl} alt={displayName} borderRadius='lg' />
      <Box p='6'>
        <Flex alignItems='center' justifyContent='space-between' pb='2'>
          <Heading as='h3' size='sm'>
            {displayName}
          </Heading>
          <Tag size='sm'>{assetContractSymbol}</Tag>
        </Flex>
        <Text fontSize='xs'>
          {assetContractName} #{tokenId}
        </Text>
      </Box>
    </Box>
  );
};
