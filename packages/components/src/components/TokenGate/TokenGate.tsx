import React, { useEffect, useState, ReactNode } from 'react';
import { ethers } from 'ethers';
import { JsonRpcSigner } from '@ethersproject/providers/src.ts/json-rpc-provider';
import { Spinner } from '@chakra-ui/react';
export interface TokenGateProps {
  /**
   * The provider or signer to fetch the address from the ens
   */
  provider: ethers.providers.Web3Provider | JsonRpcSigner;
  /**
   * The token contract address
   */
  contractAddress: string;
  /**
   * The required number of tokens
   */
  requiredQuantity: number;
  /**
   * Child nodes
   */
  children: ReactNode;
  /**
   * Optional message if access denied
   */
  message?: string;
}
export const TokenGate: React.FC<TokenGateProps> = ({
  contractAddress,
  provider,
  requiredQuantity,
  children,
  message,
}) => {
  const erc20Abi = ['function balanceOf(address owner) view returns (uint256)'];
  const [tokenQuantity, setTokenQuantity] = useState<number>(0);
  const [loadedStatus, setloadedStatus] = useState<boolean>(false);
  // connect to contract address to get balance
  async function getTokenBalance() {
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const contract = new ethers.Contract(contractAddress, erc20Abi, signer);
    try {
      const balance = await contract.balanceOf(address);
      console.log('BALANCE: ', parseInt(balance, 16));
      return balance;
    } catch (error) {
      console.log('ERROR: ', error);
    }

    return;
  }

  useEffect(() => {
    async function setBalance() {
      const balance = await getTokenBalance();
      setTokenQuantity(parseInt(balance, 16));
      setloadedStatus(!loadedStatus);
    }
    console.log(loadedStatus);
    setBalance();
  }, []);

  // return children within simple container(className optional)
  return loadedStatus ? (
    // verify token quantity in wallet is greater than required amount(optional, defaults to 1)
    tokenQuantity >= requiredQuantity ? (
      <div>{children}</div>
    ) : message ? (
      <div>
        {/* maybe make the below line an optional message? If left out returns null or empty div */}
        {message}
      </div>
    ) : null
  ) : (
    <div>
      <Spinner></Spinner>
    </div>
  );
};
