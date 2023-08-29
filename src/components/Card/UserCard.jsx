import React from 'react';
import '../../assets/card.css'

const UserCard = ({ user }) => {
  return (

    <div className="card">
          <img className='card-img' src={user.avatar_url} alt={user.login} />
          <h3>{user.login}</h3>
          <p>ID: {user.id}</p>
          <a href={user.star} target="_blank" rel="noopener noreferrer">
            Profile URL
          </a>
    </div>
  );
};

export default UserCard;
