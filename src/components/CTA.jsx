// "use client"

// export default function CTASection() {
//   return (
//     <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a0b1e] via-[#1a1533] to-[#2a1f3d] text-white text-center overflow-hidden">

//       {/* Top Soft Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto">

//         {/* Heading */}
//         <h2 className="text-3xl md:text-5xl font-semibold mb-6">
//           Get started with Niche Geeky today
//         </h2>

//         {/* Subtitle */}
//         <p className="text-gray-300 mb-8">
//           Join 13k+ teams who have streamlined the way they manage
//           projects and collaborate remotely.
//         </p>

//         {/* Gradient Button */}
//         <button className="px-8 py-3 rounded-full 
//         bg-gradient-to-r from-purple-600 to-pink-600
//         hover:scale-105 transition-all duration-300
//         shadow-[0_0_40px_rgba(168,85,247,0.5)]">
//           Get Started- It's Free ↗
//         </button>

//       </div>

//       {/* Dotted Semi Circle Pattern */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">

//         <div className="relative w-[600px] h-[150px]">
          
//           {/* Create dots using radial gradient */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle,#d8b4fe_2px,transparent_2px)] bg-[size:20px_20px] opacity-30 rounded-t-full"></div>

//         </div>

//       </div>

//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // On Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-[#0a0b1e] via-[#1a1533] to-[#2a1f3d] text-white text-center overflow-hidden"
    >
      {/* Animated Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600 opacity-20 blur-[150px] rounded-full animate-pulse"></div>

      {/* Content */}
      <div
        className={`relative z-10 mx-auto transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Get started with Niche Geeky today
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 mb-8">
          Join 13k+ teams who have streamlined the way they manage
          projects and collaborate remotely.
        </p>

        {/* Premium Gradient Button */}
        <button className="relative px-8 py-3 rounded-full 
          bg-gradient-to-r from-purple-600 to-pink-600
          transition-all duration-300
          hover:scale-110 hover:shadow-[0_0_60px_rgba(168,85,247,0.7)]
          active:scale-95 overflow-hidden group">

          {/* Shine Effect */}
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>

          <span className="relative z-10">
            Get Started- It's Free ↗
          </span>
        </button>
      </div>

      {/* Dotted Semi Circle Pattern */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <div className="relative w-[600px] h-[150px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#d8b4fe_2px,transparent_2px)] bg-[size:20px_20px] opacity-30 rounded-t-full"></div>
        </div>
      </div>
    </section>
  )
}
