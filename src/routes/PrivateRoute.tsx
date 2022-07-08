import React from 'react';
import { RouteProps, useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from 'store';
import { selectUsername } from 'store/userSlice/selectors';

type PrivateRouteProps = {
  component: React.FC<any>;
  requirement?: boolean;
} & RouteProps;

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  requirement = true,
  ...routeProps
}) => {
  const location = useLocation();
  const user = useAppSelector(selectUsername);

  if (!user) {
    return <Navigate to="/" state={{ from: location.pathname }} />;
  }

  return <Component isLoading={!requirement} {...routeProps} />;
};

export default PrivateRoute;
