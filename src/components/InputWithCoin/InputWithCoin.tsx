/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './InputWithCoin.module.scss';
import { CurrencyUnitEnum } from '@/types/exchange';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  coin: CurrencyUnitEnum;
}

const InputWithCoin: FC<IProps> = ({
  coin = CurrencyUnitEnum.BTC,
  ...rest
}) => (
  <div className={classes.root}>
    <div>
      <span>{coin}</span>
    </div>
    <input
      {...rest}
      className={clsx(classes.root, rest.className)}
    />
  </div>
);

export default InputWithCoin;
