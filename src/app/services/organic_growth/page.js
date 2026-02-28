import Image from "next/image"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import FAQAccordionClient from "@/components/FAQAccordionClient"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Organic Growth SEO Services",
  description:
    "Grow long-term organic traffic with SEO strategy, content marketing, and technical optimization from TubeHelper.",
  path: "/services/organic_growth",
  keywords: ["organic growth services", "ecommerce seo", "content marketing services"],
})

const seoPoints = [
  "Comprehensive SEO audit",
  "Keyword research & search intent mapping",
  "On-page SEO optimization",
  "Technical SEO improvements",
  "Internal linking strategy",
  "Competitor analysis",
  "Local SEO (if applicable)",
  "Performance tracking & reporting",
]

const contentPoints = [
  "SEO blog strategy",
  "Topic cluster & pillar page strategy",
  "Landing page content",
  "Website copy optimization",
  "Product page content",
  "Long-form authority content",
  "Content calendar planning",
]



const results = [
  "Higher search engine rankings",
  "Increased organic traffic",
  "Lower customer acquisition cost (CAC)",
  "Stronger brand authority",
  "Consistent inbound leads",
  "Long-term revenue growth",
]

const audience = [
  "Ecommerce brands",
  "Service-based businesses",
  "D2C brands",
  "SaaS companies",
  "Founders building long-term brand equity",
  "Businesses wanting to reduce ad dependency",
]

const whyChooseUs = [
  "Data-driven keyword research",
  "Conversion-focused content",
  "Technical SEO expertise",
  "Transparent reporting",
  "Long-term scalable strategies",
]

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO typically shows measurable improvements within 3–6 months depending on competition and website authority.",
  },
  {
    question: "Is content marketing necessary for SEO?",
    answer:
      "Yes. High-quality, optimized content is essential for ranking and building authority.",
  },
  {
    question: "Do you guarantee rankings?",
    answer:
      "No ethical SEO agency guarantees rankings. We focus on sustainable strategies that improve visibility and revenue.",
  },
  {
    question: "Can SEO reduce ad spend?",
    answer:
      "Yes. Strong organic traffic reduces reliance on paid advertising over time.",
  },
]

export default function OrganicGrowthPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-[#FFB180] pt-24 pb-14 md:pt-28 md:pb-20 rounded-b-[50px] md:rounded-b-[80px]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Organic Growth Services That Drive Long-Term Traffic & Revenue
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-700 sm:text-lg lg:mx-0">
              We help brands grow sustainably through strategic SEO and high-converting content marketing that attracts, ranks, and converts.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="https://wa.me/919897165137"
  target="_blank"
  rel="noopener noreferrer"><button className="inline-flex items-center cursor-pointer gap-3 rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <PhoneIncoming className="h-4 w-4" />
                </span>
                Get a Free SEO Audit
              </button></a>
              <a  href="tel:+919897165137"><button className="inline-flex items-center gap-2 cursor-pointer rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition hover:opacity-90">
                Book a Strategy Call
                <MoveUpRight className="h-4 w-4" />
              </button></a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl">
            <Image
              src="/organicHero.jpg"
              alt="Organic growth hero visual"
              width={880}
              height={640}
              className="w-full rounded-tr-[100px] rounded-bl-[100px] md:rounded-tr-[130px] md:rounded-bl-[130px] lg:rounded-tr-[150px] lg:rounded-bl-[150px] rounded-xl border border-white/60 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Traffic That Doesn&apos;t Depend on Ads
          </h2>
          <p className="mt-6 text-gray-700">
            Paid ads stop when you stop paying.
          </p>
          <p className="mt-3 text-gray-700">
            Organic growth builds long-term assets that generate consistent traffic, leads, and sales without ongoing ad spend dependency.
          </p>
          <p className="mt-6 text-gray-700">
            Our SEO and content marketing strategies are built to:
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 px-4 py-3">Increase search visibility</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Rank for high-intent keywords</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Build authority in your niche</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Convert organic traffic into revenue</div>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-900">
            We focus on sustainable digital growth, not short-term spikes.
          </p>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Our Organic Growth Services
          </h2>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Search Engine Optimization (SEO)
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                SEO Services That Increase Rankings & Revenue
              </h3>
              <p className="mt-5 text-gray-300">
                Our SEO strategies are designed to help your business rank higher on search engines like Google for high-intent keywords related to your products and services.
              </p>
              <p className="mt-3 text-gray-300">
                We combine technical SEO, on-page optimization, and strategic keyword research to drive targeted organic traffic.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {seoPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-200">
                We focus on ranking for keywords that actually convert, not just vanity traffic.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/organic1.jpg"
                alt="SEO service visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Image
                src="/organic2.jpg"
                alt="Content marketing visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Content Marketing
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Content Marketing That Attracts, Engages & Converts
              </h3>
              <p className="mt-5 text-gray-300">
                Content marketing is the foundation of sustainable organic growth.
              </p>
              <p className="mt-3 text-gray-300">
                We create high-quality, SEO-optimized content that ranks on search engines, educates your audience, builds trust & authority, supports your funnel, and drives qualified leads.
              </p>
              <p className="mt-3 text-gray-300">
                From blog strategies to high-converting landing pages, we align content with business objectives.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {contentPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-200">
                Our content is built around search intent, conversion psychology, and brand positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

   

      <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            What Organic Growth Delivers
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-700">
            Unlike paid ads, organic traffic compounds over time.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Who Benefits From Organic Growth
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 px-5 py-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Why Brands Trust Our SEO & Content Strategies
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-gray-100">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-gray-200">We don&apos;t chase algorithms. We build authority that lasts.</p>
          
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Organic Growth FAQs
          </h2>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#dbe8ff] via-white to-[#e8f0ff] px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Build Sustainable Organic Growth?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            If you want long-term traffic, authority, and consistent inbound leads, it&apos;s time to invest in SEO and content marketing.
          </p>
           <a  href="tel:+919897165137"><button className="mt-8 cursor-pointer inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Get Your Free SEO Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </button></a>
        </div>
      </section>
    </main>
  )
}
