"use client"

import Image from "next/image"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import { useState } from "react"

const trackingPoints = [
  "GA4 setup & configuration",
  "Conversion tracking setup",
  "Event tracking implementation",
  "Google Tag Manager (GTM) setup",
  "Enhanced ecommerce tracking",
  "Cross-domain tracking",
  "Pixel & conversion API integration",
  "Attribution modeling setup",
]

const automationPoints = [
  "Email automation workflows",
  "CRM integration",
  "Abandoned cart flows",
  "Lead nurturing sequences",
  "Behavioral-based automation",
  "SMS automation setup",
  "Retention campaign automation",
]

const landingPagePoints = [
  "Landing page wireframe strategy",
  "Offer positioning",
  "Conversion-focused copy strategy",
  "Heatmap & behavior analysis",
  "A/B testing strategy",
  "Funnel-stage alignment",
]

const frameworkSteps = [
  {
    title: "Step 1: Audit & Data Gap Analysis",
    description: "We identify tracking inaccuracies and automation gaps.",
  },
  {
    title: "Step 2: Technical Implementation",
    description: "We implement structured tracking, pixels, and event systems.",
  },
  {
    title: "Step 3: Dashboard & Automation Build",
    description: "We build reporting dashboards and automation workflows.",
  },
  {
    title: "Step 4: Optimization & Scaling",
    description: "We refine attribution and automation for scalable growth.",
  },
]

const results = [
  "Accurate attribution",
  "Reduced wasted ad spend",
  "Higher campaign efficiency",
  "Better decision-making",
  "Increased conversion rates",
  "Improved customer retention",
  "Scalable growth systems",
]

const audience = [
  "Ecommerce brands scaling ads",
  "Businesses with inconsistent tracking",
  "Brands struggling with attribution",
  "Companies running multi-channel campaigns",
  "Founders who want data-driven decisions",
]

const trustPoints = [
  "Advanced GA4 expertise",
  "Cross-platform tracking implementation",
  "Automation-first growth strategy",
  "Clean dashboard reporting",
  "Revenue-focused insights",
]

const faqs = [
  {
    question: "Why is GA4 setup important?",
    answer:
      "GA4 provides advanced event-based tracking and better cross-platform attribution compared to older analytics systems.",
  },
  {
    question: "What is marketing automation?",
    answer:
      "Marketing automation uses workflows and triggered actions to nurture leads and customers automatically.",
  },
  {
    question: "Can you fix inaccurate tracking?",
    answer:
      "Yes. We audit and correct tracking errors, pixel misfires, and attribution gaps.",
  },
  {
    question: "Do I need dashboards if I already use ad platforms?",
    answer:
      "Yes. Centralized dashboards provide clearer business-level insights across all platforms.",
  },
]

