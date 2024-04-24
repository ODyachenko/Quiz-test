import Btn from '@/UI/Btn/Btn';
import React, { FC } from 'react';
import QuizItem from './QuizItem';
import { quizList } from '@/data/quizList';
import './styles.scss';

const Quiz: FC = () => {
  return (
    <div className="quiz">
      {quizList.map((question) => (
        <QuizItem key={question.id} {...question} />
      ))}
    </div>
  );
};

export default Quiz;
