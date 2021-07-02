import { signIn, signOut } from '../services/authService';
import decode from 'jwt-decode';

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      console.log('Hitting reducer');
      return action.payload;
    case 'SIGN_IN':
      const user = localStorage.getItem('user');
      console.log(user);
      // const uid = decode(user?.accessToken).uid;
      // console(uid);
      return state;
    default:
      return state;
  }
};
