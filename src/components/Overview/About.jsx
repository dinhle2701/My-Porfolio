import React from 'react'
import Container from '../Custom/Container'
import Image from 'next/image'
import ScrollReveal from '../Custom/ScrollReveal'

const About = () => {
  return (
    <div id='about' className='scroll-mt-18 h-auto reveal'>
      <ScrollReveal />
      <Container>
        <div className="text-center py-14">
          <h1 className='text-center py-10 text-4xl text-amber-950 font-bold'>ABOUT ME</h1>
          <div className="flex justify-between items-center">
            <div >
              <h1 className='text-sky-900 font-bold text-2xl'>Cloud Developer (AWS Platform)</h1>
              <p className='my-7'>
                I'm a Full Stack Engineer have at least 6 months in Web Development. I have been build web applications with <br /> ReactJS and Spring Boot, and I
                have basic knowledge of cloud operations on Amazon Web Service (AWS) <br /> cloud platform. Currently, in the next year, I will
                continue working as a Cloud Developer, and within the next 3 <br /> years, I aspire to advance to the position of Cloud Engineer
                on the AWS cloud platform
              </p>
              <div>
                <button className="bg-gray-300 text-white px-4 py-2 rounded-3xl me-4
                   hover:bg-blue-400 hover:cursor-pointer transform transition duration-300 ease-in-out 
                   hover:scale-105 inline-block">
                  <a href="#skill">SKILLS</a>
                </button>
                <button className="bg-gray-300 text-white px-4 py-2 rounded-3xl me-3
                   hover:bg-blue-400 hover:cursor-pointer transform transition duration-300 ease-in-out 
                   hover:scale-105 inline-block">
                  PROJECTS
                </button>
              </div>
            </div>
            <Image
              src="https://img.freepik.com/premium-photo/web-developer-cloud-architect-developers-illustration_1297153-30092.jpg"
              alt="Developer Avatar"
              width={300}
              height={300}
            />

          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
