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
const Discover = () => {
  const envTmbd = import.meta.env.VITE_API_TMPDB;
  const dataURL = `https://api.themoviedb.org/3/discover/movie?api_key=${envTmbd}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
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
    <div className="md:w-[1180px] mx-auto bg-[#212529] p-2">
      <div className="p-2  bg-[#14171a] flex items-start w-fit rounded-t-md">
        <h1>Discover</h1>
      </div>
      <div className="bg-[#14171a] rounded-r-md rounded-b-md p-4">
        <Swiper
          spaceBetween={15}
          autoHeight={true}
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
          className=" forYouBanner rounded-md border-none "
        >
          {popularData?.map((item, i) => (
            <SwiperSlide key={i} className="bg-black">
              <MovieCard item={item} genreMovie={genreMovie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Discover;
