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

export default function ServicesPage() {
  return (
    <div className="bg-[#070816] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl  md:text-4xl lg:text-5xl font-semibold mb-6"
        >
          High-Converting E-commerce Stores <br /> Built for Growth
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl text-gray-400 mb-8"
        >
          We design and develop Shopify & WooCommerce stores that help
          businesses launch, scale, and dominate online.
        </motion.p>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
        >
          Get Free Consultation
        </motion.button>
      </section>

      {/* CORE SERVICES */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-center mb-16"
        >
          Our Core Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Shopify Store Development",
            "WooCommerce Development",
            "Store Migration",
            "Maintenance & Support",
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-400 text-sm">
                We deliver scalable, optimized and fully customized e-commerce
                solutions tailored to your business goals.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CUSTOM DESIGN */}
      <section className="px-6 py-24 bg-[#080B1A]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold mb-10"
          >
            Custom Store Design & Branding
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 max-w-3xl mx-auto"
          >
            We create visually stunning, conversion-focused storefronts that
            align with your brand identity and customer psychology.
          </motion.p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-center mb-16"
        >
          Our Process
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            "Strategy & Planning",
            "Design & Development",
            "Testing & Optimization",
            "Launch & Growth Support",
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 border border-white/10 rounded-xl bg-white/5"
            >
              <h3 className="text-lg font-semibold mb-2">
                Step {index + 1}
              </h3>
              <p className="text-gray-400">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-24 bg-[#080B1A]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold mb-16"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Mobile Responsive",
              "SEO Optimized",
              "Fast Loading Speed",
              "Secure Payment Integration",
              "Modern UI/UX Design",
              "Dedicated Support",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-white/10 bg-white/5"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-32 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl  md:text-4xl lg:text-5xl font-semibold mb-6"
        >
          Ready to Build a Store That Converts?
        </motion.h2>

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
