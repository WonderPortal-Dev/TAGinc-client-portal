import React, { useContext, useEffect, useState } from 'react';
import {
  useHistory,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import { Container, Button, Box, Paper } from '@material-ui/core';
import { UserContext } from '../../contexts/UserContext';
import ComboBox from '../../components/ComboBox/ComboBox';
import TicketsContainer from '../../components/TicketsContainer/TicketsContainer';
import AddNewClient from '../../components/AddNewClient/AddNewClient';

import useStyles from './styles';

import Company from './Company/Company';

const AdminPage = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const { user, dispatch } = useContext(UserContext);
  console.log(user);
  const classes = useStyles();

  const tickets = [
    {
      description: 'Some ticket description 1',
      id: '1',
      status: 'open',
    },
    {
      description: 'Some ticket description 2',
      id: '2',
      status: 'closed',
    },
    {
      description: 'Some ticket description 3',
      id: '3',
      status: 'pending',
    },
    {
      description: 'Some ticket description 4',
      id: '4',
      status: 'closed',
    },
    {
      description: 'Some ticket description 5',
      id: '5',
      status: 'pending',
    },
    {
      description: 'Some ticket description 6',
      id: '6',
      status: 'closed',
    },
  ];

  const companies = [
    { name: 'abcCorp' },
    { name: 'Client 2' },
    { name: 'Client 3' },
    { name: 'Client 4' },
  ];

  return (
    <Container className={classes.container} maxWidth="xl">
      <AddNewClient />

      <ComboBox
        options={user.companies.map((el) => el.name)}
        label={'Clients'}
        path={url}
      />

      <TicketsContainer tickets={user.tickets} />
    </Container>
  );
};

const Admin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} component={AdminPage} exact />
      <Route path={`${path}/:companyName`} component={Company} />
    </Switch>
  );
};

export default Admin;
