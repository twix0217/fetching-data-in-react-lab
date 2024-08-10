import { useEffect, useState } from 'react';
import * as starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState('');

  const fetchStarships = async (query) => {
    const results = await starshipService.fetchStarships(query);
    setStarships(results);
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
    fetchStarships(searchQuery);
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={starships} />
    </main>
  );
};

export default App;
