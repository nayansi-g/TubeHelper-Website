"use client";

import { useRef, useState } from "react";

const SCRIPT_URL =
  process.env.NEXT_PUBLIC_CONTACT_FORM_URL ||
  "https://script.google.com/macros/s/AKfycbyU6g5z4OOSF3-etayTrHtYfHFiVhp6l3lwUxM9sgAhIT1o8uRoAwJeQuppATYE864E/exec";

export default function ContactFormClient() {
  const submittedRef = useRef(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    websiteUrl: "",
    monthlyRevenueRange: "",
    marketingBudgetRange: "",
    serviceInterestedIn: "",
    goals: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {
    setLoading(true);
    setStatus("");
    submittedRef.current = true;
  };

  const onLoad = () => {
    if (!submittedRef.current) return;
    submittedRef.current = false;
    setLoading(false);
    setStatus("Your message has been sent successfully.");
    setFormData({
      fullName: "",
      email: "",
      companyName: "",
      websiteUrl: "",
      monthlyRevenueRange: "",
      marketingBudgetRange: "",
      serviceInterestedIn: "",
      goals: "",
    });
  };

  return (
    <>
      <iframe title="contact-route-submit-target" name="contact-route-submit-target" className="hidden" onLoad={onLoad} />

      <form
        onSubmit={onSubmit}
        method="POST"
        action={SCRIPT_URL}
        target="contact-route-submit-target"
        className="mt-6 space-y-4"
      >
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
            <option>$10K - $50K</option>
            <option>$50K - $100K</option>
            <option>$100K+</option>
          </select>
          <select name="marketingBudgetRange" value={formData.marketingBudgetRange} onChange={onChange} className="h-12 rounded-lg border border-gray-300 px-4 outline-none focus:border-black">
            <option value="">Marketing Budget Range</option>
            <option>Below $2K / month</option>
            <option>$2K - $5K / month</option>
            <option>$5K - $15K / month</option>
            <option>$15K+ / month</option>
          </select>
        </div>

        <select name="serviceInterestedIn" value={formData.serviceInterestedIn} onChange={onChange} className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-black">
          <option value="">Services Interested In</option>
          <option>Performance Marketing</option>
          <option>Ecommerce Growth & CRO</option>
          <option>SEO & Content Marketing</option>
          <option>Analytics & Automation Setup</option>
          <option>Brand Awareness Campaigns</option>
        </select>

        <textarea
          name="goals"
          value={formData.goals}
          onChange={onChange}
          placeholder="Brief Description of Goals"
          rows={6}
          className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-black"
        />
        <input type="hidden" name="message" value={formData.goals} readOnly />

        <button type="submit" disabled={loading} className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70">
          {loading ? "Sending..." : "Submit Inquiry"}
        </button>
        {status && <p className="text-sm text-gray-700">{status}</p>}
      </form>
    </>
  );
}
