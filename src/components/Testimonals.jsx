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
              Why Choose Us?
            </h2>
            <p className="mt-4 max-w-xl text-gray-400">
              We don’t just execute campaigns — we build growth systems designed for sustainable profitability.
            </p>
          </div>

          {/* Points */}
          <div className="space-y-6">

            {/* Point 1 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
                We Care About Profit — Not Just Performance
              </h3>
              <p className="mt-2 text-gray-400">
                Anyone can get you clicks. We focus on revenue, margins, and long-term growth — 
                because traffic without profit is just noise.
              </p>
            </div>

            {/* Point 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
                No Guesswork. No Vanity Metrics.
              </h3>
              <p className="mt-2 text-gray-400">
                Every decision we make is backed by data, testing, and clear reporting. 
                You’ll always know what’s working — and why.
              </p>
            </div>

            {/* Point 3 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
                We Think Like Growth Partners
              </h3>
              <p className="mt-2 text-gray-400">
                We don’t “run ads.” We understand your business model, your margins, 
                your audience, and your bottlenecks — then build systems that scale sustainably.
              </p>
            </div>

            {/* Point 4 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
                Speed + Strategy
              </h3>
              <p className="mt-2 text-gray-400">
                Execution matters. But direction matters more. We move fast — 
                without breaking what’s already working.
              </p>
            </div>

            {/* Point 5 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">
                Transparent Communication
              </h3>
              <p className="mt-2 text-gray-400">
                No jargon. No hidden tactics. Just clear updates, real conversations, and shared goals.
              </p>
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



