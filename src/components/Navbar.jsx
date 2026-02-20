// "use client"

// import { FaWhatsapp } from "react-icons/fa"
// import { motion } from "framer-motion"

// export default function Navbar() {
//   return (
//     <section className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#080B1A] text-white">

//       {/* ================= Background Effects ================= */}

//       {/* Left Purple Glow */}
//       <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 0.3, scale: 1 }}
//         transition={{ duration: 2 }}
//        className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[200px] rounded-full"></motion.div>

//       {/* Right Pink Glow */}
//       {/* <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-600 opacity-30 blur-[200px] rounded-full"></div> */}

//       {/* Grid Overlay */}
//       <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//       {/* ================= Content ================= */}
//        <nav className="relative z-10 w-[90%] max-w-6xl  flex items-center justify-between px-6 py-3 my-8 
//       bg-black/10 backdrop-blur-xl border border-white/30 
//       rounded-full shadow-lg">

//         {/* Logo */}
//         <h1 className="text-white text-lg font-semibold tracking-wide">
//           TubeHelper
//         </h1>

//         {/* Menu */}
//         <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
//           <li className="text-white border-b-2 cursor-pointer border-white pb-1">
//             Home
//           </li>
//           <li className="hover:text-white cursor-pointer transition">Services</li>
//           <li className="hover:text-white cursor-pointer transition">Our Work</li>
//           <li className="hover:text-white cursor-pointer transition">Reviews</li>
//           <li className="hover:text-white cursor-pointer transition">Contact us</li>
//         </ul>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
          
//           {/* WhatsApp Icon */}
//           <div className="w-10 h-10 flex items-center justify-center 
//           rounded-full bg-white/10 border border-white/20 
//           hover:bg-white/20 transition cursor-pointer">
//             <FaWhatsapp className="text-white text-lg" />
//           </div>

//           {/* Get Started Button */}
//           <button className="px-5 py-2 rounded-full 
//           bg-gradient-to-r from-purple-600 to-pink-600 
//           text-white text-sm font-medium cursor-pointer 
//           hover:scale-105 transition-all duration-300">
//             Get Started <span className="text-gray-200">- it's free ↗</span>
//           </button>

//         </div>
//       </nav>
//     </section>
//   )
// }



"use client"

import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, MoveUpRight, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden bg-[#080B1A] text-white">

      {/* ================= Background Effects ================= */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[200px] rounded-full"
      />

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* ================= Navbar ================= */}

      <nav className="relative z-10 w-full max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3 my-6
      bg-black/10 backdrop-blur-xl border border-white/30 
      rounded-full shadow-lg">

        {/* Logo */}
        <h1 className="text-white text-lg font-semibold tracking-wide">
          TubeHelper
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <li className="text-white border-b-2 cursor-pointer border-white pb-1"><a href="/">
            Home </a>
          </li>
          <li className="hover:text-white cursor-pointer transition">Services</li>
          <li className="hover:text-white cursor-pointer transition">Our Work</li>
          <li className="hover:text-white cursor-pointer transition">Reviews</li>
          <li className="hover:text-white cursor-pointer transition"><a href="contact">Contact us</a></li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center 
          rounded-full bg-white/10 border border-white/20 
          hover:bg-white/20 transition cursor-pointer">
            <FaWhatsapp className="text-white text-lg" />
          </div>

          <button className="px-5 py-2 rounded-full 
          bg-gradient-to-r from-purple-600 to-pink-600 
          text-white text-sm font-medium cursor-pointer 
          hover:scale-105 transition-all duration-300">
            Get Started <span className="text-gray-200">- it's free ↗</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ================= Mobile Menu ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full max-w-6xl px-6 pb-6"
          >
            <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 space-y-6 text-left">

              <ul className="space-y-4 text-gray-300">
                <li className="text-white border-b border-white/30 pb-2"><a href="/">Home</a></li>
                <li className="hover:text-white transition">Services</li>
                <li className="hover:text-white transition">Our Work</li>
                <li className="hover:text-white transition">Reviews</li>
                <li className="hover:text-white transition"><a href="contact">Contact us</a></li>
              </ul>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 flex items-center justify-center 
                rounded-full bg-white/10 border border-white/20">
                  <FaWhatsapp className="text-white text-lg" />
                </div>

                <button className="w-full px-5 py-2 rounded-full 
                bg-gradient-to-r from-purple-600 to-pink-600 
                text-white text-sm font-medium flex items-center ">
                  Get Started <span className="text-gray-200 flex items-center justify-center "> - it's free <MoveUpRight className="w-4 h-4" /></span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
