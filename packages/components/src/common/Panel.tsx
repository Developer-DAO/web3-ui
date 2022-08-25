import { styled, css } from '../theme/stitches.config';

export const panelStyles = css({
  backgroundColor: '$panel',
  borderRadius: '7px',
  boxShadow: '5px 5px 50px 5px rgba(0,0,0,0.1)',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  marginTop: '0.5rem',
});

export const Panel = styled('div', panelStyles);
