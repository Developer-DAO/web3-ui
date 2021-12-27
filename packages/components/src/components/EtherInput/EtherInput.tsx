import { Input, InputGroup, InputLeftAddon, Text, InputGroupProps } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ethers } from 'ethers';

export interface EtherInputProps {
  /**
   * Specifies the value of the EtherInput
   */
  value: string;

  /**
   * Input unit of the value entered in EtherInput
   */
  unit?: 'wei' | 'ether';

  /**
   * The label for EtherInput
   */
  label?: string;

  /**
   * Accepts a function that would be triggered when the value inside EtherInput changes.
   */
  onChange: (event: Event) => void;
}
/**
 * A number input component with built-in conversion feature from wei <-> ether
 */
export const EtherInput: React.FC<EtherInputProps & InputGroupProps> = ({
  value,
  unit = 'ether',
  label,
  onChange,
  ...props
}) => {
  // const [currentUnit, setCurrentUnit] = useState(unit);

  /**
   * The convert(unit) function converts the current value into the unit passed to the function
   * @param unit
   */

  // const convert = (unit: string) => {
  //   if (unit === 'wei') {
  //     setValue(ethers.utils.parseEther(value).toString());
  //   } else if (unit === 'ether') {
  //     let wei = ethers.BigNumber.from(value);
  //     setValue(ethers.utils.formatEther(wei));
  //   }
  // };

  return (
    <>
      {label ? <Text mb='8px'>{label}: </Text> : ''}
      <InputGroup {...props}>
        {/* <InputLeftAddon style={{ cursor: "pointer" }} children={currentUnit} onClick={() => {
          if (currentUnit === "wei") {
            convert("wei");
            setCurrentUnit("ether");
          } else {
            convert("ether");
            setCurrentUnit("wei");
          }
        }} /> */}
        <InputLeftAddon children={unit} />
        <Input placeholder={`Enter value in ${unit}`} value={value} onChange={onChange} />
      </InputGroup>
    </>
  );
};
