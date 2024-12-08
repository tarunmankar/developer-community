import React from 'react';

const DeveloperCard = ({ developer }) => (
  <div className="developer-card">
    <h3>{developer.name}</h3>
    <p>{developer.bio}</p>
    <p><strong>Location:</strong> {developer.location}</p>
    <p><strong>Skills:</strong> {developer.skills.join(', ')}</p>
    <a href={developer.github} target="_blank" rel="noopener noreferrer">
      GitHub Profile
    </a>
  </div>
);

export default DeveloperCard;
