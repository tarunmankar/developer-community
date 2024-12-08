
    import React from 'react';

    function BioCard({ bio }) {
      return (
        <div className="bio-card">
          <h3>{bio.name}</h3>
          <p>{bio.bio}</p>
          <a href={bio.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
      );
    }

    export default BioCard;
    