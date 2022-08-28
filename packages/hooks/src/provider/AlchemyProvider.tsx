import React, { createContext, useEffect, useState, FC } from 'react';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import AnkrscanProvider from '@ankr.com/ankr.js';
import { Alchemy, Network, AlchemySettings } from 'alchemy-sdk';

interface IProviderProps {
  children: React.ReactNode;
  alchemyKey?: string;
  network?: Network;
}

// const queryClient = new QueryClient();

interface IGlobalContextType {
  alchemyKey?: string;
  alchemyProvider: Alchemy;
  network?: Network;
}

export const AlchemyGlobalContext = createContext<IGlobalContextType>({
  alchemyKey: '',
  alchemyProvider: new Alchemy(),
  network: Network.ETH_MAINNET,
});

export const AlchemyProvider: FC<IProviderProps> = ({
  children,
  alchemyKey = '',
  network = Network.ETH_MAINNET,
}) => {
  const [alchemyProvider, setalchemyProvider] = useState<Alchemy>(
    new Alchemy({ apiKey: alchemyKey, network })
  );

  useEffect(() => {
    setalchemyProvider(new Alchemy({ apiKey: alchemyKey, network }));
  }, [alchemyKey, network]);

  return (
    <AlchemyGlobalContext.Provider
      value={{
        alchemyKey,
        alchemyProvider,
        network,
      }}
    >
      {children}
      {/* <QueryClientProvider client={queryClient}>{children}</QueryClientProvider> */}
    </AlchemyGlobalContext.Provider>
  );
};
