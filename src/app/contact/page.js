"use client"

import { useState } from "react"
import Link from "next/link"
import { MoveUpRight } from "lucide-react"

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
  const [activeFaq, setActiveFaq] = useState(0)
  const [status, setStatus] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    websiteUrl: "",
    monthlyRevenueRange: "",
    marketingBudgetRange: "",
    serviceInterestedIn: "",
    goals: "",
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "ContactPage",
          fullName: formData.fullName,
          email: formData.email,
          companyName: formData.companyName,
          website: formData.websiteUrl,
          monthlyRevenueRange: formData.monthlyRevenueRange,
          marketingBudgetRange: formData.marketingBudgetRange,
          serviceInterestedIn: formData.serviceInterestedIn,
          message: formData.goals,
        }),
      })

      if (!response.ok) throw new Error("Failed")
      setStatus("Your message has been sent successfully.")
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        websiteUrl: "",
        monthlyRevenueRange: "",
        marketingBudgetRange: "",
        serviceInterestedIn: "",
        goals: "",
      })
    } catch {
      setStatus("Failed to send. Please try again.")
    }
  }

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

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input name="fullName" value={formData.fullName} onChange={onChange} placeholder="Full Name" required className="h-12 rounded-lg border border-gray-300 px-4 outline-none focus:border-black" />
                <input name="email" value={formData.email} onChange={onChange} placeholder="Email Address" type="email" required className="h-12 rounded-lg border border-gray-300 px-4 outline-none focus:border-black" />
                <input name="companyName" value={formData.companyName} onChange={onChange} placeholder="Company Name" className="h-12 rounded-lg border border-gray-300 px-4 outline-none focus:border-black" />
                <input name="websiteUrl" value={formData.websiteUrl} onChange={onChange} placeholder="Website URL" type="url" className="h-12 rounded-lg border border-gray-300 px-4 outline-none focus:border-black" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <select name="monthlyRevenueRange" value={formData.monthlyRevenueRange} onChange={onChange} className="h-12 rounded-lg border border-gray-300 px-4 outline-none focus:border-black">
                  <option value="">Monthly Revenue Range</option>
                  <option>Below $10K</option>
                  <option>$10K – $50K</option>
                  <option>$50K – $100K</option>
                  <option>$100K+</option>
                </select>
                <select name="marketingBudgetRange" value={formData.marketingBudgetRange} onChange={onChange} className="h-12 rounded-lg border border-gray-300 px-4 outline-none focus:border-black">
                  <option value="">Marketing Budget Range</option>
                  <option>Below $2K / month</option>
                  <option>$2K – $5K / month</option>
                  <option>$5K – $15K / month</option>
                  <option>$15K+ / month</option>
                </select>
              </div>

              <select name="serviceInterestedIn" value={formData.serviceInterestedIn} onChange={onChange} className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-black">
                <option value="">Services Interested In</option>
                {services.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <textarea
                name="goals"
                value={formData.goals}
                onChange={onChange}
                placeholder="Brief Description of Goals"
                rows={6}
                className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-black"
              />

              <p className="text-sm text-gray-600">
                Your information is secure and will never be shared. Read our{" "}
                <Link href="/privacy_policy" className="underline">
                  Privacy Policy
                </Link>
                .
              </p>

              <button type="submit" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Submit Inquiry
              </button>
              {status && <p className="text-sm text-gray-700">{status}</p>}
            </form>
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
              <article key={faq.q} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                >
                  <span className="pr-4 font-medium">{faq.q}</span>
                  <span className="text-xl text-gray-600">{activeFaq === index ? "−" : "+"}</span>
                </button>
                {activeFaq === index && (
                  <p className="px-4 pb-4 text-sm text-gray-700">{faq.a}</p>
                )}
              </article>
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
