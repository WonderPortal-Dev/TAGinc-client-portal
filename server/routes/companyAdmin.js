const express = require('express');
const router = express.Router();
const localCompanyAdminController = require('../controllers/localCompanyAdminController');

/**
 * companyAdmin functionalities:
 * 1. can see all the tickets of the company (code blow)
 * 2. can add a user (same as signUp function un userController, dont need to repeat here)
 * 3. can delete a user (serviceProviderAdmin can also do) (code below)
 * 4. can update a user (serviceProviderAdmin can also do) (code below)
 * 5. can create a ticket (write in genericCompanyUserController)
 * 6. can update a ticket (write in genericCompanyUserController)
 * 7. can delete a ticket (write in genericCompanyUserController)
 * 8. can update a company info (same as serviceProviderAdmin, which is done, dont need to repeat here)
 * 9. can delete their own company (think about it later)
 */


// get company tickets
// link will be: http://localhost:3000/companyadmin/
router.get('/', localCompanyAdminController.getMyCompanyTickets);

// update user
// link will be: http://localhost:3000/companyadmin/client/:id
router.put('/client/:id', localCompanyAdminController.updateUser);

// delete user
// link will be: http://localhost:3000/companyadmin/client/:id
router.delete('/client/:id', localCompanyAdminController.deleteUser)


module.exports = router;