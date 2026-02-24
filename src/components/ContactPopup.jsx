"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const SCRIPT_URL =
  process.env.NEXT_PUBLIC_CONTACT_FORM_URL ||
  "https://script.google.com/macros/s/AKfycbyU6g5z4OOSF3-etayTrHtYfHFiVhp6l3lwUxM9sgAhIT1o8uRoAwJeQuppATYE864E/exec";

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
    const timer = setTimeout(() => setIsOpen(true), 1000);
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

        <form
          method="POST"
          action={SCRIPT_URL}
          target="popup-contact-submit-target"
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="h-11 w-full rounded-lg text-gray-800 border border-gray-300 px-3 text-sm outline-none focus:border-purple-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="h-11 w-full rounded-lg text-gray-800 border border-gray-300 px-3 text-sm outline-none focus:border-purple-600"
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="h-11 w-full rounded-lg text-gray-800 border border-gray-300 px-3 text-sm outline-none focus:border-purple-600"
          />
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website Link"
            className="h-11 w-full text-gray-800 rounded-lg text-gray-800 border border-gray-300 px-3 text-sm outline-none focus:border-purple-600"
          />
          <textarea
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Description"
            required
            rows={4}
            className="w-full resize-none rounded-lg text-gray-800 border border-gray-300 p-3 text-sm outline-none focus:border-purple-600"
          />
          <input type="hidden" name="message" value={formData.service} readOnly />

          {success && (
            <p className="rounded-md bg-green-50 p-2 text-center text-sm text-green-600">
              Submitted successfully.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="h-11 w-full rounded-lg bg-black text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
