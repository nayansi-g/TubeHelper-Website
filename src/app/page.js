import ClientSlider from "@/components/Client_Slider"
import ContactPage from "@/components/ContactPage"
import CTASection from "@/components/CTA"
import Faq from "@/components/Faq"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import { buildMetadata } from "@/lib/seo"
import ServicesPage from "./services/page"
import Card from "@/components/Testimonals"
import WhyChooseUs from "@/components/WhyChooseUs"

export const metadata = buildMetadata({
  title: "Performance Marketing and Ecommerce Growth Agency",
  description:
    "TubeHelper helps brands scale with performance marketing, ecommerce growth systems, SEO, analytics, and automation.",
  path: "/",
  keywords: ["performance marketing services", "ecommerce growth agency", "shopify marketing agency"],
})

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TubeHelper",
    url: "https://tubehelper.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tubehelper.in/blog?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <main className="flex flex-col bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <ServicesPage />
      <WhyChooseUs />
      <Features />
      <Card />
      <Faq />
      <ClientSlider />
      <ContactPage />
      <CTASection />
    </main>
  )
}
