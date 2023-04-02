import React, { useEffect, useState } from "react";
import { getUpComingMovies } from "../../../helpers/Api";

const UpComing = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getUpComingMovies().then((res) => setItem(res));
  }, []);
  return (
    <div className="md:w-[1180px] bg-[#212529] mx-auto w-full p-3 ">
      <div className="p-3 px-9 bg-[#191d20] flex justify-start w-fit rounded-t-md">
        <h1>Up Coming</h1>
      </div>
      <div className="p-3 px-9 bg-[#191d20] w-full  gap-1  grid md:grid-cols-8  grid-cols-3 rounded-b-md">
        {item?.map((item, i) => (
          <div key={i} className="flex flex-col  gap-2 mt-3 items-center p-1">
            <div className="avatar">
              <div className="lg:w-24   md:w-16  sm:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  overflow-hidden ">
                <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`}
                  alt={item.title}
                  className="hover:scale-125 duration-500 hover:animate-pulse"
                />
              </div>
            </div>
            <h1 className=" text-white font-semibold  text-center hover:text-red-400 line-clamp-2">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComing;
