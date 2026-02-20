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

export default function GuidesPage() {
  return (
    <div className="bg-[#070816] text-white min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section className="text-center py-28 px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          Ultimate E-Commerce Guides
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-gray-400 text-lg"
        >
          In-depth, step-by-step guides to help you build, optimize,
          and scale profitable Shopify & WooCommerce stores.
        </motion.p>
      </section>

      {/* GUIDES SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-32 space-y-28">

        {/* GUIDE 1 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            Complete Shopify Store Setup Guide
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              This guide walks you through the entire process of launching
              a high-converting Shopify store — from domain purchase to live checkout.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Choosing a profitable niche</li>
              <li>Registering domain & connecting hosting</li>
              <li>Theme selection & customization</li>
              <li>Product upload & collection structure</li>
              <li>Payment gateway integration</li>
              <li>Shipping & tax configuration</li>
              <li>Essential apps installation</li>
              <li>Pre-launch checklist</li>
            </ul>
            <button className="mt-4 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Read Full Guide →
            </button>
          </div>
        </motion.div>

        {/* GUIDE 2 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            WooCommerce Beginner to Advanced Guide
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Learn how to build and optimize a WooCommerce store using WordPress.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hosting selection for WooCommerce</li>
              <li>Installing WordPress & WooCommerce</li>
              <li>Theme setup & customization</li>
              <li>Product types & variations</li>
              <li>Payment & shipping setup</li>
              <li>Security & performance optimization</li>
              <li>SEO configuration</li>
              <li>Speed optimization tips</li>
            </ul>
            <button className="mt-4 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Explore Guide →
            </button>
          </div>
        </motion.div>

        {/* GUIDE 3 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            High-Converting Store Design Blueprint
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Understand how successful brands design their stores to maximize conversions.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Psychology of color & layout</li>
              <li>Homepage structure formula</li>
              <li>Product page optimization</li>
              <li>Trust badges & social proof</li>
              <li>Checkout flow optimization</li>
              <li>Mobile-first design strategy</li>
              <li>Speed & UX improvements</li>
            </ul>
            <button className="mt-4 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Read Blueprint →
            </button>
          </div>
        </motion.div>

        {/* GUIDE 4 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            E-Commerce SEO Master Guide
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Rank your store on Google and drive organic traffic consistently.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keyword research strategy</li>
              <li>On-page SEO for product pages</li>
              <li>Technical SEO checklist</li>
              <li>Blog strategy for traffic</li>
              <li>Schema markup for products</li>
              <li>Link building methods</li>
              <li>Performance monitoring tools</li>
            </ul>
            <button className="mt-4 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Master SEO →
            </button>
          </div>
        </motion.div>

        {/* GUIDE 5 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            Scaling Your Store to 6 Figures
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Advanced growth strategies to scale revenue sustainably.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conversion rate optimization</li>
              <li>Email marketing automation</li>
              <li>Retargeting ad strategies</li>
              <li>Upsell & cross-sell systems</li>
              <li>Customer retention methods</li>
              <li>Analytics & KPI tracking</li>
              <li>Inventory scaling strategies</li>
            </ul>
            <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition">
              Scale Now →
            </button>
          </div>
        </motion.div>

      </section>

      {/* CTA SECTION */}
      <section className="text-center py-24 px-6 bg-[#080B1A]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-6"
        >
          Need Expert Help Instead?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          If you'd rather skip the learning curve and get a professionally built,
          high-converting store — we can handle everything for you.
        </motion.p>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-10 py-4 cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition text-lg"
        >
          Start Your Store →
        </motion.button>
      </section>

    </div>
  )
}
