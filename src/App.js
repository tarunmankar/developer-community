import React, { useState, useEffect } from 'react';
import './styles/app.css';
import data from './data/contributors.json';

function App() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    // Load data from the JSON file (simulating fetching from API)
    setContributors(data);
  }, []);

  return (
    <div className="App">
      <h1>Developer Community</h1>
      <p>Here is a list of developers who contributed to the open-source project:</p>
      <ul>
        {contributors.map((bio, index) => (
          <li key={index}>
            <h3>{bio.name}</h3>
            <p>{bio.bio}</p>
            <a href={bio.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;