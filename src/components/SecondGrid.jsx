"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Performance Marketing That Scales Profit — Not Just Spend",
    description:
      "We build full-funnel paid media systems designed to maximize ROAS and lower acquisition costs — across Meta, Google, and YouTube.",
    image: "/performance.jpg",
    points: [
      "Paid Media Strategy & Funnel Mapping",
      "Meta & Instagram Ads",
      "Google Search, Shopping & Display",
      "Budget Scaling & ROAS Optimization",
      "Creative Testing Framework",
    ],
  },
  {
    title: "Turn More Visitors Into Paying Customers",
    description:
      "We analyze user behavior and optimize every touchpoint of your funnel to increase conversion rates and average order value.",
    image: "/CRO.png",
    points: [
      "Heatmaps & Behavior Analysis",
      "Landing Page Optimization",
      "A/B Testing",
      "Funnel Drop-Off Analysis",
      "Checkout Optimization",
    ],
  },
  {
    title: "Built for Shopify Brands Ready to Scale",
    description:
      "We help D2C and ecommerce brands build sustainable growth engines using performance marketing, retention, and automation.",
    image: "/Builtforshopify.jpg",
    points: [
      "Shopify Store Audits",
      "Retargeting & Lifecycle Campaigns",
      "Upsell & Cross-Sell Optimization",
      "Subscription & Repeat Purchase Strategy",
      "Email & SMS Automation",
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
    <section className="w-full  px-0 md:px-5 ">
     <div className="bg-white rounded-[70px] md:rounded-[100px] lg:rounded-[130px] py-20">
       <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">

         <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl  font-semibold tracking-tight">
            <span className="text-black">
              Our Services
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Performance-driven growth systems built to scale modern ecommerce brands.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 group overflow-hidden"
            >
              {/* Subtle Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-transparent to-blue-100 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-68 md:78 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 text-gray-700 text-sm pt-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
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
