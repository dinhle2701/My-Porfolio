import React from 'react'
import Container from '../Custom/Container'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='my-5'>
      <Container>
        <div className="text-center">
          <div className="flex justify-between items-center">
            <div >
              <h1 className='text-cyan-700 font-bold text-2xl'>Cloud Developer (AWS Platform)</h1>
              <p className='my-5'>
                I'm a Full Stack Engineer have at least 6 months in Web Development.web applications with <br /> ReactJS and Spring Boot, and I
                have basic knowledge of cloud operations on Amazon Web Service (AWS) <br /> cloud platform. Currently, in the next year, I will
                continue working as a Cloud Developer, and within the next 3 <br /> years, I aspire to advance to the position of Solution Architect
                on the AWS cloud platform
              </p>
              <div>
                <button className="bg-cyan-700 text-white px-4 py-2 rounded-2xl me-3">
                  SKILLS
                </button>
                <button className="bg-cyan-700 text-white px-4 py-2 rounded-2xl">
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
