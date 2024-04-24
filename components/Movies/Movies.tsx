import React, { FC } from 'react';
import MoviesCarousel from './MoviesCarousel';
import MoviesNotFound from './MoviesNotFound';
import { useAppSelector } from '@/hooks/hooks';
import './styles.scss';

const Movies: FC = () => {
  const { movieList } = useAppSelector((state) => state.quiz);

  return !!movieList.length ? <MoviesCarousel /> : <MoviesNotFound />;
};

export default Movies;
