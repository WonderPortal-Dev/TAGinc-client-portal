import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthButton from '../components/AuthButton';
import { UserContext } from '../contexts/UserContext';

const Home = () => {
  const { user, dispatch } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    console.log('user', user.decodedToken);
    if (user.decodedToken) history.push(`/${user.decodedToken.type}`);
  }, [user]);
  return (
    <div>
      Home page
      <button onClick={() => history.push('/admin2')}>
        ClientPage from first attempt
      </button>
      <button onClick={() => history.push('/admin')}>admin</button>
      <button onClick={() => history.push('/client/ABCorp')}>client</button>
      <button onClick={() => history.push('/user/randy')}>user</button>
      <button onClick={() => console.log('user', user)}>show user</button>
      <AuthButton />
    </div>
  );
};

export default Home;
