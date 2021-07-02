import React, {useEffect} from 'react'
import { Box, Typography, Button } from '@material-ui/core'

import useStyles from './styles';


const Ticket = ({ index, state, changeState}) => {

  const toggleResolved = ()=>{
    changeState(prev=>{
      prev[index].resolved = !prev[index].resolved 
      return prev;
    })
    console.log(state);
  }

  useEffect(() => {
        console.log('hit')
  }, [state.resolved])

  const classes = useStyles();
  return (
    <Box 
      border= {1}
      borderColor = "lightgrey"
      
    >
      <Typography 
        variant='h6' 
        className={classes.paper}        
      >
        {state.description}
      </Typography>
      {

      }
      <Button
        onClick={toggleResolved}
      >
        {state.resolved ? 'Reopen' : 'Resolve'}
      </Button>
    </Box>
  )
}

export default Ticket
