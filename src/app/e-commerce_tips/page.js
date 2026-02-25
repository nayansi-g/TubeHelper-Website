import Link from "next/link"
import { MoveUpRight } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "E-commerce Growth Tips",
  description:
    "Data-driven ecommerce tips to increase conversion rates, improve retention, and scale online store revenue.",
  path: "/e-commerce_tips",
  keywords: ["ecommerce tips", "shopify conversion optimization", "ecommerce growth strategy"],
})

const introPoints = [
  "High-converting traffic",
  "Optimized product pages",
  "Accurate tracking",
  "Smart paid advertising",
  "Email automation",
  "Conversion rate optimization",
]

const tips = [
  {
    title: "High-Converting Product Page Optimization",
    description:
      "Your product page is your most important sales asset. To increase ecommerce conversion rate, optimize every element for clarity, trust, and purchase intent.",
    bullets: [
      "Use benefit-driven product descriptions",
      "Add high-resolution product images",
      "Include lifestyle visuals",
      "Display customer reviews",
      "Highlight guarantees and return policies",
      "Add urgency elements (limited stock, offers)",
      "Optimize page speed",
    ],
    keywords: [
      "Ecommerce product page optimization",
      "Increase ecommerce conversion rate",
      "High-converting product pages",
    ],
    link: { href: "/services/e-commerce_growth", label: "Conversion Optimization Services" },
  },
  {
    title: "Scale with Performance Marketing Campaigns",
    description:
      "Paid ads are one of the fastest ways to grow ecommerce revenue when tracking, audience targeting, and creative testing are handled correctly.",
    bullets: [
      "Meta and Instagram Ads",
      "Google Search Ads",
      "Google Shopping",
      "YouTube Ads",
      "Install proper conversion tracking",
      "Optimize for purchase events",
      "Use lookalike audiences",
      "Continuously test creatives",
      "Monitor ROAS and CAC",
    ],
    keywords: [
      "Ecommerce paid ads strategy",
      "Performance marketing for ecommerce",
      "Increase ROAS ecommerce",
    ],
  },
  {
    title: "Conversion Rate Optimization (CRO) Strategies",
    description:
      "Small improvements in your funnel can create significant revenue impact. CRO reduces wasted traffic and improves profitability.",
    bullets: [
      "Clear call-to-action buttons",
      "Mobile-first design",
      "Faster checkout process",
      "Exit-intent offers",
      "Simplified navigation",
      "Trust badges and secure payment icons",
    ],
    monitor: [
      "Add-to-cart rate",
      "Checkout completion rate",
      "Bounce rate",
    ],
    keywords: [
      "Ecommerce conversion rate optimization",
      "Improve Shopify conversion rate",
      "Reduce cart abandonment",
    ],
  },
  {
    title: "Recover Lost Revenue with Automation",
    description:
      "Most ecommerce stores leave revenue on the table through cart abandonment and weak retention. Automation helps recover this predictably.",
    bullets: [
      "Abandoned cart email flows",
      "Post-purchase sequences",
      "Cross-sell and upsell emails",
      "Win-back campaigns",
      "SMS reminders",
    ],
    extra:
      "Automation increases customer lifetime value (LTV) and improves retention.",
    keywords: [
      "Ecommerce email marketing automation",
      "Abandoned cart recovery strategy",
      "Increase customer lifetime value",
    ],
  },
  {
    title: "Make Decisions Based on Data",
    description:
      "Without accurate tracking, scaling becomes risky. Data quality determines how confidently you can optimize spend and performance.",
    bullets: [
      "GA4 tracking setup",
      "Conversion tracking",
      "Revenue attribution dashboards",
      "Event tracking",
      "Customer behavior analytics",
    ],
    monitor: [
      "Return on ad spend (ROAS)",
      "Customer acquisition cost (CAC)",
      "Lifetime value (LTV)",
      "Conversion rate",
    ],
    keywords: [
      "GA4 setup for ecommerce",
      "Ecommerce analytics tracking",
      "Conversion tracking setup",
    ],
    link: { href: "/services/analytics_&_automation", label: "Analytics and Automation Services" },
  },
  {
    title: "Ecommerce SEO for Sustainable Traffic",
    description:
      "Paid ads create immediate demand. SEO builds long-term authority and lower-cost acquisition over time.",
    bullets: [
      "Product page titles and meta descriptions",
      "Category pages",
      "Blog content",
      "Internal linking",
      "Technical SEO",
      "Page speed",
      "Target high-intent product keywords",
    ],
    keywords: [
      "Ecommerce SEO strategy",
      "SEO for online stores",
      "Increase organic traffic ecommerce",
    ],
    link: { href: "/services/organic_growth", label: "Organic Growth Services" },
  },
  {
    title: "Increase Repeat Purchases",
    description:
      "Customer acquisition is expensive. Retention improves margins and compounds revenue over time.",
    bullets: [
      "Loyalty programs",
      "Referral programs",
      "Personalized offers",
      "Retargeting campaigns",
      "Exclusive member discounts",
    ],
    extra:
      "Improving retention directly increases lifetime value.",
    keywords: [
      "Ecommerce customer retention strategy",
      "Increase repeat purchases",
      "Ecommerce loyalty program tips",
    ],
  },
  {
    title: "Mobile-First Ecommerce Optimization",
    description:
      "Most ecommerce traffic is mobile. Mobile performance directly affects conversion rate and cart completion.",
    bullets: [
      "Fast loading speed",
      "Mobile-optimized checkout",
      "Easy navigation",
      "Thumb-friendly CTA buttons",
      "Simplified forms",
    ],
    keywords: [
      "Mobile ecommerce optimization",
      "Improve mobile conversion rate",
      "Mobile-friendly online store",
    ],
  },
  {
    title: "A/B Testing for Ecommerce Growth",
    description:
      "Never assume and always test. Continuous experimentation is the fastest path to steady revenue gains.",
    bullets: [
      "Headlines",
      "Product images",
      "Pricing strategies",
      "Offers",
      "Ad creatives",
      "Landing pages",
    ],
    extra: "Growth is driven by continuous experimentation.",
    keywords: [
      "Ecommerce A/B testing strategy",
      "Optimize ecommerce funnel",
      "Increase ecommerce revenue",
    ],
  },
]

