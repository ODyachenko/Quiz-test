import { FC } from 'react';
import { BtnType } from '@/@types';
import './styles.scss';

const Btn: FC<BtnType> = ({ value, className, handler, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={handler}
      className={`btn ${className ? className : ''}`}
    >
      {value}
    </button>
  );
};

export default Btn;
