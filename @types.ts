import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type BtnType = {
  value: string | React.ReactNode;
  className?: string;
  handler?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
};

export type GoBackBtnType = {
  className?: string;
  disabled: boolean;
  handler: () => void;
};

export type RadioBtnType = {
  checked: boolean;
};

export type Inputs = {
  value: string;
};

export type InputFieldType = {
  placeholder: string;
  name: string;
  // register: UseFormRegister<Inputs>;
  register: any;
  errors: any;
};

export type AnswerType = {
  id: number;
  icon: string;
  value: string;
};

export type QuizListType = {
  id: number;
  title: string;
  answers: AnswerType[];
};

export type MovieType = {
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type ServerResType = {
  Response: string;
  Search: MovieType[];
  totalResults: number;
};
