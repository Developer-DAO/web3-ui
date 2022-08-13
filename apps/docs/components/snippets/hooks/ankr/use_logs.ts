// eslint-disable-next-line import/no-anonymous-default-export
export default {
  jsx: `import { useLogs } from '@web3-ui/components'

function App() {
  const { data, error, isLoading } = useLogs({
    blockchain: Blockchain | (Blockchain)[];
    fromBlock?: number | "latest" | "earliest";
    toBlock?: number | "latest" | "earliest";
    fromTimestamp?: number | "latest" | "earliest";
    toTimestamp?: number | "latest" | "earliest";
    address?: string | string[];
    topics?: (string | string[])[];
    pageToken?: string;
    pageSize?: number;
    descOrder?: boolean;
    decodeLogs?: boolean;
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
