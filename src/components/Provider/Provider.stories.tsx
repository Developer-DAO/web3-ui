import React from 'react';

export interface ProviderProps {}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
