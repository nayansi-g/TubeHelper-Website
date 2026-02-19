// "use client"

// import { useState } from "react"
// import { Minus, Plus } from "lucide-react"

// const faqs = [
//   {
//     question: "What Niche Geeky features are included?",
//     answer:
//       "Power to founders with exceptional entrepreneurs and the world's leading companies. We provide advanced tools, secure infrastructure, and scalable solutions tailored for modern businesses.",
//   },
//   {
//     question: "What are the system requirements",
//     answer:
//       "You only need a modern web browser and stable internet connection. Our platform works across all devices seamlessly.",
//   },
//   {
//     question: "Is there a free trial available?",
//     answer:
//       "Yes! We offer a 14-day free trial with full access to premium features.",
//   },
//   {
//     question: "Is employee data secure?",
//     answer:
//       "Absolutely. We use industry-level encryption and strict compliance standards to protect all user data.",
//   },
//   {
//     question: "How does billing work?",
//     answer:
//       "Billing is subscription-based and can be managed anytime from your dashboard.",
//   },
// ]

// export default function Faq() {
//   const [activeIndex, setActiveIndex] = useState(0)

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index)
//   }

//   return (
//     <section className="relative py-32 px-6 bg-[#070816] text-white overflow-hidden">

//       {/* Background Glow */}
//       {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 opacity-10 blur-[200px] rounded-full"></div> */}

//       <div className="relative z-10 max-w-4xl mx-auto text-center">

//         {/* Badge */}
//         <div className="mb-6">
//           <span className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
//             ✨ FAQs
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-semibold mb-16">
//           Frequently Asked <br /> Questions
//         </h2>

//         {/* FAQ Items */}
//         <div className="space-y-6 text-left">
//           {faqs.map((faq, index) => {
//             const isActive = activeIndex === index

//             return (
//               <div
//                 key={index}
//                 className={`rounded-2xl border transition-all duration-300
//                 ${
//                   isActive
//                     ? "border-purple-500 bg-white/5"
//                     : "border-white/10 bg-white/5"
//                 }`}
//               >
//                 {/* Question */}
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex justify-between items-center px-6 py-5 text-left"
//                 >
//                   <span className="text-lg">{faq.question}</span>

//                   <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600/20">
//                     {isActive ? (
//                       <Minus size={16} />
//                     ) : (
//                       <Plus size={16} />
//                     )}
//                   </div>
//                 </button>

//                 {/* Answer */}
//                 <div
//                   className={`overflow-hidden transition-all duration-300 px-6 ${
//                     isActive ? "max-h-40 pb-6" : "max-h-0"
//                   }`}
//                 >
//                   <p className="text-gray-400 text-sm">{faq.answer}</p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState, useEffect, useRef } from "react"
import { Minus, Plus } from "lucide-react"

const faqs = [
  {
    question: "What Niche Geeky features are included?",
    answer:
      "Power to founders with exceptional entrepreneurs and the world's leading companies. We provide advanced tools, secure infrastructure, and scalable solutions tailored for modern businesses.",
  },
  {
    question: "What are the system requirements",
    answer:
      "You only need a modern web browser and stable internet connection. Our platform works across all devices seamlessly.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to premium features.",
  },
  {
    question: "Is employee data secure?",
    answer:
      "Absolutely. We use industry-level encryption and strict compliance standards to protect all user data.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is subscription-based and can be managed anytime from your dashboard.",
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // On Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-[#070816] text-white overflow-hidden"
    >
      <div
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Badge */}
        <div className="mb-6">
          <span className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            ✨ FAQs
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-16">
          Frequently Asked <br /> Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-500 delay-${index * 100}
                ${
                  isActive
                    ? "border-purple-500 bg-white/5 shadow-lg shadow-purple-500/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="text-lg">{faq.question}</span>

                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600/20 transition-transform duration-300">
                    {isActive ? (
                      <Minus size={16} className="rotate-180 transition-all duration-300" />
                    ) : (
                      <Plus size={16} className="transition-all duration-300" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
                  ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  overflow-hidden`}
                >
                  <div className="overflow-hidden px-6 pb-3">
                    <p className="text-gray-400 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
