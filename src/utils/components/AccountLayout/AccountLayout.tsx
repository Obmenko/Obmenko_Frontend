/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router';
import { ACCOUNT_NAVS } from '@/const/routes';
import classes from './AccountLayout.module.scss';
import Container from '../Container';

const AccountLayout: FC = ({ children }) => {
  const history = useHistory();

  const memoGoTo = useCallback(goTo, [history]);

  return (
    <div className={classes.root}>
      <Container className={classes.nav} wrapperClassName={classes['nav-wrapper']}>
        <div className={classes.bg} />
        {
          ACCOUNT_NAVS.map((nav) => (
            <span key={nav.title} onClick={memoGoTo(nav.path)}>{nav.title}</span>
          ))
        }
      </Container>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );

  function goTo(path: string): { (): void } {
    return () => {
      history.push(path);
    };
  }
};

export default AccountLayout;
