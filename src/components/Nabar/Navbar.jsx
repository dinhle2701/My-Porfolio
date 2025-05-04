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
    <div className="navbar py-4 bg-gray-400 shadow-xl fixed top-0 w-full z-50">

      <div className="px-10">
        <div className="flex justify-between items-center w-full px-4">
          {/* Logo */}
          <h1 className="font-serif whitespace-nowrap text-amber-800 text-xl sm:text-2xl md:text-3xl transform transition duration-300 ease-in-out hover:scale-110">
            <i><a href="#">My Profile</a></i>
          </h1>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link, index) => (
              <span
                key={index}
                className="whitespace-nowrap text-sm text-black inline-block min-w-[90px] text-center 
          hover:text-white hover:font-bold transform transition duration-300 ease-in-out hover:scale-105"
              >
                <a href={link.href}>{link.label}</a>
              </span>
            ))}
            <button className="bg-yellow-200 text-blue-900 px-4 py-2 rounded-3xl me-3
      hover:bg-red-700 hover:text-white transform transition duration-300 ease-in-out hover:scale-105">
              <a
                href="https://drive.google.com/file/d/1AYaEm1RP1N99Cm1aOH4d4SZGxYouKjI8/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download My CV
              </a>
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-black">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 flex flex-col items-center md:hidden space-y-4">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-sm text-black hover:text-white hover:font-bold">
                {link.label}
              </a>
            ))}

            <button className="bg-yellow-200 text-blue-900 px-4 py-2 rounded-3xl
              hover:bg-red-700 hover:text-white transform transition duration-300 ease-in-out hover:scale-105">
              <a href="https://drive.google.com/file/d/1AYaEm1RP1N99Cm1aOH4d4SZGxYouKjI8/view?usp=sharing" target="_blank" rel="noreferrer">
                Download My CV
              </a>
            </button>
          </div>
        )}
      </div>
      <Container>
      </Container>
    </div>
  )
}

export default Navbar
