"use client"

import { useState } from "react"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"

import Link from "next/link"
// import type { Metadata } from 'next'
import Head from "next/head"
import { Calendar, CheckCircleIcon, Clock, CreditCard, HeadphonesIcon, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
// import GirlTeamwork from "../../../public/webimg/girlteamwork1.jpg"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    preferredContact: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setError("Please fill in all required fields")
      return
    };

    const nameParts = formData.name.trim().split(/\s+/)
    let firstName = ''
    let lastName = ''
    
    if (nameParts.length === 1) {
      firstName = nameParts[0]
    } else if (nameParts.length > 1) {
      firstName = nameParts.slice(0, -1).join(' ')
      lastName = nameParts[nameParts.length - 1]
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/enquiries", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: "ContactPage",
          enquiryType: formData.inquiryType || "general",
          fullName: formData.name
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit enquiry')
      }

      // Success case
      setIsSubmitted(true)
      
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiryType: "",
        preferredContact: "",
        message: "",
      })

    } catch (err) {
      console.error("Error submitting enquiry:", err)
      setError("Failed to submit your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = () => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("") // Clear error when user starts typing
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md border-0 shadow-2xl">
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your message has been received successfully.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team will respond to your inquiry within 24 hours. We appreciate your interest in CoderCrafter!
            </p>
            <div className="space-y-3">
              <div
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Send Another Message
              </div>
              <div
                variant="outline"
                className="w-full"
                onClick={() => window.location.href = "/"}
              >
                Return to Homepage
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

   return (
  <main className="min-h-screen bg-[#070816] flex flex-col pt-20 justify-center text-white">

    {/* Hero */}
    <section className="py-20 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Get in Touch
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Have questions about our services or need help with your project?
        We’d love to hear from you.
      </p>
    </section>

    <div className="max-w-7xl mx-auto px-4 pb-20 grid lg:grid-cols-3 gap-10">

      {/* LEFT SIDE - FORM */}
      <div className="lg:col-span-2">

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Send us a Message
          </h2>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg mb-6 text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="h-12 px-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="h-12 px-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="h-12 px-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500"
              />

              <input
                type="text"
                placeholder="Subject *"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                className="h-12 px-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <textarea
              placeholder="Your Message *"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={5}
              className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition text-lg font-medium"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>

      {/* RIGHT SIDE - CONTACT INFO */}
      <div className="space-y-6">

        {/* Call */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold">Call Us</h3>
          </div>
          <p className="text-gray-400">+91 89203 19125</p>
        </div>

        {/* Email */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold">Email Us</h3>
          </div>
          <p className="text-gray-400">info@codercrafter.in</p>
        </div>

        {/* Location */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold">Visit Us</h3>
          </div>
          <p className="text-gray-400">
            Bangalore, Karnataka 560001 <br />
            India
          </p>
        </div>

        {/* Working Hours */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold">Working Hours</h3>
          </div>
          <p className="text-gray-400">
            Mon – Fri: 9AM – 8PM <br />
            Sat: 10AM – 6PM <br />
            Sun: Closed
          </p>
        </div>

      </div>

    </div>
  </main>
)
}