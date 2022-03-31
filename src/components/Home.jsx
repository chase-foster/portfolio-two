import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#F7EFE3]">
      {/* Container */}
      <div className="max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600 ">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-500">
          Chase Foster
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-700">
          I'm a Full Stack Web Developer.
        </h2>
        <p className="text-gray-500 py-4 max-w-[700px]">
          I'm currently a Full Stack Developer at CTPI creating awesome
          software.
        </p>
        <div>
          <button className="text-gray group border-2 border-gray-700 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
