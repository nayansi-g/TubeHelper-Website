"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function Naddvar() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#080B1A] text-white">

      {/* ================= Background Effects ================= */}

      {/* Left Purple Glow */}
      <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[200px] rounded-full"></div>

      {/* Right Pink Glow */}
      {/* <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-600 opacity-30 blur-[200px] rounded-full"></div> */}

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* ================= Content ================= */}
       <nav className="relative z-10 w-[90%] max-w-6xl  flex items-center justify-between px-6 py-3 my-8 
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
    </section>
  )
}
