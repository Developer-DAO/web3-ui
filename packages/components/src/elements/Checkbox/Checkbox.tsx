import React from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { CSS, styled, VariantProps } from '../../theme/stitches.config';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  alignItems: 'center',
  appearance: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  color: '$primary700',
  boxShadow: 'inset 0 0 0 1px $colors$gray700',
  overflow: 'hidden',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$gray800',
    },
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$primary700',
    boxShadow:
      'inset 0 0 0 1px $colors$primary500, 0 0 0 1px $colors$primary500',
  },

  variants: {
    size: {
      '1': {
        width: '$5',
        height: '$5',
        borderRadius: '$DEFAULT',
      },
      '2': {
        width: '$7',
        height: '$7',
        borderRadius: '$DEFAULT',
      },
    },
    color: {
      primary: {
        color: '$primary600',
        '&:focus': {
          outline: 'none',
          borderColor: '$primary700',
          boxShadow:
            'inset 0 0 0 1px $colors$primary500, 0 0 0 1px $colors$primary500',
        },
      },
      secondary: {
        color: '$secondary600',
        '&:focus': {
          outline: 'none',
          borderColor: '$secondary700',
          boxShadow:
            'inset 0 0 0 1px $colors$secondary500, 0 0 0 1px $colors$secondary500',
        },
      },
      success: {
        color: '$success600',
        '&:focus': {
          outline: 'none',
          borderColor: '$success700',
          boxShadow:
            'inset 0 0 0 1px $colors$success500, 0 0 0 1px $colors$success500',
        },
      },
      warning: {
        color: '$warning600',
        '&:focus': {
          outline: 'none',
          borderColor: '$warning700',
          boxShadow:
            'inset 0 0 0 1px $colors$warning500, 0 0 0 1px $colors$warning500',
        },
      },
      danger: {
        color: '$danger600',
        '&:focus': {
          outline: 'none',
          borderColor: '$danger700',
          boxShadow:
            'inset 0 0 0 1px $colors$danger500, 0 0 0 1px $colors$danger500',
        },
      },
      info: {
        color: '$info600',
        '&:focus': {
          outline: 'none',
          borderColor: '$info700',
          boxShadow:
            'inset 0 0 0 1px $colors$info500, 0 0 0 1px $colors$info500',
        },
      },
      neutral: {
        color: '$neutral600',
        '&:focus': {
          outline: 'none',
          borderColor: '$neutral700',
          boxShadow:
            'inset 0 0 0 1px $colors$neutral500, 0 0 0 1px $colors$neutral500',
        },
      },
      blue: {
        color: '$blue600',
        '&:focus': {
          outline: 'none',
          borderColor: '$blue700',
          boxShadow:
            'inset 0 0 0 1px $colors$blue500, 0 0 0 1px $colors$blue500',
        },
      },
      cyan: {
        color: '$cyan600',
        '&:focus': {
          outline: 'none',
          borderColor: '$cyan700',
          boxShadow:
            'inset 0 0 0 1px $colors$cyan500, 0 0 0 1px $colors$cyan500',
        },
      },
      gray: {
        color: '$gray600',
        '&:focus': {
          outline: 'none',
          borderColor: '$gray700',
          boxShadow:
            'inset 0 0 0 1px $colors$gray500, 0 0 0 1px $colors$gray500',
        },
      },
      green: {
        color: '$green600',
        '&:focus': {
          outline: 'none',
          borderColor: '$green700',
          boxShadow:
            'inset 0 0 0 1px $colors$green500, 0 0 0 1px $colors$green500',
        },
      },
      orange: {
        color: '$orange600',
        '&:focus': {
          outline: 'none',
          borderColor: '$orange700',
          boxShadow:
            'inset 0 0 0 1px $colors$orange500, 0 0 0 1px $colors$orange500',
        },
      },
      yellow: {
        color: '$yellow600',
        '&:focus': {
          outline: 'none',
          borderColor: '$yellow700',
          boxShadow:
            'inset 0 0 0 1px $colors$yellow500, 0 0 0 1px $colors$yellow500',
        },
      },
      pink: {
        color: '$pink600',
        '&:focus': {
          outline: 'none',
          borderColor: '$pink700',
          boxShadow:
            'inset 0 0 0 1px $colors$pink500, 0 0 0 1px $colors$pink500',
        },
      },
      purple: {
        color: '$purple600',
        '&:focus': {
          outline: 'none',
          borderColor: '$purple700',
          boxShadow:
            'inset 0 0 0 1px $colors$purple500, 0 0 0 1px $colors$purple500',
        },
      },
      red: {
        color: '$red600',
        '&:focus': {
          outline: 'none',
          borderColor: '$red700',
          boxShadow: 'inset 0 0 0 1px $colors$red500, 0 0 0 1px $colors$red500',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
    color: 'primary',
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

type CheckboxPrimitiveProps = React.ComponentProps<
  typeof CheckboxPrimitive.Root
>;
type CheckboxVariants = VariantProps<typeof StyledCheckbox>;
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants & { css?: CSS };

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof StyledCheckbox>,
  CheckboxProps
>((props, forwardedRef) => (
  <StyledCheckbox {...props} ref={forwardedRef}>
    <StyledIndicator>
      <CheckIcon />
    </StyledIndicator>
  </StyledCheckbox>
));
Checkbox.displayName = 'Checkbox';
