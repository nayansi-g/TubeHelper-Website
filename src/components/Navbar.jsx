"use client"

import { useState, useRef, useEffect } from "react"
import {
  ChartNoAxesCombined,
  ChevronDown,
  Cpu,
  Megaphone,
  PhoneOutgoing,
  ShoppingCart,
  Sprout
} from "lucide-react"

export default function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)

  const solutionsRef = useRef(null)
  const resourcesRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) {
        setIsSolutionsOpen(false)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setIsResourcesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="w-full bg-white rounded-b-[25px] text-black fixed top-0 left-0 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black flex justify-center items-center text-white rounded-md">TH</div>
          <span className="text-xl font-semibold">TubeHelper</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium relative">

          <a href="#" className="hover:text-purple-600">Home</a>

          {/* Services Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => {
                setIsSolutionsOpen(!isSolutionsOpen)
                setIsResourcesOpen(false)
              }}
              className="flex items-center gap-1 hover:text-purple-600"
            >
              Services <ChevronDown size={16} />
            </button>

            {isSolutionsOpen && (
              <div className="absolute top-12 w-[95vw] max-w-[900px] bg-white shadow-xl rounded-2xl p-8 grid lg:grid-cols-3 gap-10">

                {/* Column 1 */}
                <div>
                  <h4 className="text-gray-400 mb-4 text-sm">Our Services</h4>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <ChartNoAxesCombined className="w-5 h-5" />
                        Performance Marketing
                      </h3>
                      <p className="text-sm text-gray-500">Meta & Instagram Ads</p>
                      <p className="text-sm text-gray-500">Google Ads (Search & Shopping)</p>
                      <p className="text-sm text-gray-500">YouTube Ads</p>
                    </div>

                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <ShoppingCart className="w-5 h-5" />
                        Ecommerce Growth
                      </h3>
                      <p className="text-sm text-gray-500">Shopify Growth Strategy</p>
                      <p className="text-sm text-gray-500">Conversion Rate Optimization (CRO)</p>
                      <p className="text-sm text-gray-500">Funnel Optimization</p>
                    </div>

                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <Sprout className="w-5 h-5" />
                        Organic Growth
                      </h3>
                      <p className="text-sm text-gray-500">SEO</p>
                      <p className="text-sm text-gray-500">Content Marketing</p>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <Cpu className="w-5 h-5" />
                        Analytics & Automation
                      </h3>
                      <p className="text-sm text-gray-500">Tracking & GA4 Setup</p>
                      <p className="text-sm text-gray-500">Marketing Automation</p>
                      <p className="text-sm text-gray-500">Reporting & Dashboard Setup</p>
                      <p className="text-sm text-gray-500">Landing Page Strategy</p>
                    </div>

                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <Megaphone className="w-5 h-5" />
                        Amplify brand awareness
                      </h3>
                      <p className="text-sm text-gray-500">
                        Maximize reach and business results
                      </p>
                    </div>
                  </div>
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

          <a href="#" className="hover:text-purple-600">Case Studies</a>
          <a href="#" className="hover:text-purple-600">About Us</a>

          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => {
                setIsResourcesOpen(!isResourcesOpen)
                setIsSolutionsOpen(false)
              }}
              className="flex items-center gap-1 hover:text-purple-600"
            >
              Resources <ChevronDown size={16} />
            </button>

            {isResourcesOpen && (
              <div className="absolute top-12 w-44 bg-white shadow-xl border border-gray-300 rounded-xl p-6 space-y-3">
                <p className="hover:text-purple-600 cursor-pointer">Contact</p>
                <p className="hover:text-purple-600 cursor-pointer">Blog</p>
                <p className="hover:text-purple-600 cursor-pointer">Case Studies</p>
                <p className="hover:text-purple-600 cursor-pointer">Guides</p>
                <p className="hover:text-purple-600 cursor-pointer">FAQ</p>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="border px-2 py-2 rounded-lg text-sm">
            <PhoneOutgoing className="text-black w-5 h-5" />
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white px-6 pb-6 space-y-4 shadow-md">

          <a href="#" className="block">Home</a>

          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex justify-between w-full"
            >
              Services <ChevronDown size={16} />
            </button>

            {isMobileServicesOpen && (
              <div className="mt-3 space-y-3 text-sm text-gray-600">
                <p>Performance Marketing</p>
                <p>Ecommerce Growth</p>
                <p>Organic Growth</p>
                <p>Analytics & Automation</p>
                <p>Amplify brand awareness</p>
              </div>
            )}
          </div>

          <a href="#" className="block">Case Studies</a>
          <a href="#" className="block">About Us</a>

          <div>
            <button
              onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
              className="flex justify-between w-full"
            >
              Resources <ChevronDown size={16} />
            </button>

            {isMobileResourcesOpen && (
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p>Contact</p>
                <p>Blog</p>
                <p>Case Studies</p>
                <p>Guides</p>
                <p>FAQ</p>
              </div>
            )}
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg mt-4">
            Get Started
          </button>

        </div>
      )}
    </header>
  )
}