import { FC } from 'react';
import { useEnsAvatar } from 'wagmi';

type ENSAvatarProps = {
  address: string;
  size?: string;
  shape?: string;
};

export const ENSAvatar: FC<ENSAvatarProps> = ({ address, size, shape }) => {
  const { data, isError, isLoading, error } = useEnsAvatar({
    addressOrName: 'moxey.eth',
  });

  if (isLoading) return <div>Fetching avatar…</div>;
  if (isError) return <div>Error fetching avatar: {error?.message}</div>;

  return <div>data: {data}</div>;
};
