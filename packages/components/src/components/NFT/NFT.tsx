import React from 'react';
import { Box, Heading, Image, Flex, Tag, Text } from '@chakra-ui/react';

export interface NFTProps {
  tokenId: string;
  name: string | null;
  imageUrl: string;
  assetContractName: string;
  assetContractSymbol: string;
}

/**
 * @dev Component to display an NFT given render params
 *
 * TODO: Add a component that fetchs the NFT data from the blockchain and uses this component to
 * display it
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
