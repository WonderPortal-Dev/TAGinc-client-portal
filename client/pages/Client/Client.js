import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Company from './Company/Company';

const Client = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${path}`}
        component={() => {
          console.log('client redirect page');
          return <></>;
        }}
        exact
      />
      <Route path={`${path}/:companyName`} component={Company} />
    </Switch>
  );
};

export default Client;
