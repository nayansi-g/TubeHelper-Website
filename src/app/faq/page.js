import Link from "next/link"
import { MoveUpRight, PhoneOutgoing } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about how TubeHelper helps ecommerce and D2C brands scale through performance marketing, growth optimization, SEO, analytics, and brand visibility systems.",
  path: "/faq",
  keywords: ["TubeHelper FAQ", "ecommerce marketing questions", "performance marketing FAQ"],
})

const faqSections = [
  {
    title: "General Questions",
    questions: [
      {
        q: "What services does TubeHelper offer?",
        a: "We help ecommerce and D2C brands grow through a structured marketing system that includes:",
        bullets: [
          "Performance marketing (Meta, Google, YouTube)",
          "Ecommerce growth & conversion optimization",
          "SEO and organic growth strategies",
          "Analytics, tracking, and automation systems",
          "Brand awareness and audience expansion",
        ],
        after: "Our focus is building scalable marketing systems that drive predictable revenue.",
      },
      {
        q: "Who do you work with?",
        a: "We primarily work with:",
        bullets: [
          "Ecommerce brands",
          "Shopify stores",
          "D2C businesses",
          "Founders preparing to scale",
          "Marketing teams focused on performance",
        ],
        after: "Most of our clients are brands already generating revenue and looking to grow more efficiently.",
      },
      {
        q: "Do you work with international clients?",
        a: "Yes. We work with brands across multiple countries and markets, depending on the business model and growth goals.",
      },
      {
        q: "How do I get started?",
        a: "The first step is booking a strategy call.",
        after:
          "During this call we review your current marketing setup, identify growth opportunities, and recommend the best approach for scaling your brand.",
      },
    ],
  },
  {
    title: "Performance Marketing FAQs",
    questions: [
      {
        q: "What is performance marketing?",
        a: "Performance marketing focuses on measurable results such as revenue, conversions, and customer acquisition cost.",
        after: "Instead of paying for visibility alone, campaigns are optimized for real business outcomes.",
      },
      {
        q: "Which platforms do you manage?",
        a: "We manage performance campaigns across:",
        bullets: [
          "Meta (Facebook & Instagram)",
          "Google Ads (Search, Shopping, Performance Max)",
          "YouTube Ads",
        ],
        after: "Our approach combines multiple platforms into one structured acquisition system.",
      },
      {
        q: "Do you guarantee ROAS or revenue results?",
        a: "No credible agency can guarantee results.",
        after:
          "What we guarantee is a structured process built around data, testing, and optimization to improve performance over time.",
      },
      {
        q: "How long does it take to see results from paid ads?",
        a: "Initial performance signals often appear within the first few weeks.",
        after: "However, stable and scalable results typically take 60-90 days as campaigns are tested and optimized.",
      },
    ],
  },
  {
    title: "Ecommerce Growth & CRO FAQs",
    questions: [
      {
        q: "What is ecommerce growth optimization?",
        a: "Ecommerce growth optimization focuses on improving your store's performance by increasing conversion rates, improving average order value, and strengthening your customer funnel.",
      },
      {
        q: "What is Conversion Rate Optimization (CRO)?",
        a: "CRO is the process of improving your website so more visitors become customers.",
        after: "This includes optimizing product pages, checkout flows, messaging, and user experience.",
      },
      {
        q: "How long does CRO take to show results?",
        a: "Early improvements can appear within a few weeks, but meaningful growth usually takes 1-3 months of structured testing.",
      },
      {
        q: "Do you only work with Shopify?",
        a: "Shopify is our primary platform, but we can also work with other ecommerce platforms depending on the project.",
      },
    ],
  },
  {
    title: "Organic Growth & SEO FAQs",
    questions: [
      {
        q: "What is SEO and why is it important?",
        a: "SEO (Search Engine Optimization) helps your website appear in search results when potential customers are looking for your products or services.",
        after: "Strong SEO creates long-term traffic that doesn't rely on paid ads.",
      },
      {
        q: "How long does SEO take to work?",
        a: "SEO is a long-term strategy. Most brands start seeing meaningful improvements in 3-6 months, depending on competition and website authority.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No agency can guarantee specific rankings.",
        after:
          "Our goal is to build strong SEO foundations that increase visibility, authority, and qualified traffic over time.",
      },
      {
        q: "What is content marketing?",
        a: "Content marketing involves creating helpful, valuable content that attracts visitors through search engines and builds trust with your audience.",
        after: "Examples include blogs, guides, landing pages, and educational resources.",
      },
    ],
  },
  {
    title: "Analytics & Automation FAQs",
    questions: [
      {
        q: "Why is proper tracking important?",
        a: "Accurate tracking ensures you know exactly where your revenue is coming from.",
        after: "Without it, marketing decisions become guesswork and scaling becomes difficult.",
      },
      {
        q: "What is GA4 setup?",
        a: "GA4 setup involves configuring Google Analytics to track user behavior, conversions, and customer journeys across your website and marketing channels.",
      },
      {
        q: "What is marketing automation?",
        a: "Marketing automation uses tools and workflows to automatically engage customers through email, SMS, and CRM systems.",
        after: "This helps improve retention and increase lifetime value.",
      },
      {
        q: "Do I need custom dashboards?",
        a: "Custom dashboards make it easier to understand your marketing performance by combining data from multiple platforms into one clear view.",
      },
    ],
  },
  {
    title: "Brand Awareness FAQs",
    questions: [
      {
        q: "What is brand awareness marketing?",
        a: "Brand awareness marketing focuses on increasing visibility and recognition for your brand among potential customers.",
        after: "This often happens through social platforms, video ads, and multi-channel campaigns.",
      },
      {
        q: "Does brand awareness generate revenue?",
        a: "Yes. Strong brand visibility improves trust, increases conversion rates, and lowers long-term acquisition costs.",
      },
      {
        q: "How do you measure brand awareness success?",
        a: "Brand awareness is measured through metrics such as reach, engagement, audience growth, and how awareness campaigns contribute to conversions over time.",
      },
    ],
  },
  {
    title: "Pricing & Process FAQs",
    questions: [
      {
        q: "How much do your services cost?",
        a: "Pricing depends on the scope of work, business goals, and marketing channels involved.",
        after: "We discuss pricing after understanding your business during the strategy call.",
      },
      {
        q: "Do you offer monthly retainers?",
        a: "Yes. Most of our services operate on monthly retainers because growth requires continuous testing and optimization.",
      },
      {
        q: "Is there a minimum commitment?",
        a: "Typically yes. Marketing systems need time to produce meaningful results.",
        after: "We usually recommend a minimum engagement period to ensure proper testing and optimization.",
      },
      {
        q: "Do you require long-term contracts?",
        a: "We focus on building long-term partnerships, but we aim to keep our engagement structures flexible and transparent.",
      },
    ],
  },
  {
    title: "Technical & Support FAQs",
    questions: [
      {
        q: "Will I have access to my accounts?",
        a: "Yes. You always maintain ownership and access to your advertising accounts, analytics platforms, and other tools.",
      },
      {
        q: "How do you report performance?",
        a: "We provide structured reporting that focuses on key metrics such as revenue, ROAS, CAC, and conversion performance.",
      },
      {
        q: "What makes TubeHelper different?",
        a: "Most agencies focus only on running campaigns.",
        after:
          "At TubeHelper, we focus on building complete growth systems that connect acquisition, conversion, retention, and analytics into one scalable framework.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden rounded-b-[50px] bg-[#dff3ef] px-4 pb-14 pt-32 text-center sm:px-6 md:rounded-b-[80px] md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/50 blur-2xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/50 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Welcome to our FAQ page.
          </h1>
          <p className="mx-auto mt-2 max-w-3xl text-gray-700">
             Here you&apos;ll find answers to common questions about how TubeHelper helps ecommerce and D2C brands scale through performance marketing, growth optimization, SEO, analytics, and brand visibility systems.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-gray-700">
            If you can&apos;t find what you&apos;re looking for, feel free to reach out.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Contact Us
              <MoveUpRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919897165137"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
            >
              <PhoneOutgoing className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <section
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
            >
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">{section.title}</h2>
              <div className="space-y-3">
                {section.questions.map((item, itemIndex) => (
                  <details
                    key={`${sectionIndex}-${itemIndex}`}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50/70"
                  >
                    <summary className="group flex cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left font-medium sm:px-5">
                      <span className="text-gray-900">{item.q}</span>
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-gray-500">
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:block">-</span>
                      </span>
                    </summary>
                    <div className="px-4 pb-5 sm:px-5">
                      {item.a && (
                        <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{item.a}</p>
                      )}
                      {item.bullets && (
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 sm:text-base">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      {item.after && (
                        <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                          {item.after}
                        </p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#dff3ef] via-white to-[#eaf9f5] px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Still Have Questions?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          If you can&apos;t find what you&apos;re looking for, feel free to reach out.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Contact Us
            <MoveUpRight className="h-4 w-4" />
          </Link>
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
