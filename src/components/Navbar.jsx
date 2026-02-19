"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function Navbar() {
  return (
    <div className="relative flex bg-[#080B1A]  justify-center pt-6">
      
      {/* Glow Background */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>
        {/* <div className="absolute -top-20 left-0 -translate-x-1/2 w-[800px] h-[200px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div> */}

      {/* Navbar */}
      <nav className="relative z-10 w-[90%] max-w-6xl flex items-center justify-between px-6 py-3 
      bg-white/10 backdrop-blur-xl border border-white/10 
      rounded-full shadow-lg">

        {/* Logo */}
        <h1 className="text-white text-lg font-semibold tracking-wide">
          TubeHelper
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <li className="text-white border-b-2 cursor-pointer border-white pb-1">
            Home
          </li>
          <li className="hover:text-white cursor-pointer transition">Services</li>
          <li className="hover:text-white cursor-pointer transition">Our Work</li>
          <li className="hover:text-white cursor-pointer transition">Reviews</li>
          <li className="hover:text-white cursor-pointer transition">Contact us</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* WhatsApp Icon */}
          <div className="w-10 h-10 flex items-center justify-center 
          rounded-full bg-white/10 border border-white/20 
          hover:bg-white/20 transition cursor-pointer">
            <FaWhatsapp className="text-white text-lg" />
          </div>

          {/* Get Started Button */}
          <button className="px-5 py-2 rounded-full 
          bg-gradient-to-r from-purple-600 to-pink-600 
          text-white text-sm font-medium cursor-pointer 
          hover:scale-105 transition-all duration-300">
            Get Started <span className="text-gray-200">- it's free ↗</span>
          </button>

        </div>
      </nav>
    </div>
  )
}
