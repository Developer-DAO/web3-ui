import { styled, VariantProps } from '@stitches/react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import React from 'react';
import { Box } from '../../common';

export const StyledAvatar = styled(AvatarPrimitive.Root, {
  // reset
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  boxSizing: 'border-box',
  display: 'flex',
  flexShrink: 0,
  position: 'relative',
  border: 'none',
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  color: '$hiContrast',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
  },

  variants: {
    size: {
      '1': {
        width: '$web3ui$space$3',
        height: '$web3ui$space$3',
      },
      '2': {
        width: '$web3ui$space$5',
        height: '$web3ui$space$5',
      },
      '3': {
        width: '$web3ui$space$6',
        height: '$web3ui$space$6',
      },
      '4': {
        width: '$web3ui$space$7',
        height: '$web3ui$space$7',
      },
      '5': {
        width: '$web3ui$space$8',
        height: '$web3ui$space$8',
      },
      '6': {
        width: '$web3ui$space$9',
        height: '$web3ui$space$9',
      },
    },
    shape: {
      square: {
        borderRadius: '$2',
      },
      circle: {
        borderRadius: '50%',
      },
    },
  },
});

export const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  display: 'flex',
  objectFit: 'cover',
  boxSizing: 'border-box',
  height: '100%',
  verticalAlign: 'middle',
  width: '100%',
});

type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    alt?: string;
    src?: string;
  };

export const Avatar = (props: AvatarOwnProps) => (
  <Box
    css={{
      position: 'relative',
      height: 'fit-content',
      width: 'fit-content',
    }}
  >
    <StyledAvatar {...props} size={props.size} shape={props.shape}>
      <StyledAvatarImage alt={props.alt} src={props.src} />
    </StyledAvatar>
  </Box>
);
