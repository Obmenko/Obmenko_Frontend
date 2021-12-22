import axios from 'axios';
import { CurrencyDataItemWithWallet } from '@/const/currencies_list';
import { CourseData } from '@/types/exchange';

const API_BASE = process.env.REACT_APP_API_TG_BASE;

type OCreateRequest = {
  message: string
  success: boolean
}

export type ICreateRequest = {
  coinFrom: CurrencyDataItemWithWallet,
  coinTo: CurrencyDataItemWithWallet,
  countTo: string | number,
  countFrom: string | number
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
  url: `${API_BASE}/request`,
  data,
}).then((res) => res.data);
