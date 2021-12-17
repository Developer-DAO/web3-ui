import React from 'react';
import Davatar from '@davatar/react';

export interface AvatarProps {
  /**
   * The resolved address
   */
  address: string;
  /**
   * The size of the avatar
   */
  size?: number;
}

/**
 * An image component that is used to display the avatar of the user's ens name. You can specify the size -- default is 50px.
 */
export const Avatar: React.FC<AvatarProps> = ({ address, size = 50 }) => {
  return <Davatar size={size} address={address} />;
};
