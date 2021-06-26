import React, {useState, useEffect} from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles';
import Ticket from './Ticket/Ticket';
import axios from 'axios';


const GET_PATH = 'api/data';

const Tickets = () => {
  const dataInitialState = [
		{
			msgId: 1,
			message:'Message 1',
		}, 
		{message:'Message 2'}, 
		{message:'Message 3'}
	];

	const [allData, setAllData] = useState(dataInitialState);
	
	const classes = useStyles();

	//todo: helper function to retrieve all data from backend

	const getData = async ()=>  {
		try {
			// ! check backend routes and then update route here
			const {data} = await axios.get(`http://localhost:3000/${GET_PATH}`);
			
			setAllData([...data]);
			// console.log('response: ', data);
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
      <Typography variant='h3'>Messages</Typography>
      {
        allData.map((el, index) => <Ticket key={index} message={el.message} />)
      }
    </>
  )
}

export default Tickets
