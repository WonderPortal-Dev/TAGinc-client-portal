import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthButton from '../components/AuthButton';

const Home = () => {
  const history = useHistory();
  return (
    <div>
      Home page
      <button onClick={() => history.push('/admin2')}>
        ClientPage from first attempt
      </button>
      <button onClick={() => history.push('/admin')}>admin</button>
      <button onClick={() => history.push('/client/ABCorp')}>client</button>
      <button onClick={() => history.push('/user/randy')}>user</button>
      <AuthButton />
    </div>
  );
};

export default Home;
