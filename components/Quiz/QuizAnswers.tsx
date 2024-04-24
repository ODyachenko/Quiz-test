import React, { FC } from 'react';
import QuizAnswersItem from './QuizAnswersItem';
import { AnswerType } from '@/@types';

type QuizAnswersProps = {
  answers: AnswerType[];
};

const QuizAnswers: FC<QuizAnswersProps> = ({ answers }) => {
  return (
    <ul className="quiz__answers">
      {answers.map((answer) => (
        <QuizAnswersItem key={answer.id} {...answer} />
      ))}
    </ul>
  );
};

export default QuizAnswers;
