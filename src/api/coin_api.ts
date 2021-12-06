/* eslint-disable camelcase */
import axios from 'axios';
import { CurrencyUnitEnum } from '@/types/exchange';

const COIN_API_BASE = process.env.REACT_APP_COIN_API_BASE;
const COIN_API_KEY = process.env.REACT_APP_COIN_API_KEY || '';

type OExchangePair = {
  time: string,
  asset_id_base: string,
  asset_id_quote: string,
  rate: number,
}

/* eslint-disable import/prefer-default-export */
export const getExchangePair = (
  from: CurrencyUnitEnum, to: CurrencyUnitEnum,
): Promise<OExchangePair> => axios({
  method: 'GET',
  url: `${COIN_API_BASE}/exchangerate/${from}/${to}`,
  headers: {
    'X-CoinAPI-Key': COIN_API_KEY,
  },
}).then((res) => res.data);
