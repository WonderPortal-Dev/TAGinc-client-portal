import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { userReducer } from '../reducers/userReducer';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, {});

  // const getState = async () => {
  //   try {
  //     console.log('context provider: ', localStorage.getItem('user'));

  //     // ! check backend routes and then update route here
  //     const GET_PATH = 'tickets/data';

  //     const { data } = await axios.get(`http://localhost:3000/${GET_PATH}`);

  //     return dispatch({ type: 'UPDATE_STATE', payload: data });
  //   } catch (error) {
  //     console.error('err in getData', error);
  //   }
  // };

  // useEffect(() => {
  //   getState();
  // }, []);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
