// eslint-disable-next-line import/no-anonymous-default-export
export default {
  jsx: `import { useAccountBalance } from '@web3-ui/components'

function App() {
  const { data, error, isLoading } = useAccountBalance({
      blockchain?: Blockchain | (Blockchain)[];
      walletAddress: "";
      pageToken?: "";
      pageSize?: number;
  })

  if (isLoading) return <div>Fetching balance…</div>
  if (error) return <div>Error fetching balance</div>
  return (
    <div>
      Balance: {data}
    </div>
  )
}
    `,
};
