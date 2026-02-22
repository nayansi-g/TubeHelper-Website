export default function RefundPolicyPage() {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Refund Policy
          </h1>
          <p className="mt-6 text-gray-600">
            Effective Date: [Insert Date] <br />
            Last Updated: [Insert Date]
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            This Refund Policy outlines the terms under which refunds may be
            issued by <strong>[Your Company Name]</strong> (“Company”, “we”,
            “our”, or “us”) for our digital marketing and ecommerce growth
            services.
          </p>
          <p>
            By purchasing or subscribing to our services, you agree to this
            Refund Policy.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="mt-16 space-y-14">

          {/* 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              1. Overview of Services
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li>Performance Marketing (Meta, Instagram, Google & YouTube Ads)</li>
              <li>Shopify Growth Strategy</li>
              <li>Conversion Rate Optimization (CRO)</li>
              <li>Funnel Optimization</li>
              <li>Ecommerce Revenue Scaling Strategy</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Results depend on multiple factors including market conditions,
              competition, ad spend, pricing, and customer demand.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              2. Service Fees Are Non-Refundable
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Monthly retainers</li>
              <li>Strategy fees</li>
              <li>Setup fees</li>
              <li>Audit fees</li>
              <li>Consulting fees</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Once work has commenced, refunds will not be issued for time,
              strategy development, or allocated resources.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              3. Ad Spend Is Non-Refundable
            </h2>
            <p className="text-gray-700">
              Advertising budgets paid to third-party platforms such as
              Google Ads, Meta (Facebook & Instagram), and YouTube Ads are
              non-refundable through our company. Refunds must be requested
              directly from the respective advertising platform.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              4. Early Termination
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>No refund for the current billing cycle</li>
              <li>Completed work remains billable</li>
              <li>Outstanding payments must be cleared</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Terms may vary based on your signed service agreement.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              5. Exceptional Circumstances
            </h2>
            <p className="text-gray-700">
              Refunds may be considered in cases such as duplicate payments,
              billing errors, or failure to deliver agreed services.
            </p>
            <p className="mt-4 text-gray-700">
              Refund requests must be submitted in writing within 7 days of
              billing. Approval is at the sole discretion of [Your Company Name].
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              6. No Guarantee of Results
            </h2>
            <p className="text-gray-700">
              We do not guarantee specific revenue results, ROAS, lead volume,
              or conversion rate improvements. Dissatisfaction with results
              alone does not qualify for refunds.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              7. Digital Products (If Applicable)
            </h2>
            <p className="text-gray-700">
              Due to the instant access nature of digital products, all
              purchases are final and non-refundable unless otherwise stated.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              8. Chargebacks & Payment Disputes
            </h2>
            <p className="text-gray-700">
              Initiating a chargeback without contacting us first may result
              in service termination, suspension of access, or legal action.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              9. How to Request a Refund
            </h2>
            <p className="text-gray-700">
              To request a refund review, please contact:
            </p>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p><strong>[Your Company Name]</strong></p>
              <p>Email: [your@email.com]</p>
              <p>Subject Line: Refund Request</p>
            </div>
            <p className="mt-4 text-gray-700">
              Please include your full name, company name, invoice number, and
              reason for the request. We respond within 5–7 business days.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              10. Policy Updates
            </h2>
            <p className="text-gray-700">
              We reserve the right to update this Refund Policy at any time.
              Updates will be reflected with a revised “Last Updated” date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700">
              [Your Company Name] <br />
              Email: [your@email.com] <br />
              Website: [yourwebsite.com] <br />
              Address: [Optional Business Address]
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
