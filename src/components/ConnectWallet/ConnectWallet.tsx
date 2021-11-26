import { Button, ButtonProps } from '@chakra-ui/button';
import React from 'react';
import { useWeb3 } from '../../hooks';
import { getTruncatedAddress } from '../../utils';

export interface ConnectWalletProps extends ButtonProps {
  /**
   * @dev Whether you want to show the connected wallet address on the button or not.
   * @type boolean
   * @default true
   */
  showAddress?: boolean;
}

/**
 * @dev A button that lets you connect to a compatible ethereum wallet.
 */
export const ConnectWallet: React.FC<ConnectWalletProps> = ({
  showAddress = true,
  ...spreadProps
}) => {
  const { connectWallet, disconnectWallet, connection } = useWeb3();

  const disconnectText = showAddress
    ? `Disconnect (${getTruncatedAddress(connection.userAddress as string)})`
    : 'Disconnect';

  return (
    <>
      <Button onClick={connection.userAddress ? disconnectWallet : connectWallet} {...spreadProps}>
        {connection.userAddress ? disconnectText : 'Connect Wallet'}
      </Button>
    </>
  );
};
