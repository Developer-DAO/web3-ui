import type { NextPage } from 'next';

import { CopyBlock, dracula } from 'react-code-blocks';

import {
  install,
  includePackage,
  provider,
  theme,
} from '../../components/snippets/getting-started';

const GettingStartedPage: NextPage = () => {
  return (
    <div>
      <h1>Getting Started</h1>
      <h1>Install Package</h1>
      <CopyBlock
        text={install['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h1>Include Package</h1>

      <CopyBlock
        text={includePackage['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h1>Wrap App with Web3uiProvider</h1>

      <CopyBlock
        text={provider['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />

      <h1>Customize Theme</h1>

      <CopyBlock
        text={theme['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

export default GettingStartedPage;
