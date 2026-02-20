"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What services do you provide?",
        a: "We design and develop high-converting Shopify and WooCommerce stores for businesses. Our services include store setup, custom design, theme development, speed optimization, SEO setup, and ongoing maintenance."
      },
      {
        q: "Do you work with startups?",
        a: "Yes. We work with startups, small businesses, and established brands looking to scale their e-commerce presence."
      },
      {
        q: "How long does it take to build a store?",
        a: "A basic Shopify or WooCommerce store typically takes 7–14 days. Custom projects may take 3–6 weeks depending on complexity."
      }
    ]
  },
  {
    category: "Shopify Services",
    questions: [
      {
        q: "Can you redesign my existing Shopify store?",
        a: "Absolutely. We can completely redesign your store with improved UX, modern UI, better product presentation, and optimized checkout flow."
      },
      {
        q: "Do you provide custom Shopify theme development?",
        a: "Yes. We build fully customized Shopify themes tailored to your brand identity and business goals."
      },
      {
        q: "Will my Shopify store be mobile responsive?",
        a: "100%. All our stores are built mobile-first to ensure seamless experience across devices."
      }
    ]
  },
  {
    category: "WooCommerce Services",
    questions: [
      {
        q: "Do you build WooCommerce stores from scratch?",
        a: "Yes. We set up WordPress + WooCommerce, configure hosting, payment gateways, shipping settings, and custom themes."
      },
      {
        q: "Can you migrate my store to WooCommerce?",
        a: "Yes. We handle full migration from Shopify, Wix, or other platforms while preserving SEO and customer data."
      },
      {
        q: "Do you optimize WooCommerce speed?",
        a: "Yes. We optimize images, caching, plugins, and hosting configurations to improve performance."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        q: "What is your starting price?",
        a: "Our Shopify store packages start from $599. Custom projects vary depending on requirements."
      },
      {
        q: "Do you offer installment payments?",
        a: "Yes. We offer milestone-based payments depending on project scope."
      },
      {
        q: "Are there any hidden charges?",
        a: "No. We maintain full transparency in pricing before starting the project."
      }
    ]
  },
  {
    category: "Support & Maintenance",
    questions: [
      {
        q: "Do you provide post-launch support?",
        a: "Yes. We provide 7–30 days free support after launch depending on the package."
      },
      {
        q: "Can you manage my store monthly?",
        a: "Yes. We offer monthly maintenance packages including updates, backups, performance checks, and minor changes."
      },
      {
        q: "What if I face technical issues later?",
        a: "You can contact our support team anytime. We respond within 24 hours."
      }
    ]
  }
]

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (id) => {
    setActiveIndex(activeIndex === id ? null : id)
  }

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
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-gray-400 text-lg"
        >
          Everything you need to know about building, scaling, and optimizing your Shopify & WooCommerce store.
        </motion.p>
      </section>

      {/* FAQ SECTIONS */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        {faqData.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-8 text-purple-400">
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.questions.map((item, index) => {
                const id = `${sectionIndex}-${index}`
                const isOpen = activeIndex === id

                return (
                  <div
                    key={id}
                    className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-md"
                  >
                    <button
                      onClick={() => toggleFAQ(id)}
                      className="w-full text-left p-6 flex justify-between items-center"
                    >
                      <span className="font-medium">{item.q}</span>
                      <span className="text-purple-400 text-xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 text-gray-400"
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
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
          Still Have Questions?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          Let’s discuss your project and find the best solution for your business.
        </motion.p>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-10 py-4 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition text-lg"
        ><a href="contact">
          Contact Us →</a>
        </motion.button>
      </section>

    </div>
  )
}
