import React from 'react';
import classnames from 'classnames';
import './example.scss';

export interface ExampleProps {
  active?: boolean | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
}

export const Example: React.FC<ExampleProps> = ({
  active,
  disabled,
  className,
  children,
  ...rest
}) => {
  const classes = classnames(
    'Example',
    active && `Example--active`,
    disabled && `Example--disabled`,
    className
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
