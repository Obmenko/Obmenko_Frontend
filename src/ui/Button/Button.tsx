/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

export enum ButtonModeEnum {
  TRANSPARENT = 'transparent',
  TRANSPARENT_RECT = 'transparent-rect',
  DEFAULT = 'default'
}

export enum ButtonColorEnum {
  GREEN = 'green',
  RED = 'red'
}
interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  mode?: ButtonModeEnum
  color?: ButtonColorEnum
}

const Button: FC<PropsType> = ({
  children,
  className,
  type = 'button',
  mode = ButtonModeEnum.DEFAULT,
  color = ButtonColorEnum.GREEN,
  ...rest
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={clsx(classes.root, className, classes[mode], classes[color])}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
