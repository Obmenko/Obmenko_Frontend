/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  FC,
} from 'react';

import Container from '@/utils/components/Container';
import classes from './Warning.module.scss';
// import BurgerImg from '@/assets/img/burger.svg';

type IProps = {
  setWarningOpenState: { (state: boolean): void };
  isWarningOpen: boolean;
}

const Warning: FC<IProps> = ({
  setWarningOpenState,
  isWarningOpen,
}) => {
  console.log('');

  return (
    <>
      <Container
        className={classes.root}
        wrapperClassName={classes['root-wrapper']}
      >
        <p>Cервис работает КРУГЛОСУТОЧНО в штатном режиме</p>
        <p>
          По всем вопросам обращайтесь к оператору. ВНИМАНИЕ! Telegram только по ссылке
          {' '}
          <a href="https://t.me/coins_gives_support" target="_blank" rel="noreferrer">Telegram</a>
          , множество поддельных аккаунтов.
        </p>
      </Container>
    </>
  );

  // function handlesetWarningOpenState(value?: boolean) {
  //   return () => {
  //     setWarningOpenState(value !== undefined ? value : !isWarningOpen);
  //   };
  // }
};

export default Warning;
