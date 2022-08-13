// eslint-disable-next-line import/no-anonymous-default-export
export default {
  jsx: `import { useBlocks } from '@web3-ui/components'

function App() {
  const { data, error, isLoading } = useBlocks({
    blockchain: Blockchain;
    fromBlock?: number | "latest" | "earliest";
    toBlock?: number | "latest" | "earliest";
    descOrder?: boolean;
    includeLogs?: boolean;
    includeTxs?: boolean;
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
