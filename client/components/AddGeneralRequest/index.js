import React, { useState } from 'react';
import useStyles from './styles';
import {
  Button,
  Dialog,
  TextField,
  Grid,
  Typography,
  Paper,
} from '@material-ui/core';

const AddGeneralRequest = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  return (
    <>
      <Paper className={classes.paper}>
        <Button onClick={openDialog} variant="outlined" fullWidth>
          Add General Request
        </Button>
      </Paper>
      <Dialog open={open} onBackdropClick={closeDialog}></Dialog>
    </>
  );
};

export default AddGeneralRequest;
