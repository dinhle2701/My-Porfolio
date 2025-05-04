import Head from 'next/head'
import Navbar from "@/components/Nabar/Navbar";
import About from "@/components/Overview/About";
import Experience from "@/components/Experience/Experience";
import Skill from "@/components/Skills/Skill";
import Contact from "@/components/Contact/Contact";
import { useEffect } from "react";
import Role from "@/components/Role/Role";

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
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" type="image/png" href="https://icons.iconarchive.com/icons/iconsmind/outline/512/Clouds-icon.png" />
        <link rel="icon" href="/server.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <About />
      <Role />
      <Skill />
      <Experience />
      <Contact />
    </div>
  );
}
