"use client";
import { useState } from "react";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import {
  Grid,
  RecentProjects,
  Hero,
  Experience,
  Footer,
  Navbar,
} from "@/components/index";
import { navItems } from "@/data";

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

        {/* <FloatingNav  
          navItems = {navItems}
        /> */}
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
