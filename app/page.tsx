import { FloatingNav } from "@/components/ui/Floating-navbar";
import {Grid , RecentProjects ,Hero , Experience , Footer} from "@/components/index"
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav  
          navItems = {navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
