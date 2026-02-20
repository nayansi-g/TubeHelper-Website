"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function OurWorkPage() {
  return (
    <div className="bg-[#070816] text-white overflow-hidden">

      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl  md:text-5xl  font-semibold mb-6"
        >
          Our Work Speaks Through Results
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl text-gray-400 text-md"
        >
          We design and develop powerful Shopify & WooCommerce stores that
          increase conversions, improve user experience, and help businesses scale profitably.
        </motion.p>
      </section>

      {/* STATS SECTION */}
      <section className="px-6 py-20 bg-[#080B1A]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { title: "50+", desc: "Stores Delivered" },
            { title: "3X", desc: "Average Conversion Growth" },
            { title: "99%", desc: "Client Satisfaction" },
            { title: "24/7", desc: "Support Availability" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="p-8 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-8">
            Featured Case Study
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 border border-white/10 rounded-xl h-[350px] flex items-center justify-center text-gray-500">
              Store Screenshot
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Fashion Brand – Shopify Store
              </h3>

              <p className="text-gray-400 mb-6">
                We redesigned a fashion brand’s Shopify store focusing on
                modern UI, faster checkout flow, optimized product pages,
                and advanced conversion strategies.
              </p>

              <ul className="space-y-3 text-gray-300 mb-6">
                <li>✔ Complete UX Redesign</li>
                <li>✔ Custom Product Filtering</li>
                <li>✔ Speed Optimization (90+ PageSpeed)</li>
                <li>✔ Advanced Cart & Upsell Integration</li>
              </ul>

              <div className="text-purple-400 font-semibold">
                Result: 2.8X Increase in Sales in 60 Days
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECT GRID */}
      <section className="px-6 py-24 bg-[#080B1A]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-semibold text-center mb-16">
            More Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Electronics Store – WooCommerce",
              "Luxury Watch Brand – Shopify",
              "Skincare Brand – Shopify",
              "Home Decor Store – WooCommerce",
              "Fitness Brand – Shopify",
              "Digital Product Store – WooCommerce",
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500 transition"
              >
                <div className="h-[180px] bg-[#0F1224] rounded-lg mb-6 flex items-center justify-center text-gray-500">
                  Preview Image
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {project}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  Custom designed e-commerce store with optimized
                  performance, mobile-first design, and integrated payment gateways.
                </p>

                <button className="text-purple-400 hover:text-pink-400 transition">
                  View Case Study →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-16"
        >
          What Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            "They completely transformed our Shopify store. Sales increased within weeks.",
            "Highly professional team. The WooCommerce store they built exceeded expectations.",
          ].map((review, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-white/5 border border-white/10 rounded-xl"
            >
              <p className="text-gray-300 mb-4">“{review}”</p>
              <p className="text-purple-400 font-semibold">
                — Verified Client
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-32 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
        >
          Let’s Build Your Next High-Converting Store
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Whether you need a brand-new Shopify store or want to upgrade your WooCommerce website,
          we’re ready to help you scale.
        </motion.p>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition text-lg"
        >
          Start Your Project →
        </motion.button>
      </section>

    </div>
  )
}
