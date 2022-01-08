import React, { useCallback, useEffect, useState } from 'react';
import { TokenGate as PrivTokenGate } from '@web3-ui/components';
import { useReadOnlyContract, useWallet } from '@web3-ui/hooks';
import { ERC20ABI, ERC721ABI } from '@web3-ui/hooks/src/constants';
import { BigNumber, ethers } from 'ethers';

export interface TokenGateProps {
  /**
   * The content that will be displayed if the user holds the required number of tokens.
   */
  children: React.ReactNode;
  /**
   * The contract address of the token you want to gate your content using.
   */
  tokenContractAddress: string;
  /**
   * The token quantity required to access child component in wei. Default=1 ether.
   */
  requiredQuantity?: number;
  /**
   * Optional message that is displayed if access denied i.e. the user does not hold enough tokens. Default=null
   */
  deniedContent?: React.ReactNode;
  /**
   * The token type. ERC20 and ERC721 are supported. Default=ERC20
   */
  tokenType?: 'ERC20' | 'ERC721';
}

/**
 * A 'token gate' that renders some content depending on whether the user has the required quantity of a token or not.
 */
export const TokenGate = ({
  children,
  tokenContractAddress,
  requiredQuantity = +ethers.utils.parseEther('1'),
  deniedContent = null,
  tokenType = 'ERC20'
}: TokenGateProps) => {
  const contractAbi = tokenType === 'ERC20' ? ERC20ABI : ERC721ABI;
  const { connection } = useWallet();
  const { userAddress } = connection;
  const [tokenContract, isReady] = useReadOnlyContract(
    tokenContractAddress,
    contractAbi
  );
  const [balance, setBalance] = useState<BigNumber>();

  const fetchBalance = useCallback(async () => {
    if (isReady && userAddress && tokenContract) {
      const balance: BigNumber = await tokenContract.balanceOf(userAddress);
      setBalance(balance);
    }
  }, [isReady, userAddress, tokenContract]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  if (!balance) {
    return null;
  }

  return (
    <PrivTokenGate
      walletBalance={+balance.toString()}
      deniedMessage={deniedContent}
      requiredQuantity={requiredQuantity}
    >
      {children}
    </PrivTokenGate>
  );
};
