import React from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { CSS, styled } from '../../theme/stitches.config';

import { itemCss, menuCss, panelStyles } from '../../common';
import { Button } from '../Button';

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownTrigger = DropdownMenuPrimitive.Trigger;

const StyledContent = styled(
  DropdownMenuPrimitive.Content,
  menuCss,
  panelStyles
);

type DropdownMenuContentPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Content
>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & {
  css?: CSS;
};

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DropdownMenuContentProps
>((props, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <StyledContent {...props} ref={forwardedRef} />
  </DropdownMenuPrimitive.Portal>
));
DropdownContent.displayName = 'DropdownMenuContent';

const DropdownItem = styled(DropdownMenuPrimitive.Item, itemCss);
const DropdownGroup = styled(DropdownMenuPrimitive.Group, {});

export type DropdownProps = {
  label?: string;
  placeHolder?: string;
  items: string[];
  onSelect: (value: unknown) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeHolder,
  items,
  onSelect,
}) => {
  return (
    <DropdownMenu>
      <DropdownTrigger asChild>
        <Button>{label ? label : placeHolder}</Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownGroup>
          {items.map((item) => (
            <DropdownItem key={item} onClick={() => onSelect(item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownGroup>
      </DropdownContent>
    </DropdownMenu>
  );
};
