"use client"

import CTASection from "@/components/CTA"
import Faq from "@/components/Faq"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"
import SecondGrid from "@/components/SecondGrid"
import Testimonials from "@/components/Testimonals"
import { FaWhatsapp } from "react-icons/fa"

export default function Home() {
  return (
 <div className="flex flex-col bg-[#070816] ">
 <Hero />
 <SecondGrid />
 <Testimonials />
 <Features />
 <Pricing />
 <Faq />
 <CTASection />
 </div>
  )
}
