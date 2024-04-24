import React, { FC, useEffect } from 'react';
import MoviesCarousel from './MoviesCarousel';
import MoviesNotFound from './MoviesNotFound';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import './styles.scss';
import { setSearchValue } from '@/redux/slices/quizSlice';

const Movies: FC = () => {
  const { movieList } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchValue(''));
  }, []);

  return !!movieList.length ? <MoviesCarousel /> : <MoviesNotFound />;
};

export default Movies;
