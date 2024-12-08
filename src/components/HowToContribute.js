import React from 'react';

const exampleData = {
  name: "Your Name",
  bio: "A short bio.",
  github: "https://github.com/your-username",
  skills: ["React", "JavaScript"],
};

const HowToContribute = () => {
  return (
    <div>
      <h2>How to Contribute</h2>
      <p>Follow these steps to contribute to this project:</p>
      <ol>
        <li>Fork the repository.</li>
        <li>Clone your fork.</li>
        <li>Edit the <code>contributors.json</code> file.</li>
        <li>Submit a Pull Request.</li>
      </ol>
      <h3>Example JSON Format:</h3>
      <pre>{JSON.stringify(exampleData, null, 2)}</pre>
    </div>
  );
};

export default HowToContribute;