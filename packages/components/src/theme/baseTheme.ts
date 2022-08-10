import type * as Stitches from '@stitches/react';
import { defaultThemeMap as defaultStitchesThemeMap } from '@stitches/react';

import { defaultColors } from './defaultColors';
import { brandColors } from './colors';

const spacing = {
  0: '0px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

const defaultTokens = {
  colors: {
    ...defaultColors,
    ...brandColors,
  },
  fonts: {
    untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
    sans: "ui-sans-serif, system-ui, -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
    serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    xs: 1,
    sm: 1.25,
    base: 1.5,
    md: 1.5,
    lg: 1.75,
    xl: 1.75,
    '2xl': 2,
    '3xl': 2.25,
    '4xl': 2.5,
    '5xl': 1,
    '6xl': 1,
    '7xl': 1,
    '8xl': 1,
    '9xl': 1,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  space: {
    ...spacing,
  },
  sizes: {
    '100vh': '100vh',
    '90vh': '90vh',
    '80vh': '80vh',
    '70vh': '70vh',
    '60vh': '60vh',
    '50vh': '50vh',
    '40vh': '40vh',
    '30vh': '30vh',
    '20vh': '20vh',
    '10vh': '10vh',
    '100vw': '100vw',
    '90vw': '90vw',
    '80vw': '80vw',
    '70vw': '70vw',
    '60vw': '60vw',
    '50vw': '50vw',
    '40vw': '40vw',
    '30vw': '30vw',
    '20vw': '20vw',
    '10vw': '10vw',
    ...spacing,
  },
  radii: {
    none: '0px',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '50%',
    pill: '9999px',
  },
  zIndices: {
    10: '100',
    20: '200',
    30: '300',
    40: '400',
    50: '500',
    60: '600',
    70: '700',
    80: '800',
    90: '900',
    100: '1000',
  },
  borderWidths: {
    light: '1px',
    normal: '2px',
    bold: '3px',
    extrabold: '4px',
    black: '5px',
  },
  borderStyles: {},
  shadows: {},
  transitions: {},
};

const defaultMedia = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
};

const defaultUtils = {
  // Abbreviated padding and margin properties
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

const defaultThemeMap = {
  ...defaultStitchesThemeMap,
};

export const baseTheme = {
  prefix: 'web3ui',
  theme: defaultTokens,
  media: defaultMedia,
  utils: defaultUtils,
  themeMap: defaultThemeMap,
};
