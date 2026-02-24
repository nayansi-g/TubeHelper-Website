"use client"

import Image from "next/image"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import { useState } from "react"

const expansionPoints = [
  "Audience research & segmentation",
  "Market positioning analysis",
  "Competitive visibility analysis",
  "Lookalike & interest expansion",
  "Multi-platform targeting strategy",
]

const frameworkSteps = [
  {
    title: "Step 1: Brand Positioning & Audience Research",
    description: "We define your unique market positioning.",
  },
  {
    title: "Step 2: Creative & Messaging Development",
    description: "We craft attention-driven campaign concepts.",
  },
  {
    title: "Step 3: Multi-Channel Distribution",
    description: "We deploy campaigns across strategic platforms.",
  },
  {
    title: "Step 4: Optimization & Scaling",
    description:
      "We analyze performance data and scale high-impact campaigns.",
  },
]

const results = [
  "Increased reach & impressions",
  "Higher engagement rates",
  "Improved brand recall",
  "Lower future customer acquisition costs",
  "Increased trust & credibility",
  "Stronger long-term growth",
]

const audience = [
  "Growing ecommerce brands",
  "D2C businesses entering competitive markets",
  "Startups launching new products",
  "Established brands expanding market share",
  "Companies preparing to scale performance marketing",
]

const trustPoints = [
  "Data-driven audience targeting",
  "Multi-channel campaign execution",
  "Creative positioning expertise",
  "Alignment with performance goals",
  "Measurable reach & engagement tracking",
]

const faqs = [
  {
    question: "What is brand awareness marketing?",
    answer:
      "Brand awareness marketing focuses on increasing visibility and recognition among target audiences.",
  },
  {
    question: "Does brand awareness generate revenue?",
    answer:
      "Yes. While awareness is top-of-funnel, it lowers acquisition costs and improves conversion rates over time.",
  },
  {
    question: "How do you measure brand awareness?",
    answer:
      "We measure reach, impressions, engagement, video completion rates, and assisted conversions.",
  },
  {
    question: "Is brand awareness only for large companies?",
    answer:
      "No. Strategic brand amplification benefits startups and growing brands alike.",
  },
]

export default function AmplifyBrandAwarenessPage() {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-[#6C2277] pb-14 pt-24 md:rounded-b-[80px] md:pb-20 md:pt-28">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-gray-300 font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Amplify Brand Awareness & Maximize Market Reach
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400 sm:text-lg lg:mx-0">
              We help brands expand visibility, dominate attention, and turn awareness into measurable business results.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Book a Brand Strategy Call
                <MoveUpRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center cursor-pointer gap-3 rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <PhoneIncoming className="h-4 w-4" />
                </span>
                Get a Visibility Audit
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl">
            <Image
              src="/AmplifiHero.jpg"
              alt="Brand awareness hero visual"
              width={900}
              height={650}
              className="w-full rounded-l-[60px] md:rounded-l-[90px] lg:rounded-l-[120px] border border-white/70 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Attention Is the New Currency
          </h2>
          <p className="mt-6 text-gray-700">
            In today&apos;s competitive market, visibility determines growth.
          </p>
          <p className="mt-6 text-gray-700">Without strong brand awareness:</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 px-4 py-3">Customer acquisition becomes expensive</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Trust takes longer to build</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Conversion rates remain lower</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Competitors dominate mindshare</div>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-900">
            We design brand amplification strategies that increase reach, engagement, and long-term market presence while supporting measurable business outcomes.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            What Does Amplifying Brand Awareness Mean?
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-gray-700">
            Brand awareness isn&apos;t just impressions. It&apos;s strategic visibility that positions your business in front of the right audience at scale.
          </p>
          <p className="mt-6 text-gray-700">Our approach focuses on:</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">Expanding reach</div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">Increasing engagement</div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">Strengthening brand recall</div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">Supporting conversion-driven campaigns</div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 sm:col-span-2 lg:col-span-1">
              Aligning awareness with revenue growth
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-gray-700">
            We combine strategy, creative positioning, and distribution to ensure your brand stays top-of-mind.
          </p>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Our Brand Awareness & Reach Services
          </h2>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Audience Expansion Strategy
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Targeted Audience Expansion for Maximum Reach
              </h3>
              <p className="mt-5 text-gray-300">
                We identify and expand into high-potential audience segments using data-driven targeting and platform insights.
              </p>
              <p className="mt-3 text-gray-300">
                Our goal is not just more reach, but relevant reach that aligns with your brand positioning.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {expansionPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/Amplify1.jpg"
                alt="Audience expansion visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Image
                src="/Amplify2.jpg"
                alt="Multi-channel visibility visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Multi-Channel Brand Visibility
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Cross-Platform Brand Awareness Campaigns
              </h3>
              <p className="mt-5 text-gray-300">
                To maximize brand awareness, we deploy coordinated campaigns across Meta (Facebook & Instagram), Google Display Network, YouTube, short-form video platforms, and programmatic display.
              </p>
              <p className="mt-3 text-gray-300">
                We ensure consistent messaging across platforms while optimizing for reach and engagement.
              </p>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Creative Strategy & Messaging Alignment
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                High-Impact Creative Strategy for Brand Recall
              </h3>
              <p className="mt-5 text-gray-300">
                Strong creative drives attention and engagement.
              </p>
              <p className="mt-3 text-gray-300">
                We develop brand messaging strategies that capture attention quickly, communicate unique value propositions, reinforce brand identity, and improve recall and engagement.
              </p>
              <p className="mt-3 text-gray-300">
                We align awareness campaigns with performance objectives to support long-term business growth.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/Amplify3.jpg"
                alt="Creative strategy visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Image
                src="/Amplify4.jpg"
                alt="Awareness to conversion alignment visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Awareness to Conversion Alignment
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Turning Brand Awareness into Business Results
              </h3>
              <p className="mt-5 text-gray-300">
                Brand awareness without conversion alignment leads to wasted spend.
              </p>
              <p className="mt-3 text-gray-300">
                We integrate awareness campaigns with retargeting funnels, conversion-focused landing pages, CRM tracking, and performance marketing strategies.
              </p>
              <p className="mt-3 text-gray-300">
                This ensures that increased reach translates into measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10">
          <div>
            <h2 className="text-3xl font-semibold  text-center sm:text-4xl">
              Our 4-Step Brand Amplification Framework
            </h2>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
              {frameworkSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-gray-200 p-5">
                  {/* <p className="text-sm font-semibold text-gray-500">0{index + 1}</p> */}
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            What Strong Brand Awareness Delivers
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-700">
            When awareness is strategic, it fuels every other marketing channel.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Who Needs Brand Awareness Amplification
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
            Why Brands Trust Our Visibility Strategies
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-gray-100">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-gray-200">We don&apos;t run generic awareness campaigns.</p>
          <p className="mt-1 text-center text-lg text-gray-200">We build strategic visibility engines.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Brand Awareness FAQs
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-gray-500">{activeFaq === index ? "−" : "+"}</span>
                </button>
                {activeFaq === index && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#eef6ff] via-white to-[#f0f7ff] px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Expand Your Brand&apos;s Reach & Influence?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Let&apos;s build a visibility strategy that strengthens your market presence and drives measurable growth.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Book Your Brand Amplification Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
