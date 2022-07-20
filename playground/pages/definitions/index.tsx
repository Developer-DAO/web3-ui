import type { NextPage } from 'next';
import {
  ColorPalette,
  FontSize,
  FontWeight,
  BorderRadius,
} from '../../components/definitions';

const DefinitionsPage: NextPage = () => {
  return (
    <main>
      <ColorPalette />
      <FontSize />
      <FontWeight />
      <BorderRadius />
    </main>
  );
};

export default DefinitionsPage;
