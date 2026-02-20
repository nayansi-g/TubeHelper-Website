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

export default function SupportPage() {
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
          24/7 E-Commerce Support
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-gray-400 text-lg"
        >
          Your online store never sleeps — and neither do we.  
          Get expert Shopify & WooCommerce support anytime you need it.
        </motion.p>
      </section>

      {/* SUPPORT CHANNELS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-16"
        >
          Ways to Reach Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Live Chat Support",
              desc: "Instant real-time assistance for urgent issues, checkout errors, payment failures, or website downtime."
            },
            {
              title: "Priority Email Support",
              desc: "Detailed technical assistance for development tasks, feature requests, bug fixes, and integrations."
            },
            {
              title: "Emergency Phone Support",
              desc: "Direct access to our technical team for critical store outages or revenue-impacting issues."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* WHAT WE SUPPORT */}
      <section className="bg-[#080B1A] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-16"
          >
            What We Help You With
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">

            {[
              "Store downtime & hosting issues",
              "Checkout and payment gateway errors",
              "Theme bugs & layout issues",
              "Plugin conflicts in WooCommerce",
              "App integrations in Shopify",
              "Speed optimization & performance fixes",
              "Product upload & catalog management",
              "Security patches & malware removal"
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500 transition"
              >
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* RESPONSE TIME SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-12"
        >
          Guaranteed Response Times
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Critical Issues",
              desc: "Response within 15–30 minutes. Immediate action for revenue-impacting problems."
            },
            {
              title: "High Priority",
              desc: "Response within 1–2 hours. Bugs, checkout errors, broken layouts."
            },
            {
              title: "General Requests",
              desc: "Response within 12–24 hours. Updates, improvements, feature additions."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 border border-purple-500/30"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SUPPORT PROCESS */}
      <section className="bg-[#080B1A] py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-16"
          >
            Our Support Process
          </motion.h2>

          <div className="space-y-10">

            {[
              {
                step: "1. Issue Identification",
                desc: "We carefully analyze the issue and identify the root cause."
              },
              {
                step: "2. Immediate Containment",
                desc: "For critical issues, we apply quick fixes to prevent revenue loss."
              },
              {
                step: "3. Permanent Resolution",
                desc: "We implement a complete and stable solution."
              },
              {
                step: "4. Monitoring & Prevention",
                desc: "We monitor performance and ensure the issue does not repeat."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  {item.step}
                </h3>
                <p className="text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6"
        >
          Peace of Mind for Your Business
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-400 mb-10"
        >
          Whether you are running flash sales, scaling ads, or launching a new product —
          our support team ensures your store stays secure, stable, and optimized.
        </motion.p>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-10 py-4 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition text-lg"
        >
          Get 24/7 Support →
        </motion.button>
      </section>

    </div>
  )
}
