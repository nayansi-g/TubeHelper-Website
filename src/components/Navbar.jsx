"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ChartNoAxesCombined,
  ChevronDown,
  Cpu,
  Megaphone,
  Menu,
  PhoneOutgoing,
  ShoppingCart,
  Sprout,
  SquareMenu,
  X,
} from "lucide-react"

const serviceItems = [
  {
    href: "/services/performance_marketing",
    icon: ChartNoAxesCombined,
    title: "Performance Marketing",
    lines: ["Meta & Instagram Ads", "Google Ads (Search & Shopping)", "YouTube Ads"],
  },
  {
    href: "/services/e-commerce_growth",
    icon: ShoppingCart,
    title: "Ecommerce Growth",
    lines: ["Shopify Growth Strategy", "Conversion Rate Optimization (CRO)", "Funnel Optimization"],
  },
  {
    href: "/services/organic_growth",
    icon: Sprout,
    title: "Organic Growth",
    lines: ["SEO", "Content Marketing"],
  },
  {
    href: "/services/analytics_&_automation",
    icon: Cpu,
    title: "Analytics & Automation",
    lines: ["Tracking & GA4 Setup", "Marketing Automation", "Reporting & Dashboard Setup", "Landing Page Strategy"],
  },
  {
    href: "/services/amplify_&_awareness",
    icon: Megaphone,
    title: "Amplify Brand Awareness",
    lines: ["Maximize reach and business results"],
  },
]

