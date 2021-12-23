import axios from 'axios';
import { HeadersMapEnum } from '@/types/config';

const API_BASE = process.env.REACT_APP_API_BASE;

export type UserType = {
  _id: string,
  token: string,
  email: string,
  username: string,
  fullname?: string,
  telegram?: string,
  phone?: string,
}

export const getAuthHeaders = (token: string) => ({
  [HeadersMapEnum.AUTH_TOKEN]: token,
});

export type ICreateUser = Pick<UserType, 'email' | 'username'> & { password: string }
export type IUpdateUser = Partial<Omit<UserType, 'token' | 'password' | '_id'>>
export type IUserAuth = {
  email: string,
  password: string
}

export const getUser = (
  token: string,
): Promise<UserType> => axios({
  method: 'GET',
  url: `${API_BASE}/user`,
  headers: getAuthHeaders(token),
}).then((res) => res.data);

export const createUser = (
  data: ICreateUser,
): Promise<UserType> => axios({
  method: 'POST',
  url: `${API_BASE}/user`,
  data,
}).then((res) => res.data);

export const updateUser = (
  token: string,
  data: IUpdateUser,
): Promise<UserType> => axios({
  method: 'PUT',
  url: `${API_BASE}/user`,
  headers: getAuthHeaders(token),
  data,
}).then((res) => res.data);

export const authUser = (
  data: IUserAuth,
): Promise<UserType> => axios({
  method: 'POST',
  url: `${API_BASE}/user/auth`,
  data,
}).then((res) => res.data);
