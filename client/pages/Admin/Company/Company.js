import React from 'react';
import {
  useHistory,
  Route,
  Link,
  useRouteMatch,
  Switch,
} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Users from '../Users/Users';

const CompanyPage = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  return (
    <>
      Admin &gt; Company
      <Button onClick={() => history.push(`${url}/users`)} variant="outlined">
        user
      </Button>
      {/* <Link to={`${url}/users`}>user</Link> */}
    </>
  );
};

const Company = () => {
  console.log('Company hitting');
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} component={CompanyPage} exact />
      <Route path={`${path}/users`} component={Users} />
    </Switch>
  );
};

export default Company;
