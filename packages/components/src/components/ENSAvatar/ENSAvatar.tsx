import { FC } from 'react';
import { useEnsAvatar } from 'wagmi';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { Avatar } from '../../elements';

type ENSAvatarProps = {
  address: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const ENSAvatar: FC<ENSAvatarProps> = ({ address, size = 'xl' }) => {
  const ensAvatar = useEnsAvatar({
    addressOrName: address,
  });

  const { data, isError, isLoading } = ensAvatar;
  if (isLoading) return null;

  return (
    <div>
      {isError || !data ? (
        <Jazzicon
          seed={jsNumberForAddress(address)}
          diameter={{ xs: 24, sm: 40, md: 56, lg: 80, xl: 96 }[size]}
        />
      ) : (
        <Avatar shape="circle" size={size} src={data} alt={address} />
      )}
    </div>
  );
};
