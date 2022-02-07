/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import _ from 'lodash';
import clsx from 'clsx';
import { useHistory } from 'react-router';
import { NAVS } from '@/const/routes';
import classes from './Home.module.scss';
import LogoImg from '@/assets/img/logo.png';
import BgOverlayImg from '@/assets/img/bg_overlay.png';
import BgOverlayImg2 from '@/assets/img/bg_overlay_2.png';
import ExchangeImg from '@/assets/img/currency/exchange.svg';

import AdvantageImg1 from '@/assets/img/advantage_1.svg';
import AdvantageImg2 from '@/assets/img/advantage_2.svg';
import AdvantageImg3 from '@/assets/img/advantage_3.svg';
import ArrowLeftGrey from '@/assets/img/arrow_left_grey.svg';
import ArrowRightWhite from '@/assets/img/arrow_right_white.svg';
import Container from '@/utils/components/Container';
import Select from '@/ui/Select';
import Button from '@/ui/Button';
import REVIEWS, { ReviewItem } from '@/const/reviews';
import useResize from '@/utils/hooks/useResize';
import Slider from '@/ui/Slider';
import {
  CurrencyDataItemWithWallet, CURRENCY_LIST,
} from '@/const/currencies_list';
import { CurrencyUnitEnum } from '@/types/exchange';
import { getExchangePair } from '@/api/coin_api';
import { countFeePercent } from '@/utils/functions/rates';
import { goBlank } from '@/utils/functions/dom';
import CONTACTS from '@/const/contacts';

type CurrencyData = {
  coinFrom: CurrencyDataItemWithWallet,
  coinTo: CurrencyDataItemWithWallet,
  countTo: string | number,
  countFrom: string | number
}

type CourseData = {
  from: CurrencyUnitEnum,
  to: CurrencyUnitEnum,
  rate: number,
  feePercent: number
}

