import React from "react";
import Popular from "./components/Popular";
import UpComing from "./components/UpComing";
import Latest from "./components/Latest";
import SideUp from "./components/SideUp";
import Series from "./components/Series";

const Home = () => {
  return (
    <div>
      <Popular />
      <UpComing />
      <div className="flex md:w-[1180px] gap-2 bg-[#212529]  mx-auto">
        <Latest />
        <SideUp />
      </div>
      <div className="flex md:w-[1180px] gap-2 bg-[#212529]  mx-auto">
        <Series />
        <SideUp />
      </div>
    </div>
  );
};

export default Home;
