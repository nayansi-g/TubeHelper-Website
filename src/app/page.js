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

export default function Home() {
  return (
    <main className="flex flex-col bg-black">
      <Hero />
      <SecondGrid />
      <Testimonials />
      <Features />
      <Pricing />
      <Faq />
      <ClientSlider />
      <ContactPage />
      <CTASection />
    </main>
  )
}
