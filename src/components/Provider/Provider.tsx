import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { JsonRpcSigner } from '@ethersproject/providers/src.ts/json-rpc-provider';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
export interface Web3ContextType {
  connectWallet: (() => void) | undefined;
  signer: JsonRpcSigner | null | undefined;
  userAddress: string | null | undefined;
  disconnectWallet: (() => void) | undefined;
  network: string;
  chainId: number | undefined;
}

export const Web3Context = React.createContext<Web3ContextType | undefined>(undefined);

export interface ProviderProps {
  /**
   * @dev The network you want to connect to.
   * @example 'mainnet'
   * @type string
   */
  network: string;
  /**
   * @dev Your Infura project ID. This is required if you want to support WalletConnect.
   * @type string
   */
  infuraId?: string;
}

/**
 * @dev The global provider that handles and stores all the web3 connections and passes down necessary styles. Wrap your entire App with this component.
 * @param children Your app.
 * @param network The network you want to connect to.
 * @param infuraId Your Infura project ID. This is required if you want to support WalletConnect.
 */
export const Provider: React.FC<ProviderProps> = ({ children, network, infuraId }) => {
  const [signer, setSigner] = React.useState<null | JsonRpcSigner>(null);
  const [userAddress, setUserAddress] = React.useState<null | string>(null);
  const [web3Modal, setWeb3Modal] = React.useState<null | Web3Modal>();
  const [chainId, setChainId] = React.useState<number>();

  const connectWallet = React.useCallback(async () => {
    const web3Modal = new Web3Modal({
      network,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId,
          },
        },
      },
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    setWeb3Modal(web3Modal);
    setSigner(signer);
    setUserAddress(await signer.getAddress());
    setChainId(await signer.getChainId());
  }, []);

  const disconnectWallet = React.useCallback(async () => {
    web3Modal?.clearCachedProvider();
    setSigner(null);
    setUserAddress(null);
  }, [web3Modal]);

  const value = React.useMemo(() => ({ connectWallet, signer, userAddress, disconnectWallet }), [
    connectWallet,
    signer,
    userAddress,
    web3Modal,
  ]);

  return (
    <Web3Context.Provider value={{ ...value, network, chainId }}>
      <ChakraProvider>{children}</ChakraProvider>
    </Web3Context.Provider>
  );
};
