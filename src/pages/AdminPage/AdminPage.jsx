import React, { Component } from 'react';
import { Grid, Button, Divider, TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AdminComponent from '../../components/AdminComponent/AdminComponent';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import firebase from '../../firebase/firebase';
import 'firebase/auth';
import DropdownComponent from '../../components/DropdownComponent/DropdownComponent';
import getDate from '../../utils/getDate';

const reportList = [];
let updatedList = [];
const db = firebase.firestore();

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePagination = this.handlePagination.bind(this);

    this.state = {
      id: '',
      pagination: '',
      address: '',
      reports: null,
      bidArea: '',
      user: firebase.auth().currentUser,
      todaysDate: getDate()
    };
  }
  handlePagination(e) {
    let lastVisible = '';
    e.preventDefault();
    console.log('run');
    const self = this;
    var next = this.state.pagination;
    var nextSeven = db
      .collection('job-completion-report')
      .orderBy('date', 'desc')
      .where('bidZone', '==', `${this.state.bidArea.toString()}`)
      .limit(7)
      .startAfter(next);
    nextSeven.get().then(querySnapshot => {
      querySnapshot.forEach(function(doc) {
        updatedList.push(doc.data());
        self.setState({
          pagination: doc,
          reports: [...updatedList]
        });
      });
    });
  }
  async handleSubmit(e) {
    const self = this;
    e.preventDefault();
    if (!this.state.bidArea && !this.state.date) {
      alert('Please enter a search item');
    } else if (this.state.bidArea && !this.state.date) {
      let lastVisible = '';
      updatedList = [];
      const reports = db
        .collection('job-completion-report')
        .where('bidZone', '==', `${this.state.bidArea.toString()}`)
        .orderBy('date', 'desc')
        .limit(7);
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
            lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
          }
        })
        .catch(function(e) {
          console.log(e);
        })
        .finally(function() {
          self.setState({
            reports: [...updatedList],
            pagination: lastVisible
          });
        });
    } else if (this.state.bidArea && this.state.date) {
      // alert('run')
      updatedList = [];
      let lastVisible = '';
      var reports = db.collection('job-completion-report');
      reports = reports.where(
        'bidZone',
        '==',
        `${this.state.bidArea.toString()}`
      );
      reports = reports
        .where('date', '==', `${this.state.date.toString()}`)
        .limit(5);
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
            lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
          }
        })
        .catch(function(e) {
          console.log(e);
        })
        .finally(function() {
          self.setState({
            reports: [...updatedList],
            pagination: lastVisible
          });
        });
    }
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount = async () => {};
  componentDidUpdate(nextProps, nextState) {
    return this.state.reports !== nextState.reports;
  }

  render() {
    return (
      <Container>
        <h1
          style={{
            textAlign: 'center',
            marginBottom: 25,
            marginTop: 25,
            padding: 20
          }}
        >
          Job Completion Reports
        </h1>
        <Divider style={{ marginBottom: 20 }} />
        <Grid item xs={12}>
          <DropdownComponent
            handleChange={this.handleChange}
            bidArea={this.state.bidArea}
          />
          <TextField
            style={{ margin: '10px 0' }}
            id='date'
            label='Date'
            type='date'
            name='date'
            onChange={this.handleChange}
            helperText='Search by date'
            InputLabelProps={{
              shrink: true
            }}
          />
          {/* <FilterComponent
            label='ID'
            handleChange={this.handleChange}
            name='id'
          /> */}
          {/* <FilterComponent
            label='Address'
            handleChange={this.handleChange}
            name='address'
          /> */}
          {/* <FilterComponent
            label='Tech'
            handleChange={this.handleChange}
            name='tech'
          /> */}
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
          {this.state.pagination ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={this.handlePagination}
                variant='contained'
                margin='normal'
                color='primary'
                type='submit'
              >
                Next 7
              </Button>
            </div>
          ) : (
            ''
          )}
        </Grid>
      </Container>
    );
  }
}

export default AdminPage;
