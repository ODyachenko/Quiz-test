'use client';

import React, { FC } from 'react';
import QuizAnswers from './QuizAnswers';
import Btn from '@/UI/Btn/Btn';
import { QuizListType } from '@/@types';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setShowSearchForm } from '@/redux/slices/quizSlice';

const QuizItem: FC<QuizListType> = ({ title, answers }) => {
  const { selectedAnswer } = useAppSelector((state) => state.quiz);
  const disaptch = useAppDispatch();

  const onClickHandler = () => {
    disaptch(setShowSearchForm(true));
  };

  return (
    <div className="quiz__item">
      <h1 className="quiz__title title">{title}</h1>
      <QuizAnswers answers={answers} />
      <Btn
        value="Continue"
        disabled={!selectedAnswer}
        handler={onClickHandler}
      />
    </div>
  );
};

export default QuizItem;
