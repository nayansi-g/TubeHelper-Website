"use client"

import { Sparkle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex flex-col items-center py-20 text-center px-6 overflow-hidden bg-[#080B1A] text-white">

      {/* ================= Background Effects ================= */}

      {/* Left Purple Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[200px] rounded-full"></div>

      {/* Right Pink Glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-600 opacity-30 blur-[200px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-7xl mt-20">

        {/* Top Badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-[300px] opacity-30 bg-purple-500"></div>
          <span className="px-4 py-1 flex justify-center items-center gap-1 text-sm rounded-full bg-white/10 backdrop-blur-lg border border-white/20">
            <Sparkle className="w-4 text-gray-300" /> Wordpress Solution in 1 Place
          </span>
          <div className="h-[1px] w-[300px] opacity-30 bg-purple-500"></div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          WordPress Excellence for Your Business <br />
          – Custom Solutions, Faster Results!
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
          We build secure, SEO-friendly, and high-performing WordPress
          websites tailored to your goals.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">

          {/* Chat Button */}
          <button className="flex items-center  px-1 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
           <div className="w-10 h-10 flex items-center justify-center 
          rounded-full bg-white/10 border border-white/20 
          hover:bg-white/20 transition cursor-pointer">
            <FaWhatsapp className="text-white text-lg" />
          </div>
            <div className="px-2 text-sm">Chat Now</div>
          </button>

          {/* Gradient Button */}
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started ↗
          </button>

        </div>

        {/* Bottom Text */}
        <p className="mt-16 text-sm text-gray-400">
          Revolutionizing Client Solutions with the Best Tools
        </p>

      </div>
    </section>
  )
}
