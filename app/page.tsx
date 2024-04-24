'use client';

import { useEffect } from 'react';
import { setProgress, setSelectedAnswer } from '@/redux/slices/quizSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import Layout from '../components/Layout/Layout';
import Quiz from '../components/Quiz/Quiz';
import SearchMovie from '@/components/SearchMovie/SearchMovie';
import Movies from '@/components/Movies/Movies';
import { quizList } from '@/data/quizList';

export default function Home() {
  const { step } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const answerId = localStorage.getItem('answerId');
    answerId && dispatch(setSelectedAnswer(Number(answerId)));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setProgress((step / (quizList.length + 1)) * 100));
  }, [step]);

  return (
    <Layout>
      {step < quizList.length ? (
        <Quiz />
      ) : step === quizList.length ? (
        <SearchMovie />
      ) : (
        <Movies />
      )}
    </Layout>
  );
}
