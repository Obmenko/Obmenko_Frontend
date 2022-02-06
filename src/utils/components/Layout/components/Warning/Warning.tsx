/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  FC,
} from 'react';

import Container from '@/utils/components/Container';
import classes from './Warning.module.scss';
import CONTACTS from '@/const/contacts';
import WarningImg from '@/assets/img/warning.png';

type IProps = {
  setWarningOpenState: { (state: boolean): void };
  isWarningOpen: boolean;
}

const Warning: FC<IProps> = ({
  setWarningOpenState,
  isWarningOpen,
}) => (
  <>
    <Container
      className={classes.root}
      wrapperClassName={classes['root-wrapper']}
    >
      <img src={WarningImg} alt="" />
      <p>
        Внимание!!! Сервис работает КРУГЛОСУТОЧНО в штатном режиме. По всем вопросам обращайтесь к оператору. Telegram только по ссылке
        {' '}
        <a href={CONTACTS.telegramLink} target="_blank" rel="noreferrer">Telegram</a>
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

export default Warning;
