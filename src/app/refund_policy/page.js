import { Shield, Eye, Lock, Database, Users, FileText, ChevronDown, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function RefundPolicy() {

  const refundSections = [
    {
      id: "eligibility",
      title: "Refund Eligibility",
      icon: Shield,
      content: `We offer refunds under specific conditions:
      • Refund requests must be made within 7 days of enrollment
      • Course access must not exceed 20% completion
      • No certificate must have been issued
      • No placement assistance process should have started`,
    },
    {
      id: "non-refundable",
      title: "Non-Refundable Situations",
      icon: Lock,
      content: `Refunds will not be granted if:
      • The refund request is made after 7 days
      • More than 20% of course content has been accessed
      • Course materials have been downloaded
      • Discounted or promotional enrollments (if specified as non-refundable)`,
    },
    {
      id: "processing",
      title: "Refund Processing",
      icon: Database,
      content: `Approved refunds will be processed within 7–10 business days.
      • Refunds will be issued via the original payment method
      • Processing time may vary depending on your bank or payment provider
      • Transaction fees (if any) may be deducted`,
    },
    {
      id: "cancellation",
      title: "Course Cancellation by Us",
      icon: Eye,
      content: `If we cancel a course due to unforeseen circumstances:
      • You will receive a full refund
      • Or you may opt for transfer to another batch/course
      • No additional charges will apply`,
    },
    {
      id: "contact",
      title: "How to Request a Refund",
      icon: FileText,
      content: `To request a refund:
      • Email us with your enrollment details
      • Include your payment receipt
      • Mention the reason for refund
      • Our support team will review and respond within 48 hours`,
    },
  ]

  return (
    <div className="min-h-screen bg-[#080B1A] text-white">
      
      {/* Hero Section */}
      <div className="py-12 text-gray-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Refund Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-blue prose-lg mx-auto">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                At CoderCrafter, we strive to provide high-quality training and educational services. 
                This Refund Policy outlines the conditions under which refunds may be granted.
              </p>
              <p className="mt-4">
                By enrolling in our courses, you agree to this refund policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Refund Eligibility</h2>
              <ul className="list-disc pl-6 mt-2">
                <li>Refund request must be submitted within 7 days of enrollment</li>
                <li>Less than 20% of the course content must be accessed</li>
                <li>No completion certificate should have been issued</li>
                <li>Placement assistance process must not have started</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. Non-Refundable Cases</h2>
              <ul className="list-disc pl-6 mt-2">
                <li>Refund requests made after 7 days</li>
                <li>More than 20% course completion</li>
                <li>Downloaded materials or resources</li>
                <li>Special discounted or promotional enrollments</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Refund Processing Time</h2>
              <p>
                Approved refunds will be processed within 7–10 business days via the original payment method.
              </p>
              <p className="mt-4">
                Processing time may vary depending on your bank or payment provider.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Course Cancellation</h2>
              <p>
                If CoderCrafter cancels a course for any reason, students will receive a full refund 
                or the option to transfer to another available batch.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p>If you have any questions or wish to request a refund, please contact us:</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Email: <Link href="mailto:info@codercrafter.in" className="text-blue-600 hover:text-blue-800">info@codercrafter.in</Link></span>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Phone: <Link href="tel:+918920319125" className="text-blue-600 hover:text-blue-800">+91 89203 19125</Link></span>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Address: Bangalore, India</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Refund Policy Details</h2>

          <div className="space-y-6">
            {refundSections.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.id} className="overflow-hidden border border-gray-400 rounded-2xl p-4">
                  <div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-xl">{section.title}</p>
                    </div>
                  </div>
                  <div>
                    <div className="pl-14">
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
