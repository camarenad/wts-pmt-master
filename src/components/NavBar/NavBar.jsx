import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';




class NavBar extends Component {
  constructor() {
    super();
    this.state = { open: false , user:'', role:''};
  }
componentDidMount(){
    this.setState({
        user:this.props.user,
        role:this.props.role
    })
}
  handleToggle = () => this.setState({ open: !this.state.open });
  render() {
    const menuMargin = {
      height: '50px'
    };
    return (
      <div>
        <AppBar
          position='static'
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'space-around'
            // background: 'red'
          }}
        >
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={this.handleToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              style={{ flexGrow: 1, textAlign: 'center' }}
            >
              Wireless Tech
            </Typography>
            <Button color='inherit'>Log Out</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.open}
          classes={this.state.width}
          onClose={this.handleToggle}
        >
          <div style={{ width: 250 }}>
            <MenuItem style={menuMargin}>View Job Completion Forms</MenuItem>
            <MenuItem style={menuMargin}>Upload Work Order</MenuItem>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
