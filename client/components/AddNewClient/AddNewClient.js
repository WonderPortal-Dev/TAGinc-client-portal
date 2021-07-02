import React, { useState } from 'react';
import useStyles from './styles';
import {
  Button,
  Paper,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';

const AddNewClient = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const [formData, setFormData] = useState({
    companyName: '',
    adminName: '',
    contactNumber: '',
    email: '',
    address: '',
  });

  const HandleSubmit = (e) => {
    e.preventDefault();

    closeDialog();
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Button onClick={openDialog} variant="outlined" fullWidth>
          Add New Company
        </Button>
      </Paper>
      <Dialog open={open} onBackdropClick={closeDialog}>
        <DialogTitle>Add New Client</DialogTitle>
        <DialogContent>
          <form onSubmit={HandleSubmit}>
            <TextField
              name="companyName"
              label="Company Name"
              variant="outlined"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
            <TextField
              name="adminName"
              label="Name of Admin"
              variant="outlined"
              value={formData.adminName}
              onChange={(e) =>
                setFormData({ ...formData, adminName: e.target.value })
              }
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <TextField
              name="contactNumber"
              label="Contact Number"
              type="tel"
              variant="outlined"
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({ ...formData, contactNumber: e.target.value })
              }
            />
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />

            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewClient;
