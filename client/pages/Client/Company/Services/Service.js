import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

const Service = () => {
  const { companyName, service } = useParams();
  // console.log(params);
  return (
    <h1>{`this is the page for the ${service} service of the ${companyName} company`}</h1>
  );
};

export default Service;
