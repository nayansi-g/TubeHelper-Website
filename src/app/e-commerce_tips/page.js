import { buildMetadata } from "@/lib/seo"
import { MoveUpRight, PhoneOutgoing } from "lucide-react"

export const metadata = buildMetadata({
  title: "Ecommerce Growth Tips",
  description:
    "Practical, data-driven strategies to help ecommerce and D2C brands increase traffic, improve conversion rates, and grow revenue sustainably.",
  path: "/e-commerce_tips",
  keywords: ["ecommerce growth tips", "D2C growth strategy", "increase ecommerce conversions"],
})

const introPoints = [
  "High-intent traffic",
  "Optimized product pages",
  "Accurate tracking and analytics",
  "Structured paid acquisition",
  "Email and retention automation",
  "Conversion rate optimization",
]

const tips = [
  {
    title: "High-Converting Product Page Optimization",
    description:
      "Your product page is your most important sales asset. A well-optimized page builds trust, answers objections, and makes purchasing easy.",
    bulletsTitle: "Action Points",
    bullets: [
      "Write clear, benefit-focused product descriptions",
      "Use high-quality product images",
      "Add lifestyle visuals showing the product in use",
      "Display customer reviews and ratings",
      "Highlight guarantees and return policies",
      "Use urgency elements when appropriate",
      "Optimize page loading speed",
    ],
    note: "Strong product pages improve both conversion rate and paid ad performance.",
  },
  {
    title: "Scale with Structured Performance Marketing",
    description:
      "Paid acquisition is one of the fastest ways to grow ecommerce revenue when campaigns are structured and optimized correctly.",
    bulletsTitle: "Action Points",
    bullets: [
      "Run Meta and Instagram ad campaigns",
      "Use Google Search and Shopping ads",
      "Test YouTube ads for broader reach",
      "Implement accurate conversion tracking",
      "Optimize campaigns for purchase events",
      "Use lookalike and interest audiences",
      "Continuously test new creatives",
      "Monitor ROAS and CAC closely",
    ],
    note: "Paid ads work best when integrated into a full-funnel growth system.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Small improvements in your website can significantly increase revenue without increasing traffic.",
    bulletsTitle: "Action Points",
    bullets: [
      "Use clear call-to-action buttons",
      "Design for mobile first",
      "Simplify the checkout process",
      "Add exit-intent offers",
      "Improve site navigation",
      "Use trust badges and secure payment indicators",
    ],
    metricsTitle: "Track These Metrics",
    metrics: ["Add-to-cart rate", "Checkout completion rate", "Bounce rate"],
    note: "Optimizing conversions ensures that your traffic generates maximum revenue.",
  },
  {
    title: "Recover Lost Revenue with Automation",
    description:
      "Many ecommerce stores lose revenue through cart abandonment and weak retention systems. Automation helps recover and grow that revenue.",
    bulletsTitle: "Action Points",
    bullets: [
      "Abandoned cart email sequences",
      "Post-purchase follow-ups",
      "Cross-sell and upsell campaigns",
      "Win-back email flows",
      "SMS reminders",
    ],
    note: "Automation increases customer lifetime value (LTV) and improves retention.",
  },
  {
    title: "Make Decisions Based on Data",
    description:
      "Without accurate tracking, scaling your marketing becomes risky. Reliable analytics allow you to understand what is working and where to optimize.",
    bulletsTitle: "Action Points",
    bullets: [
      "Implement GA4 tracking",
      "Configure conversion tracking",
      "Build revenue attribution dashboards",
      "Track key user events",
      "Analyze customer behavior",
    ],
    metricsTitle: "Track These Metrics",
    metrics: ["Return on Ad Spend (ROAS)", "Customer Acquisition Cost (CAC)", "Lifetime Value (LTV)", "Conversion rate"],
    note: "Good data leads to better marketing decisions.",
  },
  {
    title: "Ecommerce SEO for Long-Term Traffic",
    description:
      "Paid ads generate demand quickly. SEO builds long-term traffic and reduces reliance on ad spend.",
    bulletsTitle: "Action Points",
    bullets: [
      "Optimize product titles and meta descriptions",
      "Improve category page SEO",
      "Publish helpful blog content",
      "Build strong internal linking",
      "Fix technical SEO issues",
      "Improve page speed",
      "Target high-intent product keywords",
    ],
    note: "Strong SEO creates sustainable traffic and lower acquisition costs over time.",
  },
  {
    title: "Increase Repeat Purchases",
    description:
      "Customer acquisition is expensive. Retention improves profitability and compounds growth.",
    bulletsTitle: "Action Points",
    bullets: [
      "Implement loyalty programs",
      "Launch referral programs",
      "Send personalized offers",
      "Run retargeting campaigns",
      "Provide exclusive member discounts",
    ],
    note: "Increasing repeat purchases directly increases customer lifetime value.",
  },
  {
    title: "Mobile-First Ecommerce Optimization",
    description:
      "Most ecommerce traffic now comes from mobile devices. A poor mobile experience significantly reduces conversions.",
    bulletsTitle: "Action Points",
    bullets: [
      "Improve page loading speed",
      "Simplify mobile checkout",
      "Use clear navigation",
      "Add thumb-friendly call-to-action buttons",
      "Reduce form complexity",
    ],
    note: "A smooth mobile experience improves both conversion rate and cart completion.",
  },
  {
    title: "A/B Testing for Continuous Growth",
    description:
      "Successful ecommerce brands constantly test and improve. Small experiments often lead to meaningful revenue gains.",
    bulletsTitle: "Test Elements Like",
    bullets: [
      "Headlines",
      "Product images",
      "Pricing strategies",
      "Promotional offers",
      "Ad creatives",
      "Landing pages",
    ],
    note: "Growth comes from continuous experimentation and data-driven decisions.",
  },
]

