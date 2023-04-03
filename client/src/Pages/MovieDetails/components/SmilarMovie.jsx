import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { ImSpinner3 } from "react-icons/im";
import { getSmilarMovie } from "../../../helpers/Api";
import MovieCard from "../../Home/components/MovieCard";
const SmilarMovie = ({ item }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getSmilarMovie(item.id).then((res) => setData(res));
  }, [item.id]);

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
        {data?.length !== 0
          ? data?.map((item, i) => (
              <SwiperSlide key={i} className="bg-[#212529]">
                <MovieCard item={item} />
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

export default SmilarMovie;
