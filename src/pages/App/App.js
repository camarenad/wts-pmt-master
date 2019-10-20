import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Test from '../Test';
import LoginPage from '../LoginPage/LoginPage';
import IndexView from '../IndexView/IndexView';
import firebase from '../../firebase/firebase';
import 'firebase/auth';

class App extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      user: firebase.auth().currentUser
    };
  }
  componentDidMount = async () => {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  };
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
  };
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            exact
            path='/'
            render={({ history }) => (
              <LoginPage history={history} handleLogin={this.handleLogin} />
            )}
          />
          <Route exact path='/admin' render={props => <IndexView props={props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
