import React, { FC } from 'react';
import GoBackBtn from '@/UI/GoBackBtn/GoBackBtn';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setStep } from '@/redux/slices/quizSlice';
import NavBurger from './NavBurger';
import ProgressBar from '@/UI/ProgressBar/ProgressBar';
import './styles.scss';

const Nav: FC = () => {
  const { progress, step } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setStep(step - 1));
  };

  return (
    <nav className="nav">
      <div className="nav__inner">
        <GoBackBtn disabled={!step} handler={onClickHandler} />
        <span className="nav__progress">{Math.floor(progress)}%</span>
        <NavBurger />
      </div>
      <ProgressBar progress={progress} />
    </nav>
  );
};

export default Nav;
