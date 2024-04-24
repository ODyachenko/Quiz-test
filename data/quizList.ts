import { QuizListType } from '@/@types';

export const quizList: QuizListType[] = [
  {
    id: 1,
    title: 'Your favorite movie genre?',
    answers: [
      {
        id: 1,
        icon: '🎭',
        value: 'Drama',
      },
      {
        id: 2,
        icon: `🤹`,
        value: 'Comedy',
      },
      {
        id: 3,
        icon: `🥷`,
        value: 'Action',
      },
      {
        id: 4,
        icon: '🧟',
        value: 'Thriller',
      },
      {
        id: 5,
        icon: `👨‍🔬`,
        value: 'Science fiction',
      },
    ],
  },
];
