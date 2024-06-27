import React from "react";
import { HoverEffect } from "./ui/Card-hover";
import { aboutme } from "@/data";
const About = () => {
  return (
    <section id="about">
      <div className="py-20 bg-backgroundWhite dark:bg-background">
        <div className="container mx-auto px-5 sm:px-10 text-center">
          <h1 className="heading font-bold text-textColorWhite dark:text-textColor mb-8">
            About Me
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            I am Ashish Raj, a passionate developer with expertise in machine
            learning, artificial intelligence, and web development. I strive to
            create innovative solutions by integrating these technologies to
            solve real-world problems and improve user experiences.
          </p>
          <div className="flex gap-10 p-5 m-5">
            <HoverEffect items={aboutme} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
