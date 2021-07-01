import React, { useState } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';

import Ticket from './Ticket/Ticket';

export default function TicketsContainer({ tickets }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const openTickets = tickets.filter((ticket) => ticket.status === 'open');
  const pendingTickets = tickets.filter(
    (ticket) => ticket.status === 'pending'
  );
  const closedTickets = tickets.filter((ticket) => ticket.status === 'closed');

  return (
    <>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Open Tickets</Typography>
          <Typography className={classes.secondaryHeading}>
            {openTickets.length} tickets
          </Typography>
        </AccordionSummary>
        {openTickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Pending Tickets</Typography>
          <Typography className={classes.secondaryHeading}>
            {pendingTickets.length} tickets
          </Typography>
        </AccordionSummary>
        {pendingTickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Closed Tickets</Typography>
          <Typography className={classes.secondaryHeading}>
            {closedTickets.length} tickets
          </Typography>
        </AccordionSummary>
        {closedTickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </Accordion>
    </>
  );
}
