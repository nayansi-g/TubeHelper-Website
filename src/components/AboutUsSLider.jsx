"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"



const missionPillars = ["Increase revenue", "Protect margins", "Improve unit economics", "Enable predictable scale"]

const specializations = [
  "Structured acquisition systems",
  "Conversion-optimized funnels",
  "Retention & LTV frameworks",
  "Accurate tracking & attribution",
  "Scalable performance models",
]

const differentPoints = [
  "Tracking accuracy",
  "Funnel clarity",
  "Unit economics alignment",
  "Retention strategy",
  "Only then do we scale",
]

export default function AboutSlider() {
  const [current, setCurrent] = useState(0)

  function TagGrid({ items }) {
  return (
    <div className="mt-5 grid gap-1 ">
      {items.map((item) => (
        <div key={item} className="  px-2 flex justify-start ml-2 items-center text-sm text-gray-800 md:text-base">
          <li>{item}</li>
        </div>
      ))}
    </div>
  )
}

  const slides = [
    {
      bg: "bg-[#dff3ef]",
      content: (
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex justify-center py-6">
            <Image
              src="/abouutUS1.jpg"
              alt=""
              width={400}
              height={450}
              className="w-full max-w-sm opacity-80 h-[350px] sm:h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
           <div className="">
                <h2 className="text-2xl font-semibold md:text-3xl">OUR MISSION</h2>
                <p className="mt-2 text-gray-700">
                  Our mission is simple: Replace guesswork with structured, system-driven growth.</p>
                <p className="mt-2 text-gray-700">
                  Too many brands scale revenue but lose control of profitability. Rising CAC, weak tracking, poor retention, and disconnected strategies create unstable growth.                   </p>
                <p className="mt-2 text-gray-700">We build marketing systems designed to:</p>
                <TagGrid items={missionPillars} />
                <p className="mt-3 text-gray-700">
                  Growth should not depend on aggressive ad spend.It should depend on strong systems. </p>
              </div>
        </div>
      ),
    },
    {
      bg: "bg-[#D6E6FD]",
      content: (
        <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex justify-center py-6">
            <Image
              src="/aboutUS2.jpg"
              alt=""
              width={400}
              height={450}
              className="w-full max-w-sm opacity-80 h-[350px] sm:h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
                <h2 className="text-2xl font-semibold md:text-3xl">STRATEGY FIRST. SCALE SECOND.</h2>
                <p className="mt-2 text-lg text-gray-700">Scaling without structure leads to wasted spend and unstable growth.</p>
                <p className="mt-2 text-gray-700">Our approach starts with:</p>
                <TagGrid items={differentPoints} />
                <p className="mt-3 text-gray-700">
                  Every decision is backed by data, performance analysis, and long-term profitability goals.                </p>
              </div>
          
        </div>
      ),
    },
    {
      bg: "bg-purple-200",
      content: (
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className=" flex justify-center py-6">
            <Image
              src="/about_us3.jpg"
              alt=""
              width={400}
              height={450}
              className="w-full max-w-sm  h-[350px] sm:h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
         <div className="">
                <h2 className="text-2xl font-semibold md:text-3xl">WHAT MAKES US DIFFERENT</h2>
                <p className="mt-2 text-lg text-gray-700">
                  Most agencies focus on execution. We focus on infrastructure.
                </p>
                <p className="mt-2 text-gray-700">
                  Instead of isolated campaigns, we build:
                </p>
                <TagGrid items={specializations} />
                {/* <p className="mt-5 text-gray-700">
                  Unlike traditional agencies, we focus on the entire customer journey from first impression to repeat purchase.
                </p> */}
                <p className="mt-2 text-gray-700 font-medium">We don’t chase clicks. We engineer revenue systems</p>
              </div>
        </div>
      ),
    },
  ]

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-10 md:py-16 lg:py-20 sm:px-6 ">
      
      <div className="relative overflow-hidden rounded-2xl border border-gray-200">

        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 p-6 sm:p-10 ${slide.bg}`}
            >
              {slide.content}
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronRight size={22} />
        </button>
      </div>

    </section>
  )
}