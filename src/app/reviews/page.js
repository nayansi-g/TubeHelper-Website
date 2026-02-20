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

export default function ReviewsPage() {
  return (
    <div className="bg-[#070816] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-semibold mb-6"
        >
          What Our Clients Say
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-gray-400 text-lg"
        >
          Trusted by fast-growing brands worldwide.  
          We don’t just build stores — we build long-term partnerships.
        </motion.p>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10 text-center">
        {[
          { number: "150+", label: "Stores Built" },
          { number: "98%", label: "Client Satisfaction" },
          { number: "24/7", label: "Support Availability" },
          { number: "4.9/5", label: "Average Rating" }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-4xl font-bold text-purple-400 mb-2">{item.number}</h3>
            <p className="text-gray-400">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* WRITTEN TESTIMONIALS */}
      <section className="bg-[#080B1A] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-16"
          >
            Client Testimonials
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Rohan Mehta",
                business: "Fashion Brand Owner",
                review:
                  "They transformed our Shopify store completely. Sales increased by 60% within 3 months. Their UI design and conversion optimization skills are outstanding."
              },
              {
                name: "Anjali Sharma",
                business: "Skincare Brand",
                review:
                  "We were struggling with checkout issues and slow loading speed. After their optimization work, our bounce rate dropped drastically."
              },
              {
                name: "Amit Verma",
                business: "Electronics Store",
                review:
                  "Professional, fast, and extremely reliable. Our WooCommerce store now runs smoothly even during heavy traffic campaigns."
              },
              {
                name: "Sneha Kapoor",
                business: "Home Decor Business",
                review:
                  "They handled everything — design, payments, integrations, marketing setup. It feels like having an in-house tech team."
              }
            ].map((client, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10"
              >
                <p className="text-gray-300 mb-6 leading-relaxed">
                  “{client.review}”
                </p>
                <div>
                  <h4 className="font-semibold text-purple-400">{client.name}</h4>
                  <p className="text-gray-400 text-sm">{client.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY REVIEWS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-16"
          >
            Trusted Across Industries
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Fashion & Apparel",
              "Beauty & Skincare",
              "Electronics & Gadgets",
              "Home Decor",
              "Health & Wellness",
              "Digital Products"
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/10 border border-purple-500/30 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-purple-400">
                  {industry}
                </h3>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CASE STUDY STYLE REVIEWS */}
      <section className="bg-[#080B1A] py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-16"
          >
            Real Results. Real Growth.
          </motion.h2>

          <div className="space-y-10">

            {[
              {
                title: "Fashion Brand Growth",
                result:
                  "Increased monthly revenue from ₹3L to ₹8L within 6 months after redesign and conversion optimization."
              },
              {
                title: "WooCommerce Speed Optimization",
                result:
                  "Improved page speed score from 45 to 92 and reduced cart abandonment by 35%."
              },
              {
                title: "Shopify Store Relaunch",
                result:
                  "Boosted conversion rate from 1.2% to 3.8% with UX improvements and product restructuring."
              }
            ].map((caseItem, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-gray-300">
                  {caseItem.result}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6"
        >
          Ready to Be Our Next Success Story?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-400 mb-10"
        >
          Join hundreds of brands who trust us to build, optimize,
          and scale their e-commerce stores.
        </motion.p>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition text-lg"
        >
          Start Your Store Today →
        </motion.button>
      </section>

    </div>
  )
}
