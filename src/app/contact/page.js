import Link from "next/link"
import { MoveUpRight } from "lucide-react"
import ContactFormClient from "@/components/ContactFormClient"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact TubeHelper",
  description:
    "Contact TubeHelper for performance marketing, ecommerce growth, SEO, analytics, and automation support.",
  path: "/contact",
  keywords: ["contact digital marketing agency", "book strategy call", "ecommerce growth consultation"],
})

const services = [
  "Performance Marketing",
  "Ecommerce Growth & CRO",
  "SEO & Content Marketing",
  "Analytics & Automation Setup",
  "Brand Awareness Campaigns",
]

const processSteps = [
  {
    title: "Initial Review",
    description: "We analyze your website, funnel, and current marketing performance.",
  },
  {
    title: "Strategy Call",
    description: "We discuss your goals, challenges, and growth opportunities.",
  },
  {
    title: "Custom Growth Plan",
    description: "We present a structured roadmap tailored to your business.",
  },
  {
    title: "Implementation & Scaling",
    description: "We launch, optimize, and scale with performance tracking.",
  },
]

const faqs = [
  {
    q: "How long does it take to receive a response?",
    a: "We typically respond within 24–48 business hours.",
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer a complimentary strategy call to evaluate your growth opportunities.",
  },
  {
    q: "What information should I prepare before contacting you?",
    a: "It helps to know your monthly revenue, current ad spend, marketing goals, and challenges.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes, provided there is a clear growth plan and marketing budget.",
  },
]

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-blue-100 px-4 pb-12 pt-28 text-center sm:px-6 md:rounded-b-[80px] md:pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Contact Us – Let&apos;s Grow Your Business
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Ready to scale with performance marketing, ecommerce growth, SEO, analytics, or brand awareness strategies? Let&apos;s build your growth system.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Book a Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold md:text-3xl">Introduction</h2>
          <p className="mt-4 text-gray-700">
            At TubeHelper, we help brands grow through data-driven digital marketing strategies.
          </p>
          <p className="mt-3 text-gray-700">Whether you&apos;re looking for:</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-gray-700">
            Our team is ready to create a custom growth plan tailored to your business.
          </p>
          <p className="mt-2 text-gray-700">
            Fill out the form below and our team will get back to you within 24–48 hours.
          </p>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-2 md:p-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Tell Us About Your Business</h2>
            <ContactFormClient />
            <p className="mt-4 text-sm text-gray-600">
              Your information is secure and will never be shared. Read our{" "}
              <Link href="/privacy_policy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Prefer to Reach Us Directly?</h3>
              <div className="mt-4 space-y-2 text-gray-700">
                <p>📧 info@tubehelper.in</p>
                <p>📧 connect@tubehelper.in</p>
                <p>📞 +91 9897165137</p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Business Hours</h3>
              <p className="mt-3 text-gray-700">
                Monday – Friday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="mt-3 text-gray-700">Serving clients globally</p>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold md:text-3xl">Why Brands Partner With Us</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Data-driven growth strategies",
              "Full-funnel optimization",
              "Transparent reporting",
              "ROI-focused campaigns",
              "Scalable marketing systems",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-gray-700">We don&apos;t just run campaigns, we build long-term growth engines.</p>
        </section>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold md:text-3xl">Our Process After You Contact Us</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-500">0{index + 1}</p>
                <h3 className="mt-1 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.q} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <summary className="cursor-pointer px-4 py-4 pr-12 font-medium">{faq.q}</summary>
                <p className="px-4 pb-4 text-sm text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </section>

      <section className="bg-gradient-to-br from-[#e6efff] via-white to-[#edf3ff] px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-semibold">Ready to Scale Smarter?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          Let&apos;s build a marketing strategy focused on profitability, scalability, and long-term growth.
        </p>
        <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
          Book Your Free Strategy Call
          <MoveUpRight className="h-4 w-4" />
        </button>
      </section>
    </main>
  )
}
