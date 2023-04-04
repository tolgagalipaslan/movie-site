import React, { useState } from "react";
import { BsFillLockFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(true);
  return (
    <div className="w-full  md:mt-2 ">
      <div className="md:w-[1180px] w-full bg-[#212529]  mx-auto flex items-center md:rounded-t-lg p-2 justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 ">
          <LazyLoadImage
            src="/assets/logo.png"
            effect="blur"
            placeholderSrc="/assets/logo.png"
            alt=""
            className="h-16 rounded-full"
          />
          <h1 className="md:flex hidden text-2xl text-white ">
            HD{" "}
            <span className="text-orange-400 font-semibold text-3xl underline ">
              Plago
            </span>{" "}
          </h1>
        </Link>

        {/* Navigate */}
        <div className="md:flex  hidden items-center gap-4  text-lg text-white">
          <h1>Movie</h1>
          <h1>Series</h1>

          <select
            name="cars"
            id="cars"
            className=" outline-none bg-transparent"
          >
            <option value="Year" className="bg-black">
              Year
            </option>
            <option value="2023 " className="bg-black">
              2023
            </option>
            <option value="2022" className="bg-black">
              2022
            </option>
            <option value="2021" className="bg-black">
              2021
            </option>
            <option value="2020" className="bg-black">
              2020
            </option>
            <option value="2019" className="bg-black">
              2019
            </option>
          </select>
          <form action="">
            <input
              type="text"
              placeholder="Type here"
              className="input  w-full max-w-xs outline-none"
            />
          </form>
        </div>
        {/* Auth */}
        <div className="flex items-center gap-3">
          <Link to="/register">Register</Link>
          <div className="w-[1px] h-[35px] bg-white"></div>
          <Link
            to="/login"
            className="btn flex gap-2 bg-red-500 text-white text-md font-semibold "
          >
            <BsFillLockFill className="text-xl" />
            Log In
          </Link>
        </div>
        <div className="md:hidden items-center flex text-2xl text-white font-semibold">
          {burgerMenu ? (
            <AiOutlineMenu
              onClick={(e) => {
                setBurgerMenu(false);
              }}
            />
          ) : (
            <AiOutlineClose
              onClick={(e) => {
                setBurgerMenu(true);
              }}
            />
          )}
        </div>
      </div>
      {/* Responsiv */}
      <div
        className={`${
          burgerMenu ? "h-0 " : " h-[250px] "
        } md:h-fit md:hidden flex w-full border-t overflow-y-hidden border-gray-500 bg-[#212529] flex-col items-center duration-500`}
      >
        <ul className="menu w-full p-2  bg-[#212529]   items-center  text-xl  ">
          <li className="hover:text-red-400 w-full  ">
            <Link
              to="/"
              onClick={(e) => {
                setBurgerMenu(true);
              }}
              className="justify-center  text-center focus:bg-black"
            >
              Movies
            </Link>
          </li>
          <li className="hover:text-red-400 w-full  ">
            <Link
              to="/"
              onClick={(e) => {
                setBurgerMenu(true);
              }}
              className="justify-center  text-center focus:bg-black"
            >
              Series
            </Link>
          </li>{" "}
          <li className="hover:text-red-400 w-full  ">
            <Link
              to="/"
              onClick={(e) => {
                setBurgerMenu(true);
              }}
              className="justify-center  text-center focus:bg-black"
            >
              Movies
            </Link>
          </li>
          <form action="" className="w-full  flex items-center justify-center ">
            <input
              type="text"
              placeholder="Search "
              className="input w-full max-w-xs outline-none"
            />
          </form>
        </ul>
      </div>
      <div className="md:w-[1180px] w-full h-1 bg-red-500 mx-auto"></div>
    </div>
  );
};

export default Navbar;
