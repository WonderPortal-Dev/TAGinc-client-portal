import React, { useContext } from 'react';
import {
  useHistory,
  Route,
  Link,
  useRouteMatch,
  Switch,
  useParams,
} from 'react-router-dom';
import { Button, Paper, Container, Typography } from '@material-ui/core';
import ComboBox from '../../../components/ComboBox/ComboBox';
import AddUser from '../../../components/AddUser/AddUser';
import AddService from '../../../components/AddService/AddService';
import AddGeneralRequest from '../../../components/AddGeneralRequest';
import TicketsContainer from '../../../components/TicketsContainer/TicketsContainer';

import Users from './Users/Users';
import Services from './Services/Services';
import useStyles from './styles';
import { UserContext } from '../../../contexts/UserContext';

const services = [
  { name: 'Desktop - HP19865QL' },
  { name: 'Desktop - MAC19R65QL' },
  { name: 'Router - RT19865QL' },
];

const CompanyPage = () => {
  // Routing
  const { companyName } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();

  // styles
  const classes = useStyles();

  // state
  const { user, dispatch } = useContext(UserContext);

  const companyid = user.companies.filter((el) => el.name === companyName)[0]
    .id;
  console.log('companyid:', companyid);
  const usernames = user.users
    .filter((el) => el.companyid === companyid)
    .map((el) => el.first);
  console.log('usernames:', usernames);
  return (
    <Container className={classes.container} maxWidth="xl">
      <Paper className={classes.paper}>
        <Typography variant="h4">{`${companyName}`}</Typography>
      </Paper>

      <AddUser />

      <ComboBox options={usernames} label={'User'} path={url} />

      <AddService />
      <ComboBox
        options={services.map((el) => el.name)}
        label={'Service'}
        path={`${url}/services`}
      />
      <AddGeneralRequest />
      <TicketsContainer tickets={[]} />
    </Container>
  );
};

const Company = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} component={CompanyPage} exact />
      <Route path={`${path}/services`} component={Services} />
      <Route path={`${path}/:userName`} component={Users} />
    </Switch>
  );
};

export default Company;
