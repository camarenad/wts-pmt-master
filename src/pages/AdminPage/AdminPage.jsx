import React, { Component } from 'react';
import { Grid, Button, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AdminComponent from '../../components/AdminComponent/AdminComponent';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import firebase from '../../firebase/firebase';

const reportList = [];

class AdminPage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { id: '', address: '', reports: null };
  }
  handleSubmit = e => {
    console.log('sweet');
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount = async () => {
    const self = this;
    const db = firebase.firestore();
    const reports = db.collection('job-completion-report');
    reports.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        reportList.push(doc.data());
        self.setState({
          reports: reportList
        });
      });
    });
  };
  render() {
    return (
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: 25, marginTop: 25 }}>
          Job Completion Reports
        </h1>
        <Divider style={{ marginBottom: 20 }} />
        <Grid item xs={12}>
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
          <Grid item xs={12} style={{marginTop:50}}>
          <AdminComponent reports={this.state.reports} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default AdminPage;
