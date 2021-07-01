import React, { useState } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const ComboBox = ({ options, label, path }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  // styles
  const classes = useStyles();

  const handleOnClick = () => {
    console.log('value:', value);
    console.log('path: ', `${path}/${value}`);
    value ? history.push(`${path}/${value}`) : 'nothing selected';
  };

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12} md={9}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="clients"
            options={options}
            getOptionLabel={(option) => option}
            // style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label={label} variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            onClick={handleOnClick}
            variant="outlined"
            fullWidth
            style={{ height: '56px' }}
          >
            Open {label} Page
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ComboBox;
