import React from 'react';
import { useParams } from 'react-router-dom';
import UserList from './UserList';
import DataUsers from './data/DataUsers';

const User = () => {

  const { id } = useParams();
  const users = DataUsers()
  const nombre = users.find(user=>user.id===parseInt(id))
  return (
    <div className='user-details'>
      <h2>User Details</h2>
      {nombre ? (
        <div>
          <p>ID: {nombre.id}</p>
          <p>Name: {nombre.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default User;
