import { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <section>
      <h2>Search </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="starship">Enter starship name:</label>
        <input
          id="starship"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;
