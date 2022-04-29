import { CopyIcon, CheckIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { styled } from '@stitches/react';

export interface AddressProps {
  /**
   * The address to display
   */
  value: string;
  /**
   * Provider, required for ENS lookup
   */
  provider?: ethers.providers.Web3Provider;
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
  /**
   * className for the container
   */
  className?: string;
}

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const ErrorMessage = styled('p', {
  color: 'red',
  marginTop: '4px',
});

/**
 * A component to display an address
 */
export const Address: React.FC<AddressProps> = ({
  value,
  provider,
  copiable = false,
  shortened = false,
  ens = false,
  className,
}) => {
  const [error, setError] = useState<undefined | string>(undefined);
  const [copied, setCopied] = useState<boolean>(false);
  let feedbackTimeOut: ReturnType<typeof setTimeout>;
  let displayAddress: string = value || '';
  const [ensName, setEnsName] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (value) {
      if (value.includes('.eth') || value === '' || value === 'Not connected')
        return;
    }
    async function fetchEns() {
      if (ens && value && provider) {
        try {
          const ensResponse = await provider?.lookupAddress(value);
          setEnsName(ensResponse || undefined);
          return;
        } catch (error) {
          return;
        }
      }
    }
    fetchEns();
  }, [value, provider]);

  if (shortened && value) {
    if (value.includes('.eth') || value === '' || value === 'Not connected') {
      displayAddress = value;
    } else {
      displayAddress = `${value.substring(0, 4)}...${value.substring(
        value.length - 4
      )}`.toLowerCase();
    }
  }

  const handleClick = async (): Promise<void> => {
    if (copiable && value) {
      try {
        await navigator.clipboard.writeText(value);
        setError(undefined);
        setCopied(true);

        feedbackTimeOut = setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (error) {
        setError(error as string);
      }
    }
  };

  useEffect(() => {
    return () => clearTimeout(feedbackTimeOut);
  }, []);

  return (
    <>
      <Container
        data-testid="address-container"
        className={`Web3UI_Address__Container ${className}`}
        style={{ cursor: copiable ? 'pointer' : 'initial' }}
        onClick={handleClick}
      >
        <p>{ensName || displayAddress}</p>
        {copiable && copied ? (
          <CheckIcon marginLeft="auto" color="green.500" />
        ) : (
          <CopyIcon marginLeft="auto" color="gray.300" />
        )}
      </Container>
      <ErrorMessage className="Web3UI_Address__Error">{error}</ErrorMessage>
    </>
  );
};
