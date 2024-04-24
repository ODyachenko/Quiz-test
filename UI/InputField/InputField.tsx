import React, { FC } from 'react';
import './styles.scss';
import { InputFieldType } from '@/@types';

const InputField: FC<InputFieldType> = ({
  placeholder,
  register,
  errors,
  name,
}) => {
  return (
    <label>
      <input
        className={`field ${errors[name] ? 'invalid' : ''}`}
        type="text"
        placeholder={placeholder}
        {...register}
      />
      {errors[name] && (
        <span className="field__error">{errors[name].message}</span>
      )}
    </label>
  );
};

export default InputField;
