import React, { FC, useEffect } from 'react';
import {
  setMovieList,
  setSearchValue,
  setStep,
} from '@/redux/slices/quizSlice';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useGetMovieByNameQuery } from '@/redux/API/movieSearchAPI';
import InputField from '@/UI/InputField/InputField';
import Btn from '@/UI/Btn/Btn';
import { Inputs } from '@/@types';
import './styles.scss';
import { BeatLoader } from 'react-spinners';

const SearchMovie: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
  });
  const { searchValue, step } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetMovieByNameQuery(searchValue, {
    skip: !searchValue,
  });

  useEffect(() => {
    data?.Search && dispatch(setMovieList(data.Search));
    data && dispatch(setStep(step + 1));
  }, [data]);

  return (
    <>
      <form className="search">
        <h1 className="search__title title">Enter movie title</h1>
        <InputField
          placeholder="Movie title here"
          name={'value'}
          register={{
            ...register('value', {
              required: 'This field is required',
              pattern: {
                value: /^[^%^&$*()]+$/,
                message: 'Please enter a valid movie name',
              },
            }),
          }}
          errors={errors}
        />
      </form>
      <Btn
        type="submit"
        // disabled={!searchValue}
        value={isLoading ? <BeatLoader color="#fff" /> : 'Continue'}
        handler={handleSubmit((formData) =>
          dispatch(setSearchValue(formData.value))
        )}
      />
    </>
  );
};

export default SearchMovie;
