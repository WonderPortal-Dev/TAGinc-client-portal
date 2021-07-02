import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

import Service from './Service';

const ServicePage = () => {
  const { path } = useRouteMatch();
  const params = useParams();
  console.log(params);
  console.log(`${path}/:service`);
  return <h1>SERVICES</h1>;
};

const Services = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      {/* <Route path={`${path}`} component={ServicePage} exact /> */}
      <Route path={`${path}/:service`} component={Service} />
    </Switch>
  );
};

export default Services;
