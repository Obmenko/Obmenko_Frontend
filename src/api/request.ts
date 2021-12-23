/* eslint-disable camelcase */
import axios from 'axios';
import { CurrencyDataItemWithWallet } from '@/const/currencies_list';
import { CourseData, CurrencyUnitEnum } from '@/types/exchange';
import { getAuthHeaders } from './user';

const API_BASE = process.env.REACT_APP_API_BASE;

export enum RemoteRequestStatusEnum {
  NEW = 'new',
  PAYED = 'payed',
  PROCESSING = 'processing',
  CANCELLED = 'cancelled',
  REJECTED = 'rejected'
}

export type RequestType = {
  _id: string,
  coinFrom: CurrencyUnitEnum,
  coinTo: CurrencyUnitEnum,
  countTo: string | number,
  countFrom: string | number
  userId: string;
  status: RemoteRequestStatusEnum,
  wallet?: string,
  card?: string,
  createdAt?: number;
};

export interface ICreateRequest extends Omit<RequestType, '_id' | 'status' | 'createdAt' | 'coinFrom' | 'coinTo' | 'userId'> {
  coinTo: CurrencyDataItemWithWallet,
  coinFrom: CurrencyDataItemWithWallet,
  email?: string,
  phone?: string | number,
  wallet?: string,
  card?: string
}
export type IUpdateRequest = Partial<Pick<RequestType, 'status'>>

export const createRequest = (
  token: string,
  data: ICreateRequest,
): Promise<RequestType> => axios({
  method: 'POST',
  url: `${API_BASE}/request`,
  headers: getAuthHeaders(token),
  data,
}).then((res) => res.data);

export const deleteRequest = (
  token: string,
): Promise<RequestType> => axios({
  method: 'DELETE',
  url: `${API_BASE}/request`,
  headers: getAuthHeaders(token),
}).then((res) => res.data);

export const getRequestList = (
  token: string,
): Promise<RequestType[]> => axios({
  method: 'GET',
  url: `${API_BASE}/request`,
  headers: getAuthHeaders(token),
}).then((res) => res.data);

export const getRequestById = (
  token: string,
  id: string,
): Promise<RequestType> => axios({
  method: 'GET',
  url: `${API_BASE}/request/${id}`,
  headers: getAuthHeaders(token),
}).then((res) => res.data);

export const updateRequest = (
  token: string,
  id: string,
  data: IUpdateRequest,
): Promise<RequestType> => axios({
  method: 'PUT',
  url: `${API_BASE}/request/${id}`,
  headers: getAuthHeaders(token),
  data,
}).then((res) => res.data);
