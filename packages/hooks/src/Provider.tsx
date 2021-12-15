import { JsonRpcSigner } from '@ethersproject/providers/src.ts/json-rpc-provider';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
import React from 'react';
import Web3Modal, { IProviderOptions } from 'web3modal';

export interface Web3ContextType {
  connectWallet?: () => void;
  signer?: JsonRpcSigner | null;
  userAddress?: string | null;
  disconnectWallet?: () => void;
  chainId?: number | null;
  connected: boolean;
  provider?: ethers.providers.Web3Provider | null;
  correctNetwork: boolean;
  network: number;
}

export const Web3Context = React.createContext<Web3ContextType | undefined>(undefined);

export interface ProviderProps {
  /**
   * @dev The network you want to connect to.
   * @example NETWORKS.mainnet
   * @type string
   */
  network: number;
  /**
   * @dev Your Infura project ID. This is required if you want to support WalletConnect.
   * @type string
   */
  infuraId?: string;
  /**
   * @dev An array of extra Wallet Providers you want to support.
   * @type [ 
      [id: string]: {
          package: any;
          options?: any;
          connector?: Connector;
          display?: Partial<IProviderDisplay>;
        }; 
      ]
   */
  extraWalletProviders?: [IProviderOptions];
}

/**
 * @dev The global provider that handles and stores all the web3 connections. Wrap your entire App with this component.
 * @param children Your app.
 * @param network The network you want to connect to.
 * @param infuraId Your Infura project ID. This is required if you want to support WalletConnect.
 * @param extraWalletProviders An array of extra Wallet Providers you want to support.
 */
export const Provider: React.FC<ProviderProps> = ({
  children,
  network,
  infuraId,
  extraWalletProviders = [],
}) => {
  const [signer, setSigner] = React.useState<null | JsonRpcSigner>();
  const [provider, setProvider] = React.useState<ethers.providers.Web3Provider | null>();
  const [userAddress, setUserAddress] = React.useState<null | string>();
  const [web3Modal, setWeb3Modal] = React.useState<Web3Modal>();
  const [chainId, setChainId] = React.useState<number | null>();
  const [connected, setConnected] = React.useState<boolean>(false);
  const [correctNetwork, setCorrectNetwork] = React.useState<boolean>(true);
  const [connection, setConnection] = React.useState<any>();

  const connectWallet = React.useCallback(async () => {
    const defaulProviderOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          bridge: 'https://polygon.bridge.walletconnect.org',
          infuraId,
          rpc: {
            1: `https://eth-mainnet.alchemyapi.io/v2/${infuraId}`, // mainnet // For more WalletConnect providers: https://docs.walletconnect.org/quick-start/dapps/web3-provider#required
            42: `https://kovan.infura.io/v3/${infuraId}`,
            100: 'https://dai.poa.network', // xDai
          },
        },
      },
    };

    const web3Modal = new Web3Modal({
      providerOptions: Object.assign(defaulProviderOptions, ...extraWalletProviders),
    });
    setWeb3Modal(web3Modal);
    const connection = await web3Modal.connect();
    setConnection(connection);
    const provider = new ethers.providers.Web3Provider(connection);
    setProvider(provider);
    const chainId = await provider.getNetwork().then(network => network.chainId);
    setChainId(chainId);
    setCorrectNetwork(chainId === network);
    const signer = provider.getSigner();
    setSigner(signer);
    setUserAddress(await signer.getAddress());
    setConnected(true);

    connection.on('chainChanged', onNetworkChange);
    connection.on('accountsChanged', onAccountsChanged);
    connection.on('disconnect', onDisconnect);
  }, [
    Web3Modal,
    web3Modal,
    WalletConnectProvider,
    network,
    infuraId,
    ethers,
    correctNetwork,
    connection,
  ]);

  const onNetworkChange = async (newChainId: string) => {
    const formattedChainId = +newChainId.split('0x')[1];
    setChainId(formattedChainId);
    setCorrectNetwork(formattedChainId === network);
    const provider = new ethers.providers.Web3Provider(connection);
    setProvider(provider);
    const signer = provider.getSigner();
    setSigner(signer);
    setUserAddress(await signer.getAddress());
    setConnected(true);
  };

  const onAccountsChanged = async () => {
    const provider = new ethers.providers.Web3Provider(connection);
    setProvider(provider);
    const chainId = await provider.getNetwork().then(network => network.chainId);
    setChainId(chainId);
    setCorrectNetwork(chainId === network);
    const signer = provider.getSigner();
    setSigner(signer);
    setUserAddress(await signer.getAddress());
    setConnected(true);
  };

  const onDisconnect = async () => {
    web3Modal?.clearCachedProvider();
    disconnectWallet();
  };

  const disconnectWallet = React.useCallback(() => {
    web3Modal?.clearCachedProvider();
    setSigner(null);
    setUserAddress(null);
    setConnected(false);
  }, [web3Modal]);

  const value = React.useMemo(
    () => ({
      connectWallet,
      signer,
      userAddress,
      disconnectWallet,
      connected,
      provider,
      network,
      chainId,
      correctNetwork,
    }),
    [
      connectWallet,
      signer,
      userAddress,
      web3Modal,
      connected,
      provider,
      network,
      chainId,
      correctNetwork,
    ]
  );

  return <Web3Context.Provider value={{ ...value }}>{children}</Web3Context.Provider>;
};
