import Image from "next/image"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import FAQAccordionClient from "@/components/FAQAccordionClient"
import { buildMetadata } from "@/lib/seo"
import { FaWhatsapp } from "react-icons/fa"

export const metadata = buildMetadata({
  title: "Analytics and Automation Services",
  description:
    "Implement GA4, conversion tracking, dashboards, and automation workflows for data-driven growth.",
  path: "/services/analytics_&_automation",
  keywords: ["ga4 setup services", "marketing automation services", "conversion tracking setup"],
})

const trackingPoints = [
  "GA4 setup & configuration",
  "Conversion tracking implementation",
  "Event tracking systems",
  "Google Tag Manager setup",
  "Enhanced ecommerce tracking",
  "Cross-domain tracking",
  "Pixel & Conversion API integration",
  "Attribution model configuration",
]

const automationPoints = [
  "Email automation workflows",
  "CRM integration",
  "Abandoned cart recovery flows",
  "Lead nurturing sequences",
  "Behavior-based automation",
  "SMS automation setup",
  "Retention campaign automation",
]

const reportingPoints=[
"Revenue performance",
"ROAS and CAC",
"Conversion rates",
"Funnel performance",
"Campaign efficiency"
]

const landingPagePoints = [
  "Landing page wireframe strategy",
  "Offer positioning",
  "Conversion-focused copy structure",
  "Heatmap and behavior analysis",
  "A/B testing frameworks",
  "Funnel-stage alignment",
]

const frameworkSteps = [
  {
    title: "Step 1: Audit & Data Gap Analysis",
    description: "We identify tracking issues, attribution gaps, and automation opportunities.",
  },
  {
    title: "Step 2: Technical Implementation",
    description: "We implement structured tracking systems, pixels, and event infrastructure.",
  },
  {
    title: "Step 3: Dashboard & Automation Setup",
    description: "We build reporting dashboards and automated workflows.",
  },
  {
    title: "Step 4: Optimization & Scaling",
    description: "We refine attribution, improve automation performance, and support scalable growth.",
  },
]

const results = [
  "Accurate attribution across channels",
  "Reduced wasted ad spend",
  "Higher campaign efficiency",
  "Better decision-making",
  "Improved conversion performance",
  "Stronger customer retention",
  "Scalable growth systems",
]

const audience = [
  "Ecommerce brands scaling paid acquisition",
  "Businesses with unreliable tracking data",
  "Brands struggling with attribution",
  "Companies running multi-channel marketing",
  "Founders who want data-driven decisions",
]

const trustPoints = [
{ title:"Advanced GA4 Expertise",
  desc:"We build accurate analytics foundations for ecommerce growth."},
  { title:"Cross-Platform Tracking",
   desc:"Clean attribution across ads, ecommerce platforms, and CRM systems."},
 { title: "Automation-Driven Growth",
   desc:"Automated workflows improve retention and revenue."},
 { title: "Clear Reporting Dashboards",
   desc:"Performance data that’s easy to understand and act on."},
 {  title:"Revenue-Focused Insights",
   desc:"We prioritize metrics that impact profitability."}
]

const faqs = [
  {
    question: "Why is GA4 setup important?",
    answer:
"GA4 provides accurate tracking of user behavior, conversions, and customer journeys across devices and platforms."  },
  {
    question: "What is marketing automation?",
    answer:
"Marketing automation uses workflows to automatically nurture leads, recover abandoned carts, and retain customers through email, SMS, and CRM systems."  },
  {
    question: "Can you fix inaccurate tracking?",
    answer:
"Yes. We audit existing tracking systems and rebuild them to ensure accurate attribution and reliable performance data."  },
  {
    question: "Do I need dashboards if I already use ad platforms?",
    answer:
"Yes. Dashboards combine data from multiple platforms to provide a complete view of revenue, CAC, and funnel performance."  },
]

