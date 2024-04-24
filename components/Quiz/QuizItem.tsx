import { FC } from 'react';
import QuizAnswers from './QuizAnswers';
import { QuizListType } from '@/@types';

const QuizItem: FC<QuizListType> = ({ title, answers }) => {
  return (
    <div className="quiz__item">
      <h1 className="quiz__title title">{title}</h1>
      <QuizAnswers answers={answers} />
    </div>
  );
};

export default QuizItem;
