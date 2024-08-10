const API_KEY = 'f919809de57443cbae095003240708';
const BASE_URL = 'https://swapi.dev/api/starships/';

const fetchStarships = async (search = '') => {
  try {
    const query = search ? `?search=${search}` : '';
    const response = await fetch(BASE_URL + query);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { fetchStarships };
