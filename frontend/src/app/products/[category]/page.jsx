"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

// Import the same product categories data
const productCategories = [
  {
    id: "automotive",
    title: "Automotive Oils",
    description: "Premium lubricants for all types of vehicles and automotive applications",
    image: "/images/product-inventory.jpg",
    products: [
      { id: "engine-oil", name: "Engine Oil", description: "High-performance motor engine oils for various applications" },
      { id: "tractor-oil", name: "Tractor Oil", description: "Specialized oils for agricultural machinery" },
      { id: "gen-set-oil", name: "Gen Set Oil", description: "Reliable oils for generator sets" },
      { id: "pump-set-oil", name: "Pump Set Oil", description: "Oils designed for pump applications" },
      { id: "2t-oil", name: "2T Oil", description: "Two-stroke engine oils" },
      { id: "gas-engine-oil", name: "Gas Engine Oil", description: "Specialized oils for gas engines" },
      { id: "gear-oil", name: "Gear Oil", description: "High-quality gear lubricants" },
      { id: "radiator-coolant", name: "Radiator Coolant", description: "Engine cooling solutions" },
      { id: "shock-absorber-oil", name: "Shock Absorber Oil", description: "Hydraulic oils for shock absorbers" },
      { id: "calibration-fluids", name: "Calibration Fluids", description: "Precision calibration solutions" },
      { id: "ultra-tc-engine-oils", name: "Ultra TC Engine Oils", description: "Premium engine oil formulations" },
      { id: "supreme-4t-engine-oil", name: "Supreme 4T Engine Oil", description: "Four-stroke engine oils" },
      { id: "rio-engine-oil", name: "Rio Engine Oil", description: "Economy engine oil solutions" },
      { id: "ready-kool", name: "Ready Kool", description: "Ready-to-use coolant" },
      { id: "multigrad-oil", name: "Multigrad Oil", description: "Multi-grade engine oils" },
      { id: "motor-oil", name: "Motor Oil", description: "General purpose motor oils" },
      { id: "gem-15w-40", name: "GEM 15W/-40", description: "Multi-grade automotive oil" },
      { id: "brake-fluid", name: "Brake Fluid", description: "High-performance brake fluids" },
    ],
  },
  {
    id: "industrial",
    title: "Industrial Oils",
    description: "High-performance lubricants for industrial machinery and equipment",
    image: "/images/warehouse-storage.jpg",
    products: [
      { id: "turbine-oils", name: "Turbine Oils", description: "High-performance turbine lubricants" },
      { id: "hydraulic-oils-r-o", name: "Hydraulic Oils R & O", description: "Rust and oxidation hydraulic oils" },
      { id: "hydraulic-oils-anti-wear", name: "Hydraulic Oils Anti Wear Type", description: "Anti-wear hydraulic fluids" },
      // Add more industrial products...
    ],
  },
  // Add other categories as needed...
]

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const category = productCategories.find(cat => cat.id === categoryId)

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link href="/products" className="text-orange-600 hover:text-orange-700">
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <nav className="text-sm breadcrumbs mb-4">
                <Link href="/products" className="text-gray-300 hover:text-white">Products</Link>
                <span className="text-gray-400 mx-2">›</span>
                <span className="text-white">{category.title}</span>
              </nav>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">{category.title}</h1>
              <p className="text-lg lg:text-xl text-gray-200 max-w-3xl">{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-600">{category.title}</span> Range
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore our comprehensive range of {category.title.toLowerCase()} designed for superior performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product, index) => (
              <Link
                key={product.id}
                href={`/products/${categoryId}/${product.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 bg-gradient-to-br from-orange-50 to-orange-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-orange-600 text-xs font-medium px-2 py-1 rounded-full">
                      #{index + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-medium text-sm">View Details</span>
                    <svg className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Our technical experts are here to help you select the perfect {category.title.toLowerCase()} for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              Contact Our Experts
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
