"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StackCard from "./StackGuard";

export default function WhoWeAreSection() {
  return (
    <section className="bg-[#f4f6f5] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">

            

        
        {/* Top Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Image */}
          <div className="relative flex justify-center lg:justify-start">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
            <StackCard />
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="flex items-center justify-between  ">
              <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl tracking-tight">
            WHO WE ARE?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-purple-500" />
         
        </div>

             <a href="https://wa.me/919897165137"
                                           target="_blank"
                                           rel="noopener noreferrer"> <button className="rounded-full border border-purple-600 cursor-pointer px-5 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-600 hover:text-white">
                Book a meeting →
              </button></a>
            </div>

            <div className="mt-6 space-y-5  text-gray-600 leading-relaxed">
  <p className="">
    TubeHelper is a performance-driven revenue systems partner specializing in
    helping ecommerce and D2C brands scale profitably. We build structured,
    data-backed marketing systems that replace guesswork with predictable
    growth.
  </p>

  <p>
    We focus on aligning paid acquisition, conversion optimization, retention
    strategy, and analytics into one unified growth infrastructure designed for
    long-term scalability and strong unit economics.
  </p>

  <p>
    Our approach goes beyond running ads. We analyze tracking, funnels, customer
    behavior, and profitability gaps—then implement scalable systems that
    increase revenue, protect margins, and support sustainable business growth.
  </p>
</div>
          </motion.div>
        </div>

        {/* Partners Section */}
        <div className="mt-24 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Our Partners
          </p>

          <h3 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Certified Partner With
          </h3>

          <div className="mx-auto mt-4 h-1 w-16 bg-purple-600" />

          {/* Logos */}
          <div className="mt-12 grid grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              "/Shopify.png",
              "/googleAnalytics.png",
              "/googlepartner.jpg",
              "/klaviyo.png",
              "/MetaLogo.png",
              "/microsoft_certified.png",
            ].map((logo, index) => (
              <div key={index} className="flex border border-gray-300 bg-white h-[78px] py-1+ justify-center">
                <Image
                  src={logo}
                  alt="Partner Logo"
                  width={120}
                  height={60}
                  className="object-contain  hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
