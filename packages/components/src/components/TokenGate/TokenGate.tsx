import React, { ReactNode } from 'react';
export interface TokenGateProps {
  /**
   * The provider or signer to fetch the address from the ens
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
export const TokenGate: React.FC<TokenGateProps> = ({
  walletBalance,
  requiredQuantity = 1,
  children,
  deniedMessage,
}) => {
  console.log(walletBalance);

  // return children within simple container(className optional)
  return (
    // verify token quantity in wallet is greater than required amount(optional, defaults to 1)
    walletBalance >= requiredQuantity ? (
      <>{children}</>
    ) : deniedMessage ? (
      <>{deniedMessage}</>
    ) : null
  );
};
