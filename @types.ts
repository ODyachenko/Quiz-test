import React from 'react';

export type BtnType = {
  value: string;
  className?: string;
  handler?: () => void;
  disabled?: boolean;
};

export type GoBackBtnType = {
  className?: string;
  disabled: boolean;
  handler: () => void;
};

export type RadioBtnType = {
  checked: boolean;
};

export type InputFieldType = {
  value: string;
  handler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export type AnswerType = {
  id: number;
  icon: any;
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
