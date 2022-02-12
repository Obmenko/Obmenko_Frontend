/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-useless-return */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useContext, useCallback, FC, useEffect, useState,
} from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import _ from 'lodash';
import { useHistory } from 'react-router';
import { DateTime } from 'luxon';
import classes from './AccountRequests.module.scss';
import Container from '@/utils/components/Container';
import AccountRequestsAsideMenu from '@/components/AccountAsideMenu';
import SaleImg from '@/assets/img/sale.svg';
import BgOverlayImg4 from '@/assets/img/bg_overlay_4.svg';
import { ROUTES } from '@/const/routes';
import { updateUser } from '@/api/user';
import AuthContext from '@/context/auth';
import UserContext from '@/context/user';
import Button from '@/ui/Button';
import Select from '@/ui/Select';
import { getRequestList, RequestType } from '@/api/request';

type IProps = {
  id?: string
}

const AccountRequests: React.FC<IProps> = () => {
  const [requestList, setRequestList] = useState<RequestType[]>([]);

  const { token } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const history = useHistory();

  const memoOnClick = useCallback(
    handleOnClick,
    [history],
  );

  useEffect(() => {
    getRequestList(token).then((data) => {
      setRequestList(data);
    });
  }, [token]);

  return (
    <Container className={clsx(classes.root)} wrapperClassName={classes['root-wrapper']}>
      <div className={classes.content}>
        <h3>Ваши операции</h3>
        <div className={classes.block}>
          {
            !requestList.length && (
              <h5>Нет заявок</h5>
            )
          }
          {
            requestList.length && (
              <div className={classes.list}>
                {
                  requestList.map((request) => {
                    const date = DateTime
                      .fromMillis(request.createdAt || 0)
                      .setLocale('ru')
                      .toLocaleString(DateTime.DATETIME_SHORT);
                    return (
                      <div className={classes['list-item']} key={request._id} onClick={memoOnClick(request._id)}>
                        <div className={clsx(classes.cell, classes.id)}>
                          {request._id}
                        </div>
                        <div className={clsx(classes.cell, classes.date)}>
                          {date}
                        </div>
                        <div className={clsx(classes.cell, classes.course)}>
                          1
                          {' '}
                          {request.coinFrom}
                          {' '}
                          =
                          {' '}
                          {+request.countTo / +request.countFrom}
                          {' '}
                          {request.coinTo}
                        </div>
                        <div className={clsx(classes.cell, classes.give)}>
                          {request.countFrom}
                          {' '}
                          {request.coinFrom}
                        </div>
                        <div className={clsx(classes.cell, classes.get)}>
                          {request.countTo}
                          {' '}
                          {request.coinTo}
                        </div>
                        <div className={clsx(classes.cell, classes.status)}>
                          {request.status}
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            )
          }
        </div>
      </div>
    </Container>
  );

  function handleOnClick(id: string) {
    return () => {
      history.push(`/exchange/${id}`);
    };
  }
};

export default AccountRequests;
