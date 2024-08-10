import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  if (!starships) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2>Starships</h2>
      <p>Number of results: {starships.length}</p>
      <ul>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
