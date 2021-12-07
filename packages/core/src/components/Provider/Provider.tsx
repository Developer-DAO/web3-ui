import React from 'react';
import { Provider as HooksProvider } from '@web3-ui/hooks';
import { Provider as ComponentsProvider } from '@web3-ui/components';

export const Provider = ({ network, children }) => {
  return (
    <ComponentsProvider>
      <HooksProvider network={network}>{children}</HooksProvider>
    </ComponentsProvider>
  );
};
