import React, { useEffect, useState } from "react";
import { getMovieReviews, getMovieTrailer } from "../../../helpers/Api";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const Video = ({ item }) => {
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [movieRewiev, setMovieRewiev] = useState([]);
  useEffect(() => {
    getMovieTrailer(item.id).then((res) => setMovieTrailer(res));
    getMovieReviews(item.id).then((res) => setMovieRewiev(res));
  }, [item.id]);
  console.log(movieRewiev);
  return (
    <div className="md:w-[1180px]  w-full  justify-between flex gap-2 bg-[#212529] p-5 mx-auto">
      {" "}
      <div className="h-full">
        <h1 className="w-fit bg-[#191d20] p-2 rounded-t-md text-lg font-semibold">
          {item.original_title}
        </h1>
        <div className="w-fit h-full rounded-r-md rounded-b-md bg-[#191d20] p-3 flex flex-col gap-2 items-start">
          <div className="rounded-md overflow-hidden">
            {movieTrailer && movieTrailer.length !== 0 ? (
              <iframe
                width="860"
                height="515"
                src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                title="YouTube video player"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-3/12 items-start">
        <h1 className="w-fit bg-[#191d20] p-2 rounded-t-md text-lg font-semibold">
          Reviews
        </h1>
        <div className="w-full bg-black">
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 1,
              },
              720: {
                slidesPerView: 1,
              },
              1000: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}
            loop
            navigation={true}
            modules={[Autoplay, Navigation]}
            className=" forYouBanner    w-[240px] "
          >
            {movieRewiev.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="w-full  flex flex-col bg-slate-600  h-[400px]">
                  <div className="flex h-1/6 items-center justify-between">
                    <img
                      src={review?.author_details?.avatar_path?.slice(1)}
                      alt=""
                      className="rounded-full w-14"
                    />
                    <h1>{review?.author_details?.username}</h1>
                  </div>
                  <div className="flex flex-col h-5/6 w-full justify-between bg-red-700 ">
                    <p className=" h-5/6  overflow-y-auto overflow-x-hidden p-2">
                      {review?.content}
                    </p>
                    <div className="flex justify-between">
                      <h1>Year : {review?.created_at.slice(0, 4)}</h1>
                      <h1>Rate : {review?.author_details?.rating || 0}</h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Video;
