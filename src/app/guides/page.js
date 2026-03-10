import Link from "next/link"
import { MoveUpRight, PhoneOutgoing } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Digital Growth Guides & Resources",
  description:
    "Practical guides, proven frameworks, and expert insights to help ecommerce and D2C brands scale traffic, increase conversions, and build predictable revenue systems.",
  path: "/guides",
  keywords: ["digital growth guides", "ecommerce growth resources", "D2C marketing guides"],
})

const performanceGuides = [
  "The Complete Guide to Meta & Instagram Ads for Ecommerce Brands",
  "How to Optimize Google Ads for Higher ROAS",
  "YouTube Ads Strategy for Brand & Performance Growth",
  "How to Scale Paid Ads Without Increasing Wasted Spend",
  "Retargeting Strategies That Increase Conversion Rates",
]

const ecommerceGuides = [
  "The Ultimate Guide to Conversion Rate Optimization (CRO)",
  "Shopify Growth Strategy: From Traffic to Revenue",
  "How to Reduce Cart Abandonment & Increase AOV",
  "Ecommerce Funnel Optimization Explained",
  "Product Page Optimization Best Practices",
]

const seoGuides = [
  "SEO for Ecommerce: A Complete Beginner-to-Advanced Guide",
  "How to Build a Content Strategy That Drives Organic Traffic",
  "Technical SEO Checklist for Growing Brands",
  "Keyword Research Strategy for High-Intent Traffic",
  "How Long Does SEO Take? Realistic Expectations Explained",
]

const analyticsGuides = [
  "GA4 Setup Guide for Ecommerce Brands",
  "How to Set Up Conversion Tracking Correctly",
  "Marketing Automation for Lead Nurturing",
  "Building a Real-Time Marketing Dashboard",
  "Attribution Models Explained for Growing Businesses",
]

const awarenessGuides = [
  "How to Build Brand Awareness in Competitive Markets",
  "Multi-Channel Marketing Strategy Guide",
  "Creative Strategy for Higher Engagement",
  "Awareness to Conversion Funnel Explained",
  "Scaling Visibility Without Losing Profitability",
]

const whyRead = [
  "Data-driven strategies",
  "Real-world ecommerce experience",
  "Actionable frameworks",
  "Full-funnel insights",
  "Updated platform knowledge",
  "Built for scalable growth",
]

const guideAudience = [
  "Ecommerce founders",
  "Shopify store owners",
  "Marketing managers",
  "Startup teams",
  "D2C brands",
  "Businesses preparing to scale",
]

function GuideSection({ title, intro, guides, linkHref, linkLabel, note }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{title}</h2>
      <p className="mt-4 text-gray-700">{intro}</p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {guides.map((guide) => (
          <li
            key={guide}
            className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-900" />
            <span>{guide}</span>
          </li>
        ))}
      </ul>

      {note && <p className="mt-6 text-gray-700">{note}</p>}

      <Link
        href={linkHref}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
      >
        {linkLabel}
        <MoveUpRight className="h-4 w-4" />
      </Link>
    </section>
  )
}

export default function GuidesPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden rounded-b-[50px] bg-[#dff3ef] px-4 pb-14 pt-32 text-center sm:px-6 md:rounded-b-[80px] md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/50 blur-2xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/50 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Digital Growth Guides & Resources
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700 sm:text-lg">
            Practical guides, proven frameworks, and expert insights to help ecommerce and D2C brands scale traffic, increase conversions, and build predictable revenue systems.
          </p>
          <a
            href="https://wa.me/919897165137"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book Your Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Introduction</h2>
          <p className="mt-4 text-gray-700">
            Our growth guides are designed for ecommerce founders, D2C brands, and marketing teams focused on scaling profitably.
          </p>
          <p className="mt-3 text-gray-700">
            Instead of scattered tactics, we focus on structured growth systems that connect acquisition, conversion, retention, and analytics.
          </p>
          <p className="mt-3 text-gray-700">
            Whether you&apos;re improving paid campaigns, optimizing conversions, implementing SEO, or building reliable tracking systems, these resources provide actionable strategies you can apply immediately.
          </p>
          <p className="mt-4 font-medium text-gray-900">Our guides cover:</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Performance marketing systems",
              "Ecommerce conversion optimization",
              "SEO and organic growth strategies",
              "GA4 and tracking infrastructure",
              "Marketing automation workflows",
              "Brand visibility and audience expansion",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-gray-700">
            Every guide focuses on practical frameworks designed for scalable growth.
          </p>
        </section>

        <div className="mt-8 space-y-8">
          <GuideSection
            title="Performance Marketing & Paid Ads Guides"
            intro="Learn how to run structured ad systems across Meta, Google, and YouTube while maintaining strong unit economics."
            guides={performanceGuides}
            note="These resources focus on improving campaign efficiency, reducing customer acquisition cost, and scaling profitable acquisition."
            linkHref="/services/performance_marketing"
            linkLabel="Performance Marketing Services"
          />

          <GuideSection
            title="Ecommerce Growth & Conversion Optimization Guides"
            intro="Improve your ecommerce store performance through conversion optimization and structured funnel improvements."
            guides={ecommerceGuides}
            note="These guides focus on increasing revenue from existing traffic by improving the customer journey."
            linkHref="/services/e-commerce_growth"
            linkLabel="Ecommerce Growth Services"
          />

          <GuideSection
            title="SEO & Content Marketing Guides"
            intro="Build long-term organic traffic through strategic SEO and content systems."
            guides={seoGuides}
            note="These resources help brands improve search visibility, authority, and sustainable inbound traffic."
            linkHref="/services/organic_growth"
            linkLabel="Organic Growth Services"
          />

          <GuideSection
            title="Tracking, GA4 & Marketing Automation Guides"
            intro="Learn how to implement accurate tracking and automation systems that support data-driven decisions."
            guides={analyticsGuides}
            note="These guides help businesses eliminate data gaps and improve marketing performance visibility."
            linkHref="/services/analytics_&_automation"
            linkLabel="Analytics & Automation Services"
          />

          <GuideSection
            title="Brand Awareness & Audience Growth Guides"
            intro="Expand your reach and strengthen brand positioning with structured visibility strategies."
            guides={awarenessGuides}
            note="These resources focus on building visibility that supports acquisition and long-term growth."
            linkHref="/services/amplify_&_awareness"
            linkLabel="Brand Awareness Services"
          />
        </div>

        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Featured Growth Guide</h2>
          <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5">
            <p className="text-lg font-semibold text-gray-900">The Complete Digital Growth Framework for Scaling Brands</p>
            <p className="mt-2 text-gray-700">
              A comprehensive guide that connects paid acquisition, CRO, SEO, analytics, automation, and brand visibility into one unified growth system.
            </p>
            <p className="mt-3 text-gray-700">
              This framework explains how successful brands move from fragmented marketing tactics to structured, scalable growth infrastructure.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Why Our Growth Guides Stand Out</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyRead.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">We don&apos;t publish theory.</p>
          <p className="mt-2 text-gray-700">We publish practical growth systems.</p>
        </section>

        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Who These Guides Are For</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {guideAudience.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            If you&apos;re serious about predictable, system-driven growth, these resources are designed for you.
          </p>
        </section>
      </section>

      <section className="bg-gradient-to-br from-[#dff3ef] via-white to-[#eaf9f5] px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Ready to Apply These Strategies to Your Business?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          Learning is the first step. Execution creates results.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-gray-700">
          Book a Strategy Call to implement these frameworks with expert guidance.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/919897165137"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book a Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+919897165137"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
          >
            <PhoneOutgoing className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>
    </main>
  )
}
