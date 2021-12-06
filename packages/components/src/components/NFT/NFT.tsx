import React from 'react';
import { Box, Heading, Image, Flex, Tag, Text } from '@chakra-ui/react';

export interface NFTProps {
  /**
   * The id for the NFT, unique within the contract
   */
  tokenId: string;
  /**
   * The name of the NFT, potentially null
   */
  name: string | null;
  /**
   * The image of the NFT, cached from OpenSea
   */
  imageUrl: string;
  /**
   * The name of the NFT collection
   */
  assetContractName: string;
  /**
   * The symbol for the NFT collection
   */
  assetContractSymbol: string;
}

/**
 * Component to display an NFT given render params
 */
export const NFT = ({
  tokenId,
  name,
  imageUrl,
  assetContractName,
  assetContractSymbol,
}: NFTProps) => {
  const displayName = name || tokenId;

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
