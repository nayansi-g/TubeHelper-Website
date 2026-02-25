import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Refund Policy",
  description: "Understand TubeHelper's refund policy for service fees, billing cycles, and cancellation terms.",
  path: "/refund_policy",
  keywords: ["refund policy", "service refunds", "tubehelper refund terms"],
})

export default function RefundPolicyPage() {
  const sections = [
    {
      title: "1. Scope of This Policy",
      body: "This Refund Policy applies to all TubeHelper services, including performance marketing, e-commerce growth support, store setup/automation support, strategy consultation, and related digital service plans.",
    },
    {
      title: "2. Nature of Services",
      body: "TubeHelper provides digital and consulting services that involve planning, research, campaign setup, optimization, and execution time. Because these are effort-based services, refunds are limited and subject to the terms below.",
    },
    {
      title: "3. Non-Refundable Fees",
      points: [
        "Onboarding or setup fees",
        "Strategy and consultation fees",
        "Monthly service retainers once work has started",
        "Audit, research, and implementation charges",
      ],
      footer: "Once service delivery has begun, payments already made for completed work are non-refundable.",
    },
    {
      title: "4. Ad Spend and Third-Party Charges",
      body: "Budgets paid to third-party platforms (such as Meta, Google, YouTube, Shopify apps, or other tools) are not controlled by TubeHelper and are non-refundable through us. Any refund for platform/media charges must be requested directly from the relevant provider.",
    },
    {
      title: "5. Cancellation and Billing Cycle",
      body: "You may cancel future services by giving written notice before your next billing cycle. Cancellation stops upcoming billing only and does not reverse charges for the current/previous cycle or work already delivered.",
    },
    {
      title: "6. Refunds in Exceptional Cases",
      intro: "A refund may be reviewed only in limited situations such as:",
      points: [
        "Duplicate payment",
        "Incorrect billing amount due to technical error",
        "Service not delivered at all after confirmed payment",
      ],
      footer: "Approved refunds, if any, are processed to the original payment method within 7-14 business days.",
    },
    {
      title: "7. Performance Disclaimer",
      body: "Marketing and e-commerce results depend on multiple external factors, including market conditions, competition, pricing, product quality, ad budget, and customer behavior. Therefore, TubeHelper does not provide refunds solely due to unmet expected business outcomes.",
    },
    {
      title: "8. Chargebacks",
      body: "If you face any billing concern, contact us first for resolution. Unjustified chargebacks may lead to service suspension or termination and may be contested with supporting service records.",
    },
    {
      title: "9. How to Request a Refund Review",
      intro: "To request a refund review, email us with the subject line \"Refund Request\" and include:",
      points: [
        "Full name and registered email",
        "Invoice/payment reference",
        "Service plan details",
        "Reason for request",
      ],
      footer: "We usually respond within 5-7 business days.",
    },
    {
      title: "10. Contact Details",
      contact: [
        "Email: info@tubehelper.in",
        "Email: connect@tubehelper.in",
        "Phone: +91 9897165137",
        "Address: 1657 Bakra market, Mohalla Tihai, --,Mawana, Meerut, Uttar Pradesh, 250401",
      ],
    },
    {
      title: "11. Policy Updates",
      body: "TubeHelper may revise this Refund Policy at any time. Updated versions will be posted on this page.",
    },
  ]

  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Refund Policy
          </h1>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At TubeHelper, we are committed to transparency and fair billing.
            This policy explains when refunds may or may not apply for services
            purchased through TubeHelper.in.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              {section.intro && <p className="text-gray-700 mb-4">{section.intro}</p>}
              {section.body && <p className="text-gray-700">{section.body}</p>}
              {section.points && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {section.footer && <p className="text-gray-700 mt-4">{section.footer}</p>}
              {section.contact && (
                <div className="space-y-1 text-gray-700">
                  {section.contact.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
