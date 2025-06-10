import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <Image 
                    src="/east-logo.png"
                    alt="Eastern Petroleum Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-lg font-bold">Eastern Petroleum</div>
                  <div className="text-xs text-gray-400">Since 1964</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading manufacturer of premium lubricants, serving industries across India for over 60 years.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors duration-200">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors duration-200">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors duration-200">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            
            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products/industrial" className="hover:text-white transition-colors duration-200">
                    Industrial Lubricants
                  </Link>
                </li>
                <li>
                  <Link href="/products/automotive" className="hover:text-white transition-colors duration-200">
                    Automotive Oils
                  </Link>
                </li>
                <li>
                  <Link href="/products/marine" className="hover:text-white transition-colors duration-200">
                    Marine Lubricants
                  </Link>
                </li>
                <li>
                  <Link href="/products/specialty" className="hover:text-white transition-colors duration-200">
                    Specialty Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  {/* MapPin icon using SVG */}
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Mumbai, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Phone icon using SVG */}
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919876543210" className="hover:text-white transition-colors duration-200">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  {/* Mail icon using SVG */}
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@easternpetroleum.com" className="hover:text-white transition-colors duration-200">
                    info@easternpetroleum.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Eastern Petroleum. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </div>
    );
}