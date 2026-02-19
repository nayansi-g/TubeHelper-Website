// "use client"

// export default function Testimonials() {
//   return (
//     <section className="relative bg-[#070816] text-white px-6 md:px-10 lg:px-20 overflow-hidden">

//       {/* Background Glow Effects */}
//       <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-purple-600 opacity-30 blur-[140px] rounded-full"></div>
//       <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-pink-500 opacity-30 blur-[140px] rounded-full"></div>

//       <div className="relative z-10  mx-auto">
//          <div className="mb-6 text-center py-10">
//           <span className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
//             ✨ Testimonals
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
//           What our client are saying
//         </h2>

//         {/* Testimonials Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mb-24">

//           {/* Card */}
//           <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-purple-500 transition">
//             <p className="text-gray-300 text-sm mb-6">
//               “We were struggling to keep track of our customer data and
//               effectively manage our sales pipeline before we started using
//               Chroma. Now, everything is organized and accessible in one place.”
//             </p>

//             <div className="flex items-center gap-3">
//               <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <h4 className="text-sm font-medium">Kristin Watson</h4>
//                 <p className="text-xs text-gray-400">
//                   Senior Marketing Manager
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card */}
//           <div className="rounded-2xl border border-purple-500 bg-white/5 backdrop-blur-md p-6 hover:border-purple-400 transition">
//             <p className="text-gray-300 text-sm mb-6">
//               “The analytics and reporting features in Chroma have been a
//               game-changer for our marketing team. We can now measure the
//               impact of our campaigns in real-time and make data-driven
//               decisions.”
//             </p>

//             <div className="flex items-center gap-3">
//               <img
//                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <h4 className="text-sm font-medium">Martin Muller</h4>
//                 <p className="text-xs text-gray-400">
//                   Web Designer at Socialbag
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card */}
//           <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-pink-500 transition">
//             <p className="text-gray-300 text-sm mb-6">
//               “The analytics and reporting features in Chroma have been a
//               game-changer for our marketing team. We can now measure the
//               impact of our campaigns in real-time and make data-driven
//               decisions.”
//             </p>

//             <div className="flex items-center gap-3">
//               <img
//                 src="https://randomuser.me/api/portraits/men/45.jpg"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <h4 className="text-sm font-medium">Martin Muller</h4>
//                 <p className="text-xs text-gray-400">
//                   Web Designer at Socialbag
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Why Choose Section */}
//         <div className="grid md:grid-cols-2 gap-12 items-center py-12">

//           <div>
//             <span className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
//               ✨ Why Choose Us
//             </span>

//             <h3 className="text-4xl font-semibold mt-6 mb-6 leading-snug">
//               help you find the best analysis for your business
//             </h3>
//           </div>

//           <p className="text-gray-400">
//             Create stunning, professional-quality websites in record time
//             with our powerful UI kit. Elevate your SAAS game today!
//           </p>
//         </div>

//         {/* Features Cards */}
//         <div className="grid md:grid-cols-3 gap-8">

//           <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500 transition">
//             <h4 className="text-lg font-medium mb-4">
//               6+ Years of Experience in Wordpress
//             </h4>
//             <p className="text-gray-400 text-sm">
//               Set up a personalized profile quickly with guided steps.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500 transition">
//             <h4 className="text-lg font-medium mb-4">
//               SEO-Optimized for Better Ranking
//             </h4>
//             <p className="text-gray-400 text-sm">
//               Streamline processes with rule-based task automation.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500 transition">
//             <h4 className="text-lg font-medium mb-4">
//               On-Time Delivery with 100% Satisfaction
//             </h4>
//             <p className="text-gray-400 text-sm">
//               Simply sharing with a single click for any file size.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"

export default function Testimonials() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="relative bg-[#070816] text-white px-6 md:px-10 lg:px-20 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-purple-600 opacity-30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-pink-500 opacity-30 blur-[140px] rounded-full"></div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
        className="relative z-10 mx-auto"
      >

        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6 text-center py-10">
          <span className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            ✨ Testimonals
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-semibold text-center mb-16"
        >
          What our client are saying
        </motion.h2>

        {/* Testimonials Cards */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >

          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`rounded-2xl border ${
                index === 1 ? "border-purple-500" : "border-white/10"
              } bg-white/5 backdrop-blur-md p-6 transition`}
            >
              {index === 0 && (
                <>
                  <p className="text-gray-300 text-sm mb-6">
                    “We were struggling to keep track of our customer data and
                    effectively manage our sales pipeline before we started using
                    Chroma. Now, everything is organized and accessible in one place.”
                  </p>
                  <div className="flex items-center gap-3">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="text-sm font-medium">Kristin Watson</h4>
                      <p className="text-xs text-gray-400">Senior Marketing Manager</p>
                    </div>
                  </div>
                </>
              )}

              {index === 1 && (
                <>
                  <p className="text-gray-300 text-sm mb-6">
                    “The analytics and reporting features in Chroma have been a
                    game-changer for our marketing team. We can now measure the
                    impact of our campaigns in real-time and make data-driven
                    decisions.”
                  </p>
                  <div className="flex items-center gap-3">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="text-sm font-medium">Martin Muller</h4>
                      <p className="text-xs text-gray-400">Web Designer at Socialbag</p>
                    </div>
                  </div>
                </>
              )}

              {index === 2 && (
                <>
                  <p className="text-gray-300 text-sm mb-6">
                    “The analytics and reporting features in Chroma have been a
                    game-changer for our marketing team. We can now measure the
                    impact of our campaigns in real-time and make data-driven
                    decisions.”
                  </p>
                  <div className="flex items-center gap-3">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="text-sm font-medium">Martin Muller</h4>
                      <p className="text-xs text-gray-400">Web Designer at Socialbag</p>
                    </div>
                  </div>
                </>
              )}

            </motion.div>
          ))}

        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 gap-12 items-center py-12"
        >

          <motion.div variants={fadeUp}>
            <span className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              ✨ Why Choose Us
            </span>

            <h3 className="text-4xl font-semibold mt-6 mb-6 leading-snug">
              help you find the best analysis for your business
            </h3>
          </motion.div>

          <motion.p variants={fadeUp} className="text-gray-400">
            Create stunning, professional-quality websites in record time
            with our powerful UI kit. Elevate your SAAS game today!
          </motion.p>

        </motion.div>

        {/* Features Cards */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-3 gap-8"
        >

          {[
            "6+ Years of Experience in Wordpress",
            "SEO-Optimized for Better Ranking",
            "On-Time Delivery with 100% Satisfaction"
          ].map((title, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500 transition"
            >
              <h4 className="text-lg font-medium mb-4">
                {title}
              </h4>
              <p className="text-gray-400 text-sm">
                {index === 0 && "Set up a personalized profile quickly with guided steps."}
                {index === 1 && "Streamline processes with rule-based task automation."}
                {index === 2 && "Simply sharing with a single click for any file size."}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </motion.div>
    </section>
  )
}
