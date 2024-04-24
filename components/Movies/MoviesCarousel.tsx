import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useAppSelector } from '@/hooks/hooks';
import Movie from './Movie';
import Btn from '@/UI/Btn/Btn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MoviesCarousel = () => {
  const { movieList } = useAppSelector((state) => state.quiz);

  return (
    <>
      <div className="movies">
        <Swiper
          autoHeight={true}
          spaceBetween={20}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="movies__carousel"
        >
          {movieList.map((movie) => (
            <SwiperSlide key={movie.imdbID}>
              <Movie {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Btn value="Complete" />
    </>
  );
};

export default MoviesCarousel;
