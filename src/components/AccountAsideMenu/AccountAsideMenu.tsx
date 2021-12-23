/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import { useFormik } from 'formik';
import React, { useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import { ACCOUNT_NAVS } from '@/const/routes';
import ArrowRightBlue from '@/assets/img/arrow_right_blue.svg';
import classes from './AccountAsideMenu.module.scss';

export enum AuthModalModeEnum {
  LOGIN = 'login',
  REGISTRATION = 'registration'
}

type IProps = {
  activePath: string
}

const AccountAsideMenu: React.FC<IProps> = ({
  activePath,
}) => {
  const history = useHistory();

  const memoGo = useCallback(go, [history]);
  return (
    <div className={classes.root}>
      {
        ACCOUNT_NAVS.map((navItem) => (
          <div
            className={clsx(classes.item, activePath === navItem.path && classes.active)}
            key={navItem.path}
            onClick={memoGo(navItem.path)}
          >
            <img src={ArrowRightBlue} alt="" />
            <span>{navItem.title}</span>
          </div>
        ))
      }
    </div>
  );

  function go(path: string) {
    return () => {
      history.push(path);
    };
  }
};

export default AccountAsideMenu;
