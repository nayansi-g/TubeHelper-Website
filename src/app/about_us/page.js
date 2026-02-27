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

const missionPillars = ["Increase revenue", "Protect margins", "Improve unit economics", "Enable predictable scale"]

const specializations = [
  "Structured acquisition systems",
  "Conversion-optimized funnels",
  "Retention & LTV frameworks",
  "Accurate tracking & attribution",
  "Scalable performance models",
]

const differentPoints = [
  "Tracking accuracy",
  "Funnel clarity",
  "Unit economics alignment",
  "Retention strategy",
  "Only then do we scale",
]

const integratedSystems = [
  "Performance marketing",
  "Organic growth",
  "Analytics infrastructure",
  "Automation workflows",
]

const coreValues = [
  {
    title: "Systems Over Tactics",
    text: "Sustainable growth comes from structure, not random execution.",
  },
  {
    title: "Profit Over Vanity Metrics",
    text: "Revenue and margins matter more than impressions.",
  },
  {
    title: "Data Before Decisions",
    text: "We rely on real performance signals, not assumptions.",
  },
  {
    title: "Long-Term Thinking",
    text: "We build for stability, not short-term spikes.",
  },
  {
    title: "Continuous Optimization",
    text: "We test, refine, and scale what works.",
  },
]

const frameworkSteps = [
  {
    title: "Step 1: Diagnostic Audit",
    description: "We analyze tracking, funnels, CAC, LTV, and profitability gaps.",
  },
  {
    title: "Step 2: Infrastructure Build",
    description: "We implement tracking systems, funnel improvements, and retention layers.",
  },
  {
    title: "Step 3: Optimization & Validation",
    description: "We test, refine, and validate profitable segments.",
  },
  {
    title: "Step 4: Controlled Scaling",
    description: "We scale proven campaigns while protecting unit economics.",
  },
]

const whoWeWorkWith = [
  "Ecommerce & Shopify brands generating consistent revenue",
  "D2C brands ready to scale profitably",
  "Founders focused on long-term growth",
  "Businesses that care about margins, not just traffic",
  // "Founders investing in digital growth",
]

const impactMetrics = [
  "ROAS",
  "Conversion rate",
  "CAC",
  "LTV",
  "Retention",
  "Blended profitability",
]

const partnershipBenefits = [
  "A structured scaling roadmap",
  "Clear tracking and reporting",
  "Cross-channel expertise",
  "Revenue-focused decision making",
  "A long-term growth partner",
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
         <div className="relative mx-auto max-w-4xl">

    {/* Small Label */}
    <p className="text-sm font-medium uppercase tracking-widest text-gray-600 mb-4">
      About Us
    </p>

    {/* Main Headline */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
      Revenue System Partners for{" "}
      <span className="text-black">Scaling Ecommerce Brands</span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700 leading-relaxed">
      TubeHelper helps established ecommerce and D2C brands build predictable,
      profitable growth systems.
    </p>

    <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 leading-relaxed">
      We don’t just run ads. We build the infrastructure that allows brands
      to scale without breaking their margins.
    </p>

    {/* CTA */}
    <div className="mt-10">
      <button className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
        Book a Strategy Call
        <MoveUpRight className="h-4 w-4" />
      </button>
    </div>

  </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <div className="space-y-8">
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">OUR MISSION</h2>
                <p className="mt-4 text-gray-700">
                  Our mission is simple: Replace guesswork with structured, system-driven growth.</p>
                <p className="mt-3 text-gray-700">
Too many brands scale revenue but lose control of profitability. Rising CAC, weak tracking, poor retention, and disconnected strategies create unstable growth.                   </p>
                <p className="mt-3 text-gray-700">We build marketing systems designed to:</p>
                <TagGrid items={missionPillars} />
                <p className="mt-5 text-gray-700">
Growth should not depend on aggressive ad spend.It should depend on strong systems. </p>
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
                <h2 className="text-2xl font-semibold md:text-3xl">WHAT MAKES US DIFFERENT</h2>
                <p className="mt-2 text-lg text-gray-700">
                  Most agencies focus on execution. We focus on infrastructure.
                </p>
                <p className="mt-4 text-gray-700">
                  Instead of isolated campaigns, we build:
                </p>
                <TagGrid items={specializations} />
                {/* <p className="mt-5 text-gray-700">
                  Unlike traditional agencies, we focus on the entire customer journey from first impression to repeat purchase.
                </p> */}
                <p className="mt-2 text-gray-700 font-medium">We don’t chase clicks. We engineer revenue systems</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">STRATEGY FIRST. SCALE SECOND.</h2>
                <p className="mt-2 text-lg text-gray-700">Scaling without structure leads to wasted spend and unstable growth.</p>
                <p className="mt-4 text-gray-700">Our approach starts with:</p>
                <TagGrid items={differentPoints} />
                {/* <p className="mt-5 text-gray-700">
                  Every decision we make is backed by data, performance insights, and strategic analysis.
                </p>
                <p className="mt-3 text-gray-700">We integrate:</p>
                <TagGrid items={integratedSystems} /> */}
                <p className="mt-5 text-gray-700">
Every decision is backed by data, performance analysis, and long-term profitability goals.                </p>
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
            <h2 className="text-2xl font-semibold md:text-3xl">THE PRINCIPLES THAT GUIDE US</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value, index) => (
                <div key={value.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  {/* <p className="text-sm font-semibold text-gray-500">0{index + 1}</p> */}
                  <h3 className="mt-1 font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{value.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">OUR STRUCTURED GROWTH FRAMEWORK</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {frameworkSteps.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  {/* <p className="text-sm font-semibold text-gray-500">0{index + 1}</p> */}
                  <h3 className="mt-1 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-gray-700">This ensures growth is stable, measurable, and scalable.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">WHO WE WORK WITH</h2>
            <p className="mt-4 text-gray-700">
                  We partner with:
                </p>
            <TagGrid items={whoWeWorkWith} />
            <p className="mt-5 text-gray-700">We are not a fit for early-stage testing brands or businesses looking for quick wins without structure.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">MEASURABLE BUSINESS IMPACT</h2>
            <p className="mt-4 text-gray-700">Our work focuses on improving:</p>
            <TagGrid items={impactMetrics} />
            <p className="mt-5 text-gray-700">We measure success by business outcomes — not activity.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">A TRUE GROWTH PARTNERSHIP</h2>
            <p className="mt-4 text-gray-700">When you work with TubeHelper, you gain:</p>
            <TagGrid items={partnershipBenefits} />
            <p className="mt-5 text-gray-700">
              We operate as an extension of your team — aligned with your revenue and profitability goals.
            </p>
          </section>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#FFE0F0] via-white to-[#FFE0F0] px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">READY TO BUILD A PREDICTABLE REVENUE SYSTEM?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          If you&apos;re ready to move from ad-dependent growth to system-driven scale, let’s build your revenue infrastructure.
        </p>
        <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
          Book Your Strategy Call
          <MoveUpRight className="h-4 w-4" />
        </button>
      </section>
    </main>
  )
}
