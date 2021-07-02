const db = require('../model/sessionModel');

const localCompanyAdminController = {};
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

localCompanyAdminController.getMyCompanyTickets = async (req, res) => {
        //input: 
    try{
        const { id } = req.body;
        // console.log('user id: ', id);
        const userCompanyQuery = await db.query('SELECT Users.companyID FROM Users WHERE Users.id=$1', [id]);
        // console.log('userCompanyQuery.rows: ', userCompanyQuery.rows);
        const companyID = parseInt(userCompanyQuery.rows[0].companyid);
        const companyTicketsData = await db.query('SELECT tickets.* FROM tickets JOIN Users ON tickets.user_id=users.id JOIN Companies ON companies.id=users.companyID WHERE companies.id=$1;', [companyID]);
        res.json(companyTicketsData.rows.reverse());
    } catch (err) {
        console.log('err in localCompanyAdminController.getMyCompanyTickets: ', err);
    }
}

localCompanyAdminController.updateUser = async (req, res) => {
        //input: field(s) to be updated
        //get user parameters
        //crate SQL to update user record
        //Stretch - does user already exist?
    try{
        const { id, first, last, email } = req.body;
        const updatedUser = await db.query('UPDATE Users SET first = $1, last = $2, email = $3 WHERE users.id=$4', [first, last, email, id]);
        res.json(updatedUser.rows[0]);
    } catch (err){
        console.log('err in localCompanyAdminController.updateUser: ', err);
    }
}

localCompanyAdminController.deleteUser = async (req,res) =>{
    try{
        //user id
        const {id} = req.params;
        // ! double check sql string
        const deleteUser = await db.query('DELETE FROM Users WHERE Users.id=$1', [id]);
        res.json('delete user is succesful')
    }catch(err){
        console.log('err in localCompanyAdminController.deleteUser: ', err);}
}


module.exports = localCompanyAdminController;