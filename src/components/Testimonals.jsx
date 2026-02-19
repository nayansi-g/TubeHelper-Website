"use client"

export default function Testimonials() {
  return (
    <section className="relative bg-[#070816] text-white py-28 px-6 md:px-10 lg:px-20 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-purple-600 opacity-30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-pink-500 opacity-30 blur-[140px] rounded-full"></div>

      <div className="relative z-10  mx-auto">
         <div className="mb-6 text-center py-10">
          <span className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            ✨ Testimonals
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
          What our client are saying
        </h2>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">

          {/* Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-purple-500 transition">
            <p className="text-gray-300 text-sm mb-6">
              “We were struggling to keep track of our customer data and
              effectively manage our sales pipeline before we started using
              Chroma. Now, everything is organized and accessible in one place.”
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-sm font-medium">Kristin Watson</h4>
                <p className="text-xs text-gray-400">
                  Senior Marketing Manager
                </p>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-purple-500 bg-white/5 backdrop-blur-md p-6 hover:border-purple-400 transition">
            <p className="text-gray-300 text-sm mb-6">
              “The analytics and reporting features in Chroma have been a
              game-changer for our marketing team. We can now measure the
              impact of our campaigns in real-time and make data-driven
              decisions.”
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-sm font-medium">Martin Muller</h4>
                <p className="text-xs text-gray-400">
                  Web Designer at Socialbag
                </p>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-pink-500 transition">
            <p className="text-gray-300 text-sm mb-6">
              “The analytics and reporting features in Chroma have been a
              game-changer for our marketing team. We can now measure the
              impact of our campaigns in real-time and make data-driven
              decisions.”
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-sm font-medium">Martin Muller</h4>
                <p className="text-xs text-gray-400">
                  Web Designer at Socialbag
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          <div>
            <span className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              ✨ Why Choose Us
            </span>

            <h3 className="text-4xl font-semibold mt-6 mb-6 leading-snug">
              help you find the best analysis for your business
            </h3>
          </div>

          <p className="text-gray-400">
            Create stunning, professional-quality websites in record time
            with our powerful UI kit. Elevate your SAAS game today!
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500 transition">
            <h4 className="text-lg font-medium mb-4">
              6+ Years of Experience in Wordpress
            </h4>
            <p className="text-gray-400 text-sm">
              Set up a personalized profile quickly with guided steps.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500 transition">
            <h4 className="text-lg font-medium mb-4">
              SEO-Optimized for Better Ranking
            </h4>
            <p className="text-gray-400 text-sm">
              Streamline processes with rule-based task automation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500 transition">
            <h4 className="text-lg font-medium mb-4">
              On-Time Delivery with 100% Satisfaction
            </h4>
            <p className="text-gray-400 text-sm">
              Simply sharing with a single click for any file size.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
