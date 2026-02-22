// "use client";

// import { useState } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     website: "",
//     service: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // 🔥 THIS PREVENTS REDIRECT
//     setLoading(true);

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbzXQjaevDkLOvyKJisiMq_-VQRzwr_iWiR-zTUZavgWhGpXpCvtsg5hqsJTl-4j14dnpQ/exec",
//         {
//           method: "POST",
//           body: JSON.stringify(formData),
//         }
//       );

//       setSuccess(true);
//       setFormData({
//         fullName: "",
//         email: "",
//         mobile: "",
//         website: "",
//         service: "",
//       });
//     } catch (error) {
//       console.error("Error submitting form", error);
//     }

//     setLoading(false);
//   };


//  return (
//   <section className="min-h-screen bg-white py-24 px-6">
//     <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//       {/* LEFT SIDE - SEO CONTENT */}
//       <div>
//         <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
//           Performance Marketing & Ecommerce Growth Experts
//         </h1>

//         <p className="text-gray-600 mb-4 leading-relaxed">
//           We help Shopify and ecommerce brands scale revenue using
//           performance marketing, CRO, and data-driven growth strategies.
//         </p>

//         <p className="text-gray-600 mb-4 leading-relaxed">
//           Whether you're looking to improve ROAS, reduce customer
//           acquisition costs, or build a scalable marketing system,
//           our team is ready to help.
//         </p>

//         <p className="text-gray-500 leading-relaxed">
//           Fill out the form and our growth team will get back to you
//           within 24 hours.
//         </p>
//       </div>

//       {/* RIGHT SIDE - FORM */}
//       <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//           Get a Free Growth Consultation
//         </h2>

//         <form method="POST" action="https://script.google.com/macros/s/AKfycbzXQjaevDkLOvyKJisiMq_-VQRzwr_iWiR-zTUZavgWhGpXpCvtsg5hqsJTl-4j14dnpQ/exec" className="space-y-5">

//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             required
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             required
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//           />

//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile Number"
//             required
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//           />

//           <input
//             type="url"
//             name="website"
//             placeholder="Website Link"
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//           />

//           <select
//             name="service"
//             required
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//           >
//             <option value="" className="text-gray-400">Select Service</option>
//             <option>Performance Marketing</option>
//             <option>Ecommerce Growth</option>
//             <option>CRO Optimization</option>
//             <option>SEO & Organic Growth</option>
//             <option>Analytics & Automation</option>
//           </select>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
//           >
//             Submit Inquiry
//           </button>
//         </form>
//       </div>

//     </div>
//   </section>
// )
// }


"use client";

import { useState } from "react";

export default function ContactPage() {
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
        "https://script.google.com/macros/s/AKfycbzXQjaevDkLOvyKJisiMq_-VQRzwr_iWiR-zTUZavgWhGpXpCvtsg5hqsJTl-4j14dnpQ/exec",
        {
          method: "POST",
          mode: "no-cors", // Keep this to avoid CORS issues
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
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
    <section className="min-h-screen bg-white py-24 px-3 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - SEO CONTENT */}
        <div className="hidden md:block">
          <h1 className="text-4xl md:text-5xl font-semibold  text-gray-900 mb-6 leading-tight">
            Performance Marketing & Ecommerce Growth Experts
          </h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We help Shopify and ecommerce brands scale revenue using
            performance marketing, CRO, and data-driven growth strategies.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Whether you're looking to improve ROAS, reduce customer
            acquisition costs, or build a scalable marketing system,
            our team is ready to help.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Fill out the form and our growth team will get back to you
            within 24 hours.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Get a Free Growth Consultation
          </h2>

          {/* REMOVED method and action attributes - now using onSubmit only */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />

            <input
              type="url"
              name="website"
              placeholder="Website Link"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />

            <textarea
              name="service"
              value={formData.service}
              placeholder="Description"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 resize-none rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            >
        
            </textarea>

            {/* Success message */}
            {success && (
              <div className="bg-green-50 text-green-600 p-3 rounded-lg text-center">
                Form submitted successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition disabled:bg-purple-400 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}