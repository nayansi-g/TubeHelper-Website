"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Acquire Profitably",
    description:"Structured paid acquisition that increases ROAS and lowers CAC.",
    image: "/services1.jpg",
    points: [
      "Meta & Google ads",
      "⁠Creative testing frameworks",
      " ⁠Budget scaling with margin control",
    ],
  },
  {
    title: "Convert More",
    description:"Optimize your funnel to turn traffic into higher revenue.",
    image: "/services2.jpg",
    points: [
      "⁠Landing page & checkout optimization",
      "⁠A/B testing",
      "⁠AOV improvement systems"
    ],
  },
  {
    title: "⁠ ⁠Retain & Scale",
    description:"Build backend systems that increase LTV and stabilize growth.",
    image: "/services3.jpg",
    points: [
      "Email & SMS automation",
      "⁠Retargeting & lifecycle campaigns",
      "⁠Tracking & performance dashboards",
    ],
  },
  {
    title: "Track & Optimize",
    description:"Clear data infrastructure that supports confident scaling.",
    image: "/service4new.jpg",
    points: [
      "GA4 & conversion tracking ",
      "Server-side tracking",
      "Revenue dashboards & clarity",
    ],
  },
]

export default function ServicesCards() {
  return (
    <section className="w-full ">
      <div className="rounded-[56px] bg-white py-16 md:py-20 ">
        <div className="mx-auto max-w-7xl space-y-14 px-5 md:px-8 lg:px-14">

          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
              OUR SERVICES
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              We build revenue systems for ecommerce brands ready to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative  border border-gray-200 overflow-hidden rounded-xl bg-white p-2 hover:shadow-lg"
              >
                {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-100 via-transparent to-blue-100 opacity-0 transition duration-500 group-hover:opacity-100"></div> */}

                <div className="relative mb-6 overflow-hidden border  border-gray-300 text-center rounded-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full object-cover transition-transform duration-700 "
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div> */}
                </div>

                <div className="relative z-10 pb-10  text-center space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-md text-gray-600">
                    {service.description}
                  </p>

                  <ul className="space-y-2 pt-2 text-center text-sm text-gray-700">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center justify-start gap-2">
                        <span className="font-bold text-purple-600 bg-purple-700 rounded-full p-1"></span>
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
