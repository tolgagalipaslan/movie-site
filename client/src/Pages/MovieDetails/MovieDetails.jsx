import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovieDetails } from "../../helpers/Api";
import MovieDet from "./components/MovieDet";
import Video from "./components/Video";
import SmilarMovie from "./components/SmilarMovie";

const MovieDetails = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    getSingleMovieDetails(params.id).then((res) => setItem(res));
  }, [params.id]);
  return (
    <div>
      {item.length !== 0 ? (
        <div>
          <div>
            <MovieDet item={item} />
          </div>

          <div>
            <Video item={item} />
          </div>
          <div>
            <SmilarMovie item={item} />
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div className="md:w-[1180px] md:h-[550px] w-full items-center justify-between flex  md:flex-row  flex-col gap-2 bg-[#212529] p-5 mx-auto">
            <div className="md:w-3/12  rounded-md overflow-hidden ">
              <div className="rounded-md w-full h-[427px]  animate-pulse bg-gray-700"></div>
            </div>
            <div className="md:w-8/12 w-full h-full rounded-md flex flex-col  ">
              {" "}
              <div className="w-16 bg-[#191d20] p-2 rounded-t-md text-lg font-semibold"></div>
              <div className="w-full h-full rounded-r-md rounded-b-md bg-[#191d20] p-3 flex flex-col gap-2"></div>{" "}
            </div>
          </div>
          <div className="md:w-[1180px]  w-full  justify-between flex gap-2 bg-[#212529] p-5 mx-auto md:flex-row flex-col">
            {" "}
            <div className="h-full">
              <h1 className="w-fit bg-[#191d20] p-2 rounded-t-md text-lg font-semibold text-[#191d20] ">
                Place Holder
              </h1>
              <div className="md:w-fit w-full h-full rounded-r-md rounded-b-md bg-[#191d20] p-3 flex flex-col gap-2 items-start">
                <div className="rounded-md overflow-hidden w-full">
                  <div className="w-[860px] h-[515px] bg-gray-700 flex items-center justify-center">
                    <h1 className="text-2xl text-gray-500 animate-pulse">
                      No video for this movie !
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-3/12 w-full items-start">
              <h1 className="w-fit bg-[#191d20] p-2 rounded-t-md text-lg font-semibold">
                Reviews
              </h1>
              <div className="w-full rounded-b-md rounded-r-md bg-[#191d20] p-2 ">
                <div className=" w-[240px] mx-auto p-1 h-[400px] bg-gray-700   flex flex-wrap text-xl items-center justify-center">
                  <h1 className="text-gray-400 p-6 animate-pulse">
                    There is no review for this movie !
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
