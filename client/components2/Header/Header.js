import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Avatar,
  Dialog,
  Grid,
} from '@material-ui/core';
import Auth from '../Auth/Auth';
import useStyles from './styles';

const Header = () => {
  const [openAuth, setOpenAuth] = useState(false);

  const classes = useStyles();

  const logout = () => {};

  const user = true;

  const toggleAuth = () => setOpenAuth((prev) => !prev);

  return (
    <AppBar className={classes.appBar} position="sticky" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          // component={Link}
          // to="/"
          className={classes.heading}
          variant="h6"
        >
          TAGinc Client-Portal
        </Typography>
        {/* <img src={logo} alt="logo" height="60" /> */}
      </div>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Typography className={classes.username}>User Name</Typography>
            <Typography className={classes.userCompany}>
              &lt; Company Name
            </Typography>
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="contained" color="primary" onClick={toggleAuth}>
            signIn
          </Button>
        )}
      </Toolbar>

      {/* <Grid container>
        <Grid item xs={12} md={6}>
        </Grid>
        <Grid item xs={12} md={6} >
        </Grid>
      </Grid> */}

      <Dialog open={openAuth} onBackdropClick={toggleAuth}>
        <Auth toggleAuth={toggleAuth} />
      </Dialog>
    </AppBar>
  );
};

export default Header;

// localStorage.setItem('profile', JSON.stringify({...action?.data}));

// const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
