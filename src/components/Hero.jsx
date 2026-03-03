"use client"

import { MoveUpRight, Play, Pause } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function Hero() {
  return (
    <section className="relative mt-[100px] min-h-[calc(100svh-100px)] bg-black text-white flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              Scaling Your E-commerce Brand Shouldn't Feel Like Guesswork.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base text-gray-300 sm:text-lg"
            >
              We build data-driven marketing systems that increase revenue
              without wasting ad spend.
            </motion.p>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/919897165137"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm backdrop-blur-md transition hover:bg-white/20 sm:w-auto sm:text-base"
              >
                <FaWhatsapp className="text-2xl" />
                Chat Now
              </a>

              <a
                href="tel:+919897165137"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-medium shadow-lg transition hover:opacity-90 sm:w-auto sm:text-base"
              >
                Book Your Free Strategy Call
                <MoveUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <p className="mt-10 text-sm text-gray-500">
              Revolutionizing Client Solutions with the Best Tools
            </p>

          </div>

          {/* RIGHT VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl">

              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl"></div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
                <div className="aspect-video">
                  <VideoPlayer />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function VideoPlayer() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/heroVideo.mp4"
      />

      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-md transition hover:bg-black/80"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  )
}