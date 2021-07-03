import React from 'react';
import useStyles from './styles';
//import material ui
import {Button, Typography, Card, CssBaseline, Grid, Container, TextField} from '@material-ui/core';

const Contact = () => {
  return (
  <div>
    <Container>
    <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={3}>
        {/* firstname, lastname, emailaddress, message */}
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            id="emailAddress"
            name="emailAddress"
            label="Email Address"
            fullWidth
            autoComplete="emailAddress"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Message"
            label="Message"
            name ="Message"
            style={{textAlign: 'left'}}
            multiline
            fullWidth
            rows={10}
            variant="outlined"
          />
        </Grid>
        <Grid container justify="flex-end">
         <Button size="medium" color="primary" variant = "contained" >
            Send
        </Button>
        </Grid>
      </Grid>
    </Container>
  </div>);
};

export default Contact;
