import React, { useEffect } from "react";
import { getSeriesTrailer } from "../../../helpers/Api";
import ReactPlayer from "react-player";
import { AiFillStar } from "react-icons/ai";
const SeriesCard = ({ item }) => {
  useEffect(() => {
    getSeriesTrailer(item.id);
  }, [item.id]);

  return (
    <div className="w-full  bg-black select-none relative  ">
      {/* <ReactPlayer
        width="150px"
        muted={true}
        height="100px"
        playing={true}
        config={{
          youtube: {
            playerVars: { modestbranding: 1, rel: 0, showinfo: 0 },
          },
        }}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
      <div className="absolute top-0 w-full h-full z-50 bg-red-300  opacity-25"></div> */}

      <div className="p-2   bg-[#191d20] group  ">
        <div className="flex gap-2 p-1 bg-[#212529] rounded-full hover:bg-[#3b434a]  duration-500">
          <div className="avatar p-1 ">
            <div className="w-12 rounded-full flex items-center  border border-transparent  group-hover:shadow-lg  group-hover:shadow-emerald-500 group-hover:border group-hover: group-hover:border-emerald-400">
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`}
                alt="title"
                className="group-hover:scale-110 duration-500 "
              />
            </div>
          </div>
          <div className="font-semibold w-full flex flex-col text-white group-hover:text-gray-300 text-sm gap-1">
            <h1 className="line-clamp-1">TITLE</h1>
            <div className=" flex justify-between">
              <h1 className="font-light flex items-center group-hover:text-red-500 group-hover:underline">
                YEAR
              </h1>
              <h1 className="flex items-center gap-1 group-hover:scale-110 ">
                <AiFillStar className="text-yellow-400 text-xl" />
                {item.vote_average}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;