export default function AnalyticsAutomationPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-[#931847] pb-14  md:rounded-b-[80px] md:pb-20 pt-32">
        <div className="mx-auto grid w-full grid-cols-1  items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-gray-100 font-semibold leading-tight md:text-4xl lg:text-5xl">
              Analytics & Automation Systems for Scalable, Data-Driven Growth
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-300 sm:text-lg lg:mx-0">
We help ecommerce and D2C brands implement accurate tracking, marketing automation, and reporting systems that remove guesswork and support profitable scaling.
            </p>
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
              src="/AnalyticsHero.jpg"
              alt="Analytics and automation hero visual"
              width={900}
              height={650}
              className="w-full h-[300px] md:h-[400px] rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[130px] md:rounded-br-[130px] lg:rounded-tl-[150px] lg:rounded-br-[150px] rounded-xl border border-white/70 object-cover shadow-xl"
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
Many brands waste ad spend because their tracking and attribution are incomplete.
          </p>
          <p className="mt-6 text-gray-700">Without proper analytics infrastructure:</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 px-4 py-3">Data becomes unreliable</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Campaign decisions rely on assumptions</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Funnel performance becomes unclear</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Revenue attribution breaks across platforms</div>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-900">
We implement structured tracking and automation systems that provide complete visibility into your marketing performance.
          </p>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl ">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Our Analytics & Automation Services
          </h2>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Tracking & GA4 Setup
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
Accurate Tracking Infrastructure for Reliable Data              </h3>
              <p className="mt-5 text-gray-300">
Clean data is the foundation of scalable marketing.
              </p>
              <p className="mt-3 text-gray-300">
We implement GA4, event tracking, and platform integrations so every marketing decision is backed by accurate data.
              </p>
              <p className="mt-3 text-gray-300">
Our tracking systems eliminate attribution gaps and ensure your analytics reflect real business performance.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {trackingPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-200">
Our goal is simple: clear data that supports confident growth decisions.
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
Automation Systems That Increase Revenue & Retention
              </h3>
              <p className="mt-5 text-gray-300">
Marketing automation allows brands to convert and retain customers automatically through structured workflows.
              </p>
              <p className="mt-3 text-gray-300">
We design automation systems that nurture leads, recover abandoned carts, improve retention, and increase customer lifetime value.
              </p>
              <p className="mt-3 text-gray-300">
These systems work continuously — generating revenue without manual effort.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {automationPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-200">
Automation reduces manual work while improving revenue predictability.
              </p>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Reporting & Dashboard Setup
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
Clear Marketing Dashboards & Performance Reporting
              </h3>
              <p className="mt-5 text-gray-300">
Data is valuable only when it is easy to understand.
              </p>
              <p className="mt-3 text-gray-300">
We build centralized dashboards that combine data from Google Ads, Meta Ads, Shopify, GA4, and CRM platforms.
              </p>
              <p className="mt-3 text-gray-300">
This gives your team a clear view of the metrics that actually drive growth.
              </p>
              <p className="mt-3 text-gray-300">
What You See:              </p>

<ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {reportingPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-200">
Instead of switching between tools, everything is visible in one structured reporting system.
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
                Conversion-Focused Landing Page Strategy
              </h3>
              <p className="mt-5 text-gray-300">
Traffic without conversion optimization leads to wasted spend.
              </p>
              <p className="mt-3 text-gray-300">
We design landing page strategies aligned with paid campaigns, funnel stages, and user intent.
              </p>
              <p className="mt-3 text-gray-300">
Our focus is improving conversion rates through clear messaging, strong offers, and optimized page structure.
              </p>
             
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {landingPagePoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
               <p className="mt-3 text-gray-300">
Every page is designed to support measurable revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid items-center gap-10 ">
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
When your data is accurate, growth becomes predictable.
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
Why Brands Trust TubeHelper for Analytics Systems
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-gray-100">
                {item.title}
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-gray-200">We don&apos;t just configure tools. We build growth infrastructure.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Analytics & Automation FAQs
          </h2>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#e7f3ff] via-white to-[#eaf2ff] px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Build a Scalable Data-Driven Growth System?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
Stop guessing and start scaling with accurate tracking, automation, and performance reporting.          </p>
          <a href="tel:+919897165137"><button className="mt-8 cursor-pointer inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Get Your Free Tracking Audit
            <MoveUpRight className="h-4 w-4" />
          </button></a>
        </div>
      </section>
    </main>
  )
}
