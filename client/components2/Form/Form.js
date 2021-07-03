import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';
import axios from 'axios';
import TicketTypes from '../TicketTypes/TicketTypes';

//client/
const POST_PATH = 'client/';

const Form = () => {
  const formInitialState = {
    ticketId: '',
    ticketName: '',
    ticketCompany: '',
    type: '',
    new: true,
    allServices: [],
    userServices: [],
    selectedService: '',
    serviceActions: [],
    selectedAction: '',
    date: '',
    timeStart: '',
    timeEnd: '',
  };

  const postInitialState = {
    userID: 3,
    details: '',
  };

  const [postData, setPostData] = useState(postInitialState);
  const classes = useStyles();

  const saveData = async () => {
    try {
      await axios.post(`http://localhost:3000/${POST_PATH}`, postData);
    } catch (error) {
      console.log('saveData() from clientPage error: ', error);
    }
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (postData.details === '') {
      console.log('Nothing submitted');
      return;
    }
    saveData();
    setPostData(postInitialState);
  };
  // Clear form
  const clear = () => {
    setPostData(postInitialState);
  };

  const [item, itemAge] = useState('');
  const [value, valueAge] = useState('');

  const handleChange = (event) => {
    itemAge(event.target.value);
  };

  const handleRadioChange = (event) => {
    valueAge(event.target.value);
  };

  const getDate = () => {
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${
      date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()
    }-${date.getDate()}`;
    return dateStr;
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h4">Create a new Ticket</Typography>
      </AccordionSummary>

      <form onSubmit={handleSubmit}>
        <TicketTypes />

        <Typography>Make Appointment and time window:</Typography>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={getDate()}
          className={classes.dateField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="time"
          label="From"
          type="time"
          defaultValue="07:30"
          className={classes.timeField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 900, // 5 min
          }}
        />
        <TextField
          id="time"
          label="To"
          type="time"
          defaultValue="07:30"
          className={classes.timeField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 900, // 5 min
          }}
        />

        <Grid container>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Select Hardware
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={item}
                onChange={handleChange}
              >
                <MenuItem value={10}>Hard Drive</MenuItem>
                <MenuItem value={20}>RAM</MenuItem>
                <MenuItem value={30}>Monitor</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl className={classes.formControl} fullWidth>
              <RadioGroup
                row={true}
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Replace"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Install"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <TextField
          className={classes.textField}
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={2}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, details: e.target.value })
          }
        />

        <Grid container>
          <Grid item xs={10}>
            <Button
              type="submit"
              variant="text"
              size="large"
              fullWidth
              color="primary"
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={clear}
              variant="contained"
              size="large"
              fullWidth
              color="secondary"
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Accordion>
  );
};

export default Form;
