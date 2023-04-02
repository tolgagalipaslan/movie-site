import React, { useEffect, useRef, useState } from "react";
import { getSeries, getSeriesTrailer } from "../../../helpers/Api";
import ReactPlayer from "react-player";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const SeriesCard = ({ item }) => {
  const [ytVideo, setytVideo] = useState([]);
  const [data, setData] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [mute, setMute] = useState(false);
  const playerRef = useRef(null);
  useEffect(() => {
    getSeriesTrailer(item.id).then((res) => setytVideo(res));
    getSeries(item.id).then((res) => setData(res));
  }, [item.id, isShown]);

  const resetVideo = () => {
    const currentTime = playerRef.current.getCurrentTime();
    if (currentTime !== 0) {
      playerRef.current.seekTo(0);
    }
  };

  let hoverTimeout;
  return (
    <div
      className="w-full  bg-black select-none relative  "
      onMouseEnter={() => {
        hoverTimeout = setTimeout(() => {
          setIsShown(true);
          setMute(false);
        }, 800);
      }}
      onMouseLeave={() => {
        clearTimeout(hoverTimeout);
        setIsShown(false);
        setMute(true);
      }}
    >
      <div className="p-2   bg-[#191d20] group  ">
        <div className="h-0  w-full absolute top-0 left-full z-50 opacity-0 md:flex hidden bg-black group-hover:flex-col gap-2  group-hover:p-4 rounded-md group-hover:shadow-md group-hover:shadow-emerald-400 group-hover:border-2 group-hover:opacity-100 border-emerald-300 overflow-hidden group-hover:h-[500px] items-center duration-500">
          {" "}
          <div className="relative rounded-md overflow-hidden w-fit h-fit  ">
            {ytVideo.length === 0 ? (
              <div className="w-[380px] h-[250px] bg-white"></div>
            ) : (
              <ReactPlayer
                width="380px"
                height="250px"
                ref={playerRef}
                playing={isShown}
                loop={true}
                volume={0.2}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      origin: window.location.origin,
                      rel: 0,
                      showinfo: 0,
                    },
                  },
                }}
                onPause={resetVideo}
                url={`https://www.youtube.com/watch?v=${ytVideo[0]?.key}`}
              />
            )}

            <div className="absolute z-50 w-full h-full top-0 flex  items-end justify-end ">
              {/* {mute ? (
                <div
                  className="p-5 "
                  onClick={(e) => {
                    setMute(false);
                  }}
                >
                  <GiSpeakerOff className="text-3xl text-white hover:scale-110 " />
                </div>
              ) : (
                <div className="p-5 ">
                  <GiSpeaker
                    className="text-3xl text-white hover:scale-110 "
                    onClick={(e) => {
                      setMute(true);
                    }}
                  />
                </div>
              )} */}
            </div>
          </div>
          <div className="p-2 flex  flex-col gap-2  bg-[#212529]">
            <div className="flex flex-col">
              <h1 className="font-semibold text-xl text-white">{item.name}</h1>
              <h1 className="line-clamp-5 text-gray-200">{item.overview}</h1>
            </div>
            <div className="flex w-full justify-between">
              <h1>{item.first_air_date.slice(0, 4)}</h1>
              <h1 className="flex items-center">
                {" "}
                <AiFillStar className="text-yellow-400 text-xl" />
                {item.vote_average}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex gap-2 p-1 bg-[#212529] rounded-full hover:bg-[#3b434a]  duration-500">
          <div className="avatar p-1 ">
            <div className="w-12 rounded-full flex items-center  border border-transparent  group-hover:shadow-lg  group-hover:shadow-emerald-500 group-hover:border group-hover: group-hover:border-emerald-400">
              <LazyLoadImage
                effect="blur"
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}
                placeholderSrc={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}
                alt="title"
                className="group-hover:scale-110 duration-500 "
              />
            </div>
          </div>
          <div className="font-semibold w-full flex justify-between px-2 text-white group-hover:text-gray-300 items-center text-sm gap-1">
            <div>
              <h1 className="line-clamp-1">{item.name}</h1>
              <div className="flex items-center gap-2 text-yellow-400 opacity-70 text-xs ">
                {" "}
                <h1 className="line-clamp-1">
                  Episodes:{data.number_of_episodes}
                </h1>
                <h1 className="line-clamp-1">
                  Seasons:{data.number_of_seasons}
                </h1>
              </div>
            </div>
            <div className=" flex justify-between gap-2">
              <h1 className="font-light flex items-center group-hover:text-red-500 group-hover:underline">
                {item.first_air_date.slice(0, 4)}
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
