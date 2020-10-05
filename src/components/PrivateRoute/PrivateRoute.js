import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const {loggedInUser} = useContext(userContext);
    const [loggedInUserValue , setLoggedInUserValue] = loggedInUser;
    
    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedInUserValue.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;