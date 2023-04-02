import React, { useEffect, useState } from "react";
import { getUpComingMovies } from "../../../helpers/Api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ImSpinner3 } from "react-icons/im";
const UpComing = () => {
  const [item, setItem] = useState([]);
  const myArray = Array.from({ length: 8 }, (_, index) => index + 1);
  useEffect(() => {
    getUpComingMovies().then((res) => setItem(res));
  }, []);
  return (
    <div className="md:w-[1180px] bg-[#212529] mx-auto w-full p-3 ">
      <div className="p-3 px-9 bg-[#191d20] flex justify-start w-fit rounded-t-md">
        <h1>Up Coming</h1>
      </div>
      <div className="p-3 px-9 bg-[#191d20] w-full  gap-1  grid md:grid-cols-8  grid-cols-3 rounded-b-md">
        {item.length !== 0
          ? item?.map((item, i) => (
              <div
                key={i}
                className="flex flex-col  gap-2 mt-3 items-center p-1 h-[160px]"
              >
                <div className="avatar">
                  <div className="md:w-24   w-16   rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  overflow-hidden bg-gray-600 ">
                    <LazyLoadImage
                      effect="blur"
                      src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`}
                      alt={item.title}
                      placeholderSrc={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`}
                      className="hover:scale-125 duration-500 hover:animate-pulse "
                    />
                  </div>
                </div>
                <h1 className=" text-white font-semibold  text-center hover:text-red-400 line-clamp-2">
                  {item.title}
                </h1>
              </div>
            ))
          : myArray.map((i) => (
              <div
                key={i}
                className="flex flex-col  gap-2 mt-3 items-center p-1 h-[160px]"
              >
                <div className="avatar">
                  <div className="lg:w-24   md:w-16  sm:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  overflow-hidden ">
                    <div className=" duration-500 flex items-center justify-center bg-gray-600 w-full animate-pulse  h-full" />
                  </div>
                </div>
                <div className=" text-white mt-1 bg-gray-600 w-full rounded-full   animate-pulse  h-3 "></div>
                <div className=" text-white bg-gray-600 w-full rounded-full  animate-pulse  h-3  "></div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default UpComing;
