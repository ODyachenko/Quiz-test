import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface QuizState {
  selectedAnswer: number;
  showSearchForm: boolean;
  searchValue: string;
}

// Define the initial state using that type
const initialState: QuizState = {
  selectedAnswer: 0,
  showSearchForm: false,
  searchValue: '',
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setSelectedAnswer: (state, action: PayloadAction<number>) => {
      state.selectedAnswer = action.payload;
    },
    setShowSearchForm: (state, action: PayloadAction<boolean>) => {
      state.showSearchForm = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSelectedAnswer, setShowSearchForm, setSearchValue } =
  quizSlice.actions;
export default quizSlice.reducer;
