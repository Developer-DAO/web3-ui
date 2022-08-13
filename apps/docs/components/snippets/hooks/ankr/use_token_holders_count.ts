// eslint-disable-next-line import/no-anonymous-default-export
export default {
  jsx: `import { useTokenHoldersCount } from '@web3-ui/components'

function App() {
  const { data, error, isLoading } = useTokenHoldersCount({
    blockchain: Blockchain;
    contractAddress: string;
    pageToken?: string;
    pageSize?: number;
  })

  if (isLoading) return <div>Fetching...</div>
  if (error) return <div>Error fetching</div>
  return (
    <div>
     
    </div>
  )
}
    `,
};
