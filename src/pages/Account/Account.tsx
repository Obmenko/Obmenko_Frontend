/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useCallback } from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import _ from 'lodash';
import { useHistory } from 'react-router';
import classes from './Account.module.scss';
import Container from '@/utils/components/Container';
import SaleImg from '@/assets/img/sale.svg';
import BgOverlayImg4 from '@/assets/img/bg_overlay_4.svg';
import { ROUTES } from '@/const/routes';
import { updateUser } from '@/api/user';
import AuthContext from '@/context/auth';
import UserContext from '@/context/user';
import Button from '@/ui/Button';

type IProps = {
  id?: string
}

type FormData = {
  username: string,
  fullname: string,
  email: string,
  phone: string,
  telegram: string,
}

type FormDataErrors = {
  username?: string,
  fullname?: string,
  email?: string,
  phone?: string,
  telegram?: string,
}

const Account: React.FC<IProps> = () => {
  const { token } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  const formik = useFormik<FormData>({
    initialValues: {
      username: user?.username || '',
      fullname: user?.fullname || '',
      email: user?.email || '',
      phone: user?.phone || '',
      telegram: user?.telegram || '',
    },
    validate: (values): FormDataErrors => {
      const errors: FormDataErrors = {};
      if (!values.email) {
        errors.email = 'Это поле не должно оставаться пустым';
      }

      if (!values.username) {
        errors.username = 'Это поле не должно оставаться пустым';
      }

      return errors;
    },
    onSubmit: handleOnSubmit,
  });

  const memoOnChange = useCallback(
    handleSetDataFromInput,
    [formik],
  );

  return (
    <Container className={clsx(classes.root)} wrapperClassName={classes['root-wrapper']}>
      <form action="" className={classes.form} onSubmit={formik.handleSubmit}>
        <h4>Личные данные</h4>
        <div className={classes.input}>
          <span>
            Логин
            <span>*</span>
            :
          </span>
          <input type="text" value={formik.values.username} onChange={memoOnChange('username')} placeholder={user?.username || 'Не заполнено'} />
          {
            formik.errors.username && (
              <p>{formik.errors.username}</p>
            )
          }
        </div>
        <div className={classes.input}>
          <span>
            Email
            <span>*</span>
            :
          </span>
          <input type="text" value={formik.values.email} onChange={memoOnChange('email')} placeholder={user?.email || 'Не заполнено'} />
          {
            formik.errors.email && (
              <p>{formik.errors.email}</p>
            )
          }
        </div>
        <div className={classes.input}>
          <span>
            ФИО:
          </span>
          <input type="text" value={formik.values.fullname} onChange={memoOnChange('fullname')} placeholder={user?.fullname || 'Не заполнено'} />
        </div>
        <div className={classes.input}>
          <span>
            Телефон:
          </span>
          <input type="number" value={formik.values.phone} onChange={memoOnChange('phone')} placeholder={user?.phone || 'Не заполнено'} />
        </div>

        <div className={classes.input}>
          <span>
            Telegram:
          </span>
          <input type="text" value={formik.values.telegram} onChange={memoOnChange('telegram')} placeholder={user?.telegram || 'Не заполнено'} />
        </div>
        <Button className={classes.button} type="submit">Сохранить</Button>
      </form>
    </Container>
  );

  async function handleOnSubmit(values: FormData) {
    if (!_.isEmpty(formik.errors)) return;
    const data = await updateUser(token, values);
  }

  // function handleSetDataFromSelect(key: keyof FormData): { (value: number | null): void } {
  //   return (value) => {
  //     formik.setFieldValue(key, value);
  //   };
  // }
  function handleSetDataFromInput(key: keyof FormData): { (event: React.ChangeEvent<HTMLInputElement>): void } {
    return (event) => {
      const { value } = event.target;
      formik.setFieldValue(key, value);
    };
  }
};

export default Account;
