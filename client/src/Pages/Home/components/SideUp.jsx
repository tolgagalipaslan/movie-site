import React, { useEffect, useState } from "react";
import { getTopRated } from "../../../helpers/Api";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
const SideUp = () => {
  const [item, setitem] = useState([]);
  useEffect(() => {
    getTopRated().then((res) => setitem(res));
  }, []);
  const myArray = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="md:w-3/12  h-full p-2 flex flex-col">
      <div className="p-2  bg-[#191d20] flex items-start w-fit rounded-t-md">
        <h1>Top Rated</h1>
      </div>
      <div className="rounded-r-md rounded-b-md overflow-hidden ">
        {item.length !== 0
          ? item?.map((item, i) => (
              <Link to={`/movieDetails/${item.id}`} key={i}>
                <div className="p-2   bg-[#191d20] group  ">
                  <div className="flex gap-2 p-1 bg-[#212529] rounded-l-full hover:bg-[#3b434a]  duration-500">
                    <div className="avatar p-1 ">
                      <div className="w-12 rounded-full flex items-center  border border-transparent  group-hover:shadow-lg  group-hover:shadow-emerald-500 group-hover:border group-hover: group-hover:border-emerald-400">
                        <LazyLoadImage
                          effect="blur"
                          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`}
                          placeholderSrc={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`}
                          alt={item.title}
                          className="group-hover:scale-110 duration-500 "
                        />
                      </div>
                    </div>
                    <div className="font-semibold w-full flex flex-col text-white group-hover:text-gray-300 text-sm gap-1">
                      <h1 className="line-clamp-1">{item.title}</h1>
                      <div className=" flex justify-between">
                        <h1 className="font-light flex items-center group-hover:text-red-500 group-hover:underline">
                          {item.release_date.slice(0, 4)}
                        </h1>
                        <h1 className="flex items-center gap-1 group-hover:scale-110 ">
                          <AiFillStar className="text-yellow-400 text-xl" />
                          {item.vote_average}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : myArray.map((i) => (
              <div key={i} className="p-2   bg-[#191d20] group  ">
                <div className="flex gap-2 p-1 bg-gray-600 animate-pulse rounded-l-full hover:bg-[#3b434a]  duration-500">
                  <div className="avatar p-1 ">
                    <div className="w-12 rounded-full flex items-center  border border-transparent  group-hover:shadow-lg  group-hover:shadow-emerald-500 group-hover:border group-hover: group-hover:border-emerald-400"></div>
                  </div>
                  <div className="font-semibold w-full flex flex-col text-white group-hover:text-gray-300 text-sm gap-1">
                    <div className="line-clamp-1"></div>
                    <div className=" flex justify-between">
                      <div className="font-light flex items-center group-hover:text-red-500 group-hover:underline"></div>
                      <div className="flex items-center gap-1 group-hover:scale-110 "></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SideUp;
