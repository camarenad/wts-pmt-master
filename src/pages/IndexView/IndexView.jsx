import React, { Component } from 'react';
import firebase from '../../firebase/firebase';
import IndexViewComponent from '../../components/IndexView/indexViewComponent';

class IndexView extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      data: 'This is some data'
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <h1>
        <IndexViewComponent data={this.state.data} user={this.state.user}  />
      </h1>
    );
  }
}

export default IndexView;
