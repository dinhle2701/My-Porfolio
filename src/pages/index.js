import Navbar from "@/components/Nabar/Navbar";
import About from "@/components/Overview/About";
import Experience from "@/components/Experience/Experience";
import Skill from "@/components/Skills/Skill";
import Contact from "@/components/Contact/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.1 }
    )

    reveals.forEach(r => observer.observe(r))
  }, [])

  return (
    <div className="pt-18 overflow-x-hidden relative">
      <Navbar />
      <About />
      <Skill />
      <Experience />
      <Contact />

    </div>
  );
}
