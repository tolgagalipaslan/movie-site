import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { ImSpinner3 } from "react-icons/im";
const Popular = () => {
  const envTmbd = import.meta.env.VITE_API_TMPDB;
  const dataURL = `https://api.themoviedb.org/3/movie/popular?api_key=${envTmbd}&language=en-US&page=1`;
  const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${envTmbd}&language=en-US`;
  const [popularData, setPopularData] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await axios.get(dataURL);
    const genre = await axios.get(genreURL);
    setPopularData(data.data.results);
    setGenreMovie(genre.data);
  };
  const myArray = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="md:w-[1180px] mx-auto">
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        loop
        navigation={true}
        modules={[Autoplay, Navigation]}
        className=" forYouBanner rounded-md  h-[354px]"
      >
        {" "}
        {popularData.length !== 0
          ? popularData?.map((item, i) => (
              <SwiperSlide key={i} className="bg-[#212529]">
                <MovieCard item={item} genreMovie={genreMovie} />
              </SwiperSlide>
            ))
          : myArray.map((i) => (
              <SwiperSlide key={i}>
                {" "}
                <div
                  key={i}
                  className="relative flex group items-center justify-center p-1 "
                >
                  <div className="animate-pulse bg-gray-600 w-full  flex items-center justify-center   h-[354px]">
                    <ImSpinner3 className="text-4xl animate-spin opacity-70" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default Popular;
