import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Dialog, Container, TextField } from '@material-ui/core';
import useStyles from './styles';
import { UserContext } from '../../contexts/UserContext';
import { signIn, signOut } from '../../services/authService';

const AuthButton = () => {
  const classes = useStyles();
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
    console.log('hitting');
    e.preventDefault();
    await signIn(formData);
    toggelOpen();
    dispatch({ type: 'SIGN_IN' });
  };

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
