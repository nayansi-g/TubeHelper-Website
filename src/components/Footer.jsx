"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaYoutube } from "react-icons/fa"

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

      <div className="relative z-10 mx-auto w-full ">
        <h2 className="mb-8 text-2xl font-semibold sm:text-3xl md:mb-10 md:text-4xl">
          Let&apos;s Connect with us
        </h2>

        <div className="grid gap-8 border-t border-white/10 pt-4 sm:pt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
             <div className="space-y-2">
             <Link href="/" className="flex items-center">
                          <Image
                            src="/onlyLogo.png"
                            alt="TubeHelper"
                            width={200}
                            height={44}
                            priority
                            className=" w-9 md:w-12"
                            // sizes="(min-width: 1024px) 224px, 144px"
                          />
                          <i className="text-xl text-gray-100 font-bold">TUBEHELPER</i>
                        </Link>
                     
            <p className="max-w-sm text-sm text-gray-400">
              We are a performance-driven digital marketing and ecommerce growth agency helping Shopify and D2C brands scale profitably.
            </p>
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-200">Contact</h4>
              <p className="text-sm text-gray-400">connect@tubehelper.in</p>
              <p className="text-sm text-gray-400">+91 9897165137</p>
              <p className="text-sm text-gray-400">Address: A-83, First Floor, Sector 63, Noida</p>
              <p className="text-sm text-gray-400">Nearest metro station is Sector 62</p>
            </div>
          </div>
            <FooterColumn title="Services" className="mt-10" links={quickLinks.services} />
         
          <FooterColumn title="Resources" links={quickLinks.resources} />
         <FooterColumn title="Company" links={quickLinks.company} />
          <FooterColumn title="Legal" links={quickLinks.legal} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:mt-12 md:flex-row md:items-center">
          
          <div className="flex gap-2 sm:gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTimes].map((Icon, i) => (
              <button
                key={i}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 sm:h-9 sm:w-9"
                aria-label="social link"
              >
                <Icon className="text-sm" />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500">TubeHelper © 2026 all rights reserved.</p>
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
