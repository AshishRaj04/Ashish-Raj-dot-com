import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { HoverBorderGradient } from "./ui/Hover-border-gradient";

const Hero = () => {
  return (
    <div className="h-screen relative bg-backgroundWhite dark:bg-background">
      
      <div className="container mx-auto flex flex-col items-center justify-center h-full px-5 sm:px-10 relative z-10">
        <div className="text-center max-w-lg lg:w-1/2 flex flex-col justify-center items-center relative top-[-40px]">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-2">
            <span className="text-[20px]">👋🏽</span> There!
          </h2>
          <h1 className="font-black text-textColorWhite dark:text-textColor lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            I'm
          </h1>
          <h1 className="inline-block font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] bg-gradient-to-r from-purple-600 via-blue-400 to-blue-600 text-transparent bg-clip-text">
            Ashish Raj
          </h1>
          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4 text-gray-400">
            I train machine learning models and integrate them into web
            applications.
          </p>
          <a href="mailto:contact@ashishraj04">
          <HoverBorderGradient
            containerClassName="rounded-md"
            as="button"
            className="dark:bg-black-100 bg-white text-black dark:text-white flex items-center space-x-4"
          >
            <FaLocationArrow />
            <p>Let's get in touch</p>
          </HoverBorderGradient>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
