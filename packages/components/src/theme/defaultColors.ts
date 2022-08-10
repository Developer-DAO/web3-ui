import {
  blue,
  cyan,
  gray,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
} from './colors/base';

export const defaultColors = {
  ...blue,
  ...cyan,
  ...gray,
  ...green,
  ...orange,
  ...pink,
  ...purple,
  ...red,
  ...yellow,

  // Semantic colors
  hiContrast: '$gray900',
  loContrast: '$gray50',
  background: '#fff',

  // canvas: 'hsl(0 0% 93%)',
  panel: 'white',
  transparentPanel: 'hsl(0 0% 0% / 97%)',
  shadowLight: 'hsl(206 22% 7% / 35%)',
  shadowDark: 'hsl(206 22% 7% / 20%)',
};
