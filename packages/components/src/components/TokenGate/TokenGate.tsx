import React, { useEffect, useState, ReactNode } from 'react';
import { ethers } from 'ethers';
import { Spinner } from '@chakra-ui/react';
export interface TokenGateProps {
  /**
   * The provider or signer to fetch the address from the ens
   */
  provider: ethers.providers.Web3Provider;
  /**
   * The token contract address
   */
  contractAddress: string;
  /**
   * The token quantity required to access child component. Default=1
   */
  requiredQuantity?: number;
  /**
   * Child nodes
   */
  children: ReactNode;
  /**
   * Optional message if access denied
   */
  deniedMessage?: ReactNode;
  loader?: boolean;
}
export const TokenGate: React.FC<TokenGateProps> = ({
  contractAddress,
  provider,
  requiredQuantity = 1,
  children,
  deniedMessage,
  loader = false,
}) => {
  const erc20Abi = ['function balanceOf(address owner) view returns (uint256)'];
  const [tokenQuantity, setTokenQuantity] = useState<number>(0);
  const [loadedStatus, setloadedStatus] = useState<boolean>(false);
  // connect to contract address to get balance
  async function getTokenBalance() {
    const signer = provider!.getSigner();
    try {
      const address = await signer.getAddress();
      const contract = new ethers.Contract(contractAddress, erc20Abi, signer);
      const balance = await contract.balanceOf(address);
      setloadedStatus(!loadedStatus);

      return balance;
    } catch (error) {
      console.log('ERROR: ', error);
      setloadedStatus(!loadedStatus);
    }

    return;
  }

  useEffect(() => {
    async function setBalance() {
      const balance = await getTokenBalance();
      setTokenQuantity(parseInt(balance, 16));
    }
    setBalance();
  }, []);

  // return children within simple container(className optional)
  return loadedStatus ? (
    // verify token quantity in wallet is greater than required amount(optional, defaults to 1)
    tokenQuantity >= requiredQuantity ? (
      <div>{children}</div>
    ) : deniedMessage ? (
      <div>
        {/* maybe make the below line an optional message? If left out returns null or empty div */}
        {deniedMessage}
      </div>
    ) : null
  ) : loader ? (
    <div>
      <Spinner></Spinner>
    </div>
  ) : null;
};
