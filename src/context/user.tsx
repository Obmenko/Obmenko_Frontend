/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { UserType } from '@/api/user';

export type UserContextType = {
  user: UserType | null
  setUser: { (user: UserType | null): void }
};

const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
