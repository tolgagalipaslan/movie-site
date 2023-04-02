import React, { useEffect, useState } from "react";
import { getLatestMovies } from "../../../helpers/Api";

import LatestMovieCard from "./LatestMovieCard";
const Latest = () => {
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getLatestMovies(page).then((res) => setItem(res));
  }, [page]);

  return (
    <div className="md:w-9/12 w-full flex  flex-col items-center    justify-center p-2 ">
      <div className="bg-[#191d20] w-full  flex flex-col items-center justify-center  rounded-md ">
        <div className="tabs w-full  pt-2 px-2 rounded-t-md  ">
          <div className="tab tab-lg tab-lifted tab-active ">Large</div>
          <div className="tab tab-lg tab-lifted ">Large</div>
          <div className="tab tab-lg tab-lifted">Large</div>
        </div>
        <div className=" w-full p-3 bg-[#191d20]  grid md:grid-cols-4 grid-cols-2   gap-5">
          {item?.map((item, i) => (
            <LatestMovieCard key={i} item={item} />
          ))}
        </div>
        {/* PAGINATION */}
        <div className="btn-group grid grid-cols-2 p-2 my-5">
          <button
            className={`btn btn-outline ${page === 1 ? "btn-disabled " : " "} `}
            onClick={(e) => {
              setPage(page - 1);
              window.scrollTo(0, 500);
            }}
          >
            Previous page
          </button>
          <button
            className="btn btn-outline"
            onClick={(e) => {
              setPage(page + 1);
              window.scrollTo(0, 500);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
