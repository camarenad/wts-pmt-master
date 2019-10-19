import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Test from '../Test';

class App extends Component {
  constructor() {
    super();
    this.state = { user: true, role: 'admin' };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route>
            <Route
              exact
              path='/'
              render={props =>
                this.state.user && this.state.role === 'admin' ? (
                  <React.Fragment>
                    <NavBar {...props} />
                  </React.Fragment>
                ) : this.state.user && this.state.role === 'manager' ? (
                  <React.Fragment>
                    <h1>Manager View</h1>
                  </React.Fragment>
                ) : this.state.user && this.state.role === 'tech' ? (
                  <React.Fragment>
                    <h1>tech view</h1>
                  </React.Fragment>
                ) : (
                  <h1>sorry</h1>
                )
              }
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
