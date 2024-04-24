import React, { FC, useEffect } from 'react';
import { useDebounce } from 'ahooks';
import {
  setMovieList,
  setSearchValue,
  setStep,
} from '@/redux/slices/quizSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useGetMovieByNameQuery } from '@/redux/API/movieSearchAPI';
import InputField from '@/UI/InputField/InputField';
import Btn from '@/UI/Btn/Btn';
import './styles.scss';

const SearchMovie: FC = () => {
  const { searchValue, step } = useAppSelector((state) => state.quiz);
  const debouncedValue = useDebounce(searchValue, { wait: 500 });
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetMovieByNameQuery(debouncedValue, {
    skip: !debouncedValue,
  });

  useEffect(() => {
    data?.Search && dispatch(setMovieList(data.Search));
  }, [data]);

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(evt.target.value));
  };

  const onClickHandler = () => {
    dispatch(setStep(step + 1));
  };

  return (
    <>
      <div className="search">
        <h1 className="search__title title">Enter movie title</h1>
        <InputField
          value={searchValue}
          placeholder="Movie title here"
          handler={onChangeHandler}
        />
      </div>
      <Btn disabled={!searchValue} value="Continue" handler={onClickHandler} />
    </>
  );
};

export default SearchMovie;
