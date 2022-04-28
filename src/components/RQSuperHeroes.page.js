import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperheroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchSuperheroes,
    {
        staleTime: 3000
    }
  );

  console.log({ isLoading, isFetching });
  console.log('10' + 1);
  console.log('10' - 1);
  console.log('=====================');
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
