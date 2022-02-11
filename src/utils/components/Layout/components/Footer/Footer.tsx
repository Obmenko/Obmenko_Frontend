/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
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

import CompanyLogo1 from '@/assets/img/logos/logo1.jpg';
import CompanyLogo2 from '@/assets/img/logos/logo2.jpg';
import CompanyLogo3 from '@/assets/img/logos/logo3.jpg';
import CompanyLogo4 from '@/assets/img/logos/logo4.jpg';
import CompanyLogo5 from '@/assets/img/logos/logo5.jpg';
import CompanyLogo6 from '@/assets/img/logos/logo6.jpg';
import CompanyLogo7 from '@/assets/img/logos/logo7.jpg';
import CompanyLogo8 from '@/assets/img/logos/logo8.jpg';
import CompanyLogo9 from '@/assets/img/logos/logo9.jpg';
import CompanyLogo10 from '@/assets/img/logos/logo10.jpg';
import CompanyLogo11 from '@/assets/img/logos/logo11.jpg';
import CompanyLogo12 from '@/assets/img/logos/logo12.jpg';
import CompanyLogo13 from '@/assets/img/logos/logo13.jpg';
import CompanyLogo14 from '@/assets/img/logos/logo14.jpg';
import CompanyLogo15 from '@/assets/img/logos/logo15.jpg';
import CompanyLogo16 from '@/assets/img/logos/logo16.jpg';
import CompanyLogo17 from '@/assets/img/logos/logo17.jpg';
import CompanyLogo18 from '@/assets/img/logos/logo18.jpg';
import CompanyLogo19 from '@/assets/img/logos/logo19.jpg';
import CompanyLogo20 from '@/assets/img/logos/logo20.jpg';
import CompanyLogo21 from '@/assets/img/logos/logo21.jpg';

type IProps = {

}

const Footer: React.FC<IProps> = () => {
  const history = useHistory();

  const memoGoTo = useCallback(goTo, [history]);

  return (
    <div className={classes.root}>
      <Container className={classes.content} wrapperClassName={classes['content-wrapper']}>
        <div className={classes.bg} />
        <img src={LogoImg} alt="" />
        <div className={classes['content-column']}>
          <span onClick={memoGoTo(ROUTES.RULES)}>Правила сайта</span>
          <span onClick={memoGoTo(ROUTES.FAQ)}>FAQ</span>
          <span onClick={goWithScroll(ROUTES.HOME, 'reviews')}>Отзывы</span>
          <span onClick={goWithScroll(ROUTES.HOME, 'footer')}>Поддержка</span>
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
      <div className={classes.logos}>
        <div>
          <img src={CompanyLogo1} alt="" />
          <img src={CompanyLogo2} alt="" />
          <img src={CompanyLogo3} alt="" />
          <img src={CompanyLogo4} alt="" />
          <img src={CompanyLogo5} alt="" />
          <img src={CompanyLogo6} alt="" />
          <img src={CompanyLogo7} alt="" />
          <img src={CompanyLogo8} alt="" />
          <img src={CompanyLogo9} alt="" />
        </div>
        <div>
          <img src={CompanyLogo10} alt="" />
          <img src={CompanyLogo11} alt="" />
          <img src={CompanyLogo12} alt="" />
          <img src={CompanyLogo13} alt="" />
          <img src={CompanyLogo14} alt="" />
          <img src={CompanyLogo15} alt="" />
          <img src={CompanyLogo16} alt="" />
          <img src={CompanyLogo17} alt="" />
          <img src={CompanyLogo18} alt="" />
          <img src={CompanyLogo19} alt="" />
          <img src={CompanyLogo20} alt="" />
          <img src={CompanyLogo21} alt="" />
        </div>
      </div>
      <div className={classes.copyright}>
        <span>
          ©
          {new Date(Date.now()).getFullYear()}
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
