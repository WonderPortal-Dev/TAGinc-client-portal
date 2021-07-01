import React from 'react';
import {
  useHistory,
  Route,
  Link,
  useRouteMatch,
  Switch,
  useParams,
} from 'react-router-dom';
import { Button, Paper, Container } from '@material-ui/core';
import ComboBox from '../../../components/ComboBox/ComboBox';

import Users from './Users/Users';
import useStyles from './styles';

const users = [
  { name: 'Rosio' },
  { name: 'Haobo' },
  { name: 'Damian' },
  { name: 'Randy' },
];

const CompanyPage = () => {
  // Routing
  const { companyName } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();

  // styles
  const classes = useStyles();
  return (
    <>
      Admin &gt; {companyName}
      <Button onClick={() => history.push(`${url}/randy`)} variant="outlined">
        user
      </Button>
      {/* <Link to={`${url}/users`}>user</Link> */}
      <Container className={classes.container} maxWidth="xl">
        <ComboBox
          options={users.map((el) => el.name)}
          label={'Users'}
          path={url}
        />
      </Container>
    </>
  );
};

const Company = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} component={CompanyPage} exact />
      <Route path={`${path}/:userName`} component={Users} />
    </Switch>
  );
};

export default Company;
