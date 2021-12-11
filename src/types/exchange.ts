/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
export enum CurrencyUnitEnum {
  BTC = 'BTC',
  ETH = 'ETH',
  XRP = 'XRP',
  BNB = 'BNB',
  LTC = 'LTC',
  MATIC = 'MATIC',
  XLM = 'XLM',
  TRX = 'TRX',
  ATOM = 'ATOM',
  DASH = 'DASH',
  DOGE = 'DOGE',
  WAVES = 'WAVES',
  SOL = 'SOL',
  RUB = 'RUB',
  USDT = 'USDT',
}

export type CourseData = {
  from: CurrencyUnitEnum,
  to: CurrencyUnitEnum,
  rate: number,
  feePercent: number
}
