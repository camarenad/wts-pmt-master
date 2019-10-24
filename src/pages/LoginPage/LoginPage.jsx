import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase/firebase';
import 'firebase/auth';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
   handleSubmit = async  e => {
    e.preventDefault();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.pw)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });
      this.props.handleLogin();
      this.newMethod();
    } catch (err) {
      console.log(err);
    }
  };
  newMethod() {
    this.props.history.push('/admin');
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='center'
          style={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap' }}
        >
          <Grid item xs={12}>
            <Paper
              style={{
                height: '400px',
                width: '70vw',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 40,
                paddingBottom: 40
              }}
            >
              <Grid item xs={12}>
                <Typography style={{ textAlign: 'center' }} variant='h5'>
                  Log In
                </Typography>
              </Grid>
              <form onSubmit={this.handleSubmit}>
                <Grid
                  item
                  xs={12}
                  container
                  spacing={0}
                  direction='column'
                  alignItems='center'
                  justify='center'
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginTop: 40
                  }}
                >
                  <TextField
                    id='outlined-email-input'
                    label='Email'
                    type='email'
                    name='email'
                    autoComplete='email'
                    margin='normal'
                    variant='outlined'
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  spacing={0}
                  direction='column'
                  alignItems='center'
                  justify='center'
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                  }}
                >
                  <TextField
                    id='outlined-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                    margin='normal'
                    variant='outlined'
                    name='pw'
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  spacing={0}
                  direction='column'
                  alignItems='center'
                  justify='center'
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                  }}
                >
                  <Button
                    variant='contained'
                    margin='normal'
                    color='primary'
                    type='submit'
                    style={{ marginTop: '5vh' }}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default LoginPage;
