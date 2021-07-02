import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './styles';

const Ticket = ({ ticket }) => {
  const classes = useStyles();
  return (
    <Box border={1} borderColor="lightgrey">
      <Typography variant="h6" className={classes.paper}>
        {ticket.description}
      </Typography>
      {}
    </Box>
  );
};

export default Ticket;