const resources = [
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/how_it_works", label: "Case Studies" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
]

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)

  const servicesRef = useRef(null)
  const resourcesRef = useRef(null)
  const mobileRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setIsServicesOpen(false)
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) setIsResourcesOpen(false)
      if (mobileRef.current && !mobileRef.current.contains(e.target)) setIsMobileOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full text-black">
      <div className="mx-auto w-full max-w-[95rem] px-3 pt-3 sm:px-4 md:px-6 lg:px-10">
        <div className="rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-base font-semibold text-white">TH</div>
              <span className="text-xl font-semibold">TubeHelper</span>
            </Link>

            <nav className="relative hidden items-center gap-8 text-sm font-medium lg:flex">
              <Link href="/" className="transition hover:text-purple-600">Home</Link>

              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => {
                    setIsServicesOpen((v) => !v)
                    setIsResourcesOpen(false)
                  }}
                  className="flex items-center gap-1 transition hover:text-purple-600"
                >
                  Services <ChevronDown size={16} className={isServicesOpen ? "rotate-180 transition" : "transition"} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-13 left-30 -translate-x-1/2 w-[900px] max-w-[92vw] bg-white shadow-xl rounded-2xl p-8 grid lg:grid-cols-3 gap-10 z-50">

                {/* Column 1 */}
                <div>
                  <h4 className="text-gray-400 mb-4 text-sm">Our Services</h4>
                  <div className="space-y-4">
                    <div>
                      <a className="flex justify-start gap-1" href="/services/performance_marketing">
                      <h3 className="font-semibold cursor-pointer ">
                        <ChartNoAxesCombined className="w-4 h-4" />
                        {/* Performance Marketing */}
                      </h3>

                      <div> <h3 className="font-semibold cursor-pointer flex items-center justify-start gap-1">
                        Performance Marketing
                      </h3>
                      <p className="text-sm text-gray-500">Meta & Instagram Ads</p>
                      <p className="text-sm text-gray-500">Google Ads (Search & Shopping)</p>
                      <p className="text-sm text-gray-500">YouTube Ads</p></div></a>
                    </div>

                    <div>
                     <a className="flex justify-start gap-1" href="/services/e-commerce_growth">
                     <h3 className="font-semibold cursor-pointer ">
                        <ShoppingCart className="w-4 h-4" />
                      </h3>
                      <div>
                         <h3 className="font-semibold cursor-pointer ">
                       
                        Ecommerce Growth
                      </h3>
                        <p className="text-sm text-gray-500">Shopify Growth Strategy</p>
                      <p className="text-sm text-gray-500">Conversion Rate Optimization (CRO)</p>
                      <p className="text-sm text-gray-500">Funnel Optimization</p></div></a> 
                    </div>

                    <div>
                      <a className="flex justify-start gap-1" href="/services/organic_growth"><h3 className="font-semibold ">
                        <Sprout className="w-4 h-4" />                      
                      </h3>
                      <div><h3 className="font-semibold ">                       
                        Organic Growth
                      </h3><p className="text-sm text-gray-500">SEO</p>
                      <p className="text-sm text-gray-500">Content Marketing</p></div></a>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <a className="" href="/services/analytics_&_automation">
                  <h4 className="text-gray-400 mb-4 text-sm invisible">Our Services</h4>
                  <div className="space-y-4">
                    <div className=" flex justify-start gap-1 cursor-pointer">
                      <h3 className="font-semibold ">
                        <Cpu className="w-4 h-4" />                       
                      </h3>

                      <div><h3 className="font-semibold ">
                        Analytics & Automation
                      </h3><p className="text-sm text-gray-500">Tracking & GA4 Setup</p>
                      <p className="text-sm text-gray-500">Marketing Automation</p>
                      <p className="text-sm text-gray-500">Reporting & Dashboard Setup</p>
                      <p className="text-sm text-gray-500">Landing Page Strategy</p></div>
                    </div>

                    <div  className="cursor-pointer">
                      <a className="flex justify-start gap-1" href="/services/amplify_&_awareness"><h3 className="font-semibold">
                        <Megaphone className="w-5 h-5" />                       
                      </h3>
                      <div><h3 className="font-semibold">                       
                        Amplify brand awareness
                      </h3><p className="text-sm text-gray-500">
                        Maximize reach and business results
                      </p></div></a>
                    </div>
                  </div></a>
                </div>

                {/* Column 3 */}
                <div
                  className="relative bg-gray-100 rounded-xl p-6 overflow-hidden 
                  bg-[url('/navbarimg.jpg')] bg-cover bg-center"
                >
                  <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                  <div className="relative z-10 text-white">
                    <h4 className="mb-4 text-sm">By service</h4>
                    <div className="space-y-4 font-semibold">
                      <p>Enterprise</p>
                      <p>Professional services</p>
                      <p>Agencies</p>
                    </div>
                  </div>
                </div>

              </div>
                )}
              </div>

              <Link href="/how_it_works" className="transition hover:text-purple-600">Case Studies</Link>
              <Link href="/about_us" className="transition hover:text-purple-600">About Us</Link>

              <div ref={resourcesRef} className="relative">
                <button
                  onClick={() => {
                    setIsResourcesOpen((v) => !v)
                    setIsServicesOpen(false)
                  }}
                  className="flex items-center gap-1 transition hover:text-purple-600"
                >
                  Resources <ChevronDown size={16} className={isResourcesOpen ? "rotate-180 transition" : "transition"} />
                </button>

                {isResourcesOpen && (
                  <div className="absolute left-0 top-13 z-50 w-52 rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
                    <div className="space-y-2 text-sm">
                      {resources.map((item) => (
                        <Link key={item.href} href={item.href} className="block rounded-md px-2 py-1 text-gray-700 transition hover:bg-purple-50 hover:text-purple-600">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button className="rounded-full border cursor-pointer p-2 text-sm transition hover:bg-gray-50">
                <PhoneOutgoing className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-black px-5 cursor-pointer py-2 text-sm text-white transition hover:opacity-90">
                Get Started
              </button>
            </div>

            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className="rounded-md border px-2 py-2 text-sm lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="px-3 pt-2 sm:px-4 md:px-6 lg:hidden">
          <div ref={mobileRef} className="mx-auto w-full max-w-[95rem] rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
            <div className="space-y-3 text-sm">
              <Link href="/" className="block rounded-md px-2 py-2">Home</Link>
              <Link href="/how_it_works" className="block rounded-md px-2 py-2">Case Studies</Link>
              <Link href="/about_us" className="block rounded-md px-2 py-2">About Us</Link>

              <button
                onClick={() => setIsMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-md px-2 py-2"
              >
                Services <ChevronDown size={16} className={isMobileServicesOpen ? "rotate-180 transition" : "transition"} />
              </button>
              {isMobileServicesOpen && (
                <div className="space-y-2 rounded-lg bg-gray-50 p-3">
                  {serviceItems.map((item) => (
                    <Link key={item.href} href={item.href} className="block rounded-md px-2 py-1 text-gray-700">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}

              <button
                onClick={() => setIsMobileResourcesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-md px-2 py-2"
              >
                Resources <ChevronDown size={16} className={isMobileResourcesOpen ? "rotate-180 transition" : "transition"} />
              </button>
              {isMobileResourcesOpen && (
                <div className="space-y-2 rounded-lg bg-gray-50 p-3">
                  {resources.map((item) => (
                    <Link key={item.href} href={item.href} className="block rounded-md px-2 py-1 text-gray-700">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              <button className="mt-2 w-full rounded-lg bg-black py-3 text-sm text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
