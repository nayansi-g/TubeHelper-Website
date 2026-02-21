// "use client"

// import { Sparkle } from "lucide-react"
// import { FaWhatsapp } from "react-icons/fa"

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center py-20 text-center px-6 overflow-hidden bg-[#080B1A] text-white">

//       {/* ================= Background Effects ================= */}

//       {/* Left Purple Glow */}
//       <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[200px] rounded-full"></div>

//       {/* Right Pink Glow */}
//       <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-600 opacity-30 blur-[200px] rounded-full"></div>

//       {/* Grid Overlay */}
//       <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//       {/* ================= Content ================= */}
//       <div className="relative z-10 max-w-7xl ">

//         {/* Top Badge */}
//         <div className="flex items-center justify-center gap-3 mb-8">
//           <div className="h-[1px] w-[300px] opacity-30 bg-purple-500"></div>
//           <span className="px-4 py-1 flex justify-center items-center gap-1 text-sm rounded-full bg-white/10 backdrop-blur-lg border border-white/20">
//             <Sparkle className="w-4 text-gray-300" /> Wordpress Solution in 1 Place
//           </span>
//           <div className="h-[1px] w-[300px] opacity-30 bg-purple-500"></div>
//         </div>

//         {/* Heading */}
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
//           WordPress Excellence for Your Business <br />
//           – Custom Solutions, Faster Results!
//         </h1>

//         {/* Subtext */}
//         <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
//           We build secure, SEO-friendly, and high-performing WordPress
//           websites tailored to your goals.
//         </p>

//         {/* Buttons */}
//         <div className="mt-10 flex flex-wrap justify-center gap-6">

//           {/* Chat Button */}
//           <button className="flex items-center  px-1 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
//            <div className="w-10 h-10 flex items-center justify-center 
//           rounded-full bg-white/10 border border-white/20 
//           hover:bg-white/20 transition cursor-pointer">
//             <FaWhatsapp className="text-white text-lg" />
//           </div>
//             <div className="px-2 text-sm">Chat Now</div>
//           </button>

//           {/* Gradient Button */}
//           <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg">
//             Get Started ↗
//           </button>

//         </div>

//         {/* Bottom Text */}
//         <p className="mt-16 text-sm text-gray-400">
//           Revolutionizing Client Solutions with the Best Tools
//         </p>

//       </div>
//     </section>
//   )
// }


"use client"

import { MoveUpRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center  bg-black text-white overflow-hidden ">

      {/* Container */}
      <div className="max-w-7xl mx-auto w-full pt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative flex flex-col justify-center items-start z-10 text-center lg:text-left px-4 sm:px-6 lg:px-12">

          {/* Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl  lg:mt-0 max-w-2xl font-semibold leading-tight mx-auto lg:mx-0"
          >
            Scaling Your Business Shouldn’t Feel Like Guesswork.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            We combine performance marketing, creative strategy, and real analytics to help you grow faster — without wasting budget.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-6 justify-center  lg:justify-start"
          >
            {/* Chat Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-2 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20"
              >
                <FaWhatsapp className="text-white text-lg" />
              </motion.div>
              <div className="px-3 text-sm">
                Get Free Growth Audit
              </div>
            </motion.button>

            {/* Gradient Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
            >
              View Case Studies
              <MoveUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Bottom Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 text-sm text-gray-400"
          >
            Revolutionizing Client Solutions with the Best Tools
          </motion.p>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative  flex justify-center px-2  overflow-hidden lg:justify-end"
        >
          <img
            src="/Hero_img.png"
            alt="Hero"
            className="w-full max-w-md sm:max-w-lg   lg:max-w-xl h-auto object-contain rounded-xl"
          />
        </motion.div>

      </div>
    </section>
  )
}


