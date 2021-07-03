import axios from 'axios';

// ! filled out backend route
// ! also double check axios post link route with backend
const API_URL = 'http://localhost:3000/';

/** genericCompanyUser
 * create a ticket
 * link will be: http://localhost:3000/client/
 * get all client's tickets
 * link will be: http://localhost:3000/client/alltickets
 * update a ticket
 * link will be: http://localhost:3000/client/alltickets/:id
 * delete a ticket
 * link will be: http://localhost:3000/client/alltickets/:id
 */

// require userID and details
export const createTicket = async (formData) => {
  try {
    //console.log('formData in createTicket is: ', formData);
    await axios.post(`${API_URL}client`, formData);
  } catch (error) {
    console.log('err in userService createTicket: ', error);
  }
};
export const getUserTickets = async (userID) => {
  try {
    const userTickets = await axios.get(`${API_URL}client/alltickets`, userID);
    console.log('userTickets is: ', userTickets);
  } catch (err) {
    console.log('err in userService getUserTicket: ', err);
  }
};
// require details, ticketStatus, userID, ticketID
export const updateTicket = async (formData) => {
  try {
    const updated = await axios.put(
      `${API_URL}client/alltickets/${formData.ticketID}`,
      formData
    );
  } catch (err) {
    console.log('err in userService updateTicket: ', err);
  }
};

// require userID, ticketID
export const deleteTicket = async (formData) => {
  try {
    const deleted = await axios.delete(
      `${API_URL}client/alltickets/${formData.ticketID}`,
      formData
    );
  } catch (err) {
    console.log('err in userService deleteTicket: ', err);
  }
};

/** companyAdmin functionalities
 * get company tickets
 * link will be: http://localhost:3000/companyadmin/
 * update user
 * link will be: http://localhost:3000/companyadmin/client/:id
 * delete user
 * link will be: http://localhost:3000/companyadmin/client/:id
 */

//require companyID
export const getCompanyTickets = async (companyID) => {
  try {
    const companyTickets = await axios.get(`${API_URL}companyadmin`, companyID);
    console.log('companyTickets is: ', companyTickets);
  } catch (err) {
    console.log('err in getCompanyTickets: ', err);
  }
};

// require userID, first, last, email
export const updateUser = async (formData) => {
  try {
    const updatedUser = await axios.put(
      `${API_URL}companyadmin/${formData.userID}`,
      formData
    );
    console.log('updatedUser is: ', updatedUser);
  } catch (err) {
    console.log('err in updateUser: ', err);
  }
};

//require users id
export const deleteUser = async (userID) => {
  try {
    const deleted = await axios.delete(
      `${API_URL}companyadmin/${formData.userID}`,
      userID
    );
  } catch (err) {
    console.log('err in deleteUser: ', err);
  }
};

/** almightyAdmin
 * create a company
 * link will be: http://localhost:3000/admin/
 * update a company
 * link will be: http://localhost:3000/admin/companies/:id
 * delete a company
 * link will be: http://localhost:3000/admin/companies/:id
 * get all tickets from all clients/companyes
 * link will be: http://localhost:3000/admin/alltickets
 */

// require Name, SubscriptionLvl_id
export const createCompany = async (formData) => {
  try {
    const newCompany = await axios.post(`${API_URL}admin/`, formData);
    console.log('newCompany is in createCompany: ', newCompany);
  } catch (err) {
    console.log('err in createCompany is: ', err);
  }
};

//require company id, SubscriptionLvl_id
export const updateCompany = async (formData) => {
  try {
    const updated = await axios.put(
      `${API_URL}admin/companies/${formData.companyID}`,
      formData
    );
  } catch (err) {
    console.log('err in updatedCompany is: ', err);
  }
};

//require company id
export const deleteCompany = async (companyID) => {
  try {
    const deleted = await axios.delete(
      `${API_URL}admin/companies/${companyID}`
    );
    console.log('deleted in deleteCompany is: ', deleted);
  } catch (err) {
    console.log('err in deleteCompany is: ', err);
  }
};
export const getAllTickets = async () => {
  try {
    const allTickets = await axios.get(`${API_URL}admin/alltickets`);
    console.log('allTickets in userSerice is: ', allTickets);
  } catch (err) {
    console.log('err in getAllTickets is: ', err);
  }
};
