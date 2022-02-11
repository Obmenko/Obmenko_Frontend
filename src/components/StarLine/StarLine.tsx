/* eslint-disable no-multi-assign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import React, { FC, useMemo } from 'react';

import classes from './StarLine.module.scss';
import StarEmptyIcon from '@/assets/img/star_empty.svg';
import StarHalfIcon from '@/assets/img/star_half.svg';
import StarFullIcon from '@/assets/img/star_full.svg';
import { generateNumArrayBySize } from '@/utils/functions/generator';

interface IProps {
  value: number;
  maxValue: number;
  amount?: number
}

const StarLine: FC<IProps> = ({
  value,
  maxValue,
  amount = 5,
}) => {
  const memoArray = useMemo(() => {
    let data = generateNumArrayBySize(5);
    const part = maxValue / amount;
    // console.log((value - 2 * part) / part);
    data = data.map(
      (element) => {
        console.log((value - element * part) / part);
        return ((value - element * part) / part <= 0 ? 0 : ((value - element * part) / part >= 1 ? 1 : 0.5));
      },
    );
    return data;
  }, [amount, maxValue, value]);

  return (
    <div className={classes.root}>
      {
        memoArray.map((element, elementIndex) => (element === 0 ? (
          <img key={`StarLine__${elementIndex}`} src={StarEmptyIcon} alt="" />
        ) : (element === 1 ? (
          <img key={`StarLine__${elementIndex}`} src={StarFullIcon} alt="" />
        ) : (
          <img key={`StarLine__${elementIndex}`} src={StarHalfIcon} alt="" />
        ))))
      }
    </div>
  );
};

export default StarLine;
