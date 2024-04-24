import React, { FC } from 'react';
import './styles.scss';
import InputField from '@/UI/InputField/InputField';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setSearchValue } from '@/redux/slices/quizSlice';

const SearchMovie: FC = () => {
  const { searchValue } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(evt.target.value));
  };

  return (
    <div className="search">
      <h1 className="search__title title">Enter movie title</h1>
      <InputField
        value={searchValue}
        placeholder="Movie title here"
        handler={onChangeHandler}
      />
    </div>
  );
};

export default SearchMovie;
