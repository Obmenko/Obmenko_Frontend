/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router';
import classes from './Footer.module.scss';
import Container from '@/utils/components/Container';
// import BestChangeImg from '@/assets/img/logos/best_change.jpg';
// import CourseExpertImg from '@/assets/img/logos/course_expert.jpg';
// import OkChangerImg from '@/assets/img/logos/ok_changer.jpg';
// import TraderMontoringImg from '@/assets/img/logos/trader_montoring.jpg';
// import AmlBoxImg from '@/assets/img/logos/aml_box.jpg';
import MailImg from '@/assets/img/mail.svg';
import { goBlank } from '@/utils/functions/dom';
import CONTACTS from '@/const/contacts';

type IProps = {

}

const Footer: React.FC<IProps> = () => {
  const history = useHistory();

  // const memoGoTo = useCallback(goTo, [history]);

  return (
    <Container className={classes.root} wrapperClassName={classes['root-wrapper']}>
      <div className={classes.text}>
        <p className="onlyMobile">
          Обменник —
          {' '}
          {CONTACTS.name}
          {' '}
          предлагает быстрый, безопасный обмен по самым выгодным условиям, такие виды электронных а так же криптовалют как: Bitcoin, Ethereum, Litecoin, Ripple, Zcash, Tether, Monero, Qiwi, Advanced Cash, Яндекс. Деньги, Альфа-Банк, Сбербанк, Тинькофф, EXMO CODE.
        </p>
        <div className={classes.nav}>
          <span onClick={goBlank(CONTACTS.telegramLink)}>
            Telegram
          </span>
          {/* <span onClick={memoGoTo('/')}>Карта сайта</span>
          <span onClick={memoGoTo('/')}>Правила сайта</span>
          <span onClick={memoGoTo('/')}>Политика конфиденциальности</span> */}
        </div>
        <div className={classes.chart}>
          <h6>График работы</h6>
          <span>Наши операторы помогут Вам</span>
          <p>Сервис работает круглосуточно. </p>
        </div>
        <div className={classes.contacts}>
          <h6>Наши контакты</h6>
          <div>
            <img src={MailImg} alt="" />
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          </div>
        </div>
      </div>
      {/* <div className={classes.logos}>
        <img src={BestChangeImg} alt="" />
        <img src={CourseExpertImg} alt="" />
        <img src={TraderMontoringImg} alt="" />
        <img src={OkChangerImg} alt="" />
        <img src={AmlBoxImg} alt="" />
      </div> */}
    </Container>
  );

  // function goTo(path: string): { (): void } {
  //   return () => {
  //     history.push(path);
  //   };
  // }
};

export default Footer;
