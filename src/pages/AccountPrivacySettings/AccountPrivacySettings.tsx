/* eslint-disable no-useless-return */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import _ from 'lodash';
import classes from './AccountPrivacySettings.module.scss';
import Container from '@/utils/components/Container';
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

  return (
    <Container className={clsx(classes.root)} wrapperClassName={classes['root-wrapper']}>
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
};

export default AccountPrivacySettings;
