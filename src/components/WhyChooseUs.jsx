"use client"

import { motion } from "framer-motion"
import GlassImageCards from "./GlassImageCards "


export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white px-4  sm:px-6 lg:px-12 ">

      <div className="text-center">
        <h2 className="text-gray-900 text-3xl font-bold  sm:text-4xl lg:text-5xl">
          WHY CHOOSE US?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-center text-lg text-gray-600">
          We don’t just run ads — we build profitable growth systems.            </p>
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >

          {/* Points */}
          <div className="space-y-2">

            {/* Point 1 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Profit Over Vanity Metrics
              </h3>
              <p className="mt-2 text-gray-600">
                We focus on revenue, margins, CAC, ROAS, and LTV — not impressions or clicks.
              </p>
            </div>

            {/* Point 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Clear Data. Clear Decisions.
              </h3>
              <p className="mt-2 text-gray-600">
                Every strategy is backed by real performance data and structured testing.
              </p>
            </div>

            {/* Point 3 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Systems, Not Campaigns
              </h3>
              <p className="mt-2 text-gray-600">
                We fix funnels, retention, and tracking — not just ad performance.
              </p>
            </div>

            {/* Point 4 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Strategy First. Then Scale.
              </h3>
              <p className="mt-2 text-gray-600">
                We build a solid foundation before increasing spend.
              </p>
            </div>

            {/* Point 5 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Transparent Partnership
              </h3>
              <p className="mt-2 text-gray-600">
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
  className="hidden md:flex  bg-black py-10 justify-center shadow-xl shadow-gray-600 "
>
  <div className="relative w-[400px] h-[450px] sm:w-[450px] sm:h-[500px] lg:w-[400px] lg:h-[450px] overflow-hidden ">
    <img
      src="/WhyChooseUs.jpg"
      alt="Why Choose Us"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

      </div>
    </section>
  )
}



