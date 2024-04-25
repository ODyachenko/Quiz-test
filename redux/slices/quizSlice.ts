import { MovieType, ServerResType } from '@/@types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface QuizState {
  step: number;
  progress: number;
  selectedAnswer: number;
  searchValue: string;
  movieList: MovieType[];
}

// Define the initial state using that type
const initialState: QuizState = {
  step: 0,
  progress: 0,
  selectedAnswer: 0,
  searchValue: '',
  movieList: [],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    setSelectedAnswer: (state, action: PayloadAction<number>) => {
      state.selectedAnswer = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setMovieList: (state, action: PayloadAction<any>) => {
      if (action.payload.Search) {
        state.movieList = action.payload.Search;
      } else {
        state.movieList = [];
      }
    },
  },
});

export const {
  setStep,
  setProgress,
  setSelectedAnswer,
  setSearchValue,
  setMovieList,
} = quizSlice.actions;
export default quizSlice.reducer;
