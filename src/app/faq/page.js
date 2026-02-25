import { buildMetadata } from "@/lib/seo"

const faqSections = [
  {
    title: "General Questions",
    questions: [
      {
        q: "What services does your digital marketing agency offer?",
        a: "We provide comprehensive digital marketing services including performance marketing (Meta, Google & YouTube Ads), ecommerce growth strategy, conversion rate optimization (CRO), SEO, content marketing, analytics & automation setup, and brand awareness campaigns. Our approach focuses on measurable growth and long-term scalability.",
      },
      {
        q: "Who do you work with?",
        a: "We work with ecommerce brands, D2C businesses, startups, and service-based companies looking to scale their online presence. Most of our clients are growth-focused brands ready to invest in data-driven marketing strategies.",
      },
      {
        q: "Do you work with international clients?",
        a: "Yes. We serve clients globally and manage campaigns across multiple regions and time zones.",
      },
      {
        q: "How do I get started?",
        a: "You can book a strategy call through our website. We begin with an audit to understand your current marketing performance and identify growth opportunities.",
      },
    ],
  },
  {
    title: "Performance Marketing FAQs",
    questions: [
      {
        q: "What is performance marketing?",
        a: "Performance marketing is a results-driven approach to digital advertising where campaigns are optimized for measurable outcomes such as sales, leads, or return on ad spend (ROAS).",
      },
      {
        q: "Which platforms do you manage?",
        bullets: [
          "Meta (Facebook & Instagram Ads)",
          "Google Ads (Search & Shopping)",
          "YouTube Ads",
        ],
      },
      {
        q: "Do you guarantee ROAS or revenue results?",
        a: "No ethical agency guarantees specific results. Campaign performance depends on product-market fit, competition, pricing, budget, and customer demand. We focus on optimization and data-driven decision making.",
      },
      {
        q: "How long does it take to see results from paid ads?",
        a: "Most campaigns begin generating performance data within the first few weeks. Scaling and optimization typically occur within 30–90 days.",
      },
    ],
  },
  {
    title: "Ecommerce Growth & CRO FAQs",
    questions: [
      {
        q: "What is ecommerce growth optimization?",
        a: "Ecommerce growth optimization involves improving store performance through CRO, funnel optimization, retention strategy, and revenue analysis to increase profitability without simply increasing ad spend.",
      },
      {
        q: "What is Conversion Rate Optimization (CRO)?",
        a: "CRO is the process of improving website elements such as product pages, checkout flow, and messaging to increase the percentage of visitors who convert into customers.",
      },
      {
        q: "How long does CRO take to show results?",
        a: "Initial insights may appear within 2–4 weeks. Significant improvements typically occur within 60–90 days depending on traffic volume and testing cycles.",
      },
      {
        q: "Do you only work with Shopify?",
        a: "While we specialize in Shopify growth strategies, we can also support other ecommerce platforms.",
      },
    ],
  },
  {
    title: "Organic Growth & SEO FAQs",
    questions: [
      {
        q: "What is SEO and why is it important?",
        a: "Search Engine Optimization (SEO) is the process of improving your website’s visibility in search engine results. Strong SEO drives organic traffic, reduces ad dependency, and builds long-term brand authority.",
      },
      {
        q: "How long does SEO take to work?",
        a: "SEO is a long-term strategy. Noticeable improvements usually appear within 3–6 months depending on competition and website authority.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No legitimate SEO agency can guarantee specific rankings. We focus on sustainable optimization strategies that improve visibility and conversions.",
      },
      {
        q: "What is content marketing?",
        a: "Content marketing involves creating high-quality, SEO-optimized content that attracts, educates, and converts your target audience.",
      },
    ],
  },
  {
    title: "Analytics & Automation FAQs",
    questions: [
      {
        q: "Why is proper tracking important?",
        a: "Without accurate tracking, marketing decisions are based on incomplete or incorrect data. Proper tracking ensures reliable attribution and smarter budget allocation.",
      },
      {
        q: "What is GA4 setup?",
        a: "GA4 (Google Analytics 4) is the latest analytics platform from Google. It provides advanced event-based tracking and improved cross-platform attribution.",
      },
      {
        q: "What is marketing automation?",
        a: "Marketing automation uses workflows, triggers, and behavioral data to automatically nurture leads, recover abandoned carts, and improve retention.",
      },
      {
        q: "Do I need custom dashboards?",
        a: "Yes. Centralized reporting dashboards provide clearer insights across ad platforms, ecommerce stores, and analytics tools in one place.",
      },
    ],
  },
  {
    title: "Brand Awareness FAQs",
    questions: [
      {
        q: "What is brand awareness marketing?",
        a: "Brand awareness marketing focuses on increasing visibility, recognition, and engagement among your target audience.",
      },
      {
        q: "Does brand awareness generate revenue?",
        a: "While awareness campaigns focus on reach and engagement, they reduce long-term acquisition costs and improve overall conversion performance.",
      },
      {
        q: "How do you measure brand awareness success?",
        a: "We measure reach, impressions, engagement rate, video completion rate, assisted conversions, and audience growth.",
      },
    ],
  },
  {
    title: "Pricing & Process FAQs",
    questions: [
      {
        q: "How much do your services cost?",
        a: "Pricing depends on the scope of work, ad spend, and service type. We provide customized proposals after conducting a strategy call.",
      },
      {
        q: "Do you offer monthly retainers?",
        a: "Yes. Most of our services operate on a monthly retainer basis to allow proper optimization and scaling.",
      },
      {
        q: "Is there a minimum commitment?",
        a: "Many of our services require a minimum commitment period to ensure adequate time for testing and optimization.",
      },
      {
        q: "Do you require long-term contracts?",
        a: "We offer flexible engagement options depending on the service scope and growth stage.",
      },
    ],
  },
  {
    title: "Technical & Support FAQs",
    questions: [
      {
        q: "Will I have access to my accounts?",
        a: "Yes. Clients retain full ownership of ad accounts, analytics, and platforms.",
      },
      {
        q: "How do you report performance?",
        a: "We provide structured performance reporting through dashboards and regular review calls.",
      },
      {
        q: "What makes your agency different?",
        bullets: [
          "Data-driven decision making",
          "Full-funnel optimization",
          "Profitability over vanity metrics",
          "Transparent reporting",
          "Long-term growth systems",
        ],
      },
    ],
  },
]

