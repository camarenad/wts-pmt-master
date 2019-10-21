import React, { Component } from 'react';
import { Grid, Button, Box, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AdminComponent from '../../components/AdminComponent/AdminComponent';
import FilterComponent from '../../components/FilterComponent/FilterComponent';

class AdminPage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = e => {
    console.log('sweet');
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  state = {};
  render() {
    return (
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: 25, marginTop: 25 }}>
          Filter Job Completion Reports
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
            <AdminComponent />
          </form>
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
        </Grid>
      </Container>
    );
  }
}

export default AdminPage;
