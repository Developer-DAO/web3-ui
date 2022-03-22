import React from 'react';
import { CHAIN_ID_TO_NETWORK } from '@web3-ui/hooks';
import { Select, SelectProps } from '@chakra-ui/react';
import { useChainId } from '@web3-ui/hooks/src/hooks';
import { switchNetwork } from '@web3-ui/hooks/src/utils';

export interface NetworkSwitchProps {
  /**
   * The chain IDs (in base 10) that the component should display as options
   */
  networks: number[];
}

/**
 * A component to switch between a number of specified networks.
 */
export const NetworkSwitch: React.FC<NetworkSwitchProps & SelectProps> = ({
  networks,
  ...props
}) => {
  const chainId = useChainId();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const networkNum = Number(e.target.value);
    switchNetwork(networkNum);
  };
  return (
    <Select {...props} value={Number(chainId)} onChange={handleChange}>
      {networks.map((network) => (
        <option value={network}>{CHAIN_ID_TO_NETWORK[network]}</option>
      ))}
    </Select>
  );
};
