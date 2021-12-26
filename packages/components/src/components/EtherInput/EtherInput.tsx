import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  Button,
  InputGroupProps,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ethers } from 'ethers';

export interface EtherInputProps {
  /**
   * The value to be converted
   */
  value: string;
}

// A number input component with built-in conversion feature from wei <-> ether
export const EtherInput: React.FC<EtherInputProps & InputGroupProps> = ({ value, ...props }) => {
  const [currentUnit, setCurrentUnit] = useState('ether');
  const [targetUnit, setTargetUnit] = useState('wei');
  const [val, setVal] = useState(value);

  // The convert() function converts the current value into the unit selected by the user
  const convert = () => {
    if (targetUnit === 'wei') {
      setCurrentUnit('wei');
      setTargetUnit('ether');
      setVal(ethers.utils.parseEther(val).toString());
    } else if (targetUnit === 'ether') {
      setCurrentUnit('ether');
      setTargetUnit('wei');
      let wei = ethers.BigNumber.from(val);
      setVal(ethers.utils.formatEther(wei));
    }
  };

  return (
    <InputGroup {...props}>
      <InputLeftAddon children={currentUnit} />
      <Input placeholder='Enter value' value={val} onChange={(e) => setVal(e.target.value)} />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={convert}>
          To {targetUnit}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
