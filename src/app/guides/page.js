"use client"

import Link from "next/link"
import { MoveUpRight } from "lucide-react"

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
  "Updated with current platform changes",
  "Built for scalability",
]

const guideAudience = [
  "Ecommerce founders",
  "Shopify store owners",
  "Marketing managers",
  "Startup founders",
  "D2C brands",
  "Businesses preparing to scale",
]

function GuideSection({ title, intro, guides, linkHref, linkLabel, note }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
      <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{title}</h2>
      <p className="mt-4 text-gray-700">{intro}</p>
      <div className="mt-6 grid gap-3">
        {guides.map((guide) => (
          <div key={guide} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
            {guide}
          </div>
        ))}
      </div>
      {note && <p className="mt-5 text-gray-700">{note}</p>}
      <Link
        href={linkHref}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
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
      <section className="rounded-b-[50px] bg-purple-100 px-4 pb-12 pt-28 text-center sm:px-6 md:rounded-b-[80px] md:pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Digital Marketing Guides & Growth Resources
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Actionable guides, proven strategies, and expert insights to help you scale traffic, increase conversions, and grow your brand sustainably.
          </p>
          <button className="mt-8 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Explore Our Growth Guides
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Introduction</h2>
          <p className="mt-4 text-gray-700">
            Our digital marketing guides are designed for ecommerce brands, D2C businesses, and growth-focused companies looking to scale profitably.
          </p>
          <p className="mt-3 text-gray-700">
            Whether you&apos;re optimizing paid ads, improving conversion rates, implementing SEO, or building analytics systems, our expert resources provide practical, data-driven strategies.
          </p>
          <p className="mt-4 font-medium text-gray-900">We cover:</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">Performance marketing strategies</div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">Ecommerce growth optimization</div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">SEO & content marketing</div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">GA4 & tracking setup</div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">Marketing automation</div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">Brand awareness scaling</div>
          </div>
          <p className="mt-5 text-gray-700">
            Each guide is written to deliver actionable insights you can implement immediately.
          </p>
        </section>

        <div className="mt-8 space-y-8">
          <GuideSection
            title="Performance Marketing & Paid Ads Guides"
            intro="Learn how to run profitable Meta, Google, and YouTube ad campaigns with structured optimization strategies."
            guides={performanceGuides}
            note="Each guide focuses on improving ad efficiency, reducing CPA, and maximizing return on ad spend."
            linkHref="/services/performance_marketing"
            linkLabel="Performance Marketing Services"
          />

          <GuideSection
            title="Ecommerce Growth & Conversion Optimization Guides"
            intro="Improve your Shopify store performance with structured CRO and funnel optimization strategies."
            guides={ecommerceGuides}
            note="These guides help brands increase revenue without relying solely on additional ad spend."
            linkHref="/services/e-commerce_growth"
            linkLabel="Ecommerce Growth Services"
          />

          <GuideSection
            title="SEO & Content Marketing Guides"
            intro="Build long-term organic traffic through strategic SEO and content marketing systems."
            guides={seoGuides}
            note="These guides focus on search engine visibility, authority building, and sustainable growth."
            linkHref="/services/organic_growth"
            linkLabel="Organic Growth Services"
          />

          <GuideSection
            title="Tracking, GA4 & Marketing Automation Guides"
            intro="Learn how to implement advanced tracking systems and automation workflows for data-driven decisions."
            guides={analyticsGuides}
            note="These guides help businesses eliminate data guesswork and improve campaign accuracy."
            linkHref="/services/analytics_&_automation"
            linkLabel="Analytics & Automation Services"
          />

          <GuideSection
            title="Brand Awareness & Audience Growth Guides"
            intro="Expand your reach and strengthen brand positioning with structured visibility strategies."
            guides={awarenessGuides}
            note="These guides help brands dominate attention while aligning awareness with revenue goals."
            linkHref="/services/amplify_&_awareness"
            linkLabel="Brand Awareness Services"
          />
        </div>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Featured Growth Guide</h2>
          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4">
            <p className="text-lg font-medium text-gray-900">The Complete Digital Growth Framework for Scaling Brands</p>
            <p className="mt-2 text-gray-700">A pillar guide that combines paid media, CRO, SEO, analytics, automation, and brand visibility into one strategic growth roadmap.</p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Why Our Digital Marketing Guides Stand Out</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyRead.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-gray-700">We don&apos;t publish theory, we publish proven growth systems.</p>
        </section>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Who These Guides Are For</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {guideAudience.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-gray-700">If you&apos;re serious about predictable growth, these resources are for you.</p>
        </section>
      </section>

      <section className="bg-gradient-to-br from-purple-200  via-white to-purple-200 px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Ready to Apply These Strategies to Your Business?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          Reading is step one. Execution is where growth happens.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-gray-700">
          Book a Strategy Call to implement these frameworks with expert guidance.
        </p>
        <button className="mt-7 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
          Book Your Free Growth Consultation
        </button>
      </section>
    </main>
  )
}
