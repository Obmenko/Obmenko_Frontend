/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  FC, useCallback,
} from 'react';

import clsx from 'clsx';
import { useHistory } from 'react-router';
import Container from '@/utils/components/Container';
import classes from './Header.module.scss';
import LogoImg from '@/assets/img/logo_black.svg';
// import BurgerImg from '@/assets/img/burger.svg';
import { goWithScroll } from '@/utils/functions/dom';

type IProps = {
  setAsideMenuOpenState: { (state: boolean): void };
  isAsideMenuOpen: boolean;
}

const Header: FC<IProps> = ({
  setAsideMenuOpenState,
  isAsideMenuOpen,
}) => {
  const history = useHistory();

  const memoHandleSetAsideMenuOpenState = useCallback(
    handleSetAsideMenuOpenState, [isAsideMenuOpen, setAsideMenuOpenState],
  );

  return (
    <>
      <Container
        className={classes.root}
        wrapperClassName={classes['root-wrapper']}
      >
        dasdas
      </Container>
    </>
  );

  function handleSetAsideMenuOpenState(value?: boolean) {
    return () => {
      setAsideMenuOpenState(value !== undefined ? value : !isAsideMenuOpen);
    };
  }
};

export default Header;
