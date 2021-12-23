/* eslint-disable no-useless-return */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useCallback, FC } from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import _ from 'lodash';
import { useHistory } from 'react-router';
import classes from './AccountPrivacySettings.module.scss';
import Container from '@/utils/components/Container';
import AccountPrivacySettingsAsideMenu from '@/components/AccountAsideMenu';
import SaleImg from '@/assets/img/sale.svg';
import BgOverlayImg4 from '@/assets/img/bg_overlay_4.svg';
import { ROUTES } from '@/const/routes';
import { updateUser } from '@/api/user';
import AuthContext from '@/context/auth';
import UserContext from '@/context/user';
import Button from '@/ui/Button';
import Select from '@/ui/Select';

type IProps = {
  id?: string
}

type FormData = {
  passwordRecovery: OptionType,
  emailNotification: OptionType,
  telegramNotification: OptionType,
  smsNotification: OptionType,
  ipWhiteList: string,
}

type FormDataErrors = {
  passwordRecovery?: string,
  emailNotification?: string,
  telegramNotification?: string,
  smsNotification?: string,
  ipWhiteList?: string,
}

type OptionType = {
  title: string,
  value: boolean,
}

const BOOLEAN_SELECT_LIST: OptionType[] = [
  {
    title: 'Нет',
    value: false,
  },
  {
    title: 'Да',
    value: true,
  },
];

const AccountPrivacySettings: React.FC<IProps> = () => {
  const { token } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  const formik = useFormik<FormData>({
    initialValues: {
      passwordRecovery: BOOLEAN_SELECT_LIST[0],
      emailNotification: BOOLEAN_SELECT_LIST[0],
      telegramNotification: BOOLEAN_SELECT_LIST[0],
      smsNotification: BOOLEAN_SELECT_LIST[0],
      ipWhiteList: '',
    },
    validate: (values): FormDataErrors => {
      const errors: FormDataErrors = {};

      return errors;
    },
    onSubmit: handleOnSubmit,
  });

  const memoSetDataFromSelect = useCallback(
    handleSetDataFromSelect,
    [formik],
  );

  const memoOnChange = useCallback(
    handleSetDataFromInput,
    [formik],
  );

  return (
    <Container className={clsx(classes.root)} wrapperClassName={classes['root-wrapper']}>
      <img src={BgOverlayImg4} alt="" className={classes.bg} />
      <AccountPrivacySettingsAsideMenu activePath={ROUTES.ACCOUNT_PRIVACY_SETTINGS} isSaleImg />
      <form action="" className={classes.form} onSubmit={formik.handleSubmit}>
        <h4>Настройки безопасности</h4>
        <div className={classes.input}>
          <span>Восстановление пароля:</span>
          <Select
            data={BOOLEAN_SELECT_LIST}
            OptionComponent={({
              title,
            }) => (
              <p className={classes.option}>
                <span>{title}</span>
              </p>
            )}
            ValueComponent={({
              title,
            }) => (
              <p className={classes.option}>
                <span>{title}</span>
              </p>
            )}
            onChange={memoSetDataFromSelect('passwordRecovery')}
            value={formik.values.passwordRecovery}
          />
        </div>
        <div className={classes.input}>
          <span>Уведомление при авторизации (E-mail):</span>
          <Select
            data={BOOLEAN_SELECT_LIST}
            OptionComponent={({
              title,
            }) => (
              <p className={classes.option}>
                <span>{title}</span>
              </p>
            )}
            ValueComponent={({
              title,
            }) => (
              <p className={classes.option}>
                <span>{title}</span>
              </p>
            )}
            onChange={memoSetDataFromSelect('emailNotification')}
            value={formik.values.emailNotification}
          />
        </div>
        <div className={classes.input}>
          <span>Уведомление при авторизации (Telegram):</span>
          <Select
            data={BOOLEAN_SELECT_LIST}
            OptionComponent={({
              title,
            }) => (
              <p className={classes.option}>
                <span>{title}</span>
              </p>
            )}
            ValueComponent={({
              title,
            }) => (
              <p className={classes.option}>
                <span>{title}</span>
              </p>
            )}
            onChange={memoSetDataFromSelect('telegramNotification')}
            value={formik.values.telegramNotification}
          />
        </div>
        <div className={classes.input}>
          <span>Уведомление при авторизации (SMS):</span>
          <Select
            data={BOOLEAN_SELECT_LIST}
            OptionComponent={({
              title,
            }) => (
              <p className={classes.option}>
                <span>{title}</span>
              </p>
            )}
            ValueComponent={({
              title,
            }) => (
              <p className={classes.option}>
                <span>{title}</span>
              </p>
            )}
            onChange={memoSetDataFromSelect('smsNotification')}
            value={formik.values.smsNotification}
          />
        </div>

        <Button className={classes.button} type="submit">Сохранить</Button>
      </form>
    </Container>
  );

  async function handleOnSubmit(values: FormData) {
    if (!_.isEmpty(formik.errors)) return;
    // const data = await updateUser(token, values);
  }

  function handleSetDataFromSelect(key: keyof FormData): { (value: number | null): void } {
    return (value) => {
      formik.setFieldValue(key, value);
    };
  }
  function handleSetDataFromInput(key: keyof FormData): { (event: React.ChangeEvent<HTMLInputElement>): void } {
    return (event) => {
      const { value } = event.target;
      formik.setFieldValue(key, value);
    };
  }
};

export default AccountPrivacySettings;