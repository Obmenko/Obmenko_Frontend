/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  FC, useCallback, useContext,
} from 'react';

import clsx from 'clsx';
import { useHistory } from 'react-router';
import Container from '@/utils/components/Container';
import classes from './Header.module.scss';
import AccountImg from '@/assets/img/account.svg';
import LogoImg from '@/assets/img/logo.svg';
import BurgerImg from '@/assets/img/burger.svg';
import ExitImg from '@/assets/img/exit.svg';
import ModalContext, { ModalTypeEnum } from '@/context/modal';
import { AuthModalModeEnum } from '@/components/AuthModal/AuthModal';
import UserContext from '@/context/user';
import { NAVS, ROUTES } from '@/const/routes';
import AuthContext from '@/context/auth';
import Button from '@/ui/Button';
import { ButtonModeEnum } from '@/ui/Button/Button';

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

  const { openModal, closeAllModal } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);
  const history = useHistory();

  const memoGoTo = useCallback(goTo, [history]);
  const memoOnExit = useCallback(onExit, [closeAllModal, history, setToken, setUser]);

  return (
    <>
      <Container
        className={classes.root}
        wrapperClassName={classes['root-wrapper']}
      >
        <img src={LogoImg} alt="" onClick={() => history.push('/')} />
        <div className={clsx(classes.burger, 'onlyMobile')} onClick={memoHandleSetAsideMenuOpenState()}>
          <img src={BurgerImg} alt="" />
        </div>
        <nav className={clsx('noMobile')}>
          {
            NAVS.map((nav) => (
              <span key={nav.title} onClick={memoGoTo(nav.path)}>{nav.title}</span>
            ))
          }
        </nav>
        <div className={clsx(classes.account, 'noMobile')}>
          {
            !user && (
              <>
                <Button
                  onClick={() => openModal(ModalTypeEnum.AUTH, {
                    mode: AuthModalModeEnum.LOGIN,
                  })()}
                >
                  Войти
                </Button>
                <Button
                  mode={ButtonModeEnum.TRANSPARENT}
                  onClick={() => openModal(ModalTypeEnum.AUTH, {
                    mode: AuthModalModeEnum.REGISTRATION,
                  })()}
                >
                  Регистрация
                </Button>
              </>
            )
          }
          {
            user && (
              <>
                <div
                  className={clsx(classes.login, 'noMobile')}
                  onClick={() => history.push(ROUTES.ACCOUNT_REQUESTS)}
                >
                  <span>{user?.username || 'N/A'}</span>
                  <img src={AccountImg} alt="" />
                </div>
                <img src={ExitImg} alt="" className={classes.exit} onClick={memoOnExit} />
              </>
            )
          }
          {/* <div className={classes.lang}>
            <span>RU</span>
          </div> */}
        </div>
      </Container>
    </>
  );

  function onExit() {
    closeAllModal()();
    history.push(ROUTES.HOME);
    setUser(null);
    setToken('');
  }

  function handleSetAsideMenuOpenState(value?: boolean) {
    return () => {
      setAsideMenuOpenState(value !== undefined ? value : !isAsideMenuOpen);
    };
  }

  function goTo(path: string): { (): void } {
    return () => {
      history.push(path);
    };
  }
};

export default Header;
