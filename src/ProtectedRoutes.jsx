import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebase from 'firebase/firebase-auth';

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
     firebase.auth().currentUser() 
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )

  export default PrivateRoute;