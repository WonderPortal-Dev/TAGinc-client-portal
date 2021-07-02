const db = require('../model/sessionModel');

const serviceProviderAdminController = {};
/**
 * An admin functionalities:
 * 1. get all clients/companies' tickets( code below)
 * 2. create a company (with company info) (code below)
 * 3. update a company info (code below)
 * 4. delete a company (code below)
 * 5. can add a user (in userController, signUp)
 * 6. can delete a user (in companyAdmin controller)
 * 7. can update a user (in companyAdmin controller)
 * 8. can create a ticket (in genericCompanyUserController)
 * 9. can update a ticket (in genericCompanyUserController)
 * 10. can delete a ticket (in genericCompanyUserController)
 */
// admin sees all tickets in database
serviceProviderAdminController.getAllTickets = async (req, res) => {
    const getAllTicketsQuery = 'SELECT * FROM "public"."tickets"';
    const { rows } = await db.query(getAllTicketsQuery); //rows array of objs
    res.status(200).json(rows.reverse());
}

serviceProviderAdminController.addCompany = async (req, res) => {
    //input: Name, SubscriptionLvl_id
    //get company parameters
    //crate SQL to insert new company record
    //Stretch - does company already exist?
    try {
    const{Name, SubscriptionLvl_id}= req.body;
    // ! double check sql string
    const newCompany = await db.query('INSERT INTO companies (Name, SubscriptionLvl_id) VALUES($1, $2) RETURNING *',[Name, SubscriptionLvl_id]);

     res.json(newCompany.rows[0]);

    } catch (err) {
        console.log('err in serviceProviderAdminController.updateCompany: ', err);
    }
}// end of addCompany

serviceProviderAdminController.updateCompany = async (req, res) => {
    //input: id of company to update
    try {
        //company id
        const {id} = req.params;
        // 
        const {SubscriptionLvl_id} = req.body;
        // ! double check sql string
        const updateCompany = await db.query('UPDATE companies SET SubscriptionLvl_id = $1 WHERE companies.id = $2',[SubscriptionLvl_id, id]);
        res.json('company updated');

    } catch(err){
        console.log('err in serviceProviderAdminController.updateCompany: ', err)}
}// end of updateCompany

serviceProviderAdminController.deleteCompany = async (req, res) => {
    //input: id of company to delete
    try {
        //company id
        const {id} = req.params;
        // ! double check sql string
        const deleteCompany = await db.query('DELETE FROM companies WHERE id = $1',[id]);
        res.json('delete company is succesful')
    }catch(err){
        console.log('err in serviceProviderAdminController.deleteCompany: ', err)
    }

}// end of deleteCompany



module.exports = serviceProviderAdminController;