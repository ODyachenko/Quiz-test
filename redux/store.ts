import { configureStore } from '@reduxjs/toolkit';
import quizSlice from './slices/quizSlice';
import { movieSearchAPI } from './API/movieSearchAPI';

export const store = configureStore({
  reducer: {
    quiz: quizSlice,

    [movieSearchAPI.reducerPath]: movieSearchAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieSearchAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
