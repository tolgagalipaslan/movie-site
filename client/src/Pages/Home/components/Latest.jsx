import React, { useEffect, useState } from "react";
import { getLatestMovies } from "../../../helpers/Api";

import LatestMovieCard from "./LatestMovieCard";
import { ImSpinner3 } from "react-icons/im";
const Latest = () => {
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getLatestMovies(page).then((res) => setItem(res));
  }, [page]);
  const myArray = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="md:w-9/12 w-full flex  flex-col     p-2 ">
      <div className="bg-[#191d20] w-full  flex flex-col items-center justify-center  rounded-md ">
        <div className="tabs w-full  pt-2 px-2 rounded-t-md  ">
          <div className="tab tab-lg tab-lifted tab-active ">Large</div>
          <div className="tab tab-lg tab-lifted ">Large</div>
          <div className="tab tab-lg tab-lifted">Large</div>
        </div>
        <div className=" w-full p-3 bg-[#191d20]  grid md:grid-cols-4 grid-cols-2  h-fit  gap-5">
          {item.length !== 0
            ? item?.map((item, i) => <LatestMovieCard key={i} item={item} />)
            : myArray.map((i) => (
                <div
                  key={i}
                  className="relative flex group h-full rounded-md border-2 border-[#32131200] hover:shadow-emerald-500 hover:shadow-lg   hover:border-emerald-300 overflow-hidden"
                >
                  <div
                    src=""
                    alt=""
                    className="animate-pulse bg-gray-600 w-full  flex items-center justify-center  h-[280px]"
                  >
                    <ImSpinner3 className="text-4xl animate-spin opacity-70" />
                  </div>
                </div>
              ))}
        </div>
        {/* PAGINATION */}
        <div className="btn-group grid grid-cols-2 p-2 my-5">
          <button
            className={`btn btn-outline ${page === 1 ? "btn-disabled " : " "} `}
            onClick={(e) => {
              setItem([]);
              setPage(page - 1);
              window.scrollTo(0, 500);
            }}
          >
            Previous page
          </button>
          <button
            className="btn btn-outline"
            onClick={(e) => {
              setItem([]);
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
