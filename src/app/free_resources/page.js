"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function FreeResourcesPage() {
  return (
    <div className="bg-[#070816] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          Free E-Commerce Resources
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-gray-400 text-lg"
        >
          High-value tools, guides, and checklists to help you build,
          optimize, and scale your Shopify & WooCommerce store.
        </motion.p>
      </section>

      {/* RESOURCES GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-32 space-y-24">

        {/* SECTION 1 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-10 text-purple-400 text-center">
            📘 Free Guides
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Shopify Launch Checklist",
                desc: "Step-by-step checklist to launch your Shopify store without missing anything important."
              },
              {
                title: "WooCommerce Setup Guide",
                desc: "Complete beginner-friendly setup process for WooCommerce stores."
              },
              {
                title: "High-Converting Homepage Blueprint",
                desc: "Structure and layout formula used by top-performing e-commerce brands."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500 transition">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
                  Download Free →
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-10 text-purple-400 text-center">
            📊 Free Tools & Calculators
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Profit Margin Calculator",
                desc: "Calculate your real profit after ads, shipping, and product cost."
              },
              {
                title: "Break-Even ROAS Calculator",
                desc: "Know exactly what ROAS you need to stay profitable."
              },
              {
                title: "E-commerce Budget Planner",
                desc: "Plan your monthly marketing and development expenses smartly."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500 transition">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
                  Use Tool →
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 3 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-10 text-purple-400 text-center">
            🎥 Free Video Tutorials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "How to Build a Shopify Store",
                desc: "Full walkthrough from domain purchase to first product live."
              },
              {
                title: "WooCommerce Optimization Guide",
                desc: "Improve speed, SEO, and conversions step-by-step."
              },
              {
                title: "E-commerce Conversion Secrets",
                desc: "Proven tactics to increase your store's conversion rate."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500 transition">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
                  Watch Now →
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 4 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-10 text-purple-400 text-center">
            🧠 Free Strategy Frameworks
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "E-commerce Growth Framework",
                desc: "Structured roadmap to scale from 0 to consistent monthly revenue."
              },
              {
                title: "Brand Positioning Worksheet",
                desc: "Clarify your audience, messaging, and value proposition."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500 transition">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition">
                  Access Free →
                </button>
              </div>
            ))}
          </div>
        </motion.div>

      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6 bg-[#080B1A]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-6"
        >
          Want a Done-For-You Store Instead?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          If you’d rather focus on your business while we handle design,
          development, and optimization — let’s build your store the right way.
        </motion.p>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-10 py-4 cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition text-lg"
        >
          Start Your Project →
        </motion.button>
      </section>

    </div>
  )
}
