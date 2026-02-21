"use client"

import { useState, useEffect, useRef } from "react"
import { Minus, Plus } from "lucide-react"

const faqs = [
  {
    question: "What services do you specialize in?",
    answer:
      "We specialize in performance marketing, ecommerce growth, conversion rate optimization (CRO), creative strategy, and analytics setup. Our focus is helping brands scale profitably — not just increase traffic.",
  },
  {
    question: "Do you work with Shopify brands?",
    answer:
      "Yes, we work extensively with Shopify and D2C brands. From paid acquisition to retention and lifecycle marketing, we build growth systems tailored specifically for ecommerce businesses.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We measure success using real business metrics — revenue growth, return on ad spend (ROAS), customer acquisition cost (CAC), and lifetime value (LTV). We focus on profitability, not vanity numbers.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most campaigns begin generating performance insights within the first few weeks. However, sustainable and scalable growth typically takes 60–90 days of structured testing and optimization.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "We believe in earning trust through results. While growth takes time, we focus on transparent communication and performance-driven partnerships rather than locking clients into rigid contracts.",
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
    className="relative py-20 px-4 bg-white rounded-t-[90px] md:rounded-t-[100px] lg:rounded-t-[150px] text-gray-900 overflow-hidden"
  >
    <div
      className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Badge */}
      <div className="mb-6">
        <span className="px-4 py-1 text-sm rounded-full bg-purple-50 text-purple-600 border border-purple-200">
          ✨ FAQs
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 text-gray-900">
        Frequently Asked <br /> Questions
      </h2>

      {/* FAQ Items */}
      <div className="space-y-3 text-left">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index

          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300
              ${
                isActive
                  ? "border-purple-500 bg-purple-50 shadow-md"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-2 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>

                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {isActive ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out
                ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                overflow-hidden`}
              >
                <div className="overflow-hidden px-6 pb-2">
                  <p className="text-gray-600 leading-relaxed">
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
