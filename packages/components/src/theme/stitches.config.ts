import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { baseTheme } from './baseTheme';

export const stitches = createStitches({
  ...baseTheme,
});

export const createTheme = stitches.createTheme;
export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const keyframes = stitches.keyframes;
export const getCssText = stitches.getCssText;
export const theme = stitches.theme;
export const config = stitches.config;

export type VariantProps<T> = Stitches.VariantProps<T>;
export type CSS = Stitches.CSS<typeof config>;

export type StitchesTheme = typeof theme;
