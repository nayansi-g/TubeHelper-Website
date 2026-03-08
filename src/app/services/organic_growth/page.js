import Image from "next/image"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import FAQAccordionClient from "@/components/FAQAccordionClient"
import { buildMetadata } from "@/lib/seo"
import { FaWhatsapp } from "react-icons/fa"

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
  "Higher search rankings",
  "Increased organic traffic",
  "Lower customer acquisition cost (CAC)",
  "Stronger brand authority",
  "Consistent inbound leads",
  "Long-term revenue growth",
]

const audience = [
  "Ecommerce brands",
  "D2C businesses",
  "Service-based companies",
  "SaaS products",
  "Founders building long-term brand equity",
  "Businesses looking to reduce ad dependency",
]

const whyChooseUs = [
 { title:"Data-Driven Keyword Strategy",
  desc:"We identify search opportunities based on intent and revenue potential."},
  { title:"Conversion-Focused Content",
   desc:"Our content is built to attract traffic and drive meaningful actions."},
 { title: "Technical SEO Expertise",
   desc:"Strong technical foundations support sustainable rankings."},
 { title: "Transparent Reporting",
   desc:"Clear visibility into rankings, traffic, and performance."},
 {  title:"Long-Term Growth Systems",
   desc:"We focus on building authority that compounds over time."}
]

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
"SEO is a long-term strategy. Initial improvements may appear within a few months, while meaningful growth typically occurs over 4–6 months depending on competition and site authority."  },
  {
    question: "Is content marketing necessary for SEO?",
    answer:
"Yes. High-quality content helps search engines understand your expertise and improves rankings for important keywords."  },
  {
    question: "Do you guarantee rankings?",
    answer:
"No credible SEO provider guarantees rankings. Our focus is building strong SEO foundations that improve visibility and long-term performance."  },
  {
    question: "Can SEO reduce ad spend?",
    answer:
"Yes. Strong organic visibility can reduce reliance on paid ads and lower overall customer acquisition costs."  },
]

export default function OrganicGrowthPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-[#FFB180]  pb-14 pt-32 md:pb-20 rounded-b-[50px] md:rounded-b-[80px]">
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
             Organic Growth Systems That Build Long-Term Traffic & Revenue
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-700 sm:text-lg lg:mx-0">
We help ecommerce and D2C brands grow sustainably through SEO and content systems that attract high-intent traffic and convert it into revenue.            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
                                          href="https://wa.me/919897165137"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex w-full items-center font-medium justify-center gap-2 rounded-full shadow-md border border-gray-200 bg-white px-6 py-3 text-sm backdrop-blur-md transition hover:bg-black hover:text-white sm:w-auto sm:text-base"
                                        >
                                          <FaWhatsapp className="text-2xl" />
                                          Chat Now
                                        </a>
                          
                                        <a
                                          href="tel:+919897165137"
                                          className="flex w-full items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-lg transition hover:opacity-90 sm:w-auto sm:text-base"
                                        >
                                          Book Your Free Strategy Call
                                          <MoveUpRight className="h-4 w-4" />
                                        </a>
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
            Paid ads generate traffic only while you’re spending.
          </p>
          <p className="mt-3 text-gray-700">
Organic growth builds long-term digital assets that drive consistent traffic, leads, and sales.          </p>
          <p className="mt-6 text-gray-700">
           Our SEO and content systems are designed to:

          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 px-4 py-3">Increase search visibility</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Rank for high-intent keywords</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Build authority in your niche</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Convert organic traffic into customers</div>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-900">
            We focus on sustainable, compounding growth — not short-term spikes.
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
                SEO Systems That Increase Rankings & Revenue
              </h3>
              <p className="mt-5 text-gray-300">
Our SEO strategies focus on ranking for keywords that bring qualified traffic and real revenue.            </p>
              <p className="mt-3 text-gray-300">
We combine technical SEO, search intent research, and on-page optimization to improve visibility and capture demand from search engines.              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {seoPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-200">
Our focus is simple: rank for keywords that convert — not just generate traffic.
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
                Content That Attracts, Educates & Converts
              </h3>
              <p className="mt-5 text-gray-300">
Content is the foundation of long-term organic growth.
              </p>
              <p className="mt-3 text-gray-300">
We create SEO-optimized content that ranks in search engines, builds authority, and supports your entire marketing funnel.
              </p>
              <p className="mt-3 text-gray-300">
From blog strategies to landing pages, our content aligns with business goals and customer intent.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {contentPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-200">
Our content strategy combines search intent, conversion psychology, and brand positioning.
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
Unlike paid ads, organic growth compounds over time.
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
            Why Brands Trust TubeHelper for Organic Growth
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-gray-100">
                {item.title}
                <p className="text-gray-500"> {item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-gray-200">We don&apos;t chase algorithms.
We build organic growth systems that last.</p>
          
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
If you want consistent traffic, stronger authority, and long-term revenue from search, it’s time to invest in SEO and content systems.
          </p>
           <a  href="tel:+919897165137"><button className="mt-8 cursor-pointer inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Get Your Free SEO Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </button></a>
        </div>
      </section>
    </main>
  )
}
