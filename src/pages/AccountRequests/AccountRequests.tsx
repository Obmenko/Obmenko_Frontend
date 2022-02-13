/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-useless-return */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useContext, useCallback, useEffect, useState,
} from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router';
import { DateTime } from 'luxon';
import classes from './AccountRequests.module.scss';
import Container from '@/utils/components/Container';
import AuthContext from '@/context/auth';
import { getRequestList, RequestType } from '@/api/request';

type IProps = {
  id?: string
}

const AccountRequests: React.FC<IProps> = () => {
  const [requestList, setRequestList] = useState<RequestType[]>([]);

  const { token } = useContext(AuthContext);
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
        <div className={clsx(classes.block, 'noMobile')}>
          <div className={classes['list-item']}>
            <div className={clsx(classes.cell, classes['cell-header'], classes.id)}>
              ID
            </div>
            <div className={clsx(classes.cell, classes['cell-header'], classes.date)}>
              Дата
            </div>
            <div className={clsx(classes.cell, classes['cell-header'], classes.course)}>
              Курс
            </div>
            <div className={clsx(classes.cell, classes['cell-header'], classes.give)}>
              Отдаете
            </div>
            <div className={clsx(classes.cell, classes['cell-header'], classes.get)}>
              Получаете
            </div>
            <div className={clsx(classes.cell, classes['cell-header'], classes.status)}>
              Статус
            </div>
          </div>
          {
            !!requestList.length && (
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
        <div className={clsx(classes['block-list'], 'onlyMobile')}>
          {
              requestList.map((request) => {
                const date = DateTime
                  .fromMillis(request.createdAt || 0)
                  .setLocale('ru')
                  .toLocaleString(DateTime.DATETIME_SHORT);
                return (
                  <div className={classes.block} key={request._id} onClick={memoOnClick(request._id)}>
                    <div>
                      <div>ID</div>
                      <div>{request._id}</div>
                    </div>
                    <div>
                      <div>Дата</div>
                      <div>{date}</div>
                    </div>
                    <div>
                      <div>Курс</div>
                      <div>
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
                    </div>
                    <div>
                      <div>Отдаете</div>
                      <div>
                        {request.countFrom}
                        {' '}
                        {request.coinFrom}
                      </div>
                    </div>
                    <div>
                      <div>Получаете</div>
                      <div>
                        {request.countTo}
                        {' '}
                        {request.coinTo}
                      </div>
                    </div>
                    <div>
                      <div>Статус</div>
                      <div>{request.status}</div>
                    </div>
                  </div>
                );
              })
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
