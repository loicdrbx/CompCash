import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../providers/Auth';

const PrivateRoute = ({ component: RoutComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ?
          <RoutComponent {...routeProps} />
          :
          <Redirect to={"/signIn"} />
      }
    />
  );
}

export default PrivateRoute;