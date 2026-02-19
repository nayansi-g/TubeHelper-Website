"use client"

export default function Pricing() {
  return (
    <section className="relative pb-3 px-6 bg-[#070816] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-600 opacity-10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 px-20 mx-auto text-center">

        {/* Badge */}
        <div className="mb-6">
          <span className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            ✨ Pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-16">
          Choose the Right Plan for Your <br /> Business
        </h2>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:border-purple-500 transition">

            <h3 className="text-lg text-gray-300 mb-4">
              # 3 Pages Template
            </h3>

            <div className="text-4xl font-semibold mb-1">
              $599 <span className="text-sm text-gray-400">/Starting</span>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Ideal for freelancers and small businesses just starting out.
            </p>

            <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 transition mb-6">
              Book a Demo
            </button>

            <div className="text-sm text-gray-400 space-y-3 text-left">
              <p>✔ Includes a home page, about us & Contact page</p>
              <p>✔ Fully responsive design</p>
              <p>✔ Basic SEO setup included</p>
            </div>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="relative rounded-2xl border border-purple-500 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-md scale-105">

            <h3 className="text-lg text-gray-200 mb-4">
              # Custom Design & Development
            </h3>

            <div className="text-4xl font-semibold mb-1">
              $1,895 <span className="text-sm text-gray-400">/Starting</span>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Ideal for growing businesses needing advanced features.
            </p>

            <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition mb-6">
              Book a Demo
            </button>

            <div className="text-sm text-gray-400 space-y-3 text-left">
              <p>✔ Bespoke design tailored to your brand</p>
              <p>✔ Advanced functionality and integrations</p>
              <p>✔ Mobile-optimized and SEO-friendly</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:border-purple-500 transition">

            <h3 className="text-lg text-gray-300 mb-4">
              # WooCommerce
            </h3>

            <div className="text-4xl font-semibold mb-1">
              $1,595 <span className="text-sm text-gray-400">/Starting</span>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Tailored for large organizations, the Enterprise Plan.
            </p>

            <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 transition mb-6">
              Book a Demo
            </button>

            <div className="text-sm text-gray-400 space-y-3 text-left">
              <p>✔ Setup online store with up to 10 products</p>
              <p>✔ Integration of secure payment gateways</p>
              <p>✔ Basic training for store management</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
