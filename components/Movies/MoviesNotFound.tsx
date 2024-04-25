import Image from 'next/image';
import React, { FC } from 'react';
import notFound from '@/assets/img/not-found.png';

const MoviesNotFound: FC = () => {
  return (
    <div className="not-found">
      <Image
        className="not-found__img"
        src={notFound}
        alt="Not Found"
        width={135}
        height={135}
      />
      <h2 className="not-found__title">Oops, no movie found</h2>
    </div>
  );
};

export default MoviesNotFound;
