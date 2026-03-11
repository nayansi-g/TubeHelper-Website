"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import ThankYouModal from "@/components/ThankYouModal"

const SCRIPT_URL =
  process.env.NEXT_PUBLIC_CONTACT_FORM_URL ||
  "https://script.google.com/macros/s/AKfycbxWb33jkYVZDqGpN6GTj_KLoywIXbwA8RdzM-CncjNmhrAxwcQCENNfsK7xvZuvFMqeOQ/exec"

const serviceOptions = ["$1000 - $2000", "$2000 - $3000", "$3000 - $4000", "$4000 - $5000"]

async function sendThankYouEmail(payload) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = await res.json().catch(() => null)
  if (!res.ok || !data?.success) {
    throw new Error(data?.error || "Failed to send confirmation email.")
  }

  return data
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    website: "",
    service: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const formBody = new URLSearchParams()
      formBody.append("fullName", formData.fullName)
      formBody.append("email", formData.email)
      formBody.append("mobile", formData.mobile)
      formBody.append("website", formData.website)
      formBody.append("service", formData.service)

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      })

      await sendThankYouEmail({
        email: formData.email,
        name: formData.fullName,
        mobile: formData.mobile,
        website: formData.website,
        service: formData.service,
      })

      setSuccess(true)
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        website: "",
        service: "",
      })
    } catch (err) {
      console.error("Error submitting form", err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className=" bg-[linear-gradient(180deg,#f8f9ff_0%,#ffffff_50%,#f8f9ff_100%)] px-3 py-20 md:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="hidden md:block">
          <h1 className="mb-6 text-3xl font-semibold leading-tight text-gray-900 lg:text-5xl">
            Performance Marketing & Ecommerce Growth Experts
          </h1>

          <p className="mb-4 leading-relaxed text-gray-600">
            We help Shopify and ecommerce brands scale revenue using performance marketing, CRO, and data-driven growth
            strategies.
          </p>

          <p className="mb-4 leading-relaxed text-gray-600">
            Whether you&apos;re looking to improve ROAS, reduce customer acquisition costs, or build a scalable marketing
            system, our team is ready to help.
          </p>

          <p className="leading-relaxed text-gray-500">
            Fill out the form and our growth team will get back to you within 24 hours.
          </p>

          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>Email: contact@tubehelper.in</p>
            <p>Phone: +91 9897165137</p>
            <p>Address: A-83, First Floor, Sector 63, Noida</p>
            <p>Nearest metro station is Sector 62</p>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d9dbf6] bg-white p-6 shadow-[0_20px_45px_rgba(15,29,86,0.1)] md:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">Get a Free Growth Consultation</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
            />

            <input
              type="url"
              name="website"
              placeholder="Website Link"
              value={formData.website}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
            />

            <div className="relative">
              <select
                name="service"
                value={formData.service}
                required
                onChange={handleChange}
                className="w-full appearance-none rounded-xl border border-gray-300 bg-white p-3 pr-10 text-gray-900 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
              >
                <option value="" disabled>
                  Select Budget
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <ChevronDown />
              </span>
            </div>

            {error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>
            ) : null}

            <ThankYouModal open={success} onClose={() => setSuccess(false)} />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-[#ef1f56] disabled:cursor-not-allowed disabled:bg-[#ff2e63]/70"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
