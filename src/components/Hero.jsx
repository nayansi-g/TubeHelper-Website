"use client"

import { MoveUpRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative mt-[88px] min-h-[calc(100svh-88px)] bg-black text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-16">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl"
          >
            Scaling Your Ecommerce Brand Shouldn’t Feel Like Guesswork.

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-5 max-w-xl text-base text-gray-300 sm:text-lg lg:mx-0"
          >
           We build data-driven marketing systems that increase revenue — without wasting ad spend.
          </motion.p>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <button className="inline-flex items-center rounded-full border border-white/20 bg-white/10 p-1 pr-4 text-sm backdrop-blur-md transition hover:bg-white/15">
              <span className="mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <FaWhatsapp className="text-lg text-white" />
              </span>
              Chat Now
            </button>

            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90">
              Book Free Strategy Call
              <MoveUpRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-sm text-gray-400"
          >
            Revolutionizing Client Solutions with the Best Tools
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <img
            src="/Hero_img.png"
            alt="TubeHelper dashboard preview"
            className="w-full max-w-md rounded-2xl object-contain sm:max-w-lg lg:max-w-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
