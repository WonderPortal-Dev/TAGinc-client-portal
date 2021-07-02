const express = require('express');
const router = express.Router();
// import controller/middlewares for admin
const serviceProviderAdminController  = require('../controllers/serviceProviderAdminController');
// remeber to import these routes to server.js !!!!

/**
 * An admin functionalities:
 * 1. get all clients/companies' tickets(requests)
 * 2. create a company (with company info)
 * 3. update a company info
 * 4. delete a company
 * 5. 
 */

// create a company
// link will be: http://localhost:3000/admin/
router.post('/', serviceProviderAdminController.addCompany);

//update a company
// link will be: http://localhost:3000/admin/companies/:id
router.put('/companies/:id', serviceProviderAdminController.updateCompany)

// delete a company
// link will be: http://localhost:3000/admin/companies/:id
router.delete('/companies/:id', serviceProviderAdminController.deleteCompany);

//get all tickets from all clients/companyes
// link will be: http://localhost:3000/admin/alltickets
router.get('/alltickets', serviceProviderAdminController.getAllTickets);

module.exports = router;