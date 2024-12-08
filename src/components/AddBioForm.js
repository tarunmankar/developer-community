
    import React, { useState } from 'react';

    function AddBioForm({ setContributors }) {
      const [name, setName] = useState('');
      const [bio, setBio] = useState('');
      const [github, setGithub] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        setContributors(prevState => [
          ...prevState,
          { name, bio, github }
        ]);
        setName('');
        setBio('');
        setGithub('');
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Short Bio"
            required
          ></textarea>
          <input
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="GitHub Profile URL"
            required
          />
          <button type="submit">Add Bio</button>
        </form>
      );
    }

    export default AddBioForm;
    