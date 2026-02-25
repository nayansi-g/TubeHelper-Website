"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Smarter Decisions, Backed by Real Data",
    desc: "We don’t rely on assumptions. Every campaign is guided by analytics, user behavior insights, and performance metrics to maximize ROI and eliminate wasted spend.",
  },
  {
    title: "From Click to Conversion — Optimized",
    desc: "We optimize every stage of your customer journey — from ad creatives to landing pages and checkout — so no opportunity is lost.",
  },
  {
    title: "Scroll-Stopping Creative That Sells",
    desc: "Our creatives are built using proven hooks, audience psychology, and continuous testing to improve CTR, reduce CPA, and increase conversions.",
  },
  {
    title: "No Guesswork. No Hidden Numbers.",
    desc: "You get clear, honest reporting with insights that actually matter — revenue, customer acquisition cost, lifetime value — not vanity metrics.",
  },
  {
    title: "Built to Scale With You",
    desc: "We create repeatable growth systems that support your brand as it grows — ensuring stability while increasing ad spend and revenue.",
  },
  {
    title: "More Than an Agency — A Growth Partner",
    desc: "We work closely with your team, understand your margins and goals, and make proactive recommendations to help you grow sustainably.",
  },
];

export default function Features() {

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-black text-white px-4 md:px-8 py-14 md:py-20 overflow-hidden">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
        className="mx-auto max-w-7xl"
      >

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-16"
        >
          <span className="bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent">
            Built for Brands That Want to Scale
          </span>
        </motion.h2>

        {/* Feature Grid */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
             
              whileTap={{ scale: 0.98 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/20 via-white/5 to-blue-500/20"
            >
              {/* Inner Card */}
              <div className="relative h-full rounded-2xl bg-[#0f0f0f] p-6 backdrop-blur-xl transition duration-300 group-hover:bg-[#141414]">

                {/* Glow Background */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 blur-2xl"></div>

                <div className="relative z-10">

                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-5"
                  >
                    <span className="text-purple-400 text-lg">⬢</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}