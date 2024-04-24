import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setSelectedAnswer } from '@/redux/slices/quizSlice';
import RadioBtn from '@/UI/RadioBtn/RadioBtn';
import { AnswerType } from '@/@types';

const QuizAnswersItem: FC<AnswerType> = ({ id, icon, value }) => {
  const { selectedAnswer } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    dispatch(setSelectedAnswer(id));
    localStorage.setItem('answerId', String(id));
  };

  return (
    <li
      className={`quiz__answers-item ${
        id === selectedAnswer ? 'selected' : ''
      }`}
      onClick={() => onClickHandler(id)}
    >
      <span>{icon}</span>
      {value}
      <RadioBtn checked={id === selectedAnswer ? true : false} />
    </li>
  );
};

export default QuizAnswersItem;
