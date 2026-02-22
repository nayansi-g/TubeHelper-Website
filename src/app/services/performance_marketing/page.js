"use client"

import { AnimatePresence, motion } from "framer-motion"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

import Image from "next/image";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}


const faqs = [
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing is a digital advertising strategy where brands pay for measurable results such as clicks, conversions, or sales.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most campaigns begin generating actionable data within 2–4 weeks. Scalable results typically occur within 60–90 days.",
  },
  {
    question: "Which platform is best — Meta or Google?",
    answer:
      "It depends on your product and audience. We often combine both platforms for maximum reach and profitability.",
  },
  {
    question: "Do you provide tracking setup?",
    answer:
      "Yes. We implement advanced tracking systems including GA4, Meta Pixel, and server-side tracking.",
  },
];

export default function Performance() {
     const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" bg-white overflow-hidden">

      <section className="relative min-h-screen flex items-center justify-center bg-[#1B4E4E] rounded-b-[90px]  text-white overflow-hidden ">
     
           {/* Container */}
           <div className="max-w-7xl mx-auto w-full pt-28 grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-12 gap-12 items-center">
     
             {/* ================= LEFT CONTENT ================= */}
             <div className="relative flex flex-col justify-center items-start z-10 text-center lg:text-left ">
     
               {/* Heading */}
               <motion.h1
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.9, delay: 0.2 }}
                 className="text-3xl md:text-4xl lg:text-5xl  lg:mt-0 max-w-2xl font-semibold leading-tight mx-auto lg:mx-0"
               >
                Performance Marketing Services That Drive Profitable Growth
               </motion.h1>
     
               {/* Subtext */}
               <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.4 }}
                 className="mt-4 text-gray-300 max-w-xl mx-auto lg:mx-0"
               >
                We don’t just run ads — we build scalable, data-driven acquisition systems across Meta, Google, and YouTube.
               </motion.p>
     
               {/* Buttons */}
               <motion.div
                 initial={{ y: 40, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 className="mt-10 flex flex-wrap gap-6 justify-center md:justify-center items-center  lg:justify-start"
               >
                 {/* Chat Button */}
                 <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="flex items-center px-2 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
                 >
                   <motion.div
                     animate={{ rotate: [0, -10, 10, 0] }}
                     transition={{ repeat: Infinity, duration: 2 }}
                     className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-white/10 border border-white/20"
                   >
                     <PhoneIncoming className="text-white w-5 h-5" />
                   </motion.div>
                   <div className="px-3 text-sm">
                     Get a Free Strategy Call
                   </div>
                 </motion.button>
     
                 {/* Gradient Button */}
                 <motion.button
                   whileHover={{ scale: 1.08 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-6 py-3 rounded-full flex items-center gap-2 bg-black cursor-pointer shadow-lg"
                 >
                   See Case Studies
                   <MoveUpRight className="w-4 h-4" />
                 </motion.button>
               </motion.div>
     
             </div>
     
             {/* ================= RIGHT IMAGE ================= */}
             <motion.div
               initial={{ opacity: 0, x: 80 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="relative  flex justify-center px-2 pb-10 md:pb-2 lg:pb-0 overflow-hidden lg:justify-end"
             >
               <img
                 src="/performance_marketing.jpg"
                 alt="Hero"
                 className="w-full max-w-md sm:max-w-lg rounded-[20px] md:rounded-l-[100px]  border-2 border-gray-600 opacity-70  lg:max-w-xl h-auto object-contain rounded-xl"
               />
             </motion.div>
     
           </div>
         </section>

      <section className="w-full  py-20 px-6 md:px-10  lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full"></div>

          <Image
            src="/performance2.jpg"  // Replace with your image
            alt="Performance Marketing Dashboard"
            width={600}
            height={500}
            className="relative rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1 text-sm font-medium bg-black/80 border border-white/20 rounded-full text-gray-300">
            Performance Marketing Experts
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl text-gray-900 font-bold leading-tight mb-2">
            Trusted Performance Marketing Agency for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              High-Growth Brands
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-md leading-relaxed mb-2">
            We help ecommerce and D2C brands scale profitably using
            performance-driven paid media strategies. Our approach focuses on
            measurable ROI, structured testing, and full-funnel optimization —
            not vanity metrics.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            From startups to scaling brands, we build advertising systems that
            generate consistent revenue growth.
          </p>

          {/* Trust Points */}
          <div className="grid sm:grid-cols-2 gap-4 mb-7">
            {[
              "Data-first paid media strategy",
              "Full-funnel campaign architecture",
              "Advanced tracking & attribution setup",
              "Creative testing frameworks",
              "Profit-focused scaling models",
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-black/5 border border-black/10 p-4 rounded-xl hover:bg-black/10 transition"
              >
                <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                <p className="text-gray-600 text-sm">{point}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-gradient-to-r text-white from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition">
              Get Free Strategy Call
            </button>
            <button className="px-6 py-3 border border-black/20 text-gray-800  rounded-lg hover:bg-black/10 transition">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="w-full bg-black rounded-[60px] md:rounded-[100px] lg:rounded-[120px] text-white py-24 px-6 md:px-10  lg:px-16">

      {/* ================= SERVICES SECTION ================= */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent md:text-4xl font-bold text-center mb-16">
          Our Performance Marketing Services
        </h1>

        {/* 5 Box Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* ===== BOX 1 – META ADS ===== */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:border-purple-500 transition duration-300">
            <Image
              src="/instagramAds.jpg"
              alt="Meta & Instagram Ads"
              width={600}
              height={350}
              className="rounded-xl mb-6"
            />

            <h2 className="text-2xl font-semibold mb-3 text-purple-400">
              Meta & Instagram Advertising for Scalable Growth
            </h2>

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              We build and manage high-converting Meta and Instagram campaigns designed
              to attract, nurture, and convert your ideal audience using structured
              TOF, MOF, and BOF systems.
            </p>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Full-funnel campaign setup</li>
              <li>• Creative testing frameworks</li>
              <li>• Audience segmentation & scaling</li>
              <li>• Retargeting & dynamic ads</li>
              <li>• Conversion tracking setup</li>
            </ul>
          </div>

          {/* ===== BOX 2 – GOOGLE ADS ===== */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:border-pink-500 transition duration-300">
            <Image
              src="/googleAds.jpg"
              alt="Google Ads Management"
              width={600}
              height={350}
              className="rounded-xl mb-6"
            />

            <h2 className="text-2xl font-semibold mb-3 text-pink-400">
              Google Ads Management (Search & Shopping)
            </h2>

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Capture high-intent customers searching for your products with
              structured bidding, keyword segmentation, and optimized product feeds.
            </p>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Search campaign setup</li>
              <li>• Shopping campaign management</li>
              <li>• Performance Max strategy</li>
              <li>• Product feed optimization</li>
              <li>• Landing page alignment</li>
            </ul>
          </div>

          {/* ===== BOX 3 – YOUTUBE ADS ===== */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:border-red-500 transition duration-300">
            <Image
              src="/youtubeAds.jpg"
              alt="YouTube Advertising"
              width={600}
              height={350}
              className="rounded-xl mb-6"
            />

            <h2 className="text-2xl font-semibold mb-3 text-red-400">
              YouTube Advertising for Brand Awareness
            </h2>

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              We create structured video ad funnels that move users from awareness
              to purchase using targeting, retargeting, and creative testing.
            </p>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Video funnel strategy</li>
              <li>• Audience targeting</li>
              <li>• Conversion campaigns</li>
              <li>• Creative angle testing</li>
              <li>• YouTube remarketing</li>
            </ul>
          </div>

          {/* ===== BOX 4 – OUR PROCESS ===== */}
          <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-white/10 rounded-2xl p-6 col-span-1 md:col-span-2">
           <Image
              src="/marketing.jpg"
              alt="Marketing Results"
              width={600}
              height={350}
              className="rounded-xl mb-6"
            />
            <h2 className="text-2xl font-semibold mb-6">
              Our 4-Step Performance Marketing Framework
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-sm">
              <div>
                <h3 className="font-semibold text-white">1. Strategy & Audit</h3>
                <p>We analyze funnels, creatives, tracking & data gaps.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">2. Funnel Architecture</h3>
                <p>Structured systems across Meta, Google & YouTube.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">3. Creative Testing</h3>
                <p>Continuous testing to find scalable winning ads.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">4. Scaling & Optimization</h3>
                <p>Increase ad spend while maintaining strong ROAS.</p>
              </div>
            </div>
          </div>

          {/* ===== BOX 5 – RESULTS ===== */}
          <div className="bg-white/5 border border-green-500/30 rounded-2xl p-6 backdrop-blur-lg">
            <Image
              src="/trending.jpg"
              alt="Marketing Results"
              width={600}
              height={350}
              className="rounded-xl mb-6"
            />

            <h2 className="text-2xl font-semibold mb-4 text-green-400">
              Results That Speak for Themselves
            </h2>

            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• Increased ROAS</li>
              <li>• Lower customer acquisition cost</li>
              <li>• Higher conversion rates</li>
              <li>• Increased lifetime value</li>
              <li>• Sustainable scaling</li>
            </ul>

            <p className="text-gray-400 text-sm">
              We create predictable, profitable growth — not short-term spikes.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section className="relative w-full bg-white text-gray-900 py-24 px-6 md:px-10  lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Why Brands Choose Our{" "}
            <span className="bg-gradient-to-r from-[#1B4E4E] to-indigo-600 bg-clip-text text-transparent">
              Performance Marketing Agency
            </span>
          </h2>

          <div className="space-y-4 text-lg text-gray-600 mb-10">
            <p>✔ Transparent reporting & dashboards</p>
            <p>✔ Clear ROI-driven strategy</p>
            <p>✔ Experienced paid media specialists</p>
            <p>✔ Advanced tracking implementation</p>
            <p>✔ Profit-first mindset</p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <p className="text-xl font-semibold text-gray-800">
              We don’t scale spend.
            </p>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              We scale profitability.
            </p>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE DESIGN ================= */}
        <div className="relative h-[500px] w-full flex items-center justify-center">

          {/* Background Soft Shape */}
          <div className="absolute w-[350px] h-[350px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-20"
          >
            <Image
              src="/marketing1.jpg"
              alt="Marketing Team Main"
              width={380}
              height={480}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Top Left Floating Image */}
          <div className="absolute top-6 left-6 md:-left-10 z-10">
            <Image
              src="/marketing2.jpg"
              alt="Marketing Team 2"
              width={220}
              height={260}
              className="rounded-2xl shadow-xl border-4 border-white"
            />
          </div>

          {/* Bottom Right Floating Image */}
          <div className="absolute bottom-6 right-6 md:-right-10 z-10">
            <Image
              src="/marketing3.jpg"
              alt="Marketing Team 3"
              width={220}
              height={260}
              className="rounded-2xl shadow-xl border-4 border-white"
            />
          </div>

        </div>
      </div>
    </section>

    <section className="w-full bg-white py-24 px-6 md:px-10  lg:px-16">
      <div className="max-w-4xl mx-auto">
             <div className="mb-6 text-center">
        <span className="px-4 py-1 text-sm rounded-full bg-purple-50 text-purple-600 border border-purple-200">
          ✨ FAQs
        </span>
      </div>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl  font-bold text-center text-gray-900 mb-16">
          Frequently Asked Questions 
          
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>

                <span className="text-purple-600 text-2xl cursor-pointer">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>

     <section className="relative w-full py-28 px-6 md:px-10  lg:px-16 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/CTAimg.jpg"
          alt="Entrepreneur reviewing marketing data"
          className="w-full h-full object-cover"
        />
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/15 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
        >
          Ready to Scale Your Brand{" "}
          <span className="bg-gradient-to-r from-[#1B4E4E] to-indigo-600 bg-clip-text text-transparent">
            Profitably?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-800 text-lg max-w-3xl mx-auto text-center leading-relaxed mb-10"
        >
          If you’re serious about growing your brand through structured
          performance marketing strategies, let’s build your growth engine.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-10 py-4 bg-[#1B4E4E] text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
        >
          Book Your Free Strategy Call
        </motion.button>
      </div>
    </section>
    </div>
  )
}
