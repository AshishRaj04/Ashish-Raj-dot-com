import React from "react";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="h-screen w-full dark:bg-background bg-backgroundWhite  dark:bg-dot-white/[0.1] bg-dot-black/[0.1] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-backgroundWhite [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="">
          <h2 className="uppercase tracking-widest text-xs  text-blue-100 max-w-80">
            <span className="text-[20px]">👋🏽</span> There!
          </h2>

          <h1 className="font-black text-textColorWhite dark:text-textColor lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            I'm
          </h1>
          <h1 className=" inline-block font-black  lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] bg-gradient-to-r from-purple-600 via-blue-400 to-blue-600 text-transparent bg-clip-text ">
            Ashish Raj
          </h1>

          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I train machine learning models and integrate them into web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
