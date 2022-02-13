import React, {
  FC, useContext, useEffect,
} from 'react';
import {
  Route,
  RouteProps,
} from 'react-router-dom';
import AuthContext from '@/context/auth';
import ModalContext, { ModalTypeEnum } from '@/context/modal';
import { AuthModalModeEnum } from '@/components/AuthModal/AuthModal';

const ProtectedRoute: FC<RouteProps> = ({ ...rest }) => {
  const { token } = useContext(AuthContext);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    if (!token) {
      openModal(ModalTypeEnum.AUTH, {
        mode: AuthModalModeEnum.LOGIN,
      })({
        isClosingDisabled: true,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Route
      {...rest}
    />
  );
};

export default ProtectedRoute;
