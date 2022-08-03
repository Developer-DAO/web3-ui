import { FC } from 'react';
import { useAccount, useBalance } from 'wagmi';

import { Text } from '../../common';

type UseBalanceProps = NonNullable<Parameters<typeof useBalance>[0]>;
export type TokenBalanceProps = Pick<
  UseBalanceProps,
  'addressOrName' | 'chainId' | 'token' | 'formatUnits' | 'watch' | 'suspense'
>;

export const TokenBalance: FC<TokenBalanceProps> = ({
  addressOrName,
  ...useBalanceProps
}) => {
  const { address } = useAccount();

  const { data, isError, isLoading } = useBalance({
    addressOrName: addressOrName ?? address,
    ...useBalanceProps,
  });

  const noAddressParameter = !addressOrName && !address;
  if (noAddressParameter) return <Text>Connect wallet</Text>;
  if (isLoading) return <Text>Fetching balance...</Text>;
  if (isError) return <Text>Error fetching balance</Text>;

  return (
    <Text>
      {data?.formatted} {data?.symbol}
    </Text>
  );
};
