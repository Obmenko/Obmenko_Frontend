/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, {
  useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import clsx from 'clsx';
import Checkbox from '@mui/material/Checkbox';
import { useHistory, useParams } from 'react-router';
import { useFormik } from 'formik';
import _ from 'lodash';
import { DateTime } from 'luxon';
import classes from './Exchange.module.scss';
import ArrowLeftGreyShortImg from '@/assets/img/arrow_left_grey_short.svg';
// import CaptchaImg1 from '@/assets/img/captcha/captcha_1.jpg';
// import CaptchaImg6 from '@/assets/img/captcha/captcha_6.jpg';
import CopyImg from '@/assets/img/copy.svg';
// import QrCodeImg from '@/assets/img/qr_code.svg';
import Container from '@/utils/components/Container';
import Select from '@/ui/Select';
import Button from '@/ui/Button';
import { ButtonColorEnum } from '@/ui/Button/Button';
import {
  CurrencyDataItemWithWallet, CURRENCY_LIST,
} from '@/const/currencies_list';
import { CourseData } from '@/types/exchange';
import { getExchangePair } from '@/api/coin_api';
import { countFeePercent } from '@/utils/functions/rates';
import {
  createRequest, getRequestById, ICreateRequest, RemoteRequestStatusEnum, RequestType, updateRequest,
} from '@/api/request';
import { IUpdateUser } from '@/api/user';
import AuthContext from '@/context/auth';
import UserContext from '@/context/user';

type ParamsType = {
  id: string;
}

enum RequestStatusEnum {
  WAITING_FOR_CLIENT = 'Принята, ожидает оплаты клиентом',
  WAITING_FOR_CONFIRM = 'Ожидаем поступления средств',
  CONFIRMED = 'Платёж подтверждён, производим выплату'
}

enum ExchangeModeEnum {
  FORM = 'form',
  CHECK = 'check',
  HOW_TO_PAY = 'how_to_pay'
}

type ExchangeFormData = Omit<ICreateRequest, 'userId'>
type UserFormData = IUpdateUser

type ExchangeFormErrors = {
  card?: string;
  wallet?: string;
}

type UserFormErrors = {
  phone?: string;
  email?: string;
  fullname?: string;
}

const Exchange: React.FC = () => {
  const memoQueryString = useMemo(() => new URLSearchParams(window.location.search), []);
  const [request, setRequest] = useState<RequestType | null>(null);

  const { id: paramRequestId } = useParams<ParamsType>();
  const [requestId, setRequestId] = useState<string | null>(paramRequestId);
  const [submitError, setSubmitError] = useState<string>('');

  const history = useHistory();

  const { user } = useContext(UserContext);

  const userFormik = useFormik<UserFormData>({
    initialValues: {
      email: user?.email || '',
      phone: user?.phone || '',
      telegram: user?.telegram || '',
      fullname: user?.fullname || '',
    },
    validate: (values): UserFormErrors => {
      const errors: UserFormErrors = {};
      if (!values.email) {
        errors.email = 'Не указана почта';
      }

      if (!values.phone) {
        errors.phone = 'Не указан телефон';
      }
      return errors;
    },
    onSubmit: () => {
      if (_.isEmpty(exchangeFormik.errors)) {
        setMode(ExchangeModeEnum.CHECK);
      }
    },
  });

  const exchangeFormik = useFormik<ExchangeFormData>({
    initialValues: {
      countFrom: memoQueryString.get('from') || '1',
      coinFrom: memoQueryString.get('from_type') ? CURRENCY_LIST[memoQueryString.get('from_type') as unknown as any] : CURRENCY_LIST[0],
      countTo: memoQueryString.get('to') || '1',
      coinTo: memoQueryString.get('to_type') ? CURRENCY_LIST[memoQueryString.get('to_type') as unknown as any] : CURRENCY_LIST[0],
      card: '',
      wallet: '',
    },
    validate: (values): ExchangeFormErrors => {
      const errors: ExchangeFormErrors = {};

      // if (values.coinTo.isBtc && !values.wallet) {
      //   errors.wallet = 'Не указан кошелёк';
      // }
      if (!values.coinTo.isBtc && !values.card) {
        errors.card = 'Не указан номер карты';
      }
      return errors;
    },
    onSubmit: async () => {
      if (_.isEmpty(exchangeFormik.errors) && _.isEmpty(userFormik.errors)) {
        setMode(ExchangeModeEnum.CHECK);
      }
    },
  });

  const [course, setCourse] = useState<CourseData>({
    from: exchangeFormik.values.coinFrom.unit,
    to: exchangeFormik.values.coinTo.unit,
    rate: 1,
    feePercent: 0,
  });

  const [mode, setMode] = useState(!requestId ? ExchangeModeEnum.FORM : ExchangeModeEnum.HOW_TO_PAY);
  const [requestStatus, setRequestStatus] = useState<RequestStatusEnum>(RequestStatusEnum.WAITING_FOR_CLIENT);
  const { token } = useContext(AuthContext);

  const memoSetExchangeDataFromInput = useCallback(handleSetExchangeDataFromInput, [exchangeFormik]);
  const memoSetExchangeDataFromSelect = useCallback(handleSetExchangeDataFromSelect, [exchangeFormik]);
  const memoSetUserDataFromInput = useCallback(handleSetUserDataFromInput, [userFormik]);

  const memoGoToMode = useCallback(goToMode, [exchangeFormik, history, mode, requestId, token, user, userFormik]);

  const memoFromList = useMemo(
    () => CURRENCY_LIST.filter((el) => el.unit !== exchangeFormik.values.coinFrom.unit && !el.onlyTo),
    [exchangeFormik.values.coinFrom.unit],
  );
  const memoCreationDate = useMemo(() => DateTime
    .fromMillis(request?.createdAt || 0)
    .setLocale('ru')
    .toLocaleString(DateTime.DATETIME_SHORT), [request?.createdAt]);

  useEffect(() => {
    exchangeFormik.setFieldValue('countTo', +exchangeFormik.values.countFrom * course.rate);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeFormik.values.countFrom, course.rate]);

  useEffect(() => {
    if (!requestId) {
      getExchangePair(exchangeFormik.values.coinFrom.unit, exchangeFormik.values.coinTo.unit).then((coinApiData) => {
        const from = exchangeFormik.values.coinFrom.unit;
        const to = exchangeFormik.values.coinTo.unit;
        const feePercent = countFeePercent(from, to);
        setCourse({
          from,
          to,
          rate: coinApiData.rate * (1 - feePercent / 100),
          feePercent,
        });
      });
    }
  }, [exchangeFormik.values.coinFrom.unit, exchangeFormik.values.coinTo.unit, requestId]);

  useEffect(() => {
    if (requestId) {
      getRequestById(token, requestId).then((data) => {
        setRequest(data);
      });
    }
  }, [requestId, token]);

  useEffect(() => {
    console.log(request);
    if (request) {
      exchangeFormik.setFieldValue('wallet', request.wallet);
      exchangeFormik.setFieldValue('coinTo', CURRENCY_LIST[CURRENCY_LIST.findIndex((el) => el.unit === request.coinTo)]);
      exchangeFormik.setFieldValue('countTo', request.countTo);
      exchangeFormik.setFieldValue('coinFrom', CURRENCY_LIST[CURRENCY_LIST.findIndex((el) => el.unit === request.coinFrom)]);
      exchangeFormik.setFieldValue('countFrom', request.countFrom);
    }
  }, [request]);

  return (
    <div className={classes.root}>
      <Container className={classes.start} wrapperClassName={classes['start-wrapper']}>
        <div className={classes.head}>
          {
            mode !== ExchangeModeEnum.HOW_TO_PAY && (
              <img src={ArrowLeftGreyShortImg} alt="" onClick={memoGoToMode('prev')} />
            )
          }
          <h3>
            {
              mode === ExchangeModeEnum.FORM ? `Обмен ${exchangeFormik.values.coinFrom.title} на ${exchangeFormik.values.coinTo.title}`
                : mode === ExchangeModeEnum.CHECK ? `Обмен ${exchangeFormik.values.coinFrom.title} на ${exchangeFormik.values.coinTo.title}`
                  : `Заявка ID ${requestId}`
            }
          </h3>
        </div>
        <div className={classes.warning}>
          <div className={classes['warning-title']}>
            <h4>Внимание!</h4>
          </div>
          <div className={classes['warning-text']}>
            <p className={classes.white}>
              Как только Ваши средства будут зачислены мы произведем оплату на указанные в заявке реквизиты. В связи с высокой волатильностью рынка, курс обновляется каждые 5 секунд.
            </p>
            <p className={classes.black}>Время для отправки криптовалюты составляет 15 минут, после этого времени заявка считается не актуальной и необходимо создать новую. Обращаем Ваше внимание, что курс фиксируется на момент зачисления криптовалюты на наш кошелек.</p>
            {/* <p className={classes.red}>Внимание! Будет проведена AML-проверка Вашей транзакции. При риске 90% и более заявка обрабатывается согласно правил п. 5.22. (потребуется дополнительная верификация)</p> */}
          </div>
        </div>
      </Container>
      <Container className={classes.calculator} wrapperClassName={classes['calculator-wrapper']}>
        {
          mode === ExchangeModeEnum.FORM && (
            <div className={classes['calculator-form']}>
              <div className={classes['calculator-form__item']}>
                <div className={classes['calculator-form__item-title']}>
                  <h5>Отдаете</h5>
                  <div>
                    <span>Курс обмена:</span>
                    <p>
                      1
                      {' '}
                      {exchangeFormik.values.coinFrom.unit}
                      {' '}
                      =
                      {' '}
                      {+exchangeFormik.values.countFrom * course.rate}
                      {' '}
                      {exchangeFormik.values.coinTo.unit}
                    </p>
                  </div>
                </div>
                <p className={classes['calculator-form__item-description']}>
                  Выберите валюту и введите сумму перевода:
                </p>
                <div className={classes['calculator-form__item-selectRow']}>
                  <Select
                    data={memoFromList}
                    onChange={memoSetExchangeDataFromSelect('coinFrom')}
                    value={exchangeFormik.values.coinFrom}
                  />
                  <input type="number" className="reverse" value={exchangeFormik.values.countFrom} onChange={memoSetExchangeDataFromInput('countFrom')} />
                </div>
                <div className={classes['calculator-form__item-info']}>
                  <p>
                    Минимальная сумма перевода
                    {' '}
                    {exchangeFormik.values.coinTo.minimalTransactionSum}
                    {' '}
                    {exchangeFormik.values.coinTo.unit}
                  </p>
                </div>
                <input className={clsx(userFormik.errors.email && 'invalid')} value={userFormik.values.email} onChange={memoSetUserDataFromInput('email')} type="text" placeholder="E-mail*" />
                <input className={clsx(userFormik.errors.phone && 'invalid')} value={userFormik.values.phone} onChange={memoSetUserDataFromInput('phone')} type="text" placeholder="Телефон*" />
                {/* <input onChange={memoSetUserDataFromInput('telegram')} type="text" placeholder="Telegram" /> */}
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
              <div className={classes['calculator-form__item']}>
                <div className={classes['calculator-form__item-title']}>
                  <h5>Получаете</h5>
                </div>
                <p className={classes['calculator-form__item-description']}>
                  Выберите валюту и введите сумму перевода:
                </p>
                <div className={classes['calculator-form__item-selectRow']}>
                  <Select
                    data={CURRENCY_LIST}
                    onChange={memoSetExchangeDataFromSelect('coinTo')}
                    value={exchangeFormik.values.coinTo}
                  />
                  <input type="number" value={exchangeFormik.values.countTo} readOnly className="reverse" />
                </div>
                <div className={classes['calculator-form__item-info']}>
                  <p>
                    Наш резерв:
                    {' '}
                    {exchangeFormik.values.coinTo.reserve}
                    {' '}
                    {exchangeFormik.values.coinTo.unit}
                  </p>
                </div>
                {
                  exchangeFormik.values.coinTo.isBtc ? (
                    <input className={clsx(exchangeFormik.errors.wallet && 'invalid')} onChange={memoSetExchangeDataFromInput('wallet')} type="text" placeholder="Кошелёк получателя" value={exchangeFormik.values.wallet} />
                  ) : (
                    <input className={clsx(exchangeFormik.errors.card && 'invalid')} onChange={memoSetExchangeDataFromInput('card')} type="number" placeholder="Номер карты получателя*" value={exchangeFormik.values.card === null ? '' : exchangeFormik.values.card} />
                  )
                }
                {/* <input className={clsx(userFormik.errors.fullname && 'invalid')} onChange={memoSetUserDataFromInput('fullname')} type="text" placeholder="ФИО получателя" /> */}
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
                    <p>{`${exchangeFormik.values.countFrom} ${exchangeFormik.values.coinFrom.title}`}</p>
                  </div>
                  <div className={clsx(classes['calculator-check__row-column__item'], classes.noColumn)}>
                    <img src={exchangeFormik.values.coinFrom.img} alt="" />
                    <p>{exchangeFormik.values.coinFrom.title || 'N/A'}</p>
                  </div>
                </div>
                <div className={classes['calculator-check__row-column']}>
                  <h4>Получаете</h4>
                  <div className={classes['calculator-check__row-column__item']}>
                    <span>Сумма:</span>
                    <p>
                      {exchangeFormik.values.countTo || 'N/A'}
                      {' '}
                      {exchangeFormik.values.coinTo.title || 'N/A'}
                    </p>
                  </div>
                  <div className={clsx(classes['calculator-check__row-column__item'], classes.noColumn)}>
                    <img src={exchangeFormik.values.coinTo.img} alt="" />
                    <p>{exchangeFormik.values.coinTo.title || 'N/A'}</p>
                  </div>
                  {
                    exchangeFormik.values.coinFrom.isBtc ? (
                      <div className={classes['calculator-check__row-column__item']}>
                        <span>На кошелёк:</span>
                        <p>{exchangeFormik.values.wallet || 'N/A'}</p>
                      </div>
                    ) : (
                      <div className={classes['calculator-check__row-column__item']}>
                        <span>На счет:</span>
                        <p>{exchangeFormik.values.card}</p>
                      </div>
                    )
                  }
                  <div className={classes['calculator-check__row-column__item']}>
                    <span>ФИО получателя:</span>
                    <p>{userFormik.values.fullname || 'N/A'}</p>
                  </div>
                </div>
              </div>
              <div className={classes['calculator-check__row']}>
                <div className={classes['calculator-check__row-column']}>
                  <h4>Личные данные</h4>
                  <div className={clsx(classes['calculator-check__row-column__item'])}>
                    <span>Номер моб. телефона:</span>
                    <p>{userFormik.values.phone || 'N/A'}</p>
                  </div>
                  <div className={clsx(classes['calculator-check__row-column__item'])}>
                    <span>E-mail:</span>
                    <p>{userFormik.values.email || user?.email || 'N/A'}</p>
                  </div>
                  <div className={clsx(classes['calculator-check__row-column__item'])}>
                    <span>Telegram:</span>
                    <p>{userFormik.values.telegram || user?.telegram || 'N/A'}</p>
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
                  {exchangeFormik.values.coinFrom.title}
                  {' '}
                  на этот кошелек:
                </p>
                <div>
                  <img src={CopyImg} alt="" />
                  <span>{exchangeFormik.values.coinFrom.wallet}</span>
                </div>
              </div>
              {/* <img src={QrCodeImg} alt="" /> */}
              <p className={classes['calculator-howToPay__afterPay']}>
                <span>После оплаты:</span>
                {' '}
                Нажмите на кнопку «Я оплатил заявку». И ожидайте обработку заявки
              </p>
              <div className={classes['calculator-howToPay__sum']}>
                <div>
                  <span>Сумма платежа:</span>
                  <p>{`${request?.countFrom} ${request?.coinFrom}`}</p>
                </div>
                <div>
                  <span>Сумма к получению:</span>
                  <p>{`${request?.countTo} ${request?.coinTo}`}</p>
                </div>
              </div>
              <div className={classes['calculator-howToPay__warning']}>
                <span>Пожалуйста, будьте внимательны!</span>
                <p>Все поля должны быть заполнены в точном соответствии с инструкцией. В противном случае, платеж может не пройти.</p>
              </div>
              <div className={classes['calculator-howToPay__info']}>
                <div>
                  <span>Время создания:</span>
                  <p>{memoCreationDate}</p>
                </div>
                <div>
                  <span>Статус заявки:</span>
                  <p>{requestStatus}</p>
                </div>
              </div>
            </div>
          )
        }
        <Button onClick={memoGoToMode('next')} color={ButtonColorEnum.GREEN}>
          {
            mode === ExchangeModeEnum.FORM ? 'Обменять'
              : mode === ExchangeModeEnum.CHECK ? 'Создать заявку'
                : 'Я оплатил заявку'
          }
        </Button>
        {
          submitError && (
            <span className={classes.submitError}>{submitError}</span>
          )
        }
      </Container>
      {
        mode === ExchangeModeEnum.FORM && (
          <Container className={classes.end} wrapperClassName={classes['end-wrapper']}>
            <h4>
              Обмен
              {' '}
              {exchangeFormik.values.coinFrom.title}
              {' '}
              на
              {' '}
              {exchangeFormik.values.coinTo.title}
            </h4>
            <p>Для обмена Вам необходимо выполнить несколько шагов:</p>
            <ul>
              <li>1. Заполните все поля представленной формы. Нажмите кнопку «ОБМЕНЯТЬ».</li>
              <li>2. Ознакомьтесь с условиями договора на оказание услуг обмена, если вы принимаете их, поставьте галочку в соответствующем поле/нажмите кнопку «Принимаю» («Согласен»). Еще раз проверьте данные заявки.</li>
              <li>3. Оплатите заявку. Для этого следует совершить перевод необходимой суммы, следуя инструкциям на нашем сайте.</li>
              <li>4. После выполнения указанных действий, система переместит Вас на страницу «Состояние заявки», где будет указан статус вашего перевода.</li>
            </ul>
          </Container>
        )
      }
    </div>
  );

  function goToMode(direction: 'next' | 'prev') {
    return async () => {
      if (direction === 'next') {
        if (mode === ExchangeModeEnum.FORM) {
          if (user || (userFormik.values.email && userFormik.values.phone)) exchangeFormik.submitForm();
          else userFormik.validateForm();
        } else if (mode === ExchangeModeEnum.CHECK) {
          try {
            try {
              // if (!user || (!userFormik.values.email || !userFormik.values.phone)) {
              //   userFormik.validateForm();
              //   return;
              // }
              const { _id: requestId } = await createRequest(token, {
                ...exchangeFormik.values,
                ...userFormik.values,
              });
              history.replace(`/exchange/${requestId}`);
              setRequestId(requestId);
              setMode(ExchangeModeEnum.HOW_TO_PAY);
            } catch (e) {
              console.error();
            }
          } catch (e) {
            setSubmitError('Произошла ошибка при создании заявки');
          }
        } else if (mode === ExchangeModeEnum.HOW_TO_PAY) {
          setRequestStatus(RequestStatusEnum.WAITING_FOR_CONFIRM);
          await updateRequest(token, requestId || '', {
            status: RemoteRequestStatusEnum.PROCESSING,
          });
        }
      } else if (mode === ExchangeModeEnum.CHECK) setMode(ExchangeModeEnum.FORM);
      else try { history.replace('/'); } catch (e) { console.log(e); }
    };
  }

  function handleSetUserDataFromInput(key: keyof UserFormData): { (event: React.ChangeEvent<HTMLInputElement>): void } {
    return (event) => {
      const { value } = event.target;
      userFormik.setFieldValue(key, value);
    };
  }

  function handleSetExchangeDataFromSelect(key: keyof ExchangeFormData): { (value: CurrencyDataItemWithWallet | number | null): void } {
    return (value) => {
      exchangeFormik.setFieldValue(key, value);
    };
  }
  function handleSetExchangeDataFromInput(key: keyof ExchangeFormData): { (event: React.ChangeEvent<HTMLInputElement>): void } {
    return (event) => {
      const { value } = event.target;
      exchangeFormik.setFieldValue(key, value);
    };
  }
};

export default Exchange;
