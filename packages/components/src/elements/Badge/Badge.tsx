import { styled } from '../../theme/stitches.config';

export const Badge = styled('span', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  justifyContent: 'center',
  lineHeight: '1',
  verticalAlign: 'middle',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&:disabled': {
    backgroundColor: '$slate3',
    pointerEvents: 'none',
    color: '$slate8',
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  // Custom
  backgroundColor: '$slate3',
  borderRadius: '$pill',
  color: '$slate11',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',
  paddingLeft: '$2',
  paddingRight: '$2',
  paddingTop: '$1',
  paddingBottom: '$1',

  variants: {
    variant: {
      primary: {
        color: '$primary700',
        backgroundColor: '$primary100',
      },
      secondary: {
        color: '$secondary700',
        backgroundColor: '$secondary100',
      },
      success: {
        color: '$success700',
        backgroundColor: '$success100',
      },
      danger: {
        color: '$danger700',
        backgroundColor: '$danger100',
      },
      warning: {
        color: '$warning700',
        backgroundColor: '$warning100',
      },
      info: {
        color: '$info700',
        backgroundColor: '$info100',
      },
      neutral: {
        color: '$neutral700',
        backgroundColor: '$neutral100',
      },
      blue: {
        color: '$blue700',
        backgroundColor: '$blue100',
      },
      cyan: {
        color: '$cyan700',
        backgroundColor: '$cyan100',
      },
      gray: {
        color: '$gray700',
        backgroundColor: '$gray100',
      },
      green: {
        color: '$green700',
        backgroundColor: '$green100',
      },
      orange: {
        color: '$orange700',
        backgroundColor: '$orange100',
      },
      pink: {
        color: '$pink700',
        backgroundColor: '$pink100',
      },
      purple: {
        color: '$purple700',
        backgroundColor: '$purple100',
      },
      red: {
        color: '$red700',
        backgroundColor: '$red100',
      },
      yellow: {
        color: '$yellow700',
        backgroundColor: '$yellow100',
      },
    },
  },
});
