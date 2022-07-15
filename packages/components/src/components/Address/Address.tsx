import React, { useState, useEffect, useCallback } from 'react';
import { useEnsName, useEnsAddress } from 'wagmi';
import { Box } from '../../common/Box';
import { Text } from '../../common/Text';
import { Button } from '../../elements';

export type AddressProps = {
  /**
   * The address to display
   */
  value: string;
  /**
   * Whether the address can be copied or not
   */
  copiable?: boolean;
  /**
   * Shorten the address if it does not resolve to an ENS name
   */
  shortened?: boolean;
  /**
   * Set to true for ENS lookup
   */
  ens?: boolean;
};

/**
 * A component to display an address
 */
export const Address = ({
  value,
  copiable = false,
  shortened = false,
  ens = false,
}: AddressProps) => {
  const [displayAddress, setDisplayAddress] = useState('');
  const [copyableAddress, setCopyableAddress] = useState('');
  /**
   * Needs error handling for when the address is not valid
   */
  //   const [error, setError] = useState<undefined | string>(undefined);
  const [copied, setCopied] = useState<boolean>(false);

  const { data: dataAddress } = useEnsAddress({
    name: value,
    chainId: 1,
  });

  /**
   * Needs error handling for useEnsName returns error in console
   */
  const { data: dataName } = useEnsName({
    address: value,
    chainId: 1,
  });

  useEffect(() => {
    if (ens && value) {
      setCopyableAddress(dataName || value);
      if (shortened) {
        setDisplayAddress(shorten(dataName || value));
      } else {
        setDisplayAddress(dataName || value);
      }
    } else {
      setCopyableAddress(dataAddress || value);
      if (shortened) {
        setDisplayAddress(shorten(dataAddress || value));
      } else {
        setDisplayAddress(dataAddress || value);
      }
    }
  }, [ens, value, shortened, dataAddress, dataName]);

  const shorten = useCallback((val: string) => {
    if (val.length > 8) {
      return `${val.substring(0, 2)}...${val.substring(
        val.length - 6
      )}`.toLowerCase();
    } else return val.toLowerCase();
  }, []);

  const handleCopy = useCallback((val: string) => {
    if (val) {
      navigator.clipboard.writeText(val);
      setCopied(true);
    }
  }, []);

  return (
    <Box
      css={{
        display: 'flex',
        m: 0,
        position: 'block',
      }}
    >
      <Text css={{ p: 8 }}>{displayAddress}</Text>
      {copiable && (
        <>
          {!copied ? (
            <Button onClick={() => handleCopy(copyableAddress)}>copy</Button>
          ) : (
            <Text css={{ p: 8 }}>copied</Text>
          )}
        </>
      )}
    </Box>
  );
};
