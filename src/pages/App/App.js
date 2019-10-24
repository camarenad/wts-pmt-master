import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import AdminPage from '../AdminPage/AdminPage';
import firebase from '../../firebase/firebase';

import 'firebase/auth';

class App extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      user: null,
      toggleMenu: false
    };
  }
  componentDidMount = () => {
    var self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        self.setState({ user });
      } else {
        // No user is signed in.
        alert('no user');
      }
    });
  };
  handleToggle = () => this.setState({ toggleMenu: !this.state.toggleMenu });
  handleLogin = async () => {
    var user = await firebase.auth().currentUser;
    this.setState({ user: user });
  };
  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        console.log('signout works');
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
    window.location = '/';
  };

  render() {
    return (
      <BrowserRouter>
        <NavBar
          user={firebase.auth().currentUser}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={({ history }) =>
              !firebase.auth().currentUser ? (
                <LoginPage history={history} handleLogin={this.handleLogin} />
              ) : (
                <Redirect to='/admin' />
              )
            }
          />
          <Route
            exact
            path='/admin'
            render={props =>
              firebase.auth().currentUser ? (
                <AdminPage {...props} />
              ) : (
                <Redirect to='/' />
              )
            }
          />
          <Route path='*'>
            <Redirect to='/'></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
