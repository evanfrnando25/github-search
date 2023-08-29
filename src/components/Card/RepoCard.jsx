import React from 'react';
import '../../assets/card.css'

const RepoCard = ({ repo }) => {
  return (
    <div className="card">
          <h3>{repo.name}</h3>
          <p>{repo.id}</p>
          <a href={repo.archive} target="_blank" rel="noopener noreferrer">
            Archive Url
          </a>
     </div>
  );
};

export default RepoCard;
