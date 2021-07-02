import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <div>
      Home page
      <button onClick={() => history.push('/admin')}>admin</button>
      <button onClick={() => history.push('/client/ABCorp')}>client</button>
      <button onClick={() => history.push('/user/randy')}>user</button>
    </div>
  );
};

export default Home;
