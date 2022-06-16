/* eslint-disable camelcase */
import axios from 'axios';
import { CurrencyUnitEnum } from '@/types/exchange';

type OExchangePair = {
  rate: number,
}

/* eslint-disable import/prefer-default-export */
export const getExchangePair = (
  from: CurrencyUnitEnum, to: CurrencyUnitEnum,
): Promise<OExchangePair> => axios({
  method: 'GET',
  url: `${process.env.REACT_APP_API_BASE}/currency/${from}/${to}`,
}).then((res) => res.data);
