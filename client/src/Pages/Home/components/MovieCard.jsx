import React, { useEffect, useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { getSingleMovie } from "../../../helpers/Api";
const MovieCard = ({ item, genreMovie }) => {
  const [genresArray, setGenresArray] = useState([]);
  useEffect(() => {
    getSingleMovie(item.id).then((res) => setGenresArray(res));
  }, [item.id]);

  return (
    <div className="relative flex group items-center justify-center">
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`}
        alt=""
        className="object-center"
      />
      <div className="w-full h-full absolute z-10 bg-black opacity-20  group-hover:opacity-20  group-hover:backdrop-blur-md  duration-500  "></div>
      <div className="md:w-full  h-full w-[300px] gap-2 absolute z-50   group-hover:backdrop-blur-sm">
        <div className="h-4/6 w-full      px-6 opacity-0 group-hover:opacity-80 duration-500   items-center justify-center flex flex-col gap-2">
          <p className="line-clamp-6 text-gray-200">{item.overview}</p>
          <div>
            {genresArray?.map((genre, i) => (
              <div className="badge" key={i}>
                {genre.name}
              </div>
            ))}
          </div>
        </div>
        <div className="h-2/6 w-full flex flex-col font-semibold text-sm text-white  justify-center p-2 px-4 gap-3">
          <div className="flex justify-between w-full ">
            <h1 className="font-light flex items-center group-hover:text-red-500">
              {item.release_date.slice(0, 4)}
            </h1>
            <h1 className="flex items-center gap-1">
              <BsFillPeopleFill /> {item.vote_count}
            </h1>
            <h1 className="flex items-center gap-1 ">
              <AiFillStar className="text-yellow-400 text-xl" />
              {item.vote_average}
            </h1>
          </div>
          <div>
            <h1 className="text-md font-bold">{item.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
