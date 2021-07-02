import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Users from './Users/Users';

const Client = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${path}`}
        component={() => {
          console.log('user redirect page');
          return <></>;
        }}
        exact
      />
      <Route path={`${path}/:userName`} component={Users} />
    </Switch>
  );
};

export default Client;