const Home: React.FC = () => {
  const [data, setData] = useState<CurrencyData>({
    countFrom: 1,
    coinFrom: CURRENCY_LIST[0],
    countTo: 1,
    coinTo: CURRENCY_LIST[1],
  });

  const [course, setCourse] = useState<CourseData>({
    from: data.coinFrom.unit,
    to: data.coinTo.unit,
    rate: 1,
    feePercent: 0,
  });

  const [reviewActiveIndex, setReviewActiveIndex] = useState<number>(0);
  const [currencyActiveIndex, setCurrencyActiveIndex] = useState<number>(0);

  const { width } = useResize();
  const history = useHistory();

  const memoSetDataFromInput = useCallback(handleSetDataFromInput, [data]);
  const memoSetDataFromSelect = useCallback(handleSetDataFromSelect, [data]);
  const memoGoTo = useCallback(goTo, [history]);

  const memoReviewChunkList = useMemo<ReviewItem[][]>(() => _.chunk(REVIEWS, width > 480 ? 4 : 1), [width]);
  const memoCurrencyChunkList = useMemo<CurrencyDataItemWithWallet[][]>(
    () => _.chunk(CURRENCY_LIST, width > 480 ? 16 : 2), [width],
  );

  const memoSetCurrencyActiveIndex = useCallback(handleSetCurrencyActiveIndex, [
    currencyActiveIndex,
    memoCurrencyChunkList.length,
  ]);
  const memoSetReviewActiveIndex = useCallback(handleSetReviewActiveIndex, [
    memoReviewChunkList.length,
    reviewActiveIndex,
  ]);

  const memoGoToExchange = useCallback(goToExchange, [
    data.countFrom, data.coinFrom.title, data.countTo, data.coinTo.title, history,
  ]);

  const memoFromList = useMemo(
    () => CURRENCY_LIST.filter((el) => el.unit !== data.coinFrom.unit && !el.onlyTo),
    [data.coinFrom.unit],
  );

  useEffect(() => {
    setData({
      ...data,
      countTo: +data.countFrom * course.rate,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course.rate, data.countFrom]);

  useEffect(() => {
    getExchangePair(data.coinFrom.unit, data.coinTo.unit).then((coinApiData) => {
      const from = data.coinFrom.unit;
      const to = data.coinTo.unit;
      const feePercent = countFeePercent(from, to);
      setCourse({
        from,
        to,
        rate: coinApiData.rate * (1 + feePercent / 100),
        feePercent,
      });
    });
  }, [data.coinFrom.unit, data.coinTo.unit]);

  return (
    <div className={classes.root}>
      <Container className={classes.main} wrapperClassName={classes['main-wrapper']}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img src={LogoImg} alt="" />
          </div>
          <div className={clsx(classes.nav, 'noMobile')}>
            {
              NAVS.map((nav) => (
                <span key={nav.title} onClick={memoGoTo(nav.path)}>{nav.title}</span>
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
                  data={memoFromList}
                  onChange={memoSetDataFromSelect('coinFrom')}
                  value={data.coinFrom}
                />
                <input type="number" className="reverse" value={data.countFrom} onChange={memoSetDataFromInput('countFrom')} />
              </div>
              <div className={classes['content-calculator__item-info']}>
                <p>
                  <span>Курс обмена:</span>
                  1
                  {' '}
                  {data.coinFrom.unit}
                  {' '}
                  =
                  {+data.countFrom * course.rate}
                  {' '}
                  {data.coinTo.unit}
                </p>
                <p>
                  <span>Резерв:</span>
                  {' '}
                  {data.coinTo.reserve}
                  {' '}
                  {data.coinTo.unit}
                  {' '}
                  <span
                    className={classes['content-calculator__item-info__link']}
                    onClick={goBlank(CONTACTS.telegramLink)}
                  >
                    Не хватает?
                  </span>
                </p>
              </div>
            </div>
            <img src={ExchangeImg} alt="" />
            <div className={classes['content-calculator__item']}>
              <h3>Получаете</h3>
              <div className={classes['content-calculator__item-selectRow']}>
                <Select
                  data={CURRENCY_LIST}
                  onChange={memoSetDataFromSelect('coinTo')}
                  value={data.coinTo}
                />
                <input type="number" value={data.countTo} readOnly className="reverse" />
              </div>
              {/* <div className={classes['content-calculator__item-reserve']}>
                <span>
                  max.: 4000000
                  {' '}
                  {data.coinTo.unit}
                </span>
              </div> */}
              {/* <div className={classes['content-calculator__item-info']}>
                <p>
                  <span className={classes['content-calculator__item-info__link']}>Войдите</span>
                  в аккаунт и получите персональную скидку
                </p>
              </div> */}
            </div>
            <Button onClick={memoGoToExchange}>Обменять</Button>
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
      <Container className={classes.reviews} wrapperClassName={classes['reviews-wrapper']}>
        <img src={BgOverlayImg2} alt="" />
        <div className={classes['reviews-content']}>
          <div className={classes['reviews-content__title']}>
            <h5>
              Отзывы
              {' '}
              <span>—</span>
            </h5>
            <h3>Что говорят клиенты</h3>
            <div>
              <img src={ArrowRightWhite} onClick={memoSetReviewActiveIndex('prev')} alt="" />
              <img src={ArrowRightWhite} onClick={memoSetReviewActiveIndex('next')} alt="" />
            </div>

            {/* <Button mode={ButtonModeEnum.TRANSPARENT} className="noMobile">Все отзывы</Button> */}
          </div>
          <Slider
            className={classes['reviews-content__list']}
            noControls
            activeSlideIndex={reviewActiveIndex}
            onChange={setReviewActiveIndex}
            items={
              width > 480 ? memoReviewChunkList.map((review) => (
                <>
                  <div className={classes['reviews-content__list-column']}>
                    <div className={clsx(classes['reviews-content__list-item'])} key={`${review[0].author}__${review[0].date}`}>
                      <p>{review[0].text}</p>
                      <div>
                        <span>{review[0].author}</span>
                        <p>{review[0].date}</p>
                      </div>
                    </div>
                    <div className={clsx(classes['reviews-content__list-item'], classes['reviews-content__list-item__small'])} key={`${review[1].author}__${review[1].date}`}>
                      <p>{review[1].text}</p>
                      <div>
                        <span>{review[1].author}</span>
                        <p>{review[1].date}</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes['reviews-content__list-column']}>
                    <div className={classes['reviews-content__list-item']} key={`${review[2].author}__${review[2].date}`}>
                      <p>{review[2].text}</p>
                      <div>
                        <span>{review[2].author}</span>
                        <p>{review[2].date}</p>
                      </div>
                    </div>
                    <div className={classes['reviews-content__list-item']} key={`${review[3].author}__${review[3].date}`}>
                      <p>{review[3].text}</p>
                      <div>
                        <span>{review[3].author}</span>
                        <p>{review[3].date}</p>
                      </div>
                    </div>
                  </div>
                </>
              )) : memoReviewChunkList.map((review) => (
                <div className={clsx(classes['reviews-content__list-item'])} key={`${review[0].author}__${review[0].date}`}>
                  <p>{review[0].text}</p>
                  <div>
                    <span>{review[0].author}</span>
                    <p>{review[0].date}</p>
                  </div>
                </div>
              ))
            }
          />
          {/* <Button mode={ButtonModeEnum.TRANSPARENT} className={clsx('onlyMobile')}>Все отзывы</Button> */}
        </div>
      </Container>
      <Container className={classes.reserve} wrapperClassName={classes['reserve-wrapper']}>
        <h4>Резерв валюты</h4>
        <div className={clsx(classes['reserve-content'], 'noMobile')}>
          {
            CURRENCY_LIST.map((currency) => (
              <div className={classes['reserve-content__item']} key={currency.title}>
                <img src={currency.img} alt="" />
                <h6>{currency.title}</h6>
                <p>{currency.reserve}</p>
              </div>
            ))
          }
        </div>
        <Slider
          className={clsx(classes['reserve-content'], 'onlyMobile')}
          noControls
          activeSlideIndex={currencyActiveIndex}
          onChange={setCurrencyActiveIndex}
          items={
            memoCurrencyChunkList.map((currencyChunk) => (
              <>
                <div className={classes['reserve-content__item']} key={currencyChunk[0].title}>
                  <img src={currencyChunk[0].img} alt="" />
                  <h6>{currencyChunk[0].title}</h6>
                  <p>{currencyChunk[0].reserve}</p>
                </div>
                {
                  currencyChunk[1] && (
                    <div className={classes['reserve-content__item']} key={currencyChunk[1].title}>
                      <img src={currencyChunk[1].img} alt="" />
                      <h6>{currencyChunk[1].title}</h6>
                      <p>{currencyChunk[1].reserve}</p>
                    </div>
                  )
                }
              </>
            ))
          }
        />
        <div className={clsx(classes['reserve-content__controls'], 'onlyMobile')}>
          <img src={ArrowLeftGrey} onClick={memoSetCurrencyActiveIndex('prev')} alt="" />
          <img src={ArrowLeftGrey} onClick={memoSetCurrencyActiveIndex('next')} alt="" />
        </div>
      </Container>
    </div>
  );

  function goToExchange(): void {
    const qs = new URLSearchParams();

    const fromTypeIndex = CURRENCY_LIST.findIndex((el) => el.title === data.coinFrom.title);
    const toTypeIndex = CURRENCY_LIST.findIndex((el) => el.title === data.coinTo.title);

    qs.set('from', data.countFrom.toString());
    qs.set('to', data.countTo.toString());
    if (fromTypeIndex !== -1) qs.set('from_type', fromTypeIndex.toString());
    if (toTypeIndex !== -1)qs.set('to_type', toTypeIndex.toString());

    history.push(`/exchange/?${qs.toString()}`);
  }

  function handleSetCurrencyActiveIndex(direction: 'next' | 'prev'): { (): void } {
    return () => {
      if (currencyActiveIndex === memoCurrencyChunkList.length - 1 && direction === 'next') setCurrencyActiveIndex(0);
      else if (currencyActiveIndex === 0 && direction === 'prev') setCurrencyActiveIndex(memoCurrencyChunkList.length - 1);
      else setCurrencyActiveIndex(currencyActiveIndex + (direction === 'prev' ? -1 : 1));
    };
  }

  function handleSetReviewActiveIndex(direction: 'next' | 'prev'): { (): void } {
    return () => {
      if (reviewActiveIndex === memoReviewChunkList.length - 1 && direction === 'next') setReviewActiveIndex(0);
      else if (reviewActiveIndex === 0 && direction === 'prev') setReviewActiveIndex(memoReviewChunkList.length - 1);
      else setReviewActiveIndex(reviewActiveIndex + (direction === 'prev' ? -1 : 1));
    };
  }
  function handleSetDataFromSelect(key: keyof CurrencyData): {
    (value: CurrencyDataItemWithWallet | number | null): void
  } {
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
      setData({
        ...data,
        [key]: value,
      });
    };
  }
  function goTo(path: string): { (): void } {
    return () => {
      history.push(path);
    };
  }
};

export default Home;
