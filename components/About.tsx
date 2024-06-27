import React from "react";
import { HoverBorderGradient } from "./ui/Hover-border-gradient";
import { HoverEffect } from "./ui/Card-hover";
import { aboutme } from "@/data";
const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col justify-center items-center">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eius eos nesciunt vero eum, blanditiis, illo aperiam recusandae modi,
          ut aliquid quas corporis! Voluptatum explicabo hic quae voluptatibus
          blanditiis adipisci?
        </p>
        <div className="flex gap-10 p-5 m-5">
          <HoverEffect items={aboutme} />
        </div>
      </div>
    </section>
  );
};

export default About;
