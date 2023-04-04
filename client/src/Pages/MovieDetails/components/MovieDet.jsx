import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { getSingleMovieCredits } from "../../../helpers/Api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const MovieDet = ({ item }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getSingleMovieCredits(item.id).then((res) => setData(res));
  }, [item.id]);
  return (
    <div className="md:w-[1180px] md:h-[550px] w-full items-center justify-between flex  md:flex-row  flex-col gap-2 bg-[#212529] p-5 mx-auto">
      <div className="md:w-3/12  rounded-md overflow-hidden ">
        {item.poster_path ? (
          <LazyLoadImage
            effect="blur"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item?.poster_path}`}
            placeholderSrc={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item?.poster_path}`}
            alt=""
            className=" rounded-md w-full md:h-full  hover:scale-110 duration-500"
          />
        ) : (
          <div className="rounded-md w-full h-full bg-gray-700"></div>
        )}
      </div>
      <div className="md:w-8/12 w-full h-full rounded-md flex flex-col  ">
        {" "}
        <h1 className="w-fit bg-[#191d20] p-2 rounded-t-md text-lg font-semibold">
          {item.original_title}
        </h1>
        <div className="w-full h-full rounded-r-md rounded-b-md bg-[#191d20] p-3 flex flex-col gap-2">
          <p className="border-b border-gray-700 p-2 text-gray-400">
            {item.overview}
          </p>
          {item.vote_average && item.vote_count && (
            <h1 className="flex gap-2 items-center">
              <span className="text-yellow-500 text-lg flex items-center gap-1">
                {" "}
                IMDB{" "}
                <span className="text-2xl">
                  <AiFillStar />
                </span>
                :
              </span>
              {item.vote_average.toFixed(1)}{" "}
              <span className="text-sm text-gray-500">
                ( {item.vote_count} )
              </span>
            </h1>
          )}
          <h1 className="flex items-center gap-2 font-semibold text-gray-500">
            Time :{" "}
            <span className="px-2 items-center flex justify-center w-fit  bg-gray-600 text-white rounded-md">
              {item.runtime} minute
            </span>
          </h1>
          <h1 className="flex items-center gap-2 font-semibold text-gray-500">
            Year-Country :{" "}
            {item?.release_date && (
              <span className="px-2 items-center flex justify-center w-fit  bg-gray-600 text-white rounded-md">
                {item?.release_date.slice(0, 4)}
              </span>
            )}
            {item?.production_countries?.iso_3166_1 && (
              <span className="px-2 items-center flex justify-center w-fit  bg-gray-600 text-white rounded-md">
                {item?.production_countries[0].iso_3166_1}
              </span>
            )}
          </h1>
          <h1 className="flex items-center gap-2 font-semibold text-gray-500 flex-wrap">
            Genres :{" "}
            {item?.genres &&
              item.genres.map((ite, i) => (
                <span
                  key={i}
                  className="px-2 items-center flex justify-center w-fit  bg-gray-600 text-white rounded-md"
                >
                  {ite.name}
                </span>
              ))}
          </h1>
          <h1 className="flex items-center gap-2 font-semibold text-gray-500">
            Language :{" "}
            {item?.original_language && (
              <span className="px-2 items-center flex justify-center w-fit  bg-gray-600 text-white rounded-md capitalize">
                {item?.original_language}
              </span>
            )}
          </h1>
          <h1 className="flex flex-col gap-2 font-semibold text-gray-500">
            Actors :{" "}
            <div className="flex gap-2 flex-wrap">
              {data && data.length !== 0
                ? data.map(
                    (data, i) =>
                      data.profile_path && (
                        <div
                          key={i}
                          className=" rounded-full  flex justify-center w-fit h-fit bg-gray-600 text-white  capitalize items-center "
                        >
                          <LazyLoadImage
                            effect="blur"
                            src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${data?.profile_path}`}
                            placeholderSrc={`https://www.themoviedb.org/t/p/w138_and_h175_face/${data?.profile_path}`}
                            alt=""
                            className=" h-9 w-9 object-cover rounded-full"
                          />
                          <h1 className="px-2">{data?.name}</h1>
                        </div>
                      )
                  )
                : null}
            </div>
          </h1>
        </div>{" "}
      </div>
    </div>
  );
};

export default MovieDet;
