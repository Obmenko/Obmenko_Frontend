/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

export type AuthContextType = {
  token: string;
  setToken: { (token: string): void }
}

const AuthContext = React.createContext<AuthContextType>({
  token: '',
  setToken: () => {},
});

export default AuthContext;
