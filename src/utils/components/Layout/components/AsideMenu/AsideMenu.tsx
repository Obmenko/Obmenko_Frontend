/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx';
import React, {
  FC, useCallback, useEffect,
} from 'react';
import { useHistory } from 'react-router';
import { goWithScroll } from '@/utils/functions/dom';
import classes from './AsideMenu.module.scss';

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

  const history = useHistory();

  const memoGoWithScroll = useCallback(handleGoWithScroll, [history, onClose]);

  return (
    <div className={clsx(classes['root-wrapper'], 'animate__animated', 'animate__fadeInRight', 'animate__faster')}>
      dasda
    </div>
  );

  function handleGoWithScroll(id: string) {
    return () => {
      goWithScroll('/', id, history)();
      onClose();
    };
  }
};

export default AsideMenu;
