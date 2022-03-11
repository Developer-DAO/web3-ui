import { useState, useEffect } from 'react';

export const useChainId = (): string | undefined => {
  const [chainId, setChainId] = useState<string | undefined>();
  useEffect(() => {
    window.ethereum.on('chainChanged', setChainId);
    window.ethereum.request({ method: 'eth_chainId' }).then(setChainId);
  }, []);
  return chainId;
};
