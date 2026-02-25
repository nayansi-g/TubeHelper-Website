import Image from "next/image"
import { MoveUpRight } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "About Us - Data-Driven Growth Partners",
  description:
    "Learn how TubeHelper helps ecommerce and growth-focused brands scale through performance marketing, SEO, analytics, and CRO.",
  path: "/about_us",
  keywords: ["about TubeHelper", "digital growth agency", "data-driven marketing team"],
})

const missionPillars = ["Measurable", "Profitable", "Sustainable", "System-driven"]

const specializations = [
  "Paid Advertising (Meta, Google & YouTube Ads)",
  "Ecommerce Growth & CRO",
  "SEO & Content Marketing",
  "GA4 Tracking & Marketing Automation",
  "Brand Awareness & Audience Expansion",
]

const differentPoints = [
  "Accurate tracking",
  "Full-funnel optimization",
  "Revenue attribution",
  "Conversion rate improvement",
  "Long-term scalability",
]

const integratedSystems = [
  "Performance marketing",
  "Organic growth",
  "Analytics infrastructure",
  "Automation workflows",
]

const coreValues = [
  {
    title: "Data Over Assumptions",
    text: "We rely on analytics, not opinions.",
  },
  {
    title: "Profit Over Vanity Metrics",
    text: "Impressions don’t matter without revenue.",
  },
  {
    title: "Transparency Always",
    text: "Clear reporting, clear communication.",
  },
  {
    title: "Long-Term Thinking",
    text: "We build growth engines, not short-term spikes.",
  },
  {
    title: "Continuous Optimization",
    text: "Marketing evolves, so do we.",
  },
]

const frameworkSteps = [
  {
    title: "Step 1: Audit & Strategy",
    description: "We analyze your current marketing, funnels, tracking, and positioning.",
  },
  {
    title: "Step 2: Infrastructure Setup",
    description: "We implement proper tracking, dashboards, and automation.",
  },
  {
    title: "Step 3: Campaign & Funnel Optimization",
    description: "We optimize paid ads, CRO, and organic visibility.",
  },
  {
    title: "Step 4: Scale & Refine",
    description: "We continuously test, analyze, and scale profitable strategies.",
  },
]

const whoWeWorkWith = [
  "Ecommerce & Shopify brands",
  "D2C businesses",
  "Scaling startups",
  "Service-based companies",
  "Founders investing in digital growth",
]

const impactMetrics = [
  "Return on ad spend (ROAS)",
  "Conversion rates",
  "Customer acquisition cost (CAC)",
  "Lifetime value (LTV)",
  "Organic traffic growth",
  "Funnel efficiency",
]

const partnershipBenefits = [
  "A dedicated growth team",
  "Cross-channel expertise",
  "Data-backed decision making",
  "Transparent reporting",
  "Scalable marketing systems",
]

function TagGrid({ items }) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
          {item}
        </div>
      ))}
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-[#FFE0F0] px-4 pb-12 pt-28 text-center sm:px-6 md:rounded-b-[80px] md:pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            About Us – Data-Driven Growth Partners for Scaling Brands
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            We help ecommerce brands and growth-focused businesses scale profitably through performance marketing, SEO, analytics, and full-funnel optimization.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Book a Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <div className="space-y-8">
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">Our Mission</h2>
                <p className="mt-4 text-gray-700">
                  At TubeHelper, our mission is simple: to build scalable, data-driven marketing systems that generate predictable revenue and long-term brand growth.
                </p>
                <p className="mt-3 text-gray-700">
                  We started with a vision to eliminate guesswork in digital marketing. Too many businesses rely on disconnected strategies, incomplete data, and vanity metrics.
                </p>
                <p className="mt-3 text-gray-700">We believe growth should be:</p>
                <TagGrid items={missionPillars} />
                <p className="mt-5 text-gray-700">
                  That’s why we combine performance marketing, ecommerce optimization, SEO, automation, and analytics into one unified growth strategy.
                </p>
              </div>
              <div>
                <Image
                  src="/About1.jpg"
                  alt="Marketing team discussing performance dashboards"
                  width={900}
                  height={620}
                  className="w-full rounded-2xl border border-gray-200 object-cover shadow-lg"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <Image
                  src="/About2.jpg"
                  alt="Growth strategy planning session"
                  width={900}
                  height={620}
                  className="w-full rounded-2xl border border-gray-200 object-cover shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-semibold md:text-3xl">A Full-Funnel Digital Growth Agency</h2>
                <p className="mt-4 text-gray-700">
                  We are a performance-focused digital marketing agency specializing in:
                </p>
                <TagGrid items={specializations} />
                <p className="mt-5 text-gray-700">
                  Unlike traditional agencies, we focus on the entire customer journey from first impression to repeat purchase.
                </p>
                <p className="mt-2 text-gray-700 font-medium">We don’t chase clicks. We build revenue systems.</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">Strategy First. Data Always.</h2>
                <p className="mt-4 text-gray-700">Many agencies focus only on traffic. We focus on:</p>
                <TagGrid items={differentPoints} />
                <p className="mt-5 text-gray-700">
                  Every decision we make is backed by data, performance insights, and strategic analysis.
                </p>
                <p className="mt-3 text-gray-700">We integrate:</p>
                <TagGrid items={integratedSystems} />
                <p className="mt-5 text-gray-700">
                  So your business grows as a system, not in isolated campaigns.
                </p>
              </div>
              <div>
                <Image
                  src="/About3.jpg"
                  alt="Marketing dashboard showing revenue and conversion trends"
                  width={900}
                  height={620}
                  className="w-full rounded-2xl border border-gray-200 object-cover shadow-lg"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">The Principles That Drive Our Work</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value, index) => (
                <div key={value.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-500">0{index + 1}</p>
                  <h3 className="mt-1 font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{value.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Our 4-Step Growth Framework</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {frameworkSteps.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-500">0{index + 1}</p>
                  <h3 className="mt-1 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-gray-700">This structured system ensures sustainable and measurable growth.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Growth-Focused Brands Ready to Scale</h2>
            <TagGrid items={whoWeWorkWith} />
            <p className="mt-5 text-gray-700">Our clients are serious about profitability, not just visibility.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Focused on Measurable Business Impact</h2>
            <p className="mt-4 text-gray-700">Our work aims to improve:</p>
            <TagGrid items={impactMetrics} />
            <p className="mt-5 text-gray-700">We measure success by business outcomes, not activity.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">A Strategic Growth Partner, Not Just an Agency</h2>
            <p className="mt-4 text-gray-700">When you work with us, you gain:</p>
            <TagGrid items={partnershipBenefits} />
            <p className="mt-5 text-gray-700">
              We become an extension of your team, aligned with your revenue goals.
            </p>
          </section>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#FFE0F0] via-white to-[#FFE0F0] px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Ready to Build a Predictable Growth System?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          If you&apos;re ready to scale through performance marketing, SEO, ecommerce optimization, and automation, let&apos;s build your growth engine.
        </p>
        <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
          Book Your Free Strategy Call
          <MoveUpRight className="h-4 w-4" />
        </button>
      </section>
    </main>
  )
}
