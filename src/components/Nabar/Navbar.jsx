import React from 'react'
import Container from '../Custom/Container'

const Navbar = () => {
  return (
    <div className="navbar py-4 bg-gray-400 shadow-xl fixed top-0 w-full z-50">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-amber-800 text-3xl transform transition duration-300 ease-in-out hover:scale-105"><i><a href="#">My Profile</a></i></h1>
          <div className="flex space-x-10 items-center">
            <span className="text-sm text-black link inline-block min-w-[90px] text-center 
                   hover:text-white hover:font-bold transform transition duration-300 ease-in-out hover:scale-105">
              <a href="#about">ABOUT ME</a>
            </span>

            <span className="text-sm text-black link inline-block min-w-[80px] text-center 
                   hover:text-white hover:font-bold transform transition duration-300 ease-in-out hover:scale-105">
              <a href="#skill">SKILLS</a>
            </span>

            <span className="text-sm text-black link inline-block min-w-[110px] text-center 
                   hover:text-white hover:font-bold transform transition duration-300 ease-in-out hover:scale-105">
              <a href="#experience">EXPERIENCE</a>
            </span>

            <span className="text-sm text-black link inline-block min-w-[90px] text-center 
                   hover:text-white hover:font-bold transform transition duration-300 ease-in-out hover:scale-105">
              <a href="#contact">CONTACT</a>
            </span>

            <span>
              <button className='bg-yellow-200 text-blue-900 px-4 py-2 rounded-3xl me-3
                   hover:bg-red-700 hover:cursor-pointer hover:text-white transform transition duration-300 ease-in-out 
                   hover:scale-105 inline-block'>Download My CV</button>
            </span>
          </div>


        </div>
      </Container>
    </div>

  )
}

export default Navbar
