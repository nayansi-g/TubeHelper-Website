import { Shield, Eye, Lock, Database, Users, FileText, ChevronDown, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"


export default function Terms() {
  const privacySections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us. This includes:
      • Personal information (name, email, phone number)
      • Educational background and preferences
      • Payment information (processed securely through third-party providers)
      • Course progress and performance data
      • Communication preferences and feedback`,
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Eye,
      content: `We use the information we collect to:
      • Provide and improve our educational services
      • Process enrollments and payments
      • Send course updates and educational content
      • Provide customer support
      • Analyze usage patterns to enhance user experience
      • Comply with legal obligations`,
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Users,
      content: `We do not sell, trade, or rent your personal information. We may share information in these limited circumstances:
      • With service providers who assist in our operations
      • When required by law or to protect our rights
      • In connection with a business transfer or merger
      • With your explicit consent
      • For placement assistance with verified hiring partners`,
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: `We implement appropriate security measures to protect your information:
      • SSL encryption for data transmission
      • Secure servers and databases
      • Regular security audits and updates
      • Access controls and authentication
      • Employee training on data protection
      • Incident response procedures`,
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: Shield,
      content: `You have the right to:
      • Access your personal information
      • Correct inaccurate information
      • Delete your account and data
      • Opt-out of marketing communications
      • Data portability
      • Lodge complaints with supervisory authorities`,
    },
  ]

  return (
    <div className="min-h-screen bg-[#080B1A] text-white ">
      {/* Hero Section */}
      <div className=" py-12 text-gray-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
  Terms & Conditions
</h1>
            <p className="mt-4 text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-blue prose-lg mx-auto">
           <section className="mb-12">
  <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
  <p>
    Welcome to CoderCrafter ("we," "our," or "us"). These Terms & Conditions govern your use of our website and services. By accessing or enrolling in our courses, you agree to comply with these terms.
  </p>
  <p className="mt-4">
    If you do not agree with any part of these terms, please do not use our services.
  </p>
</section>

            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Services</h2>
<p>
You agree to use our services only for lawful purposes. You must not:
</p>
<ul className="list-disc pl-6 mt-2">
  <li>Violate any applicable laws or regulations</li>
  <li>Attempt to gain unauthorized access to our systems</li>
  <li>Copy or distribute course materials without permission</li>
  <li>Use our services for fraudulent purposes</li>
</ul>


        <h2 className="text-2xl font-bold text-white mb-4">3. Payments & Refunds</h2>
<p>
All course fees must be paid in full before access is granted. Payments are processed securely through third-party providers.
</p>
<ul className="list-disc pl-6 mt-2">
  <li>Fees are non-transferable</li>
  <li>Refund eligibility depends on our refund policy</li>
  <li>We reserve the right to update pricing at any time</li>
</ul>


            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
<p>
All course materials, logos, designs, and content are the intellectual property of CoderCrafter. Unauthorized reproduction or redistribution is strictly prohibited.
</p>

            <h2 className="text-2xl font-bold text-white mb-4">5. User Responsibilities</h2>
<p>
You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
</p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
<p>
We are not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.
</p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
<p>
We reserve the right to suspend or terminate access to our services at any time if you violate these Terms & Conditions.
</p>

           <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
<p>
We may revise these Terms & Conditions at any time. Continued use of our services after changes are posted constitutes acceptance of the updated terms.
</p>

            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>

          </div>
        </div>
      </div>

      {/* Detailed Sections - Static version without interactivity */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Privacy Policy Details</h2>

          <div className="space-y-6">
            {privacySections.map((section) => {
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