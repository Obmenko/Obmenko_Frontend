/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx';
import React, {
  FC, useCallback, useEffect,
} from 'react';
import { useHistory } from 'react-router';
import classes from './AsideMenu.module.scss';
import CrossGreyImg from '@/assets/img/cross_grey.svg';
import AccountImg from '@/assets/img/account.png';
import { ROUTES } from '@/const/routes';

type IProps = {
  onClose: { (): void }
}

const AsideMenu: FC<IProps> = ({
  onClose,
}) => {
  useEffect(() => {
    const buffer = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = buffer;
    };
  }, []);

  const history = useHistory();

  const memoGoTo = useCallback(goTo, [history, onClose]);

  return (
    <div className={clsx(classes['root-wrapper'], 'animate__animated', 'animate__fadeInRight', 'animate__faster')}>
      <div className={classes.head}>
        <div>
          <img src={AccountImg} alt="" />
          <span>Войти</span>
        </div>
        <img src={CrossGreyImg} alt="" onClick={onClose} />
      </div>
      <div className={classes.nav}>
        <span onClick={memoGoTo(ROUTES.HOME)}>Главная</span>
        <span onClick={memoGoTo(ROUTES.RULES)}>Правила сайта</span>
        <span onClick={memoGoTo(ROUTES.FAQ)}>FAQ</span>
        {/* <span onClick={memoGoTo('/')}>Отзывы</span> */}
        {/* <span onClick={memoGoTo('/')}>Контакты</span> */}
      </div>
    </div>
  );

  function goTo(path: string): { (): void } {
    return () => {
      history.push(path);
      onClose();
    };
  }
};

export default AsideMenu;
