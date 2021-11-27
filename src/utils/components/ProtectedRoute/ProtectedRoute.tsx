import React, {
  FC, useContext,
} from 'react';
import {
  Redirect,
  Route,
  RouteProps,
} from 'react-router-dom';
import ROUTES from '../../../const/routes';

const ProtectedRoute: FC<RouteProps> = ({ ...rest }) => {
  // const [auth] = useContext(AuthContext);
  const auth = false;
  return (
    auth ? (
      <Route
        {...rest}
      />
    ) : <Redirect to={ROUTES.HOME} />
  );
};

export default ProtectedRoute;
