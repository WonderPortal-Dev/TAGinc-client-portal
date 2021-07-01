import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { companyName, userName } = useParams();
  return (
    <div>
      Admin &gt; {companyName} &gt; {userName}{' '}
    </div>
  );
};

export default User;
