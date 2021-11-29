/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import React, { FC, useCallback } from 'react';
import clsx from 'clsx';
import ReactSelect from 'react-select';
import ArrowDownBlue from '@/assets/img/arrow_down_blue.svg';

import classes from './Select.module.scss';

interface PropsType {
  OptionComponent?: (data: OptionType) => JSX.Element;
  ValueComponent?: (data: OptionType) => JSX.Element;
  data: OptionType[];
  value: OptionType;
  onChange: {(value: OptionType): void}
}

type OptionType = {
  img: string;
  title: string
}

const Option: FC<OptionType> = ({
  img,
  title,
}) => (
  <p className={classes.option}>
    <img src={img} alt="" />
    {' '}
    <span>{title}</span>
  </p>
);

const CurrentOption: FC<OptionType> = ({
  img,
  title,
}) => (
  <p className={classes.option}>
    <img src={img} alt="" />
    {' '}
    <span>{title}</span>
  </p>
);

const Select: FC<PropsType> = ({
  OptionComponent,
  ValueComponent,
  data,
  value,
  onChange,
}) => {
  const memoOnChange = useCallback(handleOnChange, [onChange]);

  return (
    <ReactSelect
      options={data}
      onChange={memoOnChange}
      className={classes['root-wrapper']}
      hideSelectedOptions
      components={{
        Control: ({ innerProps, children }) => (
          <div
            {...innerProps}
            className={clsx(innerProps.className, classes.root)}
          >
            {children}
          </div>
        ),
        DropdownIndicator: ({ isFocused, innerProps }) => (
          <div
            {...innerProps}
            className={clsx(innerProps.className, classes.dropdown, isFocused && classes.isOpened)}
          >
            <img src={ArrowDownBlue} alt="" />
          </div>
        ),
        Option: ({ innerProps, data }) => (
          <div {...innerProps} className={classes.option}>
            {OptionComponent ? OptionComponent(data) : <Option {...data} />}
          </div>
        ),
        IndicatorSeparator: () => (<></>),
        ValueContainer: ({ innerProps }) => (
          <div {...innerProps}>
            {
              ValueComponent
                ? ValueComponent(value)
                : OptionComponent ? OptionComponent(value) : <CurrentOption {...value} />
            }
          </div>
        ),
      }}
    />
  );

  function handleOnChange(option: OptionType | null): void {
    if (option) onChange(option);
  }
};

export default Select;
