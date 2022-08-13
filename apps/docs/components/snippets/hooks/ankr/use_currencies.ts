// eslint-disable-next-line import/no-anonymous-default-export
export default {
  jsx: `import { useCurrencies } from '@web3-ui/components'

function App() {
  const { data, error, isLoading } = useCurrencies({
    blockchain: Blockchain;
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
