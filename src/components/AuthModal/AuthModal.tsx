/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import { useFormik } from 'formik';
import React, { useCallback, useContext, useState } from 'react';
import { Checkbox } from '@mui/material';
import { useHistory } from 'react-router';
import _ from 'lodash';
import classes from './AuthModal.module.scss';
import CrossModalImg from '@/assets/img/cross_modal.svg';
import ModalContext, { ModalTypeEnum } from '@/context/modal';
import { goBlank } from '@/utils/functions/dom';
import { ROUTES } from '@/const/routes';
import Button from '@/ui/Button';
import { authUser, createUser } from '@/api/user';
import UserContext from '@/context/user';
import AuthContext from '@/context/auth';
import { ButtonColorEnum, ButtonSizeEnum } from '@/ui/Button/Button';

export enum AuthModalModeEnum {
  LOGIN = 'login',
  REGISTRATION = 'registration'
}

export type AuthModalData = {
  id: number,
  mode: AuthModalModeEnum,
  isClosingDisabled: boolean
}

type FormData = {
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
}

type FormDataErrors = {
  username?: string,
  email?: string,
  password?: string,
  confirmPassword?: string,
  areRulesAccepted?: string
}

const AuthModal: React.FC<AuthModalData> = ({
  id,
  mode: propMode,
  isClosingDisabled,
}) => {
  const formik = useFormik<FormData>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values): FormDataErrors => {
      const errors: FormDataErrors = {};
      if (!values.email) {
        errors.email = 'Не указана почта';
      }

      if (mode === AuthModalModeEnum.LOGIN) {
        if (!values.password) {
          errors.password = 'Пароль не должен быть пустым';
        }
      }

      if (mode === AuthModalModeEnum.REGISTRATION) {
        if (!values.username) {
          errors.email = 'Не указана почта';
        }
        if (!areRulesAccepted) {
          errors.areRulesAccepted = 'Не приняты правила пользования';
        }

        if (values.password && (values.password !== values.confirmPassword)) {
          errors.password = 'Пароли не совпадают';
        }
      }

      return errors;
    },
    onSubmit: handleOnSubmit,
  });

  const [mode, setMode] = useState<AuthModalModeEnum>(propMode);
  const [areRulesAccepted, setRulesAcceptedState] = useState<boolean>(false);

  const { closeModal } = useContext(ModalContext);
  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const memoSwitchMode = useCallback(switchMode, [mode]);
  const memoOnChange = useCallback(
    (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue(key, e.target.value),
    [formik],
  );

  return (
    <div className={classes.root}>
      <img
        src={CrossModalImg}
        alt=""
        className={classes.cross}
        onClick={() => {
          if (isClosingDisabled) history.replace(ROUTES.HOME);
          closeModal(ModalTypeEnum.AUTH)();
        }}
      />
      <div className={classes.content}>
        <h4>{mode === AuthModalModeEnum.REGISTRATION ? 'Регистрация' : 'Авторизация'}</h4>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          {
            mode === AuthModalModeEnum.REGISTRATION && (
              <div className={classes.input}>
                <span>
                  Логин
                  <span>*</span>
                  :
                </span>
                <input type="text" onChange={memoOnChange('username')} />
              </div>
            )
          }
          <div className={classes.input}>
            <span>
              Email
              <span>*</span>
              :
            </span>
            <input type="text" onChange={memoOnChange('email')} />
          </div>
          <div className={classes.input}>
            <span>
              Пароль
              <span>*</span>
              :
            </span>
            <input type="password" onChange={memoOnChange('password')} />
          </div>
          {
            mode === AuthModalModeEnum.REGISTRATION && (
              <div className={classes.input}>
                <span>
                  Пароль еще раз
                  <span>*</span>
                  :
                </span>
                <input type="password" onChange={memoOnChange('confirmPassword')} />
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
          <Button className={classes.button} size={ButtonSizeEnum.BIG} color={ButtonColorEnum.GREEN} type="submit">{mode === AuthModalModeEnum.REGISTRATION ? 'Зарегистрироваться' : 'Войти'}</Button>
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

  async function handleOnSubmit(values: FormData) {
    if (!_.isEmpty(formik.errors)) return;
    if (mode === AuthModalModeEnum.LOGIN) {
      const data = await authUser({
        email: values.email,
        password: values.password,
      });

      setToken(data.token);

      closeModal(ModalTypeEnum.AUTH)();
    } else {
      const data = await createUser({
        email: values.email,
        username: values.username,
        password: values.password,
      });

      setToken(data.token);

      closeModal(ModalTypeEnum.AUTH)();
    }
  }
};

export default AuthModal;
