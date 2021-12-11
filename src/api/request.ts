/* eslint-disable camelcase */
import axios from 'axios';
import { CurrencyDataItemWithWallet } from '@/const/currencies_list';
import { CourseData } from '@/types/exchange';

const TG_API_BASE = process.env.REACT_APP_API_TG_BASE;

type OCreateRequest = {
  message: string
  success: boolean
}

export type ICreateRequest = {
  fromSelected: CurrencyDataItemWithWallet,
  toSelected: CurrencyDataItemWithWallet,
  to: string | number,
  from: string | number
  card: number | null;
  wallet: string;
  phone: number | null;
  email: string;
  telegram: string;
  fullname: string;
  course: CourseData
}

/* eslint-disable import/prefer-default-export */
export const createRequest = (
  data: ICreateRequest,
): Promise<OCreateRequest> => axios({
  method: 'POST',
  url: `${TG_API_BASE}/request`,
  data,
}).then((res) => res.data);
