import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Dialog, Container, TextField } from '@material-ui/core';
import useStyles from './styles';
import { UserContext } from '../../contexts/UserContext';
import { signIn, signOut } from '../../services/authService';
import { test } from '../../services/userService';
import axios from 'axios';

const AuthButton = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user, dispatch } = useContext(UserContext);
  const [isOpen, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // console.log(user);
  // useEffect(() => {}, []);

  const toggelOpen = () => setOpen((prev) => !prev);

  const handelLogout = (e) => {
    e.preventDefault();
    signOut();
  };

  const handelSignIn = async (e) => {
    const API_URL = 'http://localhost:3000/user/';
    try {
      //console.log('user in authService is: ', user);
      const response = await axios.post(`${API_URL}signin`, formData);

      if (response.data.accessToken) {
        //console.log('response in signIn authService is: ', response);
        localStorage.setItem('user', JSON.stringify(response.data));
        await dispatch({ type: 'SIGN_IN' });
        console.log('user', user);
      }
    } catch (error) {
      console.log('err in authService signIn: ', error);
    }
    console.log('user', user);
    // signIn(formData);
    console.log('hitting');
    toggelOpen();
    // dispatch({ type: 'SIGN_IN' });
  };

  // useEffect(() => {
  //   if (user !== {}) {
  //     console.log(user.decodedToken.type);
  //     history.push(`/${user.decodedToken.type}`);
  //   }
  // }, [user]);

  return false ? (
    <Button variant="outlined" onClick={handelLogout}>
      Log out
    </Button>
  ) : (
    <>
      <Button variant="outlined" onClick={toggelOpen}>
        Sign in
      </Button>
      <Dialog open={isOpen} onBackdropClick={toggelOpen}>
        <Container component="main" maxWidth="xs">
          <form>
            <TextField
              name="email"
              variant="outlined"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <TextField
              name="password"
              variant="outlined"
              label="Password"
              // type={fieldType}
              fullWidth
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <Button onClick={handelSignIn}>Sign In</Button>
          </form>
        </Container>
      </Dialog>
    </>
  );
};

export default AuthButton;
