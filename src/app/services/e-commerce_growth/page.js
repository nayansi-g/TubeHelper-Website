import Image from "next/image"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import FAQAccordionClient from "@/components/FAQAccordionClient"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Ecommerce Growth Services",
  description:
    "Improve conversion rates, optimize funnels, and scale ecommerce profitability with TubeHelper growth systems.",
  path: "/services/e-commerce_growth",
  keywords: ["ecommerce growth services", "shopify cro", "funnel optimization ecommerce"],
})

const growthPillars = [
  "Higher Conversion Rate",
  "Increased AOV & LTV",
  "Lower Cart Abandonment",
]

const whoFor = [
  "Shopify Brands",
  "D2C Ecommerce Businesses",
  "$20K–$500K/Month Brands",
]

const whyChoose = [
  "Data-First CRO Strategy",
  "Full-Funnel Optimization",
  "Transparent Tracking",
]

const services = [
  {
    label: "Shopify Growth Strategy",
    title: "Shopify Growth Strategy & Revenue Optimization",
    image: "/e-commerceGrowth1.jpg",
    body: "We create data-backed growth strategies tailored for Shopify brands looking to scale profitably. Our approach aligns acquisition, retention, and optimization into a single growth roadmap.",
    points: [
      "Store performance audit",
      "Revenue opportunity mapping",
      "Customer journey analysis",
      "Offer & pricing optimization",
      "Retention & LTV strategy",
      "Analytics & tracking review",
    ],
  },
  {
    label: "Conversion Rate Optimization (CRO)",
    title: "Conversion Rate Optimization (CRO) for Ecommerce Stores",
    image: "/e-commerceGrowth2.jpg",
    body: "Increasing traffic without improving conversion rates leads to wasted ad spend. Our CRO strategies focus on improving user experience, trust signals, messaging clarity, and checkout flow.",
    points: [
      "A/B testing strategy",
      "Heatmap & user behavior analysis",
      "Landing page optimization",
      "Product page optimization",
      "Checkout flow improvement",
      "Trust signal & social proof optimization",
    ],
  },
  {
    label: "Funnel Optimization",
    title: "Full-Funnel Optimization for Higher Profit Margins",
    image: "/e-commerceGrowth3.jpg",
    body: "A profitable ecommerce brand is built on a structured funnel, not isolated campaigns. We optimize every stage of the customer journey from awareness to repeat purchase.",
    points: [
      "Funnel mapping & segmentation",
      "Upsell & cross-sell optimization",
      "Post-purchase flows",
      "Email & SMS lifecycle integration",
      "Retargeting alignment",
      "Subscription & repeat purchase strategy",
    ],
  },
]

const steps = [
  {
    title: "Audit & Data Analysis",
    description:
      "We identify bottlenecks in your store performance and customer journey.",
  },
  {
    title: "Conversion Optimization",
    description:
      "We optimize product pages, checkout, and messaging for maximum impact.",
  },
  {
    title: "Funnel Structuring",
    description:
      "We build a scalable funnel aligned with acquisition and retention.",
  },
  {
    title: "Testing & Scaling",
    description:
      "We continuously test and refine to maximize revenue growth.",
  },
]

const faqs = [
  {
    question: "What is ecommerce growth optimization?",
    answer:
      "It is a structured process of improving store performance, conversion rate, and funnel efficiency to increase revenue and profitability.",
  },
  {
    question: "How long does CRO take to show results?",
    answer:
      "Initial test data appears within 2–4 weeks. Significant improvements typically occur within 60–90 days.",
  },
  {
    question: "Do you only work with Shopify?",
    answer:
      "Our primary expertise is Shopify, but we can support other ecommerce platforms as well.",
  },
  {
    question: "Is funnel optimization different from paid ads?",
    answer:
      "Yes. Paid ads bring traffic. Funnel optimization converts that traffic efficiently.",
  },
]

export default function EcommerceGrowthPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-[#A1C2F8] pb-14 pt-24 md:rounded-b-[80px] md:pb-20 md:pt-28">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Ecommerce Growth Services That Turn Traffic Into Revenue
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-700 sm:text-lg lg:mx-0">
              We help Shopify and D2C brands increase conversion rates, optimize funnels, and unlock sustainable revenue growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button className="inline-flex items-center cursor-pointer gap-3 rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <PhoneIncoming className="h-4 w-4" />
                </span>
                Get a Growth Audit
              </button>
              <button className="inline-flex items-center cursor-pointer gap-2 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition hover:opacity-90">
                Book a Strategy Call
                <MoveUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl">
            <Image
              src="/e-commerce1.jpg"
              alt="Ecommerce growth hero visual"
              width={900}
              height={650}
              className="w-full rounded-r-[60px] md:rounded-r-[90px] lg:rounded-r-[120px] rounded-xl border border-white/70 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Growth Isn&apos;t Just More Traffic, It&apos;s Better Conversion
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-gray-700">
            We help ecommerce and D2C brands scale profitably with conversion-driven systems, funnel optimization, and measurable performance improvements.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {growthPillars.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Our Ecommerce Growth Services
          </h2>
          <div className="mt-12 space-y-10">
            {services.map((service, index) => (
              <div key={service.title} className="grid items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-5 lg:grid-cols-2 lg:p-6">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={900}
                    height={620}
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{service.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{service.title}</h3>
                  <p className="mt-4 text-gray-300">{service.body}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-gray-200 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10">
          <div>
            <h2 className="text-3xl text-center font-semibold sm:text-4xl">Our 4-Step Growth Process</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
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
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">Who We Work With</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoFor.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
                {item}
              </div>
            ))}
          </div>
          <h3 className="mt-14 text-center text-2xl font-semibold sm:text-3xl">
            Why Brands Choose Our Ecommerce Growth Team
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Ecommerce Growth FAQs
          </h2>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#e6efff] via-white to-[#edf3ff] px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Unlock Higher Revenue Without Increasing Ad Spend?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            If you&apos;re driving traffic but not maximizing revenue, it&apos;s time to optimize your growth engine.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Book Your Ecommerce Growth Audit
            <MoveUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