export default function AnalyticsAutomationPage() {
  const [activeFaq, setActiveFaq] = useState(-1)

  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-[#931847] pb-14 pt-24 md:rounded-b-[80px] md:pb-20 md:pt-28">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-gray-200 font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Analytics & Automation Services for Scalable, Data-Driven Growth
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-300 sm:text-lg lg:mx-0">
              We help brands implement advanced tracking, marketing automation, and real-time reporting systems to eliminate guesswork and maximize ROI.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button className="inline-flex items-center gap-3 cursor-pointer rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <PhoneIncoming className="h-4 w-4" />
                </span>
                Get a Free Tracking Audit
              </button>
              <button className="inline-flex items-center gap-2 cursor-pointer rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition hover:opacity-90">
                Book a Strategy Call
                <MoveUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl">
            <Image
              src="/AnalyticsHero.jpg"
              alt="Analytics and automation hero visual"
              width={900}
              height={650}
              className="w-full rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[130px] md:rounded-br-[130px] lg:rounded-tl-[150px] lg:rounded-br-[150px] rounded-xl border border-white/70 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            If You Can&apos;t Track It, You Can&apos;t Scale It
          </h2>
          <p className="mt-6 text-gray-700">
            Most businesses waste ad spend and miss growth opportunities because their tracking is inaccurate or incomplete.
          </p>
          <p className="mt-6 text-gray-700">Without proper analytics and automation:</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 px-4 py-3">Data is unreliable</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Campaign decisions are based on assumptions</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Funnels break without visibility</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Revenue attribution becomes unclear</div>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-900">
            We build structured tracking and automation systems that give you complete clarity and control over your marketing performance.
          </p>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Our Analytics & Automation Services
          </h2>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Tracking & GA4 Setup
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Advanced Tracking & GA4 Implementation Services
              </h3>
              <p className="mt-5 text-gray-300">
                Accurate tracking is the foundation of scalable marketing.
              </p>
              <p className="mt-3 text-gray-300">
                We implement and configure Google Analytics 4 (GA4), conversion tracking, and event tracking to ensure you have reliable data across all platforms.
              </p>
              <p className="mt-3 text-gray-300">
                Our tracking setup eliminates data gaps and improves attribution accuracy.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {trackingPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-200">
                We ensure your analytics reflect real business performance, not inflated or incomplete metrics.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/Analytics1.jpg"
                alt="Tracking and GA4 service visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Image
                src="/Analytics2.jpg"
                alt="Marketing automation visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Marketing Automation
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Marketing Automation for Lead Nurturing & Revenue Growth
              </h3>
              <p className="mt-5 text-gray-300">
                Marketing automation allows businesses to convert leads and customers automatically through structured workflows.
              </p>
              <p className="mt-3 text-gray-300">
                We build automation systems that nurture leads, recover abandoned carts, improve customer retention, and increase lifetime value (LTV).
              </p>
              <p className="mt-3 text-gray-300">
                From email automation to CRM integrations, we design automated growth systems that work 24/7.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {automationPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-200">
                Automation reduces manual effort and increases revenue predictability.
              </p>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Reporting & Dashboard Setup
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Custom Marketing Dashboards & Performance Reporting
              </h3>
              <p className="mt-5 text-gray-300">
                Data is only powerful when it is clear and actionable.
              </p>
              <p className="mt-3 text-gray-300">
                We build real-time marketing dashboards that centralize your data from Google Ads, Meta Ads, Shopify, GA4, and CRM systems.
              </p>
              <p className="mt-3 text-gray-300">
                Our dashboards provide a clear view of revenue, ROAS, conversion rates, customer acquisition cost (CAC), and funnel performance.
              </p>
              <p className="mt-3 text-gray-300">
                No more switching between platforms, everything in one structured dashboard.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/Analytics3.jpg"
                alt="Dashboard and reporting visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Image
                src="/Analytics4.jpg"
                alt="Landing page strategy visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Landing Page Strategy
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                High-Converting Landing Page Strategy & Optimization
              </h3>
              <p className="mt-5 text-gray-300">
                Traffic without conversion optimization wastes budget.
              </p>
              <p className="mt-3 text-gray-300">
                We design landing page strategies aligned with paid ads campaigns, funnel stages, user intent, and conversion psychology.
              </p>
              <p className="mt-3 text-gray-300">
                Our landing page strategies focus on improving conversion rates, message clarity, offer positioning, and call-to-action performance.
              </p>
              <p className="mt-3 text-gray-300">
                We align tracking, analytics, and page structure to maximize measurable results.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {landingPagePoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 ">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-4xl">
              Our 4-Step Data & Automation Framework
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {frameworkSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-gray-200 p-5">
                 
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
            What Proper Analytics & Automation Delivers
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-700">
            When your data is accurate, your growth becomes predictable.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Who Needs Analytics & Automation
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
            Why Businesses Trust Our Analytics Systems
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-gray-100">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-gray-200">We don&apos;t just set up tools.</p>
          <p className="mt-1 text-center text-lg text-gray-200">We build growth infrastructure.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Analytics & Automation FAQs
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

      <section className="bg-gradient-to-br from-[#e7f3ff] via-white to-[#eaf2ff] px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Build a Scalable Data-Driven Growth System?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Stop guessing. Start scaling with accurate tracking, automation, and reporting.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Get Your Free Tracking Audit
            <MoveUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