export const metadata = buildMetadata({
  title: "Digital Marketing FAQ",
  description:
    "Answers to common questions about TubeHelper services including performance marketing, ecommerce growth, SEO, analytics, and automation.",
  path: "/faq",
  keywords: ["digital marketing faq", "ecommerce marketing questions", "seo agency faq"],
})

export default function FAQPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-gray-100 px-4 pb-12 pt-28 text-center sm:px-6 md:rounded-b-[80px] md:pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions About Our Digital Marketing Services
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Welcome to our FAQ page. Here you&apos;ll find answers to common questions about our performance marketing, ecommerce growth, SEO, analytics, and brand awareness services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <section key={section.title} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">{section.title}</h2>
              <div className="space-y-3">
                {section.questions.map((item, itemIndex) => (
                  <details key={`${sectionIndex}-${itemIndex}`} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50/70">
                    <summary className="flex cursor-pointer items-center justify-between px-4 py-4 pr-12 text-left font-medium sm:px-5">
                      {item.q}
                    </summary>
                    <div className="px-4 pb-5 sm:px-5">
                      {item.a && <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{item.a}</p>}
                      {item.bullets && (
                        <ul className="mt-3 space-y-2 text-sm text-gray-700 sm:text-base">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>• {bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-300 via-white to-gray-300 px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Still Have Questions?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          Reach out to us at info@tubehelper.in or connect@tubehelper.in, or call +91 9897165137.
        </p>
        <a
          href="/contact"
          className="mt-7 inline-block rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Contact Us
        </a>
      </section>
    </main>
  )
}
