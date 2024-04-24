import React, { FC } from 'react';
import './styles.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setIsShowNavbar } from '@/redux/slices/navSlice';

const NavBurger: FC = () => {
  const { isShowNavbar } = useAppSelector((state) => state.nav);
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setIsShowNavbar(!isShowNavbar));
  };

  return (
    <div
      className={`hamburger hamburger--squeeze js-hamburger ${
        isShowNavbar ? 'is-active' : ''
      }`}
      onClick={onClickHandler}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};

export default NavBurger;
