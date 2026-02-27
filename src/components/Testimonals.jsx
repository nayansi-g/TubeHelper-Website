"use client"

import { motion } from "framer-motion"
import GlassImageCards from "./GlassImageCards "


export default function WhyChooseUs() {
  return (
    <section className="w-full bg-black px-4 py-14 text-white sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          {/* Section Title */}
          <div>
            <h2 className="bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
             WHY CHOOSE US?
            </h2>
            <p className="mt-4 max-w-xl text-gray-400">
We don’t just run ads — we build profitable growth systems.            </p>
          </div>

          {/* Points */}
          <div className="space-y-6">

            {/* Point 1 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
               Profit Over Vanity Metrics
              </h3>
              <p className="mt-2 text-gray-400">
                We focus on revenue, margins, CAC, ROAS, and LTV — not impressions or clicks.
              </p>
            </div>

            {/* Point 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
                Clear Data. Clear Decisions.
              </h3>
              <p className="mt-2 text-gray-400">
              Every strategy is backed by real performance data and structured testing.
              </p>
            </div>

            {/* Point 3 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
                Systems, Not Campaigns
              </h3>
              <p className="mt-2 text-gray-400">
                We fix funnels, retention, and tracking — not just ad performance.
              </p>
            </div>

            {/* Point 4 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
                Strategy First. Then Scale.
              </h3>
              <p className="mt-2 text-gray-400">
               We build a solid foundation before increasing spend.
              </p>
            </div>

            {/* Point 5 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
                Transparent Partnership
              </h3>
              <p className="mt-2 text-gray-400">
Clear reporting. Honest communication. No hidden tactics.              </p>
            </div>

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



