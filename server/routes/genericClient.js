const express = require('express');
const router = express.Router();
// import controller/middlewares for clients
const genericCompanyUserController = require('../controllers/genericCompanyUserController');

/**
 * A client's functionalities: 
 * 1. create a ticket(request)
 * 2. get all his/her tickets(requests)
 * 3. get a specific ticket?
 * 4. update a specific ticket
 * 5. delete a specific ticket
 */

// create a ticket
// link will be: http://localhost:3000/client/
router.post('/', genericCompanyUserController.createTicket)

// get all client's tickets
// link will be: http://localhost:3000/client/alltickets
router.get('/alltickets', genericCompanyUserController.getUserTickets);

// update a ticket
// link will be: http://localhost:3000/client/alltickets/:id
router.put('/alltickets/:id', genericCompanyUserController.updateUserTicket)

// delete a ticket
// link will be: http://localhost:3000/client/alltickets/:id
router.delete('/alltickets/:id', genericCompanyUserController.deleteUserTicket)



module.exports = router;