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

export default function EcommerceTipsPage() {
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
          E-Commerce Growth Tips
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-gray-400 text-lg"
        >
          Proven strategies to build, optimize, and scale high-converting Shopify and WooCommerce stores.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-32 space-y-24">

        {/* 1 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            1. Focus on Conversion-Driven Design
          </h2>
          <p className="text-gray-400 leading-8">
            Your store design should not just look beautiful — it should convert visitors into customers.
            Use clear call-to-action buttons, strong product imagery, trust badges, reviews, and clean layouts.
            Remove distractions. Make checkout simple. Speed matters.
          </p>
        </motion.div>

        {/* 2 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            2. Optimize Store Speed
          </h2>
          <p className="text-gray-400 leading-8">
            A 1-second delay in load time can reduce conversions significantly.
            Compress images, enable caching, minimize scripts, and use high-quality hosting.
            Shopify users should avoid excessive apps. WooCommerce users should optimize plugins.
          </p>
        </motion.div>

        {/* 3 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            3. Master Product Pages
          </h2>
          <p className="text-gray-400 leading-8">
            Product pages are where buying decisions happen.
            Use high-resolution images, benefits-focused descriptions,
            customer reviews, FAQs, shipping details, and urgency elements.
            Show value, not just features.
          </p>
        </motion.div>

        {/* 4 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            4. Use Email Marketing Strategically
          </h2>
          <p className="text-gray-400 leading-8">
            Build your email list from day one.
            Set up abandoned cart emails, welcome sequences, promotional campaigns,
            and re-engagement flows. Email marketing gives the highest ROI in e-commerce.
          </p>
        </motion.div>

        {/* 5 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            5. Invest in SEO Early
          </h2>
          <p className="text-gray-400 leading-8">
            Optimize product titles, meta descriptions, URLs, and content.
            Create blogs targeting buyer intent keywords.
            SEO builds long-term organic traffic and reduces ad dependency.
          </p>
        </motion.div>

        {/* 6 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            6. Leverage Social Proof
          </h2>
          <p className="text-gray-400 leading-8">
            Add reviews, testimonials, case studies, and UGC content.
            Customers trust other customers more than brands.
            Display trust badges, secure checkout icons, and real-time purchase notifications.
          </p>
        </motion.div>

        {/* 7 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            7. Use Paid Ads Smartly
          </h2>
          <p className="text-gray-400 leading-8">
            Don’t burn money blindly.
            Test creatives, target the right audience, and track performance metrics.
            Combine Facebook Ads, Google Ads, and retargeting strategies for best results.
          </p>
        </motion.div>

        {/* 8 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            8. Improve Checkout Experience
          </h2>
          <p className="text-gray-400 leading-8">
            Simplify checkout. Reduce form fields.
            Offer multiple payment methods.
            Show shipping cost clearly.
            Reduce friction — friction kills conversions.
          </p>
        </motion.div>

        {/* 9 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            9. Track Analytics & Data
          </h2>
          <p className="text-gray-400 leading-8">
            Use Google Analytics, heatmaps, and conversion tracking.
            Monitor bounce rate, cart abandonment rate, AOV, and conversion rate.
            Data-driven decisions outperform guesswork.
          </p>
        </motion.div>

        {/* 10 */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            10. Focus on Long-Term Branding
          </h2>
          <p className="text-gray-400 leading-8">
            Build a brand, not just a store.
            Maintain consistent design, tone, and messaging.
            Build community through social media and content marketing.
            Brands win in the long run.
          </p>
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
          Want Help Growing Your Store?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          Let’s build a high-converting Shopify or WooCommerce store tailored to your business.
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
