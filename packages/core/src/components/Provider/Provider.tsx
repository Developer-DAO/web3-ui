import React from 'react';
import { Provider as HooksProvider } from '@web3-ui/hooks';
import { Provider as ComponentsProvider } from '@web3-ui/components';

interface ProviderProps {
  children: React.ReactNode;
  network: number;
  rpcUrl?: string;
}

export const Provider = ({ network, children, rpcUrl }: ProviderProps) => {
  return (
    <ComponentsProvider>
      <HooksProvider network={network} rpcUrl={rpcUrl}>
        {children}
      </HooksProvider>
    </ComponentsProvider>
  );
};
