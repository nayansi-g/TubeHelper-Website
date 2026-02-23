"use client"

import { AnimatePresence, motion } from "framer-motion"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

import Image from "next/image";
import { useState } from "react";
import {
  TrendingUp,
  Target,
  ShoppingCart,
  Users,
  DollarSign,
  BarChart3,
  CheckCircle,
  Rocket,
  LineChart,
} from "lucide-react";

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
    question: "What is ecommerce growth optimization?",
    answer:"It is a structured process of improving store performance, conversion rate, and funnel efficiency to increase revenue and profitability."
  },
  {
    question: "How long does CRO take to show results?",
    answer:"Initial test data appears within 2–4 weeks. Significant improvements typically occur within 60–90 days."
  },
  {
    question: "Do you only work with Shopify?",
    answer:"Our primary expertise is Shopify, but we can support other ecommerce platforms as well."
  },
  {
    question: "Is funnel optimization different from paid ads?",
    answer:"Yes. Paid ads bring traffic. Funnel optimization converts that traffic efficiently."
  },
];


const steps = [
    {
      title: "Audit & Data Analysis",
      desc: "We identify bottlenecks in your store performance and customer journey.",
    },
    {
      title: "Conversion Optimization",
      desc: "We optimize product pages, checkout, and messaging for maximum impact.",
    },
    {
      title: "Funnel Structuring",
      desc: "We build a scalable funnel aligned with acquisition and retention.",
    },
    {
      title: "Testing & Scaling",
      desc: "We continuously test and refine to maximize revenue growth.",
    },
  ];

export default function OrganicGrowth() {
     const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" bg-white  text-gray-900 overflow-hidden">

      <section className="relative min-h-screen flex items-center justify-center bg-[#A1C2F8] rounded-b-[60px] md:rounded-b-[90px] lg:rounded-b-[120px]  text-gray-900 overflow-hidden ">
     
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
                Organic Growth That Drive Long-Term Traffic & Revenue
               </motion.h1>
     
               {/* Subtext */}
               <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.4 }}
                 className="mt-4 text-gray-700 max-w-xl mx-auto lg:mx-0"
               >
