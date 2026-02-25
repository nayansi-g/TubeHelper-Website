import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Client Reviews",
  description:
    "Read testimonials and client outcomes from TubeHelper ecommerce and digital marketing projects.",
  path: "/reviews",
  keywords: ["client reviews", "digital marketing testimonials", "ecommerce agency reviews"],
})

export default function ReviewsPage() {
  const stats = [
    { number: "150+", label: "Stores Built" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Availability" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  const testimonials = [
    {
      name: "Rohan Mehta",
      business: "Fashion Brand Owner",
      review:
        "They transformed our Shopify store completely. Sales increased by 60% within 3 months. Their UI design and conversion optimization skills are outstanding.",
    },
    {
      name: "Anjali Sharma",
      business: "Skincare Brand",
      review:
        "We were struggling with checkout issues and slow loading speed. After their optimization work, our bounce rate dropped drastically.",
    },
    {
      name: "Amit Verma",
      business: "Electronics Store",
      review:
        "Professional, fast, and extremely reliable. Our WooCommerce store now runs smoothly even during heavy traffic campaigns.",
    },
    {
      name: "Sneha Kapoor",
      business: "Home Decor Business",
      review:
        "They handled everything, design, payments, integrations, and marketing setup. It feels like having an in-house tech team.",
    },
  ];

  return (
    <main className="bg-[#070816] text-white">
      <section className="px-6 py-28 text-center">
        <h1 className="mb-6 text-4xl font-semibold md:text-6xl">What Our Clients Say</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-400">
          Trusted by fast-growing brands worldwide. We do not just build stores, we build long-term partnerships.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 text-center md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-2 text-4xl font-bold text-purple-400">{item.number}</h2>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#080B1A] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-semibold">Client Testimonials</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {testimonials.map((client) => (
              <article key={client.name} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="mb-6 leading-relaxed text-gray-300">&quot;{client.review}&quot;</p>
                <h3 className="font-semibold text-purple-400">{client.name}</h3>
                <p className="text-sm text-gray-400">{client.business}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
