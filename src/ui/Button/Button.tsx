/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

export enum ButtonModeEnum {
  TRANSPARENT = 'transparent',
  DEFAULT = 'default'
}

export enum ButtonSizeEnum {
  BIG = 'big'
}

export enum ButtonColorEnum {
  GREEN = 'green',
  RED = 'red'
}

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSizeEnum;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  mode?: ButtonModeEnum,
  color?: ButtonColorEnum,
}

const Button: FC<PropsType> = ({
  children,
  className,
  type = 'button',
  mode = ButtonModeEnum.DEFAULT,
  color,
  size,
  ...rest
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    {...rest}
    className={clsx(
      classes.root,
      classes[mode],
      color && classes[color],
      size && classes[size],
      className,
    )}
  >
    {children}
  </button>
);

export default Button;
