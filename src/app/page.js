"use client"

import ClientSlider from "@/components/Client_Slider"
import ContactPage from "@/components/ContactPage"
import CTASection from "@/components/CTA"
import Faq from "@/components/Faq"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"
import SecondGrid from "@/components/SecondGrid"
import Testimonials from "@/components/Testimonals"
import { Contact } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Home() {
  return (
 <div className="flex flex-col bg-black">
 <Hero />
 <SecondGrid />
 <Testimonials />
 <Features />
 <Pricing />
 <Faq />
 <ClientSlider />
<ContactPage />
 <CTASection />
 </div>
  )
}
