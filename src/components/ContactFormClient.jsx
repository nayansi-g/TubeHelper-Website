"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const SCRIPT_URL =
  process.env.NEXT_PUBLIC_CONTACT_FORM_URL ||
  "https://script.google.com/macros/s/AKfycbyU6g5z4OOSF3-etayTrHtYfHFiVhp6l3lwUxM9sgAhIT1o8uRoAwJeQuppATYE864E/exec";


  const serviceOptions = [
  "$1000 - $2000",
  "$2000 - $3000",
  "$3000 - $3000",
  "$4000 - $5000",
]

export default function ContactFormClient() {
   const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    website: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔥 THIS PREVENTS REDIRECT
    setLoading(true);
    setError(false);

    try {
      // Create form data (this works better with Google Apps Script)
      const formBody = new URLSearchParams();
      formBody.append("fullName", formData.fullName);
      formBody.append("email", formData.email);
      formBody.append("mobile", formData.mobile);
      formBody.append("website", formData.website);
      formBody.append("service", formData.service);

      // Using a hidden iframe approach to avoid redirect
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzzNRZNUeBEgyVyRduvJYogJG3PBXFz9N4unaP2NgK4HdiOGgjsKqxFR-Y45OFua0cu/exec",
        {
          method: "POST",
          mode: "no-cors", // Keep this to avoid CORS issues
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(formData),
        }
      );

      // Since we're using no-cors, we can't check response
      // But we'll assume it worked
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        website: "",
        service: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Error submitting form", err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
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
    </>
  );
}
