import { CopyIcon, CheckIcon } from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { AlertBox, Flex } from '../common';
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
}

/**
 * A component to display an address
 */
export const Address: React.FC<AddressProps> = ({
  value,
  provider,
  copiable = false,
  shortened = false,
  ens = false,
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

  const InnerContainer = styled(Flex, {
    alignItems: 'center',
    cursor: copiable ? 'pointer' : 'initial',
    gap: '0.5rem',
  });

  const IconContainer = styled('div', {
    marginLeft: 'auto',
  });

  return (
    <>
      <InnerContainer data-testid="address-container" onClick={handleClick}>
        <span>{ensName || displayAddress}</span>
        {copiable && (
          <IconContainer>
            {copied ? <CheckIcon color="Green" /> : <CopyIcon color="Gray" />}
          </IconContainer>
        )}
      </InnerContainer>
      {error && <AlertBox>{error}</AlertBox>}
    </>
  );
};
