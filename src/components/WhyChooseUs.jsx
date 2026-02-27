"use client"

import { motion } from "framer-motion"
import GlassImageCards from "./GlassImageCards "


export default function WhyChooseUs() {
  const points = [
    {
      title: "Profit Over Vanity Metrics",
      text: "We focus on revenue, margins, CAC, ROAS, and LTV — not impressions or clicks.",
    },
    {
      title: "Clear Data. Clear Decisions.",
      text: "Every strategy is backed by real performance data and structured testing.",
    },
    {
      title: "Systems, Not Campaigns",
      text: "We fix funnels, retention, and tracking — not just ad performance.",
    },
    {
      title: "Strategy First. Then Scale.",
      text: "We build a solid foundation before increasing spend.",
    },
    {
      title: "Transparent Partnership",
      text: "Clear reporting. Honest communication. No hidden tactics.",
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,#1d2140_0%,#0a0a12_50%,#050507_100%)] px-4 py-14 text-white sm:px-6 lg:px-12 lg:py-20">
      <span className="pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-[#ff2e63]/20 blur-3xl" />
      <span className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#3760ff]/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          {/* Section Title */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Why Choose Us
            </p>
            <h2 className="bg-gradient-to-r from-[#7aa2ff] via-white to-[#ff8ab1] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
             WHY CHOOSE US?
            </h2>
            <p className="mt-4 max-w-xl text-gray-300">
We don’t just run ads — we build profitable growth systems.            </p>
          </div>

          {/* Points */}
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point, index) => (
              <div
                key={point.title}
                className={`rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm ${index === 0 ? "sm:col-span-2" : ""}`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9ab4ff]">0{index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-100">{point.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{point.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:block lg:justify-end"
        >
      <GlassImageCards />
        </motion.div>

      </div>
    </section>
  )
}



