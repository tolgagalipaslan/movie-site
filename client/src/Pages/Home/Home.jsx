import React from "react";
import Popular from "./components/Popular";
import UpComing from "./components/UpComing";
import Latest from "./components/Latest";
import SideUp from "./components/SideUp";
import Series from "./components/Series";
import SeriesTopRated from "./components/SeriesTopRated";
import Discover from "./components/Discover";

const Home = () => {
  return (
    <div>
      <Popular />
      <UpComing />
      <div className="flex md:w-[1180px] md:flex-row flex-col gap-2 bg-[#212529]  mx-auto">
        <Latest />
        <SideUp />
      </div>
      <div className="flex md:w-[1180px] gap-2 md:flex-row flex-col bg-[#212529]  mx-auto">
        <Series />
        <SeriesTopRated />
      </div>
      <Discover />
    </div>
  );
};

export default Home;
