import React, { useEffect, useState } from "react";
import { getMovieReviews, getMovieTrailer } from "../../../helpers/Api";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
const Video = ({ item }) => {
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [movieRewiev, setMovieRewiev] = useState([]);
  useEffect(() => {
    getMovieTrailer(item.id).then((res) => setMovieTrailer(res));
    getMovieReviews(item.id).then((res) => setMovieRewiev(res));
  }, [item.id]);
  return (
    <div className="md:w-[1180px]  w-full  justify-between flex gap-2 bg-[#212529] p-5 mx-auto md:flex-row flex-col">
      {" "}
      <div className="h-full">
        <h1 className="w-fit bg-[#191d20] p-2 rounded-t-md text-lg font-semibold">
          {item.original_title}
        </h1>
        <div className="md:w-fit w-full h-full rounded-r-md rounded-b-md bg-[#191d20] p-3 flex flex-col gap-2 items-start">
          <div className="rounded-md overflow-hidden w-full">
            {movieTrailer && movieTrailer.length !== 0 ? (
              <iframe
                width="860"
                height="515"
                src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                title="YouTube video player"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="md:w-[860px] w-full"
              ></iframe>
            ) : (
              <div className="w-[860px] h-[515px] bg-gray-700 flex items-center justify-center">
                <h1 className="text-2xl text-gray-500 animate-pulse">
                  No video for this movie !
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:w-3/12 w-full items-start">
        <h1 className="w-fit bg-[#191d20] p-2 rounded-t-md text-lg font-semibold">
          Reviews
        </h1>
        <div className="w-full rounded-b-md rounded-r-md bg-[#191d20] p-2 ">
          {movieRewiev.length !== 0 ? (
            <Swiper
              spaceBetween={5}
              autoplay={{
                delay: 4000,
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
              className=" forYouBanner  rounded-md  p-1  w-[240px] "
            >
              {movieRewiev.map((review, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full  flex flex-col bg-[#212529] h-[400px] p-2 rounded-md  border-2 shadow-sm shadow-emerald-500 border-emerald-400 gap-2">
                    <div className="flex h-1/6 items-center justify-between">
                      {/* PICTURE NAME */}
                      <div className="w-1/2 overflow-hidden ">
                        <div className="rounded-full w-14 overflow-hidden">
                          {review?.author_details?.avatar_path ? (
                            review?.author_details?.avatar_path.includes(
                              "http"
                            ) ? (
                              <img
                                src={review?.author_details?.avatar_path?.slice(
                                  1
                                )}
                                alt=""
                                className="rounded-full w-14 hover:scale-110 duration-300"
                              />
                            ) : (
                              <img
                                src={`https://www.gravatar.com/avatar${review?.author_details?.avatar_path}`}
                                alt=""
                                className="rounded-full w-14 hover:scale-110 duration-300"
                              />
                            )
                          ) : (
                            <img
                              src="/assets/placeholder.png"
                              alt=""
                              className="rounded-full w-14 hover:scale-110 duration-300"
                            />
                          )}
                        </div>
                      </div>
                      <div className="w-1/2 text-white items-center flex  justify-between  line-clamp-1">
                        <h1 className="text-gray-400 underline hover:text-red-500">
                          {review?.author_details?.username}
                        </h1>
                      </div>
                    </div>
                    {/* CONTENT */}
                    <div className="flex flex-col h-5/6 w-full justify-between bg-[#191d20] text-white p-2 rounded-md  mainSideBar">
                      <p className=" h-5/6  overflow-y-auto overflow-x-hidden  mainSideBar p-2 text-sm  px-3">
                        {review?.content}
                      </p>
                      <div className="flex justify-between">
                        <h1 className="text-red-500">
                          Year : {review?.created_at.slice(0, 4)}
                        </h1>
                        <h1 className="text-yellow-400 flex items-center gap-1">
                          Rate: <AiFillStar className="text-xl" />
                          {review?.author_details?.rating || 0}
                        </h1>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className=" w-[240px] mx-auto p-1 h-[400px] bg-gray-700   flex flex-wrap text-xl items-center justify-center">
              <h1 className="text-gray-400 p-6 animate-pulse">
                There is no review for this movie !
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
