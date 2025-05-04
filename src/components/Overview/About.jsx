import React from 'react'
import Container from '../Custom/Container'
import Image from 'next/image'
import ScrollReveal from '../Custom/ScrollReveal'

const About = () => {
  return (
    <div id='about' className='about scroll-mt-18 h-auto reveal'>
      <ScrollReveal />
      <Container>
        <div className="text-center py-14">
          <h1 className='text-4xl text-amber-950 font-bold mb-10'>ABOUT ME</h1>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

            {/* Left Content */}
            <div className="text-center lg:w-1/2">
              <h2 className='text-sky-900 font-bold text-2xl mb-4'>Cloud Developer (AWS Platform)</h2>
              <p className='text-base text-gray-700 leading-relaxed mb-6'>
                I'm a Full Stack Engineer with at least 6 months of experience in Web Development. I have built web applications using <b>ReactJS</b> and <b>Spring Boot</b>, and I have basic knowledge of cloud operations on the <b>Amazon Web Service (AWS)</b> platform.
                <br /><br />
                Currently, I am working as a Cloud Developer, and within the next 3 years, I aim to grow into a <b>Cloud Engineer</b> specializing in the AWS ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#skill">
                  <button className="bg-gray-300 hover:cursor-pointer text-white px-6 py-2 rounded-3xl hover:bg-blue-400 transition transform hover:scale-105">
                    SKILLS
                  </button>
                </a>
                <button className="bg-gray-300 hover:cursor-pointer text-white px-6 py-2 rounded-3xl hover:bg-blue-400 transition transform hover:scale-105">
                  PROJECTS
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
              <Image
                className="w-40 sm:w-64 md:w-72 lg:w-100 rounded-xl shadow-lg"
                src="https://img.freepik.com/premium-photo/web-developer-cloud-architect-developers-illustration_1297153-30092.jpg"
                alt="Developer Avatar"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
