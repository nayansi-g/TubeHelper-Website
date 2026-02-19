"use client"

export default function SecondGrid() {
  return (
    <section className="relative py-32 px-6 bg-[#070816] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500 opacity-10 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 opacity-10 blur-[200px] rounded-full"></div>

      <div className="relative z-10 px-20">

        {/* Top Label */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 text-sm rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            ✨ Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl text-center font-medium mb-20">
          help you find the best analysis <br />
          for your business
        </h2>

        {/* Top 2 Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">
              WordPress Website Design
            </h3>
            <p className="text-gray-400 mb-8">
              We replicate designs with pixel-perfect precision. Prefer assistance?
              Choose from 100+ professional templates or let us create a custom
              design tailored to your needs!
            </p>

            {/* Dummy UI Box */}
            <div className="h-40 bg-white/5 border border-white/10 rounded-xl"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">
              WordPress Development
            </h3>
            <p className="text-gray-400 mb-8">
              Your website's needs may vary in complexity and functionality,
              but we're here to help.
            </p>

            {/* Code Preview Box */}
            <div className="h-40 bg-white/5 border border-white/10 rounded-xl"></div>
          </div>

        </div>

        {/* Bottom 3 Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition duration-300">
            <h3 className="text-lg font-semibold mb-4">
              WooCommerce & E-commerce
            </h3>
            <p className="text-gray-400">
              With years of experience, we help businesses sell online seamlessly.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition duration-300">
            <h3 className="text-lg font-semibold mb-4">
              SEO- Ready Website
            </h3>
            <p className="text-gray-400">
              Your website is built to support professional SEO tools and AI-driven optimization.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition duration-300">
            <h3 className="text-lg font-semibold mb-4">
              Custom Solution
            </h3>
            <p className="text-gray-400">
              Harness the flexibility of WordPress to create tailored websites or solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
