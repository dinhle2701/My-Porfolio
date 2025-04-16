import React from 'react'
import Container from '../Custom/Container'

const Navbar = () => {
  return (
    <div className="navbar py-4 bg-cyan-700 shadow-xl fixed top-0 w-full z-50">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-cyan-100 text-3xl"><i><a href="#">My Profile</a></i></h1>
          <div className="flex space-x-10">
            <span className="text-sm text-blue-50 link">
              <a href="#about">ABOUT ME</a>
            </span>
            <span className="text-sm text-blue-50 link">
              <a href="#experience">EXPERIENCE</a>
            </span>
            <span className="text-sm text-blue-50 link">
              <a href="#skill">SKILLS</a>
            </span>
            <span className="text-sm text-blue-50 link">
              <a href="#contact">CONTACT</a>
            </span>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default Navbar
