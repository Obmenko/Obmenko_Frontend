/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  FC, useCallback, useContext,
} from 'react';

import clsx from 'clsx';
import Container from '@/utils/components/Container';
import classes from './Header.module.scss';
import AccountImg from '@/assets/img/account.png';
import BurgerImg from '@/assets/img/burger.svg';
import CONTACTS from '@/const/contacts';
import ModalContext, { ModalTypeEnum } from '@/context/modal';
import { AuthModalModeEnum } from '@/components/AuthModal/AuthModal';
// import BurgerImg from '@/assets/img/burger.svg';

type IProps = {
  setAsideMenuOpenState: { (state: boolean): void };
  isAsideMenuOpen: boolean;
}

const Header: FC<IProps> = ({
  setAsideMenuOpenState,
  isAsideMenuOpen,
}) => {
  const memoHandleSetAsideMenuOpenState = useCallback(
    handleSetAsideMenuOpenState, [isAsideMenuOpen, setAsideMenuOpenState],
  );

  const { openModal } = useContext(ModalContext);

  return (
    <>
      <Container
        className={classes.root}
        wrapperClassName={classes['root-wrapper']}
      >
        <div className={clsx(classes.burger, 'onlyMobile')} onClick={memoHandleSetAsideMenuOpenState()}>
          <img src={BurgerImg} alt="" />
        </div>
        <div className={clsx(classes.contacts, 'noMobile')}>
          <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          <div />
          <p>Сервис работает круглосуточно.</p>
        </div>
        <div className={classes.account}>
          <div
            className={clsx(classes.login, 'noMobile')}
            onClick={openModal(ModalTypeEnum.AUTH, {
              mode: AuthModalModeEnum.LOGIN,
            })}
          >
            <img src={AccountImg} alt="" />
            <span>Войти</span>
          </div>
          <div
            className={clsx(classes.registration, 'noMobile')}
            onClick={openModal(ModalTypeEnum.AUTH, {
              mode: AuthModalModeEnum.REGISTRATION,
            })}
          >
            <span>Регистрация</span>
          </div>
          {/* <div className={classes.lang}>
            <span>RU</span>
          </div> */}
        </div>
      </Container>
    </>
  );

  function handleSetAsideMenuOpenState(value?: boolean) {
    return () => {
      setAsideMenuOpenState(value !== undefined ? value : !isAsideMenuOpen);
    };
  }
};

export default Header;
