import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-screen">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">Rejaul Karim Rabbi</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I am a full stack developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        As a full-stack developer, I specialize in creating (and sometimes designing) exceptional digital experiences. My focus is on developing responsive full-stack applications.
        </p>
        <div>
          <button className=" group text-white border-2 px-6 py-4 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-2" /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
