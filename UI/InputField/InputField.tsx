import React, { FC } from 'react';
import './styles.scss';
import { InputFieldType } from '@/@types';

const InputField: FC<InputFieldType> = ({ value, handler, placeholder }) => {
  return (
    <input
      className="search__field"
      type="text"
      value={value}
      onChange={handler}
      placeholder={placeholder}
    />
  );
};

export default InputField;
