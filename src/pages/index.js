import Navbar from "@/components/Nabar/Navbar";
import About from "@/components/Overview/About";
import Experience from "@/components/Experience/Experience";
import Skill from "@/components/Skills/Skill";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="pt-20 overflow-x-hidden relative">
      <Navbar />
      <About />
      <Experience />
      <Skill />
      <Contact />
    </div>
  );
}
