import Link from "next/link"
import { MoveUpRight } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Explore TubeHelper case studies showing measurable ecommerce growth, ROAS improvements, and conversion gains.",
  path: "/how_it_works",
  keywords: ["digital marketing case studies", "ecommerce case studies", "ROAS growth examples"],
})

const caseStudies = [
  {
    id: "Case Study #1",
    title: "D2C Skincare Brand (Shopify)",
    challenge:
      "The brand was generating traffic but struggling with low ROAS (2.1x) and high customer acquisition costs. Their funnel lacked structure and creatives were not optimized for performance.",
    actions: [
      "Rebuilt full-funnel ad structure (TOF / MOF / BOF)",
      "Launched creative testing framework (10+ hooks per week)",
      "Implemented server-side tracking",
      "Optimized product pages and checkout flow",
    ],
    results: [
      "ROAS increased from 2.1x to 4.8x",
      "Revenue increased by 162%",
      "CAC reduced by 37%",
      "Conversion rate improved from 1.9% to 3.3%",
    ],
    impact:
      "The brand scaled ad spend confidently while increasing profitability, not just revenue.",
  },
  {
    id: "Case Study #2",
    title: "Fitness Supplement Brand",
    challenge:
      "High ad spend but unstable profitability, poor retention, and heavy dependence on cold traffic.",
    actions: [
      "Restructured Meta and Google campaigns",
      "Built lifecycle email and SMS automation",
      "Implemented upsell and subscription offers",
      "Optimized landing page messaging",
    ],
    results: [
      "Revenue grew from $120K to $310K per month",
      "Repeat purchase rate increased by 38%",
      "AOV increased by 22%",
      "Blended ROAS improved to 5.1x",
    ],
    impact:
      "The brand transitioned from aggressive scaling to sustainable growth with stronger margins.",
  },
  {
    id: "Case Study #3",
    title: "Fashion Ecommerce Brand",
    challenge:
      "Strong social presence but poor conversion rates and inconsistent tracking.",
    actions: [
      "Fixed GA4 and pixel attribution",
      "Ran A/B testing on product pages",
      "Launched retargeting segmentation strategy",
      "Improved creative messaging and hooks",
    ],
    results: [
      "Conversion rate doubled from 1.5% to 3.1%",
      "Cost per purchase reduced by 41%",
      "Tracking accuracy improved by 90%",
      "Monthly profit increased by 74%",
    ],
    impact:
      "The brand unlocked profitable scaling by fixing growth fundamentals first.",
  },
]

const faqs = [
  {
    q: "What do your case studies show?",
    a: "Our case studies show how strategy, tracking, and funnel optimization impact revenue, ROAS, CAC, and conversion rates. Each project highlights the challenge, implementation, and measurable business outcomes.",
  },
  {
    q: "Are these results typical for every business?",
    a: "No. Results vary by niche, pricing, demand, offer strength, budget, and execution speed. We use each case study to show proven frameworks and realistic optimization paths, not guaranteed outcomes.",
  },
  {
    q: "How long does it take to see measurable growth?",
    a: "Paid media and conversion optimization usually show early data in a few weeks, while stronger trend improvements often appear within 30 to 90 days. SEO and organic channels usually take longer.",
  },
  {
    q: "Do you work only with ecommerce brands?",
    a: "We primarily work with ecommerce and D2C brands, but our full-funnel approach can also support growth-focused service businesses with clear offers and conversion goals.",
  },
  {
    q: "Can you audit my brand before engagement?",
    a: "Yes. We start with a strategy call and growth audit to identify performance gaps, tracking issues, and the highest-impact optimization opportunities.",
  },
]

const proofPoints = [
  "ROAS improved up to 5.1x",
  "Revenue growth up to 162%",
  "CAC reduced by up to 41%",
  "Conversion rates scaled up to 2x",
]

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-gray-300 px-4 pb-12 pt-28 text-center sm:px-6 md:rounded-b-[80px] md:pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Digital Marketing Case Studies for Ecommerce and D2C Growth
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Explore how we help brands improve ROAS, increase conversion rates, reduce customer acquisition costs, and scale revenue with structured full-funnel marketing systems.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book a Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 md:pt-14">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-800 md:text-base"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 md:pb-24">
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article key={study.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
              <p className="text-sm font-medium text-gray-600">{study.id}</p>
              <h2 className="mt-1 text-2xl font-semibold text-gray-900 md:text-3xl">{study.title}</h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-semibold text-gray-900">The Challenge</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">{study.challenge}</p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-semibold text-gray-900">What We Did</h3>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700 md:text-base">
                    {study.actions.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-semibold text-gray-900">Results</h3>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700 md:text-base">
                    {study.results.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-semibold text-gray-900">Business Impact</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">{study.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            How We Approach Case Study Execution
          </h2>
          <p className="mt-4 text-gray-700">
            We begin with audit-driven diagnostics across paid media, tracking, creative, landing pages, and retention systems. Then we prioritize the highest-impact changes first, track outcomes through structured dashboards, and scale only what improves profitability.
          </p>
          <p className="mt-3 text-gray-700">
            This process helps us avoid vanity metrics and focus on revenue, margin quality, customer acquisition cost, and long-term growth stability.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Industries and Brands We Commonly Support
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
              Ecommerce and Shopify brands
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
              D2C consumer products
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
              Health, wellness, and supplements
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
              Beauty and skincare
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
              Fashion and lifestyle products
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
              Growth-stage brands scaling multi-channel acquisition
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Case Study FAQs
          </h2>
          <div className="mt-5 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <summary className="cursor-pointer list-none pr-6 font-medium text-gray-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </section>

      <section className="bg-gradient-to-br from-gray-300 via-white to-gray-300 px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Ready to Become Our Next Case Study?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          If you want a structured growth system built around performance, conversion, and profitability, let&apos;s map your next 90-day strategy.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Book Your Free Strategy Call
          <MoveUpRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  )
}
