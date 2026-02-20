    "use client"

import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative bg-[#070816] text-white pt-10 md:pt-24 pb-5 md:pb-10 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[200px] rounded-full"></div>
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>

  
          <div className="relative z-10 mx-1 md:mx-1 lg:mx-2 xl:mx-4 2xl:mx-10">
              <div >

        {/* Top Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Let’s Connect with us
        </h2>

        <div className="border-t border-white/10 pt-12 grid md:grid-cols-5   gap-10">

          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">TubeHelper</h3>
            <p className="text-gray-400 mb-6">
              We build secure, SEO-friendly, and high-performing
              WordPress websites tailored to your goals.
            </p>

            <h4 className="font-medium mb-2">Contact:</h4>
            <p className="text-gray-400 text-sm">
              hello@nichegeeky@gmail.com
            </p>
            <p className="text-gray-400 text-sm mb-6">
              +8807683674747
            </p>

            {/* Email Input + Button */}

          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>About Us</li>
              <li><a href="how_it_works">Our Work</a></li>
              <li>24/7 Support</li>              
              <li>Reviews</li>
              <li>Pricing</li>
              <li><a href="contact">Contact Us</a></li>
              
            </ul>
          </div>

          {/* Column 3 */}

              <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="blog">Blogs</a></li>
              <li>E-commerce Tips</li>
              <li>Free Resources</li>
              <li>FAQs</li>
              <li>Guides</li>
            </ul>
          </div>

           <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="services">Shopify Store Development</a></li>
              <li><a href="services">WooCommerce Store Development</a></li>
              <li><a href="services">Custom E-commerce Website</a></li>
              <li><a href="services">Maintenance & Support</a></li>
              <li><a href="services">Speed & Conversion Rate Optimization</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/privacy_policy">Privacy Policy</a></li>
              <li><a href="/terms_of_use">Terms & Conditions </a></li>
              <li><a href="/refund_policy">Refund Policy</a></li>
            </ul>
          </div>

          

        </div>

           <div className="flex items-start w-[350px] mt-5 bg-white/5 border border-white/10 rounded-full p-1">
              <input
                type="email"
                placeholder="Enter you email address..."
                className="bg-transparent outline-none px-4 py-2 text-sm flex-1 text-gray-300"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 rounded-full text-sm hover:scale-105 transition">
                Book a Demo
              </button>
            </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm">
            Niche Geeky © 2025 all rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTimes, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center 
                rounded-full border border-white/20 bg-white/5 
                hover:bg-white/10 transition cursor-pointer"
              >
                <Icon className="text-sm" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
    </footer>
  )
}
