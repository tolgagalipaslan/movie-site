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

  return (
    <div className="md:w-9/12 w-full flex  flex-col   p-2  hover:text-red-400 duration-300">
      <div className="p-2  bg-[#191d20] flex items-start w-fit rounded-t-md">
        <h1>Top Rated Series</h1>
      </div>
      <div className="rounded-r-md rounded-b-md w-full flex p-2 bg-[#191d20]">
        <div className="grid grid-cols-2  w-full">
          {item?.map((item, i) => (
            <SeriesCard item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
