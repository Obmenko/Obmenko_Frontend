/* eslint-disable react/no-array-index-key */
/* eslint-disable no-confusing-arrow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';
import classes from './Footer.module.scss';
import Container from '@/utils/components/Container';
import TelegramIcon from '@/assets/img/telegram.svg';
import ClockIcon from '@/assets/img/clock.svg';
import MailIcon from '@/assets/img/mail.svg';
import { goBlank, goWithScroll } from '@/utils/functions/dom';
import CONTACTS from '@/const/contacts';
import { ROUTES } from '@/const/routes';
import LogoImg from '@/assets/img/logo.svg';

import useResize from '@/utils/hooks/useResize';
import COMPANY_LOGOS from '@/const/company_logos';
import BgBlurGreenImg from '@/assets/img/bg_blur_green.svg';

type IProps = {

}

const Footer: React.FC<IProps> = () => {
  const history = useHistory();

  const { width } = useResize();

  const memoGoTo = useCallback(goTo, [history]);
  const memoCompanyLogoList = useMemo(() => width > 480 ? [COMPANY_LOGOS.slice(0, 9), COMPANY_LOGOS.slice(9, -1)] : [
    COMPANY_LOGOS.slice(0, 4),
    COMPANY_LOGOS.slice(4, 8),
    COMPANY_LOGOS.slice(8, 12),
    COMPANY_LOGOS.slice(12, 16),
    COMPANY_LOGOS.slice(16),
  ], [width]);

  return (
    <div className={classes.root}>
      <Container
        className={classes.content}
        wrapperClassName={classes['content-wrapper']}
        BeforeComponent={
          () => (<img src={BgBlurGreenImg} alt="" className={classes.bg} />)
        }
      >
        <img src={LogoImg} alt="" />
        <div className={classes['content-column']}>
          <span onClick={memoGoTo(ROUTES.RULES)}>Правила сайта</span>
          <span onClick={memoGoTo(ROUTES.FAQ)}>FAQ</span>
          <span onClick={goWithScroll(ROUTES.HOME, 'reviews')}>Отзывы</span>
          <span onClick={goBlank(CONTACTS.telegramLink)}>Поддержка</span>
        </div>
        <div className={classes['content-column']}>
          <h4>Контакты</h4>
          <div>
            <img src={TelegramIcon} alt="" />
            <a href={CONTACTS.telegramLink}>Telegram</a>
          </div>
          <div>
            <img src={MailIcon} alt="" />
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          </div>
        </div>
        <div className={classes['content-column']}>
          <h4>График работы</h4>
          <div>
            <img src={ClockIcon} alt="" />
            <span>Круглосуточно</span>
          </div>
          <p />
          <p />
        </div>
      </Container>
      <Container className={classes.logos}>
        {
          memoCompanyLogoList.map((logoChunk, logoChunkIndex) => (
            <div key={`logo_chunk__${logoChunkIndex}`}>
              {
                logoChunk.map((logo, logoIndex) => (
                  <img key={`logo_chunk_item__${logoIndex}`} src={logo} alt="" />
                ))
              }
            </div>
          ))
        }
      </Container>
      <div className={classes.copyright}>
        <span>
          ©
          2020
          {/* {new Date(Date.now()).getFullYear()} */}
        </span>
        <p>
          logo.exchange
        </p>
      </div>
    </div>
  );

  function goTo(path: string): { (): void } {
    return () => {
      history.push(path);
    };
  }
};

export default Footer;
