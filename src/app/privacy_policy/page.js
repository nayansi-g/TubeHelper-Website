import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read TubeHelper's privacy policy for how we collect, process, and protect your information.",
  path: "/privacy_policy",
  keywords: ["privacy policy", "data protection", "tubehelper privacy"],
})

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      points: [
        "Personal Identification Information: Name, email address, phone number, and billing/shipping addresses.",
        "Business Information: Details regarding your e-commerce goals, store preferences, and niche interests.",
        "Payment Data: While we do not store credit card numbers (these are handled by secure third-party processors), we collect transaction history related to your service plans.",
        "Technical Data: IP address, browser type, device information, and usage patterns via cookies.",
      ],
      intro:
        "We collect information that you provide directly to us and information generated automatically during your visit.",
    },
    {
      title: "2. How We Use Your Information",
      points: [
        "Service Delivery: Setting up your online store, sourcing products, and managing logistics.",
        "Communication: Sending updates about your store's progress, responding to inquiries, and sharing marketing tips.",
        "Personalization: Tailoring product research and AI-driven marketing strategies to your specific niche.",
        "Legal Compliance: Preventing fraud and meeting tax or regulatory requirements.",
      ],
      intro:
        "We use the collected data to provide a seamless \"done-for-you\" experience:",
    },
    {
      title: "3. Data Sharing and Disclosure",
      points: [
        "Third-Party Service Providers: Logistics partners, product suppliers, and web hosting services necessary to run your store.",
        "Payment Processors: To securely facilitate service fees and revenue-sharing transactions.",
        "Legal Authorities: If required by law or to protect our rights and the safety of our users.",
      ],
      intro:
        "We do not sell your personal data. However, we may share information with:",
    },
    {
      title: "4. Cookies and Tracking Technologies",
      points: [
        "Essential Cookies: Required for site functionality and security.",
        "Analytical Cookies: Help us understand how users interact with TubeHelper.in so we can optimize our service offerings.",
      ],
      intro:
        "We use cookies to improve your browsing experience and analyze website traffic.",
      footer:
        "You can manage your cookie preferences through your browser settings.",
    },
    {
      title: "5. Data Security",
      body: "We implement industry-standard security measures, including SSL encryption and secure servers, to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.",
    },
    {
      title: "6. Your Rights",
      points: [
        "Access: Request a copy of the personal data we hold about you.",
        "Correction: Ask us to update or correct inaccurate information.",
        "Deletion: Request that we delete your personal data (subject to legal or contractual obligations).",
        "Opt-out: Unsubscribe from marketing emails at any time using the \"Unsubscribe\" link.",
      ],
      intro: "Depending on your location, you may have the following rights:",
    },
    {
      title: "7. Third-Party Links",
      body: "Our website may contain links to external sites (e.g., Shopify, Ali Express, or social media). We are not responsible for the privacy practices or content of these third-party websites.",
    },
    {
      title: "8. Changes to This Policy",
      body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised \"Last Updated\" date.",
    },
    {
      title: "9. Contact Us",
      body: "If you have any questions about this Privacy Policy or how your data is handled, please reach out to us:",
      contact: [
        "Email: contact@tubehelper.in",
        "Phone: +91 9897165137",
        "Address: A-83, First Floor, Sector 63, Noida",
        "Nearest metro station is Sector 62",
      ],
    },
  ]

  return (
    <main className="w-full bg-white text-gray-800 px-6 py-20 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Welcome to TubeHelper.in. We value your privacy and are committed to protecting your personal data.
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our
            website or use our e-commerce automation and dropshipping services.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">{section.title}</h2>
              {section.intro && <p className="mb-4 text-gray-700">{section.intro}</p>}
              {section.body && <p className="text-gray-700">{section.body}</p>}
              {section.points && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {section.footer && <p className="mt-4 text-gray-700">{section.footer}</p>}
              {section.contact && (
                <div className="mt-4 space-y-1 text-gray-700">
                  {section.contact.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
