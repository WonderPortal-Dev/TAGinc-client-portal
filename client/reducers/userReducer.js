import { signIn, signOut } from '../services/authService';

import decode from 'jwt-decode';

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      console.log('Hitting reducer');
      return action.payload;
    case 'SIGN_IN':
      const user = JSON.parse(localStorage.getItem('user'));

      const decodedToken = decode(user?.accessToken);
      // console.log(decodedToken);
      return { ...decodedToken, signIn: true };
    case 'SIGN_OUT':
      console.log('Sign out');
      return { signIn: false };
    case 'ADD_COMPANY':
      console.log('action.payload: ', action.payload);
      const companies = state.companies;

      companies.push(action.payload);
      return { ...state, companies };
    case 'TEST':
      console.log('Test worked');
      return state;
    default:
      return state;
  }
};

/**   jwt TOKEN
 * 			email: existingUser.email,
        userID: existingUser.id,
        companyID: existingUser.companyID,
        type: existingUser.type,
 */
