import React from "react";
import { GlobeDemo } from "./ui/GridGlobe";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative bg-backgroundWhite dark:bg-background">
      <div className="absolute inset-0 h-screen w-full flex items-center justify-center z-0 my-auto">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-background bg-backgroundWhite [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 relative z-10">
        <div className="text-left max-w-lg lg:w-1/2">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-2">
            <span className="text-[20px]">👋🏽</span> There!
          </h2>
          <h1 className="font-black text-textColorWhite dark:text-textColor lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            I'm
          </h1>
          <h1 className="inline-block font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] bg-gradient-to-r from-purple-600 via-blue-400 to-blue-600 text-transparent bg-clip-text">
            Ashish Raj
          </h1>
          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4">
            I train machine learning models and integrate them into web
            applications.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-8 w-full lg:w-1/2 flex justify-center lg:justify-end">
          {/* <GlobeDemo /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
