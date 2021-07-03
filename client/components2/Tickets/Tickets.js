import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import Ticket from './Ticket/Ticket';
import axios from 'axios';

//admin/alltickets
const GET_PATH = 'admin/alltickets';

const Tickets = () => {
  const dataInitialState = [
    {
      msgId: 1,
      details: 'Message 1',
    },
    { details: 'Message 2' },
    { details: 'Message 3' },
  ];

  const [allData, setAllData] = useState(dataInitialState);

  const classes = useStyles();

  //todo: helper function to retrieve all data from backend

  const getData = async () => {
    try {
      const API = axios.create({ baseURL: 'http://localhost:3000' });
      // ! check backend routes and then update route here
      const { data } = await API.get(`/${GET_PATH}`);

      setAllData([...data]);
      console.log('response: ', data);
    } catch (error) {
      console.error('err in getData', error);
    }
  }; //end of getData

  //page should re-rendering when data changes
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Typography variant="h3">Open Tickets</Typography>
      {allData.map((el, index) => (
        <Ticket key={index} state={el} changeState={setAllData} index={index} />
      ))}
    </>
  );
};

export default Tickets;
