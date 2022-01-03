import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { StaticJsonRpcProvider } from '@ethersproject/providers';

const createProvider = async (url: string) => {
  const p = new ethers.providers.StaticJsonRpcProvider(url);
  await p.ready;
  return p;
};

/*
 * @dev returns a static JSON RPC provider
 * @param url - The url of the JSON RPC provider
 * @credits scaffold-eth (https://github.com/scaffold-eth/scaffold-eth/blob/master/packages/react-app/src/hooks/useStaticJsonRPC.js)
 */
export function useStaticProvider(url: string | undefined) {
  const [provider, setProvider] = useState<StaticJsonRpcProvider>();

  useEffect(() => {
    async function exec() {
      if (!url) {
        return;
      }
      try {
        const p = await createProvider(url);
        setProvider(p);
      } catch (error) {
        console.error(error);
      }
    }
    exec();
  }, [url]);

  return provider;
}
