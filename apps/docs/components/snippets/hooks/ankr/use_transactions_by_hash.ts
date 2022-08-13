// eslint-disable-next-line import/no-anonymous-default-export
export default {
  jsx: `import { useTransactionsByHash } from '@web3-ui/components'

function App() {
  const { data, error, isLoading } = useTransactionsByHash({
    blockchain?: Blockchain | (Blockchain)[];
    transactionHash: string;
    includeLogs?: boolean;
    decodeLogs?: boolean;
    decodeTxData?: boolean;
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
