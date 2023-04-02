import React, { useEffect, useState } from "react";
import { getTopRatedSeries } from "../../../helpers/Api";
import SeriesCard from "./SeriesCard";

const Series = () => {
  const [item, setitem] = useState([]);
  useEffect(() => {
    getTopRatedSeries().then((res) => {
      setitem(res);
    });
  }, []);
  const myArray = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="md:w-9/12 w-full flex  flex-col   p-2  hover:text-red-400 duration-300">
      <div className="p-2  bg-[#191d20] flex items-start w-fit rounded-t-md">
        <h1>Top Rated Series</h1>
      </div>
      <div className="rounded-r-md rounded-b-md w-full flex p-2 bg-[#191d20]">
        <div className="grid md:grid-cols-2  grid-cols-1 gap-1 w-full">
          {item.length !== 0
            ? item?.map((item, i) => <SeriesCard item={item} key={i} />)
            : // SKELETOn
              myArray.map((i) => (
                <div
                  key={i}
                  className="w-full  bg-black select-none relative  "
                >
                  <div className="p-2   bg-[#191d20] group  ">
                    <div className="flex gap-2 p-1 bg-gray-600 animate-pulse rounded-full hover:bg-[#3b434a]  duration-500">
                      <div className="avatar p-1 ">
                        <div className="w-12 rounded-full flex items-center  border border-transparent      "></div>
                      </div>
                      <div className="font-semibold w-full flex justify-between px-2 text-white group-hover:text-gray-300 items-center text-sm gap-1">
                        <div>
                          <div className="flex items-center gap-2 text-yellow-400 opacity-70 text-xs ">
                            {" "}
                            <div className="line-clamp-1"></div>
                            <div className="line-clamp-1"></div>
                          </div>
                        </div>
                        <div className=" flex justify-between gap-2">
                          <div className="flex items-center gap-1 group-hover:scale-110 "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
