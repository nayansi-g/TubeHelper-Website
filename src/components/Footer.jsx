"use client"

import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa"

const quickLinks = {
  company: [
    { label: "About Us", href: "/about_us" },
    { label: "Case Studies", href: "/how_it_works" },
    { label: "24/7 Support", href: "/support" },
    // { label: "Reviews", href: "/reviews" },
    // { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact" },
  ],
  resources: [
    { label: "Blogs", href: "/blog" },
    { label: "E-commerce Tips", href: "/e-commerce_tips" },
    // { label: "Free Resources", href: "/free_resources" },
    { label: "FAQs", href: "/faq" },
    { label: "Guides", href: "/guides" },
  ],
  services: [
    { label: "Performance Marketing", href: "/services/performance_marketing" },
    { label: "E-commerce Growth", href: "/services/e-commerce_growth" },
    { label: "Organic Growth", href: "/services/organic_growth" },
    { label: "Analytics & Automation", href: "/services/analytics_&_automation" },
    { label: "Amplify Brand Awareness", href: "/services/amplify_&_awareness" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy_policy" },
    { label: "Terms & Conditions", href: "/terms_of_use" },
    { label: "Refund Policy", href: "/refund_policy" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-4 pb-6 pt-12 text-white sm:px-6 md:px-8 md:pb-8 md:pt-20">
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600 opacity-20 blur-[200px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-500 opacity-20 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <h2 className="mb-8 text-2xl font-semibold sm:text-3xl md:mb-10 md:text-4xl">
          Let&apos;s Connect with us
        </h2>

        <div className="grid gap-8 border-t border-white/10 pt-8 sm:pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">TubeHelper</h3>
            <p className="max-w-sm text-sm text-gray-400">
              We are a performance-driven digital marketing and ecommerce growth agency helping Shopify and D2C brands scale profitably.
            </p>
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-200">Contact</h4>
              <p className="text-sm text-gray-400">info@tubehelper.in</p>
              <p className="text-sm text-gray-400">connect@tubehelper.in</p>
              <p className="text-sm text-gray-400">+91 9897165137</p>
              <p className="text-sm text-gray-400">Address: 1657 Bakra market, Mohalla Tihai, --,Mawana, Meerut, Uttar Pradesh, 250401</p>
            </div>
          </div>
            <FooterColumn title="Services" links={quickLinks.services} />
         
          <FooterColumn title="Resources" links={quickLinks.resources} />
         <FooterColumn title="Company" links={quickLinks.company} />
          <FooterColumn title="Legal" links={quickLinks.legal} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:mt-12 md:flex-row md:items-center">
          <p className="text-sm text-gray-500">TubeHelper © 2026 all rights reserved.</p>
          <div className="flex gap-3 sm:gap-4">
            {[FaFacebookF, FaInstagram, FaTimes, FaLinkedinIn].map((Icon, i) => (
              <button
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 sm:h-10 sm:w-10"
                aria-label="social link"
              >
                <Icon className="text-sm" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 font-semibold">{title}</h4>
      <ul className="space-y-3 text-sm text-gray-400">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="transition hover:text-white" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
