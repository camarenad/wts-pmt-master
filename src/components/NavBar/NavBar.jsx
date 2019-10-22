import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';

const NavBar = props => {
  const menuMargin = {
    height: '50px'
  };
  let nav = props.user ? (
    <div>
      <AppBar
        position='static'
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={props.handleToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' style={{ flexGrow: 1, textAlign: 'center' }}>
            Wireless Tech
          </Typography>
          <Button onClick={props.handleLogout} color='inherit'>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={props.state} onClose={props.handleToggle}>
        <div style={{ width: 250 }}>
          <MenuItem href='/test' style={menuMargin}>
            <a href='/test'>View Job Completion Forms</a>
          </MenuItem>
          <MenuItem style={menuMargin}>Upload Work Order</MenuItem>
        </div>
      </Drawer>
    </div>
  ) : (
    <div>
      <AppBar
        position='fixed'
        style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around' }}
      >
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1, textAlign: 'center' }}>
            Wireless Tech
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
  return nav;
};

export default NavBar;
