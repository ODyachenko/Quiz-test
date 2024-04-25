import { FC } from 'react';
import { RadioBtnType } from '@/@types';
import './styles.scss';

const RadioBtn: FC<RadioBtnType> = ({ checked }) => {
  return (
    <label className="radio">
      <input
        readOnly
        checked={checked}
        className="radio__field"
        type="radio"
        aria-label="choose btn"
      />
      <span className="radio__checkmark"></span>
    </label>
  );
};

export default RadioBtn;
