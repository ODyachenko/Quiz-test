import React, { FC } from 'react';
import { GoBackBtnType } from '@/@types';
import './styles.scss';

const GoBackBtn: FC<GoBackBtnType> = ({ className, disabled, handler }) => {
  return (
    <button
      onClick={handler}
      disabled={disabled}
      className={`back-btn ${className ? className : ''}`}
    >
      <svg
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.90039 2L2.00089 7.8995L7.90039 13.799"
          stroke="#212121"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default GoBackBtn;
