import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Free Ecommerce Resources",
  description:
    "Access free ecommerce resources, checklists, tools, and frameworks from TubeHelper.",
  path: "/free_resources",
  keywords: ["free ecommerce resources", "shopify checklist", "marketing templates"],
})

export default function FreeResourcesPage() {
  const resources = [
    {
      section: "Free Guides",
      items: [
        "Shopify Launch Checklist",
        "WooCommerce Setup Guide",
        "High-Converting Homepage Blueprint",
      ],
    },
    {
      section: "Free Tools & Calculators",
      items: [
        "Profit Margin Calculator",
        "Break-Even ROAS Calculator",
        "E-commerce Budget Planner",
      ],
    },
    {
      section: "Free Video Tutorials",
      items: [
        "How to Build a Shopify Store",
        "WooCommerce Optimization Guide",
        "E-commerce Conversion Secrets",
      ],
    },
  ];

  return (
    <main className="bg-[#070816] text-white">
      <section className="px-6 py-28 text-center">
        <h1 className="mb-6 text-4xl font-semibold md:text-5xl">Free E-commerce Resources</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-400">
          High-value tools, guides, and checklists to help you build, optimize, and scale your ecommerce store.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-6 pb-24">
        {resources.map((resource) => (
          <section key={resource.section}>
            <h2 className="mb-8 text-center text-3xl font-semibold text-purple-400">{resource.section}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {resource.items.map((item) => (
                <article key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold">{item}</h3>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
