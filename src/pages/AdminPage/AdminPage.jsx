import React, { Component } from 'react';
import { Grid, Button, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AdminComponent from '../../components/AdminComponent/AdminComponent';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import firebase from '../../firebase/firebase';
import 'firebase/auth';
import DropdownComponent from '../../components/DropdownComponent/DropdownComponent';

const reportList = [];
let updatedList = [];

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      id: '',
      address: '',
      reports: null,
      bidArea: '',
      user: firebase.auth().currentUser
    };
  }

  handleSubmit(e) {
    // Add Search by tech name query
    // error handling
    e.preventDefault();
    if (this.state.id) {
      const self = this;
      const db = firebase.firestore();
      const reports = db
        .collection('job-completion-report')
        .where('jobId', '==', `${this.state.id.toString()}`)
        .orderBy('date', 'desc');
      reports
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            alert('ID does not exist');
            window.location = '/';
          } else {
            querySnapshot.forEach(function(doc) {
              updatedList.push(doc.data());
            });
          }
        })
        .catch(function(e) {
          console.log(e);
        })
        .finally(function() {
          self.setState(
            {
              reports: updatedList
            },
            () => {
              updatedList = [];
            }
          );
        });
    } else if (this.state.address) {
      const self = this;
      const db = firebase.firestore();
      const reports = db
        .collection('job-completion-report')
        .where('jobLocation', '==', `${this.state.address.toString()}`)
        .orderBy('date', 'desc');
      reports
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            alert('Address does not exist');
            window.location = '/admin';
          } else {
            querySnapshot.forEach(function(doc) {
              updatedList.push(doc.data());
            });
          }
        })
        .catch(function(e) {
          console.log(e);
        })
        .finally(function() {
          self.setState(
            {
              reports: updatedList
            },
            () => {
              updatedList = [];
            }
          );
        });
    } else if (this.state.tech) {
      const self = this;
      const db = firebase.firestore();
      const reports = db
        .collection('job-completion-report')
        .where('name', '==', `${this.state.tech.toString()}`)
        .orderBy('date', 'desc')
      reports
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            alert('Tech does not exist');
            window.location = '/admin';
          } else {
            querySnapshot.forEach(function(doc) {
              updatedList.push(doc.data());
            });
          }
        })
        .catch(function(e) {
          console.log(e);
        })
        .finally(function() {
          self.setState(
            {
              reports: updatedList
            },
            () => {
              updatedList = [];
            }
          );
        });
    } else if (this.state.bidArea) {
      const self = this;
      const db = firebase.firestore();
      const reports = db
        .collection('job-completion-report')
        .where('bidZone', '==', `${this.state.bidArea.toString()}`)
        .orderBy('date', 'desc');
      reports
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            alert('Resource does not exist');
            window.location = '/admin';
          } else {
            querySnapshot.forEach(function(doc) {
              updatedList.push(doc.data());
            });
          }
        })
        .catch(function(e) {
          console.log(e);
        })
        .finally(function() {
          self.setState(
            {
              reports: updatedList
            },
            () => {
              updatedList = [];
            }
          );
        });
    } else if (
      !this.state.id &&
      !this.state.address &&
      !this.state.tech &&
      !this.state.bidArea
    ) {
      alert('Please enter a search parameter');
    } else {
      window.location = '/';
    }
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount = async () => {
    const self = this;
    const db = firebase.firestore();
    const reports = db
      .collection('job-completion-report')
      .orderBy('date', 'desc')
      .limit(5);
    reports
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          reportList.push(doc.data());
          self.setState({
            reports: reportList
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidUpdate(nextProps, nextState) {
    return this.state.reports !== nextState.reports;
  }
  render() {
    return (
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: 25, marginTop: 25 }}>
          Job Completion Reports
        </h1>
        <Divider style={{ marginBottom: 20 }} />
        <Grid item xs={12}>
          <DropdownComponent
            handleChange={this.handleChange}
            bidArea={this.state.bidArea}
          />
          <FilterComponent
            label='ID'
            handleChange={this.handleChange}
            name='id'
          />
          <FilterComponent
            label='Address'
            handleChange={this.handleChange}
            name='address'
          />
          <FilterComponent
            label='Tech'
            handleChange={this.handleChange}
            name='tech'
          />
          <form onSubmit={this.handleSubmit}>
            <div style={{ textAlign: 'center' }}>
              <Button
                variant='contained'
                margin='normal'
                color='primary'
                type='submit'
              >
                Submit
              </Button>
            </div>
          </form>
          <Grid item xs={12} style={{ marginTop: 50 }}>
            <AdminComponent
              user={firebase.auth().currentUser}
              reports={this.state.reports}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default AdminPage;
