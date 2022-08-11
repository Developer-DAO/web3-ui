import React from 'react';
import { Provider as AnkrProvider } from 'ankr-react';

export interface IHooksProviderProps {
  children: React.ReactNode;
  alchemyKey?: string;
  ankrKey?: string;
}

export const HooksProvider = ({ children }: IHooksProviderProps) => {
  return <AnkrProvider>{children}</AnkrProvider>;
};