const audience = [
  "Shopify store owners",
  "D2C brands",
  "Scaling ecommerce startups",
  "Founders running paid acquisition",
  "Growth-focused online businesses",
]

export default function EcommerceTipsPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden rounded-b-[50px] bg-[#dff3ef] px-4 pb-14 pt-32 text-center sm:px-6 md:rounded-b-[80px] md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/50 blur-2xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/50 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Ecommerce Growth Tips to Scale Your Online Store Profitably
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700 sm:text-lg">
            Practical, data-driven strategies to help ecommerce and D2C brands increase traffic, improve conversion rates, and grow revenue sustainably.
          </p>
          <a
            href="https://wa.me/919897165137"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book Your Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 md:pt-14">
        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Introduction</h2>
          <p className="mt-4 text-gray-700">Launching an ecommerce store is only the first step.</p>
          <p className="mt-3 text-gray-700">
            Scaling profitably requires a complete growth system that connects traffic, conversion, retention, and data.
          </p>
          <p className="mt-3 text-gray-700">To grow consistently, your store needs:</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {introPoints.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-700">
            Below are proven ecommerce growth strategies used by brands that scale successfully.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 md:pb-24">
        <div className="space-y-8">
          {tips.map((tip, index) => (
            <article key={tip.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-medium text-gray-600">Tip #{index + 1}</p>
              <h2 className="mt-1 text-2xl font-semibold text-gray-900 md:text-3xl">{tip.title}</h2>
              <p className="mt-4 text-gray-700">{tip.description}</p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="text-base font-semibold text-gray-900">{tip.bulletsTitle ?? "Action Points"}</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                    {tip.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  {tip.metrics && (
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <h3 className="text-base font-semibold text-gray-900">{tip.metricsTitle ?? "Track These Metrics"}</h3>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                        {tip.metrics.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tip.note && (
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <h3 className="text-base font-semibold text-gray-900">Key Takeaway</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">{tip.note}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Who Should Follow These Ecommerce Tips?</h2>
          <p className="mt-4 text-gray-700">These strategies are useful for:</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            If your goal is predictable, profitable growth, these practices form the foundation.
          </p>
        </section>
      </section>

      <section className="bg-gradient-to-br from-[#dff3ef] via-white to-[#eaf9f5] px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Want Help Scaling Your Ecommerce Store?</h2>
        <p className="mx-auto mt-4 max-w-3xl text-gray-700">
          If you&apos;d like expert support implementing these strategies, TubeHelper helps brands grow through:
        </p>
        <ul className="mx-auto mt-6 max-w-5xl list-disc space-y-2 pl-5 text-left text-sm text-gray-700 sm:text-base">
          <div className="flex flex-wrap gap-2 md:gap-6 justify-start md:justify-center items-center"><li>Performance marketing systems</li>
          <li>Conversion optimization</li>
          <li>Analytics and tracking infrastructure</li>
          <li>Marketing automation</li>
          <li>Full-funnel ecommerce growth strategies</li></div>
        </ul>
        <a
          href="tel:+919897165137"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          <PhoneOutgoing className="h-5 w-5" /> Call Now
        </a>
      </section>
    </main>
  )
}
