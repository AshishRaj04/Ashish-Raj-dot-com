import React from "react";
import { HoverBorderGradient } from "./ui/Hover-border-gradient";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10 id="contact'>
      <div className="w-ful absolute left-0-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Colaborate & <span className="text-purple">Create</span>{" "}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
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
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ashish
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filterbackdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt="social-media"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
