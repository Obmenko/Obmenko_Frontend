/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import { useFormik } from 'formik';
import React, { useCallback, useContext, useState } from 'react';
import { Checkbox } from '@mui/material';
import classes from './AuthModal.module.scss';
import CrossModalImg from '@/assets/img/cross_modal.svg';
import ModalContext, { ModalTypeEnum } from '@/context/modal';
import { goBlank } from '@/utils/functions/dom';
import { ROUTES } from '@/const/routes';
import Button from '@/ui/Button';

export enum AuthModalModeEnum {
  LOGIN = 'login',
  REGISTRATION = 'registration'
}

export type AuthModalData = {
  id: number,
  mode: AuthModalModeEnum
}

type FormData = {
  username: string,
  email: string,
  password: string,
  confirmPasswword: string,
}

const AuthModal: React.FC<AuthModalData> = ({
  id,
  mode: propMode,
}) => {
  const formik = useFormik<FormData>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPasswword: '',
    },
    onSubmit: handleOnSubmit,
  });

  const [mode, setMode] = useState<AuthModalModeEnum>(propMode);
  const [areRulesAccepted, setRulesAcceptedState] = useState<boolean>(false);

  const { closeModal } = useContext(ModalContext);

  const memoSwitchMode = useCallback(switchMode, [mode]);

  return (
    <div className={classes.root}>
      <img
        src={CrossModalImg}
        alt=""
        className={classes.cross}
        onClick={closeModal(ModalTypeEnum.AUTH)}
      />
      <div className={classes.content}>
        <h4>{mode === AuthModalModeEnum.REGISTRATION ? 'Регистрация' : 'Авторизация'}</h4>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <div className={classes.input}>
            <span>
              Логин
              <span>*</span>
              :
            </span>
            <input type="text" />
          </div>
          {
            mode === AuthModalModeEnum.REGISTRATION && (
              <div className={classes.input}>
                <span>
                  E-mail
                  <span>*</span>
                  :
                </span>
                <input type="text" />
              </div>
            )
          }
          <div className={classes.input}>
            <span>
              Пароль
              <span>*</span>
              :
            </span>
            <input type="text" />
          </div>
          {
            mode === AuthModalModeEnum.REGISTRATION && (
              <div className={classes.input}>
                <span>
                  Пароль еще раз
                  <span>*</span>
                  :
                </span>
                <input type="text" />
              </div>
            )
          }
          {
            mode === AuthModalModeEnum.REGISTRATION && (
              <div className={classes.checkbox}>
                <Checkbox onChange={(e) => setRulesAcceptedState(e.target.checked)} />
                <p>
                  С
                  {' '}
                  <span onClick={goBlank(ROUTES.RULES)}>правилами сервиса</span>
                  {' '}
                  ознакомлен и согласен
                </p>
              </div>
            )
          }
          <Button className={classes.button}>{mode === AuthModalModeEnum.REGISTRATION ? 'Зарегистрироваться' : 'Войти'}</Button>
          {
            mode === AuthModalModeEnum.LOGIN && (
              <>
                <div className={classes.forgotPassword}>
                  <p>Забыли пароль?</p>
                </div>
                <div className={classes.changeMode}>
                  <p>Нет учётной записи?</p>
                  <span onClick={memoSwitchMode}>Зарегистрируйтесь</span>
                </div>
              </>
            )
          }
          {
            mode === AuthModalModeEnum.REGISTRATION && (
              <>
                <div className={classes.changeMode}>
                  <p>Уже есть аккаунт?</p>
                  <span onClick={memoSwitchMode}>Войдите</span>
                </div>
              </>
            )
          }
        </form>
      </div>
    </div>
  );

  function switchMode(): void {
    if (mode === AuthModalModeEnum.LOGIN) setMode(AuthModalModeEnum.REGISTRATION);
    else setMode(AuthModalModeEnum.LOGIN);
  }

  function handleOnSubmit() {
    console.log(formik.values);
  }
};

export default AuthModal;
