import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';

const fetchSuperHeroes = () => {
  return axios.get(`http://locahost:4000/superheroes`);
};

const fetchFriends = () => {
  return axios.get(`http://locahost:4000/friends`);
};

export const ParallelQueries = () => {
  const {data: superHeroes} = useQuery('super-heroes', fetchSuperHeroes);
  const {data: friends} = useQuery('friends', fetchFriends);
  return <div>ParallelQueries Page</div>;
};
