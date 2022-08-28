// eslint-disable-next-line import/no-anonymous-default-export
export default {
  jsx: `import { useNFTMetadata } from '@web3-ui/components'

function App() {
  const { data, error, isLoading } = useNFTMetadata({
    blockchain: Blockchain;
    contractAddress: string;
    tokenId: string;
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