const audience = [
  "Shopify store owners",
  "D2C brands",
  "Scaling ecommerce startups",
  "Founders running paid ads",
  "Growth-focused online businesses",
]

export default function EcommerceTipsPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-gray-300 px-4 pb-12 pt-28 text-center sm:px-6 md:rounded-b-[80px] md:pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            E-commerce Growth Tips to Scale Your Online Store Profitably
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Actionable, data-driven ecommerce strategies to increase traffic, improve conversion rates, and maximize revenue.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book a Free Growth Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 md:pt-14">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Introduction</h2>
          <p className="mt-4 text-gray-700">
            Running a successful ecommerce business requires more than launching a store.
          </p>
          <p className="mt-3 text-gray-700">To scale profitably, you need:</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {introPoints.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-gray-700">
            On this page, we share proven ecommerce tips used by growth-focused brands to increase revenue and build sustainable online businesses.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 md:pb-24">
        <div className="space-y-8">
          {tips.map((tip, index) => (
            <article key={tip.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
              <p className="text-sm font-medium text-gray-600">Tip #{index + 1}</p>
              <h2 className="mt-1 text-2xl font-semibold text-gray-900 md:text-3xl">{tip.title}</h2>
              <p className="mt-4 text-gray-700">{tip.description}</p>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-base font-semibold text-gray-900">Action Points</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700 md:text-base">
                    {tip.bullets.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-base font-semibold text-gray-900">SEO Keywords</h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700 md:text-base">
                      {tip.keywords.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {tip.monitor && (
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <h3 className="text-base font-semibold text-gray-900">Track These Metrics</h3>
                      <ul className="mt-3 space-y-2 text-sm text-gray-700 md:text-base">
                        {tip.monitor.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {tip.extra && <p className="mt-5 text-gray-700">{tip.extra}</p>}

              {tip.link && (
                <Link
                  href={tip.link.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
                >
                  {tip.link.label}
                  <MoveUpRight className="h-4 w-4" />
                </Link>
              )}
            </article>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Who Should Follow These Ecommerce Tips?
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 md:text-base">
                {item}
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="bg-gradient-to-br from-gray-300 via-white to-gray-300 px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Want Help Scaling Your Ecommerce Store?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          If you want expert help implementing these ecommerce growth strategies, our team specializes in performance marketing, conversion optimization, analytics and tracking, automation systems, and full-funnel ecommerce growth.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Book Your Free Ecommerce Growth Consultation
          <MoveUpRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  )
}
