/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  size?: 'big'
}

const Button: FC<PropsType> = ({
  children,
  className,
  type = 'button',
  size,
  ...rest
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={clsx(classes.root, className, size === 'big' && classes.big)}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
