// Metadata for SEO (Static Site Generation)
export const metadata = {
  title: "Premium Lubricants & Industrial Oils | Eastern Petroleum Products",
  description: "Explore our comprehensive range of premium lubricants, automotive oils, industrial oils, and specialty products. 60+ years of excellence in lubricant manufacturing with ISO certified quality.",
  keywords: "lubricants, industrial oils, automotive oils, engine oil, gear oil, hydraulic oil, Eastern Petroleum products, premium lubricants India",
  openGraph: {
    title: "Premium Lubricants & Industrial Oils - Eastern Petroleum",
    description: "Comprehensive range of premium lubricants, oils, and specialty products engineered for optimal performance across diverse industries.",
    images: ["/east-logo.png"],
  },
}

import Link from "next/link"
import Image from "next/image"
import productCategories from "@/data/productCategories"
import ProductHeroSection from './ProductHeroSection'
import ProductSearchSection from './ProductSearchSection'

// Static data for the benefits section
const productBenefits = [
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Premium Quality",
    description: "ISO certified manufacturing with stringent quality control processes"
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Advanced Formulation",
    description: "State-of-the-art R&D facilities for superior product development"
  },
  {
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    title: "Reliable Supply",
    description: "Extensive distribution network ensuring timely delivery"
  },
  {
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Technical Support",
    description: "Expert technical assistance and customized solutions"
  }
]

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Client Island for Animation */}
      <ProductHeroSection />

      {/* Search and Categories Section - Client Island for Interactivity */}
      <ProductSearchSection categories={productCategories} />

      {/* Explore Categories CTA - Static */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Explore Our Products?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Click on any category above to discover our complete range of premium lubricants and specialized products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              Get Expert Consultation
            </Link>
            <a
              href="tel:+91-22-2529-9990"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products - Static */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eastern Petroleum Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six decades of expertise in lubricant manufacturing with uncompromising quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={benefit.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
