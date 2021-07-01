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
import useStyles from './styles';

import Company from './Company/Company';

const AdminPage = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const { user, dispatch } = useContext(UserContext);

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

  const classes = useStyles();

  return (
    <>
      {/* <Link to={`${url}/company`}>Company</Link> */}
      <Button onClick={() => history.push(`${url}/company`)} variant="outlined">
        Company
      </Button>
      <Container className={classes.container} maxWidth="xl">
        <Paper className={classes.paper}>
          <Button variant="outlined" fullWidth>
            Add New Client
          </Button>
        </Paper>
        <Paper className={classes.paper}>
          <ComboBox />
        </Paper>
        <Paper className={classes.paper}>
          <TicketsContainer tickets={tickets} />
        </Paper>
      </Container>

      {Array.isArray(user) ? (
        <div>
          Admin
          {user.map((user) => (
            <Box key={user.rid}>{user.description}</Box>
          ))}
        </div>
      ) : (
        <div>waiting</div>
      )}
    </>
  );
};

const Admin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} component={AdminPage} exact />
      <Route path={`${path}/company`} component={Company} />
    </Switch>
  );
};

export default Admin;
