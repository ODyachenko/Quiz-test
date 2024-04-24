import { FC } from 'react';
import Image from 'next/image';
import { MovieType } from '@/@types';
import placeholder from '@/assets/img/placeholder.jpg';

const Movie: FC<MovieType> = ({ Poster, Year, Title }) => {
  return (
    <div className="movies__list-item">
      <Image
        className="movies__list-img"
        src={Poster === 'N/A' ? placeholder : Poster}
        alt={Title}
        width={300}
        height={453}
      />
      <h2 className="movies__list-title">{Title}</h2>
      <span className="movies__list-year">{Year}</span>
    </div>
  );
};

export default Movie;
