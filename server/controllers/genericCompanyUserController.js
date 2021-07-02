const db = require('../model/sessionModel');

const genericCompanyUserController = {};
/**
 * A client within a company's functionalities:
 * 1. create a ticket(code blow)
 * 2. get all his/her tickets(code blow)
 * 3. update a specific ticket (code blow)
 * 4. delete a specific ticket (code blow)
 */


// a specific client can see all his/her tickets
genericCompanyUserController.getUserTickets = async (req, res) => {
    try{
        const userTicketInfo = await db.query('SELECT * FROM tickets JOIN Users ON tickets.user_id = users.id WHERE users.id=$1;',[req.body.userId]);
        res.json(userTicketInfo.rows.reverse());
    }catch(err){
        console.log('err in genericCompanyUserController.getUserTickets ', err)
    }
}// end of getUserTickets

/* // get a client' a ticket, by ticket id
genericCompanyUserController.getUserTicket = async(req, res) =>{
    
} */

// a client can update a specific ticket
genericCompanyUserController.updateUserTicket = async(req, res) =>{
    try{
        //what info do we want to update the ticket?
        // ! implementation of details update and comment update? -- newComment, newDetails, 
        const {userID, newType, ticketStatus, ticketID} = req.body;
        const updateTicket = await db.query('UPDATE tickets SET type=$1, status=$2 WHERE (tickets.user_id=$3 AND tickets.id=$4);', [newType, ticketStatus, userID, ticketID]);
        res.json('updated user ticket');
        
    }catch(err){
        console.log('err in genericCompanyUserController.updateUserTicket: ', err)
    }
}// end of updateUserTicket

// a client can delete a specific ticket
genericCompanyUserController.deleteUserTicket = async(req, res) =>{
    try{
        const {userID, ticketID} = req.params;
        // ! double check sql string
        const deleteUserTicket = await db.query('DELETE FROM tickets WHERE (tickets.id=$1 AND tickets.user_id=$2);', [ticketID, userID]);
        res.json("user ticket deleted")
    }catch(err){
        console.log('err in genericCompanyUserController.deleteUserTicket ', err);
    }
}// end of deleteUserTicket

//createTicket is for both admin and client to create a ticket
genericCompanyUserController.createTicket = async (req, res) => {
    // TICKET INFO: date, status, details, user id, category
    // With ticket info to be on req.body
    //JOIN w/ Users Table
    //const postTicketQuery = `INSERT INTO Tickets (Details, UserID, Category, Status) VALUES ('${req.body.details}', '${req.body.userID}', '${req.body.category}', '${req.body.status}')`;
     
    const { userID, type } = req.body;
    console.log('req.body in post fxn: ', req.body);
    
    // ! double check the sql string 
    const createdUserTicket = await db.query('INSERT INTO tickets (user_id, type) VALUES ($1, $2);', [userID, type]);
    res.json('created user ticket');
}

module.exports = genericCompanyUserController;
