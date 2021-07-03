import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import useStyles from './styles';
import {
  Button,
  Paper,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

const AddNewClient = () => {
  const { user, dispatch } = useContext(UserContext);
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const history = useHistory();
  const { path } = useRouteMatch();
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const [formData, setFormData] = useState({
    name: '',
    subscriptionLvl_id: '',
  });

  const API_URL = 'http://localhost:3000/';
  const createCompany = async (formData) => {
    try {
      const { data } = await axios.post(`${API_URL}admin`, formData);
      console.log('newCompany is in createCompany: ', data);
      dispatch({ type: 'ADD_COMPANY', payload: data });
    } catch (err) {
      console.log('err in createCompany is: ', err);
    }
  };

  let compName;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    compName = formData.name;
    await createCompany(formData);
    console.log(' user after update:', user);
    console.log('after createCompany');
    closeDialog();
    history.push(`${path}/${compName}`);
  };

  // useEffect(() => {
  //   history.push(`${path}/${compName}`);
  // }, [submitted]);

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
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <TextField
              name="SubcriptionLvl"
              label="subscription lvl"
              variant="outlined"
              value={formData.subscriptionLvl_id}
              onChange={(e) =>
                setFormData({ ...formData, subscriptionLvl_id: e.target.value })
              }
            />
            {/* <TextField
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
            /> */}

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
