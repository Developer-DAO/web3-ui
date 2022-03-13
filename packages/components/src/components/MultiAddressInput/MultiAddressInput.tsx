import {
  Box,
  Textarea,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  Spinner,
  VStack,
  TextareaProps,
} from '@chakra-ui/react';
import React, { ChangeEvent, FC, useState } from 'react';
import { ethers } from 'ethers';

export type Entry = {
  address: string | null;
  ens: string | null;
  input: string;
  isValid: boolean;
};

export interface MultiAddressInputProps {
  ensProvider: ethers.providers.EnsProvider;
  value: Entry[];
  onChange: (entries: Entry[]) => void;
  placeholder?: string;
  inputProps?: TextareaProps;
}

/*
 * Original authors: Hans and Bliss from the Moonshot Collective
 * Original source code: https://github.com/moonshotcollective/pay.party/blob/develop/packages/react-app/src/routes/create/components/MultiAddressInput.jsx
 * @dev This component lets you input multiple addresses and ENS names.
 */
export const MultiAddressInput: FC<MultiAddressInputProps> = ({
  ensProvider,
  value,
  onChange,
  placeholder = 'Enter ENS names or addresses here',
  inputProps,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const addressBadge = (entry: Entry) => {
    return (
      <Box p="1" key={entry.input}>
        <HStack spacing={4}>
          <Tag size="md" key="md" borderRadius="full" variant="solid">
            <TagLabel color={entry.isValid ? 'default' : 'red.300'}>
              {entry.input}
            </TagLabel>
            <TagCloseButton
              onClick={() => {
                onChange(value.filter((obj) => obj.input !== entry.input));
              }}
            />
          </Tag>
        </HStack>
      </Box>
    );
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const lastInput = e.target.value[e.target.value.length - 1];
    if (lastInput === ',' || lastInput === '\n') {
      const splitInput = e.currentTarget.value
        .split(/[ ,\n]+/)
        .filter((c: string) => c !== '')
        .map(async (uin: string) => {
          const val: Entry = {
            input: uin,
            isValid: false,
            address: null,
            ens: null,
          };
          try {
            if (uin.endsWith('.eth') || uin.endsWith('.xyz')) {
              val.address = await ensProvider.resolveName(uin);
              val.ens = uin;
            } else {
              val.ens = await ensProvider.lookupAddress(uin);
              val.address = uin;
            }
            val.isValid = true;
          } catch {
            val.isValid = false;
            console.error('Bad Address: ' + uin);
          }
          return val;
        });
      setIsLoading(true);
      Promise.all(splitInput)
        .then((d) => {
          onChange([...value, ...d]);
        })
        .finally(() => setIsLoading(false));
      e.target.value = '';
    }
  };

  return (
    <VStack>
      <Wrap>{value && value.map(addressBadge)}</Wrap>
      <Textarea
        rows={1}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={isLoading}
        {...inputProps}
      />
      {isLoading && <Spinner size="sm" />}
    </VStack>
  );
};
