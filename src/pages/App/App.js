import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Test from '../Test';
import LoginPage from '../LoginPage/LoginPage';
import IndexView from '../IndexView/IndexView'

class App extends Component {
  constructor() {
    super();
    this.state = { user: true, role: 'admin' };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route
              exact
              path='/'
              render={props =>
               <LoginPage />
              }
            />
            <Route
              exact
              path='/'
              render={props =>
               <IndexView />
              }
            />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
