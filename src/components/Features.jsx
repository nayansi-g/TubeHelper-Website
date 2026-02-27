"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Smarter Decisions, Backed by Data",
    desc: "Every campaign is guided by performance metrics to eliminate wasted spend.",
  },
  {
    title: "From Click to Conversion — Optimized",
    desc:"We improve every stage of the customer journey to increase revenue."
  },
  {
    title: "Creative That Converts",
    desc:"Structured creative testing designed to lower CPA and improve ROAS."
  },
  {
    title: "No Hidden Numbers",
    desc: "You see real business metrics — revenue, CAC, LTV, and profit."
  },
  {
    title: "Built to Scale With You",
    desc: "We create repeatable systems that support long-term growth."
  },
  {
    title: "More Than an Agency — A Growth Partner",
    desc: "We work closely with your team to build sustainable, profitable scale"
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
            Built For Brands That Want To Scale
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