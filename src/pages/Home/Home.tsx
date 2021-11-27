import React, { useCallback, useState } from 'react';
import { MenuItem } from '@mui/material';
import { NAVS } from '@/const/routes';
import classes from './Home.module.scss';
import LogoImg from '@/assets/img/logo.png';
import ExchangeImg from '@/assets/img/currency/exchange.svg';
import BitcoinImg from '@/assets/img/currency/bitcoin.svg';
import SberRubImg from '@/assets/img/currency/sber_rub.png';
import AdvantageImg1 from '@/assets/img/advantage_1.svg';
import AdvantageImg2 from '@/assets/img/advantage_2.svg';
import AdvantageImg3 from '@/assets/img/advantage_3.svg';
import Container from '@/utils/components/Container';
import Select from '@/ui/Select';
import Button from '@/ui/Button';

type CurrencyItem = {
  img: string;
  title: string;
}

const CURRENCY_BTC: CurrencyItem[] = [
  {
    img: BitcoinImg,
    title: 'Bitcoin BTC',
  },
];

const CURRENCY_MONEY: CurrencyItem[] = [
  {
    img: SberRubImg,
    title: 'Сбербанк RUB',
  },
];

const COURSE = 4675123.9749;

type CurrencyData = {
  btcSelected: CurrencyItem,
  moneySelected: CurrencyItem,
  money: string | number,
  btc: string | number
}

const Home: React.FC = () => {
  const [data, setData] = useState<CurrencyData>({
    btc: '1',
    btcSelected: CURRENCY_BTC[0],
    money: 1 * COURSE,
    moneySelected: CURRENCY_MONEY[0],
  });

  const memoSetDataFromInput = useCallback(handleSetDataFromInput, [data]);
  const memoSetDataFromSelect = useCallback(handleSetDataFromSelect, [data]);

  return (
    <div className={classes.root}>
      <Container className={classes.main} wrapperClassName={classes['main-wrapper']}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img src={LogoImg} alt="" />
          </div>
          <div className={classes.nav}>
            {
              NAVS.map((nav) => (
                <span key={nav.title}>{nav.title}</span>
              ))
            }
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes['content-title']}>
            <h1>Точный обмен криптовалют</h1>
            <h2>и цифровых ценностей</h2>
          </div>
          <div className={classes['content-calculator']}>
            <div className={classes['content-calculator__item']}>
              <h3>Отдаёте</h3>
              <div className={classes['content-calculator__item-selectRow']}>
                <Select
                  data={CURRENCY_BTC}
                  onChange={memoSetDataFromSelect('btcSelected')}
                  value={data.btcSelected}
                />
                <input type="number" className="reverse" value={data.btc} onChange={memoSetDataFromInput('btc')} />
              </div>
              <div className={classes['content-calculator__item-info']}>
                <p>
                  <span>Курс обмена:</span>
                  {' '}
                  1 BTC =
                  {' '}
                  {COURSE}
                  {' '}
                  RUB
                </p>
                <p>
                  <span>Резерв:</span>
                  {' '}
                  6000000 RUB
                  {' '}
                  <span className={classes['content-calculator__item-info__link']}>Не хватает?</span>
                </p>
              </div>
            </div>
            <img src={ExchangeImg} alt="" />
            <div className={classes['content-calculator__item']}>
              <h3>Получаете</h3>
              <div className={classes['content-calculator__item-selectRow']}>
                <Select
                  data={CURRENCY_MONEY}
                  onChange={memoSetDataFromSelect('moneySelected')}
                  value={data.moneySelected}
                />
                <input type="number" value={data.money} readOnly className="reverse" />
              </div>
              <div className={classes['content-calculator__item-info']}>
                <p>
                  <span className={classes['content-calculator__item-info__link']}>Войдите</span>
                  в аккаунт и получите персональную скидку
                </p>
              </div>
            </div>
            <Button>Обменять</Button>
          </div>
        </div>
      </Container>
      <Container className={classes.advantages} wrapperClassName={classes['advantages-wrapper']}>
        <div className={classes['advantages-item']}>
          <img src={AdvantageImg1} alt="" />
          <h5>Скорость</h5>
          <p>Мы отводим себе не более 15 минут на конвертацию вашей заявки</p>
        </div>
        <div className={classes['advantages-item']}>
          <img src={AdvantageImg2} alt="" />
          <h5>Защита данных</h5>
          <p>Мы не храним или передаем ваши данные. Все данные передаются по защищенному SSL каналу</p>
        </div>
        <div className={classes['advantages-item']}>
          <img src={AdvantageImg3} alt="" />
          <h5>Выгодный курс</h5>
          <p>Профессиональный подход к курсообразованию делает наши курсы лучшими в рунете</p>
        </div>
      </Container>
    </div>
  );

  function handleSetDataFromSelect(key: keyof CurrencyData): { (value: CurrencyItem | number | null): void } {
    return (value) => {
      setData({
        ...data,
        [key]: value,
      });
    };
  }
  function handleSetDataFromInput(key: keyof CurrencyData): { (event: React.ChangeEvent<HTMLInputElement>): void } {
    return (event) => {
      const { value } = event.target;
      if (key === 'btc') {
        setData({
          ...data,
          btc: value,
          money: +value * COURSE,
        });
      } else {
        setData({
          ...data,
          [key]: value,
        });
      }
    };
  }
};

export default Home;
