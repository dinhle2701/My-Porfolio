import React, { useState } from 'react'
import Container from '../Custom/Container'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { label: 'ABOUT ME', href: '#about' },
    { label: 'ROLE', href: '#role' },
    { label: 'SKILLS', href: '#skill' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="navbar py-4 shadow-xl fixed top-0 w-full z-50 text-white backdrop-blur">
        <div className="px-10">
          <div className="flex justify-between items-center w-full px-4">
            {/* Logo */}
            <h1 className="font-serif whitespace-nowrap text-white text-xl sm:text-2xl md:text-3xl transform transition duration-300 ease-in-out hover:scale-110">
              <i><a href="#">My Profile</a></i>
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap text-sm inline-block min-w-[90px] text-center 
                hover:text-white hover:font-bold transform transition duration-300 ease-in-out hover:scale-105"
                >
                  <a href={link.href}>{link.label}</a>
                </span>
              ))}
              <button className="bg-yellow-200 text-blue-900 px-4 py-2 rounded-3xl me-3
            hover:bg-red-700 
            hover:text-white transform transition duration-300 ease-in-out 
            hover:scale-105 hover:cursor-pointer">
                <a
                  href="https://drive.google.com/file/d/1AYaEm1RP1N99Cm1aOH4d4SZGxYouKjI8/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download My CV
                </a>
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden ">
              <button onClick={toggleMenu} className="text-2xl text-white">
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>

              {/* Mobile Dropdown Menu (inside relative container) */}
              <div style={{ backgroundColor: "#0c1b42" }}
                className={`absolute top-full right-0 left-0 w-screen bg-black flex flex-col items-center space-y-4 px-4 py-6 z-40 transition-all duration-300 ease-in-out transform ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
                  }`}
              >
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm text-white hover:text-yellow-400 transition"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="https://drive.google.com/file/d/1AYaEm1RP1N99Cm1aOH4d4SZGxYouKjI8/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-yellow-200 text-blue-900 px-4 py-2 rounded-3xl
                hover:bg-red-700 hover:text-white hover:scale-105
                transition transform duration-300 ease-in-out"
                >
                  Download My CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar
