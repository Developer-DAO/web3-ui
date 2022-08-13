import type { NextPage } from 'next';
import { CopyBlock, dracula } from 'react-code-blocks';
import { custom_theme } from '../../components/snippets/theme';

const CustomizeThemePage: NextPage = () => {
  return (
    <div>
      <h1 className="my-2 text-center font-bold text-2xl text-gray-700 uppercase">
        customize theme
      </h1>
      <CopyBlock
        text={custom_theme['jsx']}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

export default CustomizeThemePage;
