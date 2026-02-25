import Image from "next/image"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import FAQAccordionClient from "@/components/FAQAccordionClient"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Performance Marketing Services",
  description:
    "Scale profitably with TubeHelper performance marketing services across Meta, Google, and YouTube.",
  path: "/services/performance_marketing",
  keywords: ["performance marketing services", "meta ads agency", "google ads ecommerce"],
})

const trustPoints = [
  "Data-first paid media strategy",
  "Full-funnel campaign architecture",
  "Advanced tracking & attribution setup",
  "Creative testing frameworks",
  "Profit-focused scaling models",
]

const services = [
  {
    title: "Meta & Instagram Advertising for Scalable Growth",
    image: "/instagramAds.jpg",
    description:
      "We build and manage high-converting Meta and Instagram campaigns designed to attract, nurture, and convert your ideal audience using structured TOF, MOF, and BOF systems.",
    points: [
      "Full-funnel campaign setup",
      "Creative testing frameworks",
      "Audience segmentation & scaling",
      "Retargeting & dynamic ads",
      "Conversion tracking setup",
    ],
  },
  {
    title: "Google Ads Management (Search & Shopping)",
    image: "/googleAds.jpg",
    description:
      "Capture high-intent customers searching for your products with structured bidding, keyword segmentation, and optimized product feeds.",
    points: [
      "Search campaign setup",
      "Shopping campaign management",
      "Performance Max strategy",
      "Product feed optimization",
      "Landing page alignment",
    ],
  },
  {
    title: "YouTube Advertising for Brand Awareness",
    image: "/youtubeAds.jpg",
    description:
      "We create structured video ad funnels that move users from awareness to purchase using targeting, retargeting, and creative testing.",
    points: [
      "Video funnel strategy",
      "Audience targeting",
      "Conversion campaigns",
      "Creative angle testing",
      "YouTube remarketing",
    ],
  },
]

const frameworkSteps = [
  {
    title: "Strategy & Audit",
    description: "We analyze funnels, creatives, tracking, and data gaps.",
  },
  {
    title: "Funnel Architecture",
    description: "Structured systems across Meta, Google, and YouTube.",
  },
  {
    title: "Creative Testing",
    description: "Continuous testing to find scalable winning ads.",
  },
  {
    title: "Scaling & Optimization",
    description: "Increase ad spend while maintaining strong ROAS.",
  },
]

const results = [
  "Increased ROAS",
  "Lower customer acquisition cost",
  "Higher conversion rates",
  "Increased lifetime value",
  "Sustainable scaling",
]

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
    question: "Which platform is best, Meta or Google?",
    answer:
      "It depends on your product and audience. We often combine both platforms for maximum reach and profitability.",
  },
  {
    question: "Do you provide tracking setup?",
    answer:
      "Yes. We implement advanced tracking systems including GA4, Meta Pixel, and server-side tracking.",
  },
]

export default function PerformanceMarketingPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-[#dff3ef] pb-14 pt-24 md:rounded-b-[80px] md:pb-20 md:pt-28">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Performance Marketing Services That Drive Profitable Growth
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-700 sm:text-lg lg:mx-0">
              We don&apos;t just run ads. We build scalable, data-driven acquisition systems across Meta, Google, and YouTube.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button className="inline-flex items-center cursor-pointer gap-3 rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <PhoneIncoming className="h-4 w-4" />
                </span>
                Get a Free Strategy Call
              </button>
              <button className="inline-flex items-center cursor-pointer gap-2 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition hover:opacity-90">
                See Case Studies
                <MoveUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl">
            <Image
              src="/performance_marketing.jpg"
              alt="Performance marketing hero visual"
              width={900}
              height={650}
              className="w-full rounded-[60px] md:rounded-[90px] lg:rounded-[120px] border border-white/70 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <Image
              src="/performance2.jpg"
              alt="Performance dashboard"
              width={860}
              height={620}
              className="w-full rounded-3xl border border-gray-200 object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Trusted Performance Marketing for High-Growth Brands
            </h2>
            <p className="mt-5 text-gray-700">
              We help ecommerce and D2C brands scale profitably using measurable ROI frameworks, structured testing, and full-funnel optimization.
            </p>
            <p className="mt-3 text-gray-700">
              From startups to scaling brands, we build advertising systems that generate consistent revenue growth.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700">
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white">
                Get Free Strategy Call
              </button>
              <button className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-800">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Our Performance Marketing Services
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={720}
                  height={420}
                  className="mb-5 w-full rounded-xl object-cover"
                />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-200">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Our 4-Step Performance Marketing Framework
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {frameworkSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-gray-200 p-5">
              
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {results.map((result) => (
              <div key={result} className="rounded-xl bg-gray-50  py-2 text-center text-sm  text-gray-800">
                {result}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#dff3ef] via-white to-[#eaf9f5] px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Scale Your Brand Profitably?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            If you&apos;re serious about growing your brand through structured performance marketing strategies, let&apos;s build your growth engine.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Book Your Free Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
