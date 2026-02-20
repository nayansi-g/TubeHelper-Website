"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
}

export default function AboutPage() {
  return (
    <div className="bg-[#070816] text-white min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section className="text-center py-28 px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl lg:text-5xl max-w-5xl mx-auto text-center font-semibold mb-6"
        >
          We Build High-Converting E-Commerce Experiences
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-gray-400 text-sm md:text-lg"
        >
          We help ambitious brands launch, optimize, and scale powerful 
          Shopify and WooCommerce stores that generate consistent revenue.
        </motion.p>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-purple-400">
            Our Story
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Our journey started with a simple belief — most e-commerce stores fail
            not because of the product, but because of poor design, weak strategy,
            and lack of technical foundation.
          </p>

          <p className="text-gray-300 leading-relaxed">
            We saw businesses investing thousands into ads but losing customers
            due to slow websites, confusing layouts, and low trust signals.
            That’s when we decided to build an agency focused on performance,
            conversion psychology, and scalable architecture.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Today, we specialize in crafting Shopify and WooCommerce stores
            designed to not just look beautiful — but convert visitors into buyers.
          </p>
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#080B1A] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-16"
          >
            What We Do
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">

            {[
              {
                title: "Custom Store Development",
                desc: "We design and develop high-performance Shopify and WooCommerce stores tailored to your brand identity and growth goals."
              },
              {
                title: "Conversion Optimization",
                desc: "We analyze user behavior and implement strategic improvements to maximize sales and reduce bounce rates."
              },
              {
                title: "Speed & Performance Optimization",
                desc: "We ensure lightning-fast loading speeds to improve SEO rankings and user experience."
              },
              {
                title: "Store Redesign & Migration",
                desc: "We migrate outdated stores to modern, scalable platforms without losing data or SEO rankings."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500 transition"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-16 text-center"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Transparency",
              desc: "We believe in honest communication, clear pricing, and zero hidden surprises."
            },
            {
              title: "Performance First",
              desc: "Design is important, but performance and conversion come first in every decision we make."
            },
            {
              title: "Long-Term Partnership",
              desc: "We don’t just build stores — we build relationships and support brands long-term."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h3 className="text-xl font-semibold text-purple-400">
                {value.title}
              </h3>
              <p className="text-gray-400">
                {value.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#080B1A] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-10"
          >
            Why Brands Trust Us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            We combine strategy, design, development, and marketing knowledge 
            to create e-commerce stores that are built for long-term growth. 
            Every decision we make is backed by research, data, and experience.
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

        </div>
      </section>

    </div>
  )
}
