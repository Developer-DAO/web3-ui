import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
export type { VariantProps } from '@stitches/react';
export type CSS = Stitches.CSS<typeof config>;

import { baseTheme } from './baseTheme';
// import { defaultColors } from './defaultColors';
// import { darkTheme } from './darkTheme';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  ...baseTheme,
  theme: {
    ...baseTheme.theme,
  },
});