We help brands grow sustainably through strategic SEO and high-converting content marketing that attracts, ranks, and converts.</motion.p>
     
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
                   className="flex items-center px-2 py-1 rounded-full border border-white/60 bg-white/50 backdrop-blur-md hover:bg-white/20 transition"
                 >
                   <motion.div
                     animate={{ rotate: [0, -10, 10, 0] }}
                     transition={{ repeat: Infinity, duration: 2 }}
                     className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-white/50 border border-white/60"
                   >
                     <PhoneIncoming className="text-black w-5 h-5" />
                   </motion.div>
                   <div className="px-3 text-black text-sm">
                     Get a Free SEO Audit
                   </div>
                 </motion.button>
     
                 {/* Gradient Button */}
                 <motion.button
                   whileHover={{ scale: 1.08 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-6 py-3 rounded-full flex items-center text-white gap-2 bg-black cursor-pointer shadow-lg"
                 >
                   Book a Strategy Call
                   <MoveUpRight className="w-4 h-4" />
                 </motion.button>
               </motion.div>
     
             </div>
     
             {/* ================= RIGHT IMAGE ================= */}
             <motion.div
               initial={{ opacity: 0, x: 80 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="relative  flex justify-center px-2 py-8 md:py-4 lg:py-0  overflow-hidden lg:justify-end"
             >
               <img
                 src="/e-commerce1.jpg"
                 alt="Hero"
                 className="w-full max-w-md sm:max-w-lg opacity-80 rounded-tl-[100px] md:rounded-tl-[150px] lg:rounded-tl-[200px] border border-gray-300 rounded-br-[100px] md:rounded-br-[150px] lg:rounded-br-[200px]  lg:max-w-xl h-auto object-contain rounded-xl"
               />
             </motion.div>
     
           </div>
         </section>

      <section className="w-full  py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl max-w-2xl mx-auto text-gray-900 font-bold leading-tight mb-2">
            Traffic That Doesn’t Depend on {""}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ads
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-md max-w-4xl mx-auto leading-relaxed mb-2">
            We help ecommerce and D2C brands scale profitably using
            performance-driven paid media strategies. Our approach focuses on
            measurable ROI, structured testing, and full-funnel optimization —
            not vanity metrics.
          </p>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-10">
            From startups to scaling brands, we build advertising systems that
            generate consistent revenue growth.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r text-white from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition">
              Get Free Strategy Call
            </button>
            <button className="px-6 py-3 border border-black/20 text-gray-800  rounded-lg hover:bg-black/10 transition">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="w-full bg-white  px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-28">

        {/* ============================= */}
        {/* 5️⃣ RESULTS SECTION */}
        {/* ============================= */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Ecommerce Growth Looks Like
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              We focus on profitability — not just revenue spikes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
              <TrendingUp className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Higher Conversion Rate
              </h3>
              <p className="text-gray-600">
                Turn more visitors into paying customers with data-backed CRO strategies.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
              <DollarSign className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Increased AOV & LTV
              </h3>
              <p className="text-gray-600">
                Boost average order value and customer lifetime value through
                structured upsell and retention systems.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
              <ShoppingCart className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Lower Cart Abandonment
              </h3>
              <p className="text-gray-600">
                Optimize checkout flow and reduce drop-offs with full-funnel analysis.
              </p>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* 6️⃣ WHO THIS IS FOR */}
        {/* ============================= */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Work With
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-300 hover:bg-gray-100 transition">
              <Rocket className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Shopify Brands
              </h3>
              <p className="text-gray-600">
                Ecommerce stores built on Shopify looking to scale profitably.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-300 hover:bg-gray-100 transition">
              <Users className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                D2C Ecommerce Businesses
              </h3>
              <p className="text-gray-600">
                Direct-to-consumer brands ready to optimize performance marketing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-300 hover:bg-gray-100 transition">
              <BarChart3 className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                $20K–$500K/Month Brands
              </h3>
              <p className="text-gray-600">
                Scaling brands preparing their systems before aggressive growth.
              </p>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* 7️⃣ WHY CHOOSE US */}
        {/* ============================= */}
        <div className="pb-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
              Why Brands Choose Our Ecommerce Growth Team
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              We don’t guess. We test, optimize, and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition">
              <Target className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Data-First CRO Strategy
              </h3>
              <p className="text-gray-600">
                Every decision is backed by analytics and structured testing.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition">
              <LineChart className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Full-Funnel Optimization
              </h3>
              <p className="text-gray-600">
                We optimize awareness, consideration, and conversion stages together.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition">
              <CheckCircle className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Transparent Tracking
              </h3>
              <p className="text-gray-600">
                Clear reporting, measurable KPIs, and profit-focused experimentation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

   <section className="w-full bg-black rounded-[60px] md:rounded-[90px] lg:rounded-[120px] text-white py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

         <div className="mb-6 text-center">
        <span className="px-4 py-1 text-sm rounded-full bg-purple-50 text-purple-600 border border-purple-200">
          ✨ Growth Services
        </span>
      </div>

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Ecommerce Growth Services
          </h2>
        </div>

        {/* ================= ROW 1 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* IMAGE LEFT */}
          <div className="relative">
            <Image
              src="/e-commerceGrowth1.jpg"
              alt="Shopify ecommerce backend analytics dashboard"
              width={700}
              height={500}
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>

          {/* CONTENT RIGHT */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              Shopify Growth Strategy
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Shopify Growth Strategy & Revenue Optimization
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              We create data-backed growth strategies tailored for Shopify brands looking to scale profitably. Our approach aligns acquisition, retention, and optimization into a single growth roadmap.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              We analyze your store performance, customer journey, and backend data to identify revenue leaks and scaling opportunities.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>• Store performance audit</li>
              <li>• Revenue opportunity mapping</li>
              <li>• Customer journey analysis</li>
              <li>• Offer & pricing optimization</li>
              <li>• Retention & LTV strategy</li>
              <li>• Analytics & tracking review</li>
            </ul>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* CONTENT LEFT */}
          <div className="order-2 md:order-1">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              Conversion Rate Optimization (CRO)
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Conversion Rate Optimization (CRO) for Ecommerce Stores
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Increasing traffic without improving conversion rates leads to wasted ad spend. Our CRO strategies focus on improving user experience, trust signals, messaging clarity, and checkout flow.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              We use structured A/B testing, behavioral analysis, and data-driven experimentation to increase revenue without increasing ad spend.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>• A/B testing strategy</li>
              <li>• Heatmap & user behavior analysis</li>
              <li>• Landing page optimization</li>
              <li>• Product page optimization</li>
              <li>• Checkout flow improvement</li>
              <li>• Trust signal & social proof optimization</li>
            </ul>
          </div>

          {/* IMAGE RIGHT */}
          <div className="order-1 md:order-2 relative">
            <Image
              src="/e-commerceGrowth2.jpg"
              alt="Ecommerce A/B testing dashboard"
              width={700}
              height={500}
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>

        {/* ================= ROW 3 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE LEFT */}
          <div className="relative">
            <Image
              src="/e-commerceGrowth3.jpg"
              alt="Ecommerce sales funnel diagram"
              width={700}
              height={500}
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>

          {/* CONTENT RIGHT */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              Funnel Optimization
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Full-Funnel Optimization for Higher Profit Margins
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              A profitable ecommerce brand is built on a structured funnel — not isolated campaigns. We optimize every stage of the customer journey from awareness to repeat purchase.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Our funnel strategies reduce drop-offs, improve engagement, and increase lifetime value.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>• Funnel mapping & segmentation</li>
              <li>• Upsell & cross-sell optimization</li>
              <li>• Post-purchase flows</li>
              <li>• Email & SMS lifecycle integration</li>
              <li>• Retargeting alignment</li>
              <li>• Subscription & repeat purchase strategy</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

     <section className="relative w-full bg-white text-gray-900 pt-20  px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                 <div className="text-start mb-5">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our 4-Step Growth Process
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            A structured system designed to improve profitability at every stage.
          </p>
        </div>
     <div className=" grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 relative">

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-2 md:p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white font-semibold mb-3 group-hover:scale-110 transition">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-normal">
                {step.desc}
              </p>
            </div>
          ))}

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
                  src="/e-commerceProcess.jpg"
                  alt="Marketing Team Main"
                  width={380}
                  height={480}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
    
            </div>
          </div>
        </section>

    <section className="w-full bg-white py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
           <div className="mb-6 text-center">
        <span className="px-4 py-1 text-sm rounded-full bg-purple-50 text-purple-600 border border-purple-200">
          ✨ FAQs
        </span>
      </div>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
         Ecommerce Growth FAQs
          
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

     <section className="relative w-full py-20 md:py-16 lg:py-20 px-6 md:px-16 overflow-hidden">

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
          className=" text-2xl md:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-4"
        >
         Ready to Unlock Higher Revenue Without Increasing Ad Spend?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-800 text-md md:text-lg max-w-3xl mx-auto text-center leading-relaxed mb-10"
        >
         If you're driving traffic but not maximizing revenue, it's time to optimize your growth engine.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-8 py-4 bg-[#A1C2F8] text-gray-900 font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
        >
          Book Your Ecommerce Growth Audit
        </motion.button>
      </div>
    </section>
    </div>
  )
}
