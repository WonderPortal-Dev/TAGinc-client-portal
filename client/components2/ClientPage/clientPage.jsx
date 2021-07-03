import React, { useState } from 'react';
import { Typography, Container, TextField, Button } from '@material-ui/core';
import Form from '../Form/Form';
import Tickets from '../Tickets/Tickets';
import useStyles from './styles';
import { signUp } from '../../services/authService';

const POST_PATH = 'tickets/message';
const GET_PATH = 'tickets/data';

const ClientPage = () => {
  const classes = useStyles();

  const change = false;

  //user info: email, password, firstName, lastName, confirmPassword, type
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: '',
    companyID: 15,
  });

  // 14, 15, 16, 17

  const handleSubmit = (e) => {
    console.log(signUpInfo);
    e.preventDefault();
    signUp(signUpInfo);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="firstName"
          variant="outlined"
          label="firstName"
          fullWidth
          value={signUpInfo.firstName}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, firstName: e.target.value })
          }
        />
        <TextField
          name="lastName"
          variant="outlined"
          label="lastName"
          fullWidth
          value={signUpInfo.lastName}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, lastName: e.target.value })
          }
        />
        <TextField
          name="email"
          variant="outlined"
          label="email"
          type="email"
          fullWidth
          value={signUpInfo.email}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, email: e.target.value })
          }
        />
        <TextField
          name="password"
          variant="outlined"
          label="password"
          type="password"
          fullWidth
          value={signUpInfo.password}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, password: e.target.value })
          }
        />
        <TextField
          name="confirmPassword"
          variant="outlined"
          label="confirmPassword"
          fullWidth
          type="password"
          value={signUpInfo.confirmPassword}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, confirmPassword: e.target.value })
          }
        />
        <TextField
          name="type"
          variant="outlined"
          label="type"
          fullWidth
          value={signUpInfo.type}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, type: e.target.value })
          }
        />

        <Button type="submit">Submit</Button>
      </form>

      <Container className={classes.container} maxWidth="xl">
        <Form />
      </Container>
      <Container className={classes.container} maxWidth="xl">
        <Tickets />
      </Container>
    </>
  );
};

export default ClientPage;
