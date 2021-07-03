import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { Container, Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

import TicketsContainer from '../../../../components/TicketsContainer/TicketsContainer';
import TransferList from '../../../../components/TransferList';
import ComboBox from '../../../../components/ComboBox/ComboBox';
import AddGeneralRequest from '../../../../components/AddGeneralRequest';

const User = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const { companyName, userName } = useParams();
  const companyServices = [
    'desktop 1',
    'desktop 2',
    'laptop 1',
    'router 1',
    'service 5',
  ];
  const userServices = ['desktop 1', 'laptop 1', 'service 5'];
  return (
    <Container>
      <Paper className={classes.paper}>
        <Typography variant="h4">{`${userName}`}</Typography>
        <Typography variant="h6">{`${companyName}`}</Typography>
      </Paper>

      <TransferList
        userName={userName}
        companyServices={companyServices}
        userServices={userServices}
      />

      <ComboBox options={[]} label={'Device'} path={path} />

      <AddGeneralRequest />
      <TicketsContainer tickets={[]} />
    </Container>
  );
};

export default User;
