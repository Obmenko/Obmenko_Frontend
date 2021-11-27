/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React from 'react';
import clsx from 'clsx';
import classes from './EqualSideBlock.module.scss';

type IProps = {
  wrapperClassName?: string;
  className?: string
  onClick?: { (): void }
}

const EqualSideBlock: React.FC<IProps> = ({
  wrapperClassName,
  className,
  children,
  onClick,
}) => (
  <div className={clsx(classes.wrapper, wrapperClassName)} onClick={onClick}>
    <div className={clsx(classes.root, className)}>
      {children}
    </div>
  </div>
);

export default EqualSideBlock;
