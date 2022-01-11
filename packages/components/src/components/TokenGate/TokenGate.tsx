import React, { ReactNode } from 'react';
export interface TokenGateProps {
  /**
   * The balance of the required token held in wallet
   */
  walletBalance: number;
  /**
   * The token quantity required to access child component. Default=1
   */
  requiredQuantity?: number;
  /**
   * Child nodes
   */
  children: ReactNode;
  /**
   * Optional message if access denied
   */
  deniedMessage?: ReactNode;
}

/**
 * A 'token gate' that renders some content depending on whether the user has the required quantity of a token or not.
 */
export const TokenGate: React.FC<TokenGateProps> = ({
  walletBalance,
  requiredQuantity = 1,
  children,
  deniedMessage,
}) => {
  // return children within simple container
  return (
    // verify token quantity in wallet is greater than required amount(optional, defaults to 1)
    walletBalance >= requiredQuantity ? (
      <>{children}</>
    ) : deniedMessage ? (
      <>{deniedMessage}</>
    ) : null
  );
};
