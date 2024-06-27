"use client";
import { useState } from "react";
import {
  About,
  RecentProjects,
  Hero,
  Experience,
  Footer,
  Navbar,
} from "@/components/index";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <main
      className={`relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="max-w-7xl w-full bg-backgroundWhite dark:bg-background">
        <div className="w-full pt-5 mb-5 z-100">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        <Hero />
        <About />

        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
