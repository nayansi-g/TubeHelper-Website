import { MoveUpRight } from "lucide-react"
import FAQAccordionClient from "@/components/FAQAccordionClient"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "24/7 Marketing Support",
  description:
    "Get 24/7 digital marketing support for paid ads, tracking, automation, and ecommerce growth systems.",
  path: "/support",
  keywords: ["24/7 marketing support", "GA4 support", "ad campaign troubleshooting"],
})

const supportCovers = [
  "Performance marketing campaign monitoring",
  "Ad performance troubleshooting",
  "Tracking & GA4 issues",
  "Marketing automation workflows",
  "Ecommerce funnel optimization",
  "Dashboard & reporting updates",
  "Landing page performance concerns",
  "Technical tracking fixes",
]

const performanceSupport = [
  "Meta & Instagram Ads",
  "Google Ads (Search & Shopping)",
  "YouTube campaigns",
]

const performanceResponses = [
  "Performance drops",
  "Budget pacing issues",
  "Disapproved ads",
  "Tracking inconsistencies",
  "Scaling opportunities",
]

const analyticsSupport = [
  "GA4 configuration issues",
  "Event tracking errors",
  "Conversion tracking discrepancies",
  "Google Tag Manager updates",
  "Attribution model concerns",
  "Dashboard synchronization",
]

const ecommerceSupport = [
  "Shopify stores",
  "Conversion rate improvements",
  "Checkout flow issues",
  "Funnel drop-offs",
  "Cart abandonment recovery systems",
]

const automationSupport = [
  "Email automation sequences",
  "Abandoned cart workflows",
  "Lead nurturing flows",
  "CRM integrations",
  "Behavioral triggers",
  "SMS automation systems",
]

const processSteps = [
  {
    title: "Issue Identification",
    body: "You submit a request through our support channel.",
  },
  {
    title: "Technical Review",
    body: "Our specialists analyze the issue and identify root causes.",
  },
  {
    title: "Resolution & Optimization",
    body: "We implement fixes and optimize performance where needed.",
  },
  {
    title: "Confirmation & Reporting",
    body: "You receive confirmation and updated insights.",
  },
]

const supportExperts = [
  "Performance marketing specialists",
  "CRO experts",
  "SEO strategists",
  "Analytics professionals",
  "Automation consultants",
]

const supportAudience = [
  "Ecommerce brands running high ad spend",
  "Businesses scaling paid campaigns",
  "Companies managing multi-channel marketing",
  "Brands relying on automated funnels",
  "Growth-focused founders",
]

const faqs = [
  {
    q: "Is your support truly available 24/7?",
    a: "Yes. Campaign monitoring and urgent issue handling operate continuously to ensure minimal disruption.",
  },
  {
    q: "How quickly do you respond?",
    a: "We prioritize urgent issues immediately and respond to general inquiries within 24 hours.",
  },
  {
    q: "Is 24/7 support included in all service plans?",
    a: "Support availability depends on your service agreement. Premium retainers include priority assistance.",
  },
  {
    q: "Do you provide technical implementation support?",
    a: "Yes. We assist with tracking setup, automation systems, landing page optimization, and performance troubleshooting.",
  },
]

function CardList({ items }) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
          {item}
        </div>
      ))}
    </div>
  )
}

export default function SupportPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-[#E6E6FA] px-4 pb-12 pt-28 text-center sm:px-6 md:rounded-b-[80px] md:pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            24/7 Digital Marketing Support & Growth Assistance
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Reliable, responsive, and expert support to keep your marketing systems running smoothly anytime you need us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Contact Support
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-gray-50">
              Book a Strategy Call
              <MoveUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold md:text-3xl">Introduction</h2>
          <p className="mt-4 text-gray-700">At TubeHelper, we understand that digital marketing never stops.</p>
          <p className="mt-3 text-gray-700">Campaigns run 24/7. Data updates in real time. Customers convert at all hours.</p>
          <p className="mt-3 text-gray-700">
            That&apos;s why we provide ongoing support for our clients, ensuring your performance marketing, ecommerce growth, SEO, and automation systems operate efficiently around the clock.
          </p>
        </section>

        <div className="mt-8 space-y-8">
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Comprehensive Marketing Support Services</h2>
            <CardList items={supportCovers} />
            <p className="mt-5 text-gray-700">We ensure your growth engine never stalls.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Paid Ads Monitoring & Optimization Support</h2>
            <p className="mt-4 text-gray-700">We continuously monitor:</p>
            <CardList items={performanceSupport} />
            <p className="mt-5 text-gray-700">Our team responds quickly to:</p>
            <CardList items={performanceResponses} />
            <p className="mt-5 text-gray-700">Your campaigns stay optimized even outside traditional business hours.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">GA4 & Tracking Assistance</h2>
            <p className="mt-4 text-gray-700">Accurate data is critical for decision-making.</p>
            <CardList items={analyticsSupport} />
            <p className="mt-5 text-gray-700">We eliminate data blind spots so you can make confident decisions.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Ecommerce Growth & Funnel Monitoring</h2>
            <CardList items={ecommerceSupport} />
            <p className="mt-5 text-gray-700">Our team ensures your revenue system performs consistently.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Automation Workflow & CRM Assistance</h2>
            <p className="mt-4 text-gray-700">Marketing automation should simplify your growth, not complicate it.</p>
            <CardList items={automationSupport} />
            <p className="mt-5 text-gray-700">We make sure your automation runs seamlessly.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Our 4-Step Support System</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-500">0{index + 1}</p>
                  <h3 className="mt-1 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{step.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-gray-700">We prioritize urgent campaign-impacting issues immediately.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Dedicated, Strategic Support — Not Generic Responses</h2>
            <p className="mt-4 text-gray-700">Unlike traditional support desks, our team consists of:</p>
            <CardList items={supportExperts} />
            <p className="mt-5 text-gray-700">We provide strategic solutions, not scripted replies.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Who Benefits From 24/7 Marketing Support?</h2>
            <CardList items={supportAudience} />
            <p className="mt-5 text-gray-700">If your revenue depends on digital marketing, support is essential.</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
            <FAQAccordionClient
              faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
            />
          </section>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#E6E6FA] via-white to-[#E6E6FA] px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Need Immediate Assistance?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          Our team is ready to support your growth systems anytime.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Contact Support Now
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-gray-50">
            Book a Priority Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
