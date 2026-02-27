"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";

const SCRIPT_URL =
  process.env.NEXT_PUBLIC_CONTACT_FORM_URL ||
  "https://script.google.com/macros/s/AKfycbyU6g5z4OOSF3-etayTrHtYfHFiVhp6l3lwUxM9sgAhIT1o8uRoAwJeQuppATYE864E/exec";


  const serviceOptions = [
  "$1000 - $2000",
  "$2000 - $3000",
  "$3000 - $3000",
  "$4000 - $5000",
]

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const submittedRef = useRef(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    website: "",
    service: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    submittedRef.current = true;
  };

  const handleIframeLoad = () => {
    if (!submittedRef.current) return;
    submittedRef.current = false;
    setLoading(false);
    setSuccess(true);

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      website: "",
      service: "",
    });

    setTimeout(() => {
      setSuccess(false);
      setIsOpen(false);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 p-4">
      <iframe
        title="popup-contact-submit-target"
        name="popup-contact-submit-target"
        className="hidden"
        onLoad={handleIframeLoad}
      />

      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get a Free Growth Consultation
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Fill this quick form and our team will connect with you.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md p-1 text-gray-500 transition hover:bg-gray-100 hover:text-black"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

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

            {/* Success message */}
            {success && (
              <div className="rounded-xl bg-green-50 p-3 text-center text-green-600">
                Form submitted successfully!
              </div>
            )}

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
  );
}
