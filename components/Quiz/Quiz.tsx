import { FC } from 'react';
import { setStep } from '@/redux/slices/quizSlice';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
import QuizItem from './QuizItem';
import Btn from '@/UI/Btn/Btn';
import { quizList } from '@/data/quizList';
import './styles.scss';

const Quiz: FC = () => {
  const { step, selectedAnswer } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setStep(step + 1));
  };

  return (
    <>
      <div className="quiz">
        {step < quizList.length && <QuizItem {...quizList[step]} />}
      </div>
      <Btn
        value="Continue"
        disabled={!selectedAnswer}
        handler={onClickHandler}
      />
    </>
  );
};

export default Quiz;
