import React from 'react';
import useStyles from './styles';
import { Button, Paper } from '@material-ui/core';

const AddNewClient = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Button variant="outlined" fullWidth>
        Add New Client
      </Button>
    </Paper>
  );
};

export default AddNewClient;
