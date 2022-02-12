/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx';
import React, {
  FC, useCallback, useContext, useEffect,
} from 'react';
import { useHistory } from 'react-router';
import classes from './AsideMenu.module.scss';
import CrossGreyImg from '@/assets/img/cross_grey.svg';
import AccountImg from '@/assets/img/account.svg';
import { ROUTES } from '@/const/routes';
import LogoImg from '@/assets/img/logo.svg';
import Button from '@/ui/Button';
import { ButtonModeEnum, ButtonSizeEnum } from '@/ui/Button/Button';
import Warning from '../Warning';
import AuthContext from '@/context/auth';
import UserContext from '@/context/user';
import { AuthModalModeEnum } from '@/components/AuthModal/AuthModal';
import ModalContext, { ModalTypeEnum } from '@/context/modal';
import CONTACTS from '@/const/contacts';
import TelegramIcon from '@/assets/img/telegram.svg';
import MailIcon from '@/assets/img/mail.svg';

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

  const { user } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);
  const history = useHistory();
  const { openModal } = useContext(ModalContext);

  const memoGoTo = useCallback(goTo, [history, onClose]);
  const memoLogOut = useCallback(logOut, [history, onClose, setToken]);

  return (
    <>
      <div className={clsx(classes.root, 'animate__animated', 'animate__fadeInRight', 'animate__faster')}>
        <Warning isWarningOpen setWarningOpenState={console.log} />
        <div className={classes.head}>
          <img src={LogoImg} alt="" />
          {/* <div>
          <img src={AccountImg} alt="" />
          <span>Войти</span>
        </div> */}
          <img src={CrossGreyImg} alt="" onClick={onClose} />
        </div>
        {
          !user && (
            <div className={classes.auth}>
              <Button
                mode={ButtonModeEnum.DEFAULT}
                size={ButtonSizeEnum.BIG}
                onClick={() => openModal(ModalTypeEnum.AUTH, {
                  mode: AuthModalModeEnum.LOGIN,
                })()}
              >
                Войти
              </Button>
              <Button
                mode={ButtonModeEnum.TRANSPARENT}
                size={ButtonSizeEnum.BIG}
                onClick={() => openModal(ModalTypeEnum.AUTH, {
                  mode: AuthModalModeEnum.REGISTRATION,
                })()}
              >
                Регистрация
              </Button>
            </div>
          )
        }
        <div className={classes.nav}>
          {
            user && (
              <div>
                <img src={AccountImg} alt="" />
                <span>{user?.username || 'Anonymous'}</span>
              </div>
            )
          }
          <span onClick={memoGoTo(ROUTES.HOME)}>Главная</span>
          <span onClick={memoGoTo(ROUTES.RULES)}>Правила сайта</span>
          <span onClick={memoGoTo(ROUTES.FAQ)}>FAQ</span>
          <span onClick={memoGoTo(ROUTES.ACCOUNT)}>Личный кабинет</span>
          {
            user && (
              <span onClick={memoLogOut}>Выйти</span>
            )
          }
          <div>
            <img src={TelegramIcon} alt="" />
            <a href={CONTACTS.telegramLink}>Telegram</a>
          </div>
          <div>
            <img src={MailIcon} alt="" />
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          </div>
        </div>
      </div>
    </>
  );

  function goTo(path: string): { (): void } {
    return () => {
      history.push(path);
      onClose();
    };
  }

  function logOut(): void {
    history.push(ROUTES.HOME);
    setToken('');
    onClose();
  }
};

export default AsideMenu;
