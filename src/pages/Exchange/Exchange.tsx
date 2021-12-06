/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import clsx from 'clsx';
import Checkbox from '@mui/material/Checkbox';
import { LinearProgress } from '@mui/material';
import { useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import classes from './Exchange.module.scss';
import BgOverlayImg3 from '@/assets/img/bg_overlay_3.png';
import ArrowRightWhiteShortImg from '@/assets/img/arrow_right_white_short.svg';
import ArrowLeftGreyShortImg from '@/assets/img/arrow_left_grey_short.svg';
import CaptchaImg1 from '@/assets/img/captcha/captcha_1.jpg';
import CaptchaImg6 from '@/assets/img/captcha/captcha_6.jpg';
import ExchangeImg from '@/assets/img/currency/exchange.svg';
import CopyImg from '@/assets/img/copy.svg';
import QrCodeImg from '@/assets/img/qr_code.svg';
import Container from '@/utils/components/Container';
import Select from '@/ui/Select';
import Button from '@/ui/Button';
import { ButtonModeEnum } from '@/ui/Button/Button';
import {
  CurrencyDataItemWithWallet, CURRENCY_LIST,
} from '@/const/currencies_list';

type ParamsType = {
  id: string;
}

const COURSE = 4675123.9749;

enum RequestStatusEnum {
  WAITING_FOR_CLIENT = 'Принята, ожидает оплаты клиентом',
  WAITING_FOR_CONFIRM = 'Ожидаем поступления средств',
  CONFIRMED = 'Платёж подтверждён, производим выплату'
}

enum ExchangeModeEnum {
  FORM ='form',
  CHECK = 'check',
  HOW_TO_PAY = 'how_to_pay'
}

type FormData = {
  btcSelected: CurrencyDataItemWithWallet,
  moneySelected: CurrencyDataItemWithWallet,
  money: string | number,
  btc: string | number
  card: number | null;
  phone: number | null;
  email: string;
  telegram: string;
  fullname: string;
}

const Exchange: React.FC = () => {
  const memoQueryString = useMemo(() => new URLSearchParams(window.location.search), []);
  const [data, setData] = useState<FormData>({
    btc: memoQueryString.get('btc') || '1',
    btcSelected: memoQueryString.get('btc_type') ? CURRENCY_LIST[memoQueryString.get('btc_type') as unknown as any] : CURRENCY_LIST[0],
    money: memoQueryString.get('money') || 1 * COURSE,
    moneySelected: memoQueryString.get('money_type') ? CURRENCY_LIST[memoQueryString.get('money_type') as unknown as any] : CURRENCY_LIST[0],
    card: null,
    phone: null,
    email: '',
    telegram: '',
    fullname: '',
  });

  const { id: requestId } = useParams<ParamsType>();

  const [mode, setMode] = useState(!requestId ? ExchangeModeEnum.FORM : ExchangeModeEnum.HOW_TO_PAY);
  const [requestStatus, setRequestStatus] = useState<RequestStatusEnum>(RequestStatusEnum.WAITING_FOR_CLIENT);

  const memoSetDataFromInput = useCallback(handleSetDataFromInput, [data]);
  const memoSetDataFromSelect = useCallback(handleSetDataFromSelect, [data]);

  const memoGoToMode = useCallback(goToMode, [mode]);

  const memoRequestId = useMemo(() => requestId || uuidv4().split('-').slice(0, 3).join('-'), [requestId]);

  useEffect(() => {
    setData({
      ...data,
      money: +data.btc * COURSE,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.btc]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (requestStatus === RequestStatusEnum.WAITING_FOR_CONFIRM) {
      timer = setTimeout(() => {
        setRequestStatus(RequestStatusEnum.CONFIRMED);
      }, 5 * 60 * 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [requestStatus]);

  return (
    <div className={classes.root}>
      <Container className={classes.start} wrapperClassName={classes['start-wrapper']}>
        <div className={classes.head}>
          <img src={ArrowLeftGreyShortImg} alt="" onClick={memoGoToMode('prev')} />
          <h3>
            {
              mode === ExchangeModeEnum.FORM ? `Обмен ${data.btcSelected.title} на ${data.moneySelected.title}`
                : mode === ExchangeModeEnum.CHECK ? `Обмен ${data.btcSelected.title} на ${data.moneySelected.title}`
                  : `Заявка ID ${memoRequestId}`
            }
          </h3>
        </div>
        <div className={classes.warning}>
          <div className={classes['warning-title']}>
            <h4>Внимание!</h4>
            <img src={ArrowRightWhiteShortImg} alt="" />
          </div>
          <div className={classes['warning-text']}>
            <p className={classes.white}>
              Как только Ваши средства будут зачислены мы произведем оплату на указанные в заявке реквизиты. В связи с высокой волатильностью рынка, курс обновляется каждые 5 секунд.
            </p>
            <p className={classes.black}>Время для отправки криптовалюты составляет 15 минут, после этого времени заявка считается не актуальной и необходимо создать новую. Обращаем Ваше внимание, что курс фиксируется на момент зачисления криптовалюты на наш кошелек.</p>
            <p className={classes.red}>Внимание! Будет проведена AML-проверка Вашей транзакции. При риске 90% и более заявка обрабатывается согласно правил п. 5.22. (потребуется дополнительная верификация)</p>
          </div>
        </div>
      </Container>
      <Container className={classes.calculator} wrapperClassName={classes['calculator-wrapper']}>
        <img src={BgOverlayImg3} alt="" />
        {
          mode === ExchangeModeEnum.FORM && (
            <div className={classes['calculator-form']}>
              <div className={classes['calculator-form__item']}>
                <h5>Отдаете</h5>
                <div className={classes['calculator-form__item-selectRow']}>
                  <Select
                    data={CURRENCY_LIST}
                    onChange={memoSetDataFromSelect('btcSelected')}
                    value={data.btcSelected}
                  />
                  <input type="number" className="reverse" value={data.btc} onChange={memoSetDataFromInput('btc')} />
                </div>
                <span>
                  Курс обмена: 1
                  {data.btcSelected.shortName}
                  {' '}
                  =
                  {' '}
                  {data.btcSelected.courseToUsd}
                  {' '}
                  RUB
                </span>
                <input onChange={memoSetDataFromInput('telegram')} type="text" placeholder="Telegram" />
                <input onChange={memoSetDataFromInput('email')} type="text" placeholder="E-mail*" />
                <input onChange={memoSetDataFromInput('phone')} type="text" placeholder="Телефон*" />
                {/* <div className={classes['calculator-form__item-captcha']}>
                  <div>
                    <img src={CaptchaImg1} alt="" />
                    <span>+</span>
                    <img src={CaptchaImg6} alt="" />
                    <span>=</span>
                  </div>
                  <input type="text" />
                </div> */}
              </div>
              <img src={ExchangeImg} alt="" />
              <div className={classes['calculator-form__item']}>
                <h5>Получаете</h5>
                <div className={classes['calculator-form__item-selectRow']}>
                  <Select
                    data={CURRENCY_LIST}
                    onChange={memoSetDataFromSelect('moneySelected')}
                    value={data.moneySelected}
                  />
                  <input type="number" value={data.money} readOnly className="reverse" />
                </div>
                <span>
                  min.: 30000
                  {' '}
                  {data.moneySelected.title}
                  , max.: 4000000
                  {' '}
                  {data.moneySelected.title}
                </span>
                <input onChange={memoSetDataFromInput('card')} type="text" placeholder="Номер карты получателя*" />
                <input onChange={memoSetDataFromInput('fullname')} type="text" placeholder="ФИО получателя*" />
                <div className={classes.checkBox}>
                  <Checkbox defaultChecked />
                  <span>Не запоминать введённые данные</span>
                </div>
              </div>
            </div>
          )
        }
        {
          mode === ExchangeModeEnum.CHECK && (
            <div className={classes['calculator-check']}>
              <div className={classes['calculator-check__row']}>
                <div className={classes['calculator-check__row-column']}>
                  <h4>Отдаёте</h4>
                  <div className={classes['calculator-check__row-column__item']}>
                    <span>Сумма:</span>
                    <p>{`${data.btc} ${data.btcSelected.title}`}</p>
                  </div>
                  <div className={clsx(classes['calculator-check__row-column__item'], classes.noColumn)}>
                    <img src={data.btcSelected.img} alt="" />
                    <p>{data.btcSelected.title || 'N/A'}</p>
                  </div>
                </div>
                <div className={classes['calculator-check__row-column']}>
                  <h4>Получаете</h4>
                  <div className={classes['calculator-check__row-column__item']}>
                    <span>Сумма:</span>
                    <p>{data.money || 'N/A'}</p>
                  </div>
                  <div className={clsx(classes['calculator-check__row-column__item'], classes.noColumn)}>
                    <img src={data.moneySelected.img} alt="" />
                    <p>{data.moneySelected.title || 'N/A'}</p>
                  </div>
                  <div className={classes['calculator-check__row-column__item']}>
                    <span>На счет:</span>
                    <p>{data.btcSelected.wallet}</p>
                  </div>
                  <div className={classes['calculator-check__row-column__item']}>
                    <span>ФИО получателя:</span>
                    <p>{data.fullname || 'N/A'}</p>
                  </div>
                </div>
              </div>
              <div className={classes['calculator-check__row']}>
                <div className={classes['calculator-check__row-column']}>
                  <h3>Личные данные</h3>
                  <div className={clsx(classes['calculator-check__row-column__item'], classes.bold)}>
                    <span>Номер моб. телефона:</span>
                    <p>{data.phone || 'N/A'}</p>
                  </div>
                  <div className={clsx(classes['calculator-check__row-column__item'], classes.bold)}>
                    <span>E-mail:</span>
                    <p>{data.phone || 'N/A'}</p>
                  </div>
                  <div className={clsx(classes['calculator-check__row-column__item'], classes.bold)}>
                    <span>Telegram:</span>
                    <p>{data.telegram || 'N/A'}</p>
                  </div>
                </div>
                <div className={classes['calculator-check__row-column']}>
                  <div className={classes.checkBox}>
                    <Checkbox defaultChecked />
                    <p>
                      С
                      {' '}
                      <span>правилами сервиса</span>
                      {' '}
                      ознакомлен и согласен
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        {
          mode === ExchangeModeEnum.HOW_TO_PAY && (
            <div className={classes['calculator-howToPay']}>
              <h3>Как оплатить</h3>
              <div className={classes['calculator-howToPay__title']}>
                <p>
                  Для осуществления обмена переведите указанную в Вашей заявке сумму в
                  {' '}
                  {data.btcSelected.title}
                  {' '}
                  на этот кошелек:
                </p>
                <div>
                  <img src={CopyImg} alt="" />
                  <span>{data.btcSelected.wallet}</span>
                </div>
              </div>
              {/* <img src={QrCodeImg} alt="" /> */}
              <div className={classes['calculator-howToPay__afterPay']}>
                <h6>После оплаты:</h6>
                <p>Нажмите на кнопку «Я оплатил заявку»</p>
                <p>И ожидайте обработку заявки</p>
              </div>
              <div className={classes['calculator-howToPay__sum']}>
                <div>
                  <span>Сумма платежа:</span>
                  <p>{`${data.btc} ${data.btcSelected.title}`}</p>
                </div>
                <div>
                  <span>Сумма к получению:</span>
                  <p>{`${data.money} ${data.moneySelected.title}`}</p>
                </div>
              </div>
              <div className={classes['calculator-howToPay__warning']}>
                <p>
                  <span>Пожалуйста, будьте внимательны!</span>
                  {' '}
                  Все поля должны быть заполнены в точном соответствии с инструкцией. В противном случае, платеж может не пройти.
                </p>
              </div>
              <div className={classes['calculator-howToPay__info']}>
                <div>
                  <span>Время создания:</span>
                  <p>29.11.2021, 03:45 МСК</p>
                </div>
                <div>
                  <span>Статус заявки:</span>
                  <p>{requestStatus}</p>
                </div>
              </div>
              <div className={classes['calculator-howToPay__update']}>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  classes={{
                    bar: classes['progressBar-bar'],
                    colorPrimary: classes['progressBar-colorPrimary'],
                  }}
                />
                <div>
                  <p>Страница обновляется каждые 30 секунд.</p>
                  <Button mode={ButtonModeEnum.TRANSPARENT_RECT}>Отключить обновление</Button>
                </div>
              </div>
            </div>
          )
        }
        <Button onClick={memoGoToMode('next')}>
          {
            mode === ExchangeModeEnum.FORM ? 'Обменять'
              : mode === ExchangeModeEnum.CHECK ? 'Создать заявку'
                : 'Я оплатил заявку'
          }
        </Button>
      </Container>
      <Container className={classes.end} wrapperClassName={classes['end-wrapper']}>
        <h4>
          Обмен
          {' '}
          {data.btcSelected.title}
          {' '}
          на
          {' '}
          {data.moneySelected.title}
        </h4>
        <p>Для обмена Вам необходимо выполнить несколько шагов:</p>
        <ul>
          <li>1. Заполните все поля представленной формы. Нажмите кнопку «ОБМЕНЯТЬ».</li>
          <li>2. Ознакомьтесь с условиями договора на оказание услуг обмена, если вы принимаете их, поставьте галочку в соответствующем поле/нажмите кнопку «Принимаю» («Согласен»). Еще раз проверьте данные заявки.</li>
          <li>3. Оплатите заявку. Для этого следует совершить перевод необходимой суммы, следуя инструкциям на нашем сайте.</li>
          <li>4. После выполнения указанных действий, система переместит Вас на страницу «Состояние заявки», где будет указан статус вашего перевода.</li>
        </ul>
      </Container>
    </div>
  );

  function goToMode(direction: 'next' | 'prev') {
    return () => {
      if (direction === 'next') {
        if (mode === ExchangeModeEnum.FORM) setMode(ExchangeModeEnum.CHECK);
        else if (mode === ExchangeModeEnum.CHECK) setMode(ExchangeModeEnum.HOW_TO_PAY);
        else if (mode === ExchangeModeEnum.HOW_TO_PAY) {
          setRequestStatus(RequestStatusEnum.WAITING_FOR_CONFIRM);
        }
      } else if (mode === ExchangeModeEnum.CHECK) setMode(ExchangeModeEnum.FORM);

      // else try { history.back(); } catch (e) { console.log(e); }
    };
  }

  function handleSetDataFromSelect(key: keyof FormData): { (value: CurrencyDataItemWithWallet | number | null): void } {
    return (value) => {
      setData({
        ...data,
        [key]: value,
      });
    };
  }
  function handleSetDataFromInput(key: keyof FormData): { (event: React.ChangeEvent<HTMLInputElement>): void } {
    return (event) => {
      const { value } = event.target;
      setData({
        ...data,
        [key]: value,
      });
    };
  }
};

export default Exchange;
