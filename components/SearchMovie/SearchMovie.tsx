import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useGetMovieByNameQuery } from '@/redux/API/movieSearchAPI';
import {
  setMovieList,
  setSearchValue,
  setStep,
} from '@/redux/slices/quizSlice';
import InputField from '@/UI/InputField/InputField';
import Btn from '@/UI/Btn/Btn';
import { Inputs } from '@/@types';
import './styles.scss';

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
    data && dispatch(setMovieList(data));
    data && dispatch(setStep(step + 1));
  }, [data]);

  return (
    <>
      <form className="search">
        <h2 className="search__title title">Enter movie title</h2>
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
        value={isLoading ? <BeatLoader color="#fff" /> : 'Continue'}
        handler={handleSubmit((formData) =>
          dispatch(setSearchValue(formData.value))
        )}
      />
    </>
  );
};

export default SearchMovie;
