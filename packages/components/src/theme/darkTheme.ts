import { createTheme } from './stitches.config';

import {
  blueDark,
  cyanDark,
  grayDark,
  greenDark,
  orangeDark,
  pinkDark,
  purpleDark,
  redDark,
  yellowDark,
} from './colors/base';

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...blueDark,
    ...cyanDark,
    ...grayDark,
    ...greenDark,
    ...orangeDark,
    ...pinkDark,
    ...purpleDark,
    ...redDark,
    ...yellowDark,

    // Semantic colors
    hiContrast: '$gray900',
    loContrast: '$gray50',
    background: '#000',

    // canvas: 'hsl(0 0% 15%)',
    panel: '$gray400',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
  },
});
