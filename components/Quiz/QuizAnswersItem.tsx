import { FC } from 'react';
import RadioBtn from '@/UI/RadioBtn/RadioBtn';
import { AnswerType } from '@/@types';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setSelectedAnswer } from '@/redux/slices/quizSlice';

const QuizAnswersItem: FC<AnswerType> = ({ id, icon, value }) => {
  const { selectedAnswer } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  return (
    <li
      className={`quiz__answers-item ${
        id === selectedAnswer ? 'selected' : ''
      }`}
      onClick={() => dispatch(setSelectedAnswer(id))}
    >
      <span>{icon}</span>
      {value}
      <RadioBtn checked={id === selectedAnswer ? true : false} />
    </li>
  );
};

export default QuizAnswersItem;
