"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Acquire Profitably",
    description:"Structured paid acquisition that increases ROAS and lowers CAC.",
    image: "/performance.jpg",
    points: [
      "Meta & Google ads",
      "⁠Creative testing frameworks",
      " ⁠Budget scaling with margin control",
    ],
  },
  {
    title: "Convert More",
    description:"Optimize your funnel to turn traffic into higher revenue.",
    image: "/CRO.png",
    points: [
      "⁠Landing page & checkout optimization",
      "⁠A/B testing",
      "⁠AOV improvement systems"
    ],
  },
  {
    title: "⁠ ⁠Retain & Scale",
    description:"Build backend systems that increase LTV and stabilize growth.",
    image: "/Builtforshopify.jpg",
    points: [
      "Email & SMS automation",
      "⁠Retargeting & lifecycle campaigns",
      "⁠Tracking & performance dashboards",
    ],
  },
  {
    title: "Data-Driven Decisions. Zero Guesswork.",
    description:
      "We implement advanced tracking and reporting systems so you always know what’s working — and why.",
    image: "/data_Driven.jpg",
    points: [
      "GA4 Setup",
      "Conversion Tracking & Pixel Integration",
      "Server-Side Tracking",
      "Custom Reporting Dashboards",
      "Marketing Automation Workflows",
    ],
  },
]

export default function ServicesCards() {
  return (
    <section className="w-full px-0 md:px-5">
      <div className="rounded-[56px] bg-white py-16 md:rounded-[90px] md:py-20 lg:rounded-[120px]">
        <div className="mx-auto max-w-7xl space-y-14 px-5 md:px-8 lg:px-14">

          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
              OUR SERVICES
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              We build revenue systems for ecommerce brands ready to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-100 via-transparent to-blue-100 opacity-0 transition duration-500 group-hover:opacity-100"></div>

                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-78"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>

                  <ul className="space-y-2 pt-2 text-sm text-gray-700">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-purple-600">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
