// import React, { useCallback, useEffect, useRef } from 'react';
import React, { useEffect } from 'react';
// import { useNFTsByOwner } from '@web3-ui/hooks';

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
  /**
   * Use testnet API (Rinkeby) instead of mainnet
   */
  isTestnet?: boolean;
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
}: // isTestnet = false,
NFTProps) => {
  // const _isMounted = useRef(true);
  const [nftData, setNftData] = React.useState<NFTData>();
  const [errorMessage, setErrorMessage] = React.useState<string>();

  useEffect(() => {
    setNftData(undefined);
    setErrorMessage('');
  }, []);

  // working ankr api hook for nfts by owner
  // const { data, error, isLoading } = useNFTsByOwner({
  //   walletAddress: '0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5',
  //   blockchain: ['eth', 'polygon']
  // });
  // console.log('loading', isLoading);
  // console.log('error', error);
  // console.log(data);

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
  console.log(data);
  console.log(errorMessage);
  console.log(size);
  console.log(hideIfError);
  // const [error, setError] = useState(false);
  // const name = data?.name;
  // const imageUrl = data?.imageUrl;
  // const assetContractName = data?.assetContractName;
  // const assetContractSymbol = data?.assetContractSymbol;
  // const animationUrl = data?.animationUrl;
  // const tokenId = data?.tokenId;
  // const displayName = name || `${assetContractSymbol} #${tokenId}`;

  // if (errorMessage || error || imageUrl === '(unknown)' || !imageUrl) {
  //   if (hideIfError) return null;
  //   return (
  //     <>{errorMessage}</>
  //     //   <Alert status="error">
  //     //     <AlertIcon />
  //     //     {errorMessage}
  //     //   </Alert>
  //   );
  // }

  return (
    <div>nft here</div>
    // <Skeleton isLoaded={!!data} maxW={size} h="md">
    //   <Box maxW={size} borderRadius="lg" borderWidth="1px" overflow="hidden">
    //     {animationUrl ? (
    //       animationUrl.endsWith('.mp3') ? (
    //         <VStack>
    //           <Image
    //             src={imageUrl}
    //             alt={displayName}
    //             borderRadius="lg"
    //             w={size}
    //             onError={() => setError(true)}
    //           />
    //           <audio
    //             src={animationUrl}
    //             controls
    //             autoPlay
    //             muted
    //             style={{ borderRadius: '7px' }}
    //           />
    //         </VStack>
    //       ) : (
    //         <Flex w={size} h={size} bg="black" justifyContent="center">
    //           <video src={animationUrl} controls autoPlay muted />
    //         </Flex>
    //       )
    //     ) : (
    //       <Image src={imageUrl} alt={displayName} borderRadius="lg" w={size} />
    //     )}
    //     <Box p="6">
    //       <Flex alignItems="center" justifyContent="space-between" pb="2">
    //         <Heading as="h3" size="sm" style={{ overflowWrap: 'anywhere' }}>
    //           {displayName}
    //         </Heading>
    //         {assetContractSymbol && <Tag size="sm">{assetContractSymbol}</Tag>}
    //       </Flex>
    //       <Text fontSize="xs">
    //         {assetContractName} #{tokenId}
    //       </Text>
    //     </Box>
    //   </Box>
    // </Skeleton>
  );
};
