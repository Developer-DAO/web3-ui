import type { NextPage } from 'next';
import { CopyBlock, dracula } from 'react-code-blocks';

import {
  use_account_balance,
  use_blocks,
  use_currencies,
  use_logs,
  use_nfts_by_owner,
  use_token_holders_count,
  use_token_holders,
  use_transactions_by_hash,
} from '../../components/snippets/hooks/ankr';

const AnkrHooksPage: NextPage = () => {
  return (
    <div>
      <h1 className="my-2 text-center font-bold text-2xl text-gray-700 uppercase">
        ankr hooks
      </h1>

      <h3 className="p-2 font-medium text-gray-700 text-lg">
        useAccountBalance
      </h3>
      <CopyBlock
        text={use_account_balance['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h3 className="p-2 font-medium text-gray-700 text-lg">useBlocks</h3>
      <CopyBlock
        text={use_blocks['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h3 className="p-2 font-medium text-gray-700 text-lg">useCurrency</h3>
      <CopyBlock
        text={use_currencies['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h3 className="p-2 font-medium text-gray-700 text-lg">useLogs</h3>
      <CopyBlock
        text={use_logs['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h3 className="p-2 font-medium text-gray-700 text-lg">useNFTsByOwner</h3>
      <CopyBlock
        text={use_nfts_by_owner['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h3 className="p-2 font-medium text-gray-700 text-lg">useTokenHolders</h3>
      <CopyBlock
        text={use_token_holders['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h3 className="p-2 font-medium text-gray-700 text-lg">
        useTokenHoldersCount
      </h3>
      <CopyBlock
        text={use_token_holders_count['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h3 className="p-2 font-medium text-gray-700 text-lg">
        useTransactionsByHash
      </h3>
      <CopyBlock
        text={use_transactions_by_hash['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

export default AnkrHooksPage;
