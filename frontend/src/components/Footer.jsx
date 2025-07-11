"use client"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Company Info - Enhanced */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white p-1">
                                    <Image 
                                        src="/east-logo.png"
                                        alt="Eastern Petroleum Logo"
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="ml-4">
                                    <div className="text-xl font-bold">Eastern Petroleum</div>
                                    <div className="text-sm text-orange-400 font-medium">Since 1964</div>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Leading manufacturer of premium lubricants, serving industries across India for over 60 years with uncompromising quality and innovation.
                            </p>
                            
                            {/* Social Media */}
                            <div className="flex space-x-4">
                                <a 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                                    aria-label="Follow us on Twitter"
                                    title="Follow us on Twitter"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                                    aria-label="Connect with us on LinkedIn"
                                    title="Connect with us on LinkedIn"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                                    aria-label="Follow us on Pinterest"
                                    title="Follow us on Pinterest"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.658-1.378l-.715 2.729c-.26.992-.958 2.233-1.428 2.99.668.206 1.376.319 2.122.319 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links - Enhanced */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white border-b border-orange-600 pb-2">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-orange-600 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-orange-600 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-orange-600 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-orange-600 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Products - Enhanced */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white border-b border-orange-600 pb-2">Our Products</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/products/industrial" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-orange-600 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Industrial Lubricants
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products/automotive" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-orange-600 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Automotive Oils
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products/marine" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-orange-600 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Marine Lubricants
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products/specialty" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-orange-600 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Specialty Products
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info - Enhanced */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white border-b border-orange-600 pb-2">Get In Touch</h3>
                            <div className="space-y-4">
                                {/* Address */}
                                <div className="flex items-start gap-3 group">
                                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-200">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium mb-1">Our Location</div>
                                        <span className="text-gray-300 text-sm">Mumbai, Maharashtra, India</span>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-3 group">
                                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-200">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium mb-1">Phone Numbers</div>
                                        <div className="text-gray-300 text-sm space-y-1">
                                            <div>022 – 2529 9990 / 91 / 92 / 93 (Office)</div>
                                            <div>022 – 2742 1694 / 2742 3819 (Factory)</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-3 group">
                                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-200">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium mb-1">Email Us</div>
                                        <div className="space-y-1">
                                            <a href="mailto:office@eastto.in" className="text-gray-300 text-base hover:text-orange-400 transition-colors duration-200 block py-2 px-1 min-h-[44px] inline-flex items-center touch-manipulation">
                                                office@eastto.in
                                            </a>
                                            <a href="mailto:sales@eastto.in" className="text-gray-300 text-base hover:text-orange-400 transition-colors duration-200 block py-2 px-1 min-h-[44px] inline-flex items-center touch-manipulation">
                                                sales@eastto.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Footer Bottom */}
                    <div className="border-t border-gray-800 mt-16 pt-8">
                        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                            <div className="text-gray-400 text-sm">
                                &copy; 2024 Eastern Petroleum. All rights reserved.
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                                    Terms of Service
                                </Link>
                                <Link href="/sitemap" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                                    Sitemap
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}