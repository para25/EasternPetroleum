"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"


export default function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("automotive")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const productCategories = [
    {
      id: "automotive",
      title: "Automotive Oils",
      description: "Premium lubricants for all types of vehicles and automotive applications",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
          />
        </svg>
      ),
      image: "/images/product-inventory.jpg",
      products: [
        "Engine Oil",
        "Tractor Oil",
        "Gen Set Oil",
        "Pump Set Oil",
        "2T Oil",
        "Gas Engine Oil",
        "Gear Oil",
        "Radiator Coolant",
        "Shock Absorber Oil",
        "Calibration Fluids",
        "Ultra TC Engine Oils",
        "Supreme 4T Engine Oil",
        "Rio Engine Oil",
        "Ready Kool",
        "Multigrad Oil",
        "Motor Oil",
        "GEM 15W/-40",
        "Brake Fluid",
      ],
    },
    {
      id: "industrial",
      title: "Industrial Oils",
      description: "High-performance lubricants for industrial machinery and equipment",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      image: "/images/warehouse-storage.jpg",
      products: [
        "Turbine Oils",
        "Hydraulic Oils R & O",
        "Hydraulic Oils Anti Wear Type",
        "Hydraulic Oils HLP",
        "Hydraulic Oils HVI",
        "Hydraulic Oils HLP ZF",
        "Refrigeration Oils",
        "Compressor Oil",
        "Sugar Mill Oils",
        "Open Gear Compounds",
        "Steel Mill Oil",
        "Morgan Bearing Oils",
        "Industrial Gear Oils",
        "Vacuum Pump Oils",
        "Steam Cylinder Oils",
        "Pneumatic Tool Oils",
        "MIST Oils",
        "Tool Way Oils",
        "Circulating Oils",
        "Compounded Fluids",
        "Axle Oils",
      ],
    },
    {
      id: "specialty",
      title: "Industrial Specialty Oils",
      description: "Specialized lubricants for unique industrial applications",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: "/images/production-equipment.jpg",
      products: [
        "Heatra Fluids",
        "Rubber Process Oil",
        "Glass Mould Oils",
        "Agricultural Spray Oil",
        "Transformer Oil",
        "Aluminium Rolling Oils",
        "Orchard Spray Oil",
        "Napthenic Oils",
        "Mango Spray Oil",
        "Grape Spray Oil",
        "Banana Spray Oil",
        "Apple Spray Oil",
        "Formwork Oil",
        "Shuttering Oil",
        "Demoulding Oil",
        "Mould Releasing Agent",
      ],
    },
    {
      id: "marine",
      title: "Marine Oils",
      description: "Marine-grade lubricants for maritime applications",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      ),
      image: "/images/branded-storage-tanks.jpg",
      products: ["Marine Engine Oil", "Marine Turbine Oil", "Marine Hydraulic Oil"],
    },
    {
      id: "textile",
      title: "Textile Oils",
      description: "Specialized lubricants for textile machinery and processes",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"
          />
        </svg>
      ),
      image: "/images/manufacturing-facility.jpg",
      products: [
        "Conning Oil 10",
        "Knitting Oils",
        "Loom Oils",
        "Textile Machinery Oils",
        "Spintex Oils",
        "Conmol Oil",
      ],
    },
    {
      id: "waxes",
      title: "Specialty Oils & Waxes",
      description: "Premium waxes and specialty oils for various applications",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      image: "/images/office-interior.jpg",
      products: [
        "Polypropylene Wax",
        "Petroleum Jelly (IP)",
        "Paraffin Wax",
        "Liquid Paraffin Oil",
        "White Mineral Oil",
        "White Mineral Oil (Pharma Grade)",
        "Bees Wax",
        "Carnauba Wax",
      ],
    },
    {
      id: "grease",
      title: "Grease",
      description: "High-quality greases for various lubrication needs",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      image: "/images/product-inventory.jpg",
      products: [
        "Eastto EP Grease (NLGI 0,1,2,3)",
        "Eastto Wheel Bearing Grease",
        "Cup Grease (NLGI 2,3)",
        "Eastto Chassis Grease",
        "Eastto Lithox Grease (NLGI 2&3)",
        "Eastto High Temp Grease",
      ],
    },
    {
      id: "metalworking",
      title: "Metal Working Fluids",
      description: "Cutting fluids and metalworking lubricants",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0z"
          />
        </svg>
      ),
      image: "/images/warehouse-storage.jpg",
      products: [
        "Soluble Cutting Oil",
        "Semi Synth Cutting Oil",
        "Quenching Oil",
        "Metal Drawing 15",
        "Metalhone TX",
        "Gun Drilling Oil",
      ],
    },
    {
      id: "solvents",
      title: "Solvents",
      description: "Industrial solvents and aromatic compounds",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      image: "/images/production-equipment.jpg",
      products: [
        "Eastto Max Series (Paraffin Rich Low Aromatic Solvent)",
        "Eastto Max 110 (Paraffin Rich Low Aromatic Solvent)",
        "Eastto Max 80 (Paraffin Rich Low Aromatic Solvent)",
        "Paraffin Rich Low Aromatic Solvent",
        "Eastonol-A (Paraffin Rich Low Aromatic Solvent)",
      ],
    },
    {
      id: "baseoils",
      title: "Base Oils",
      description: "High-quality base oils for lubricant formulation",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      image: "/images/branded-storage-tanks.jpg",
      products: [
        "Base Oil : BX-12, BX-32, BX-100/120",
        "Base Oil : BX-460",
        "Base Oils : LX-30, LX-100",
        "Low Visc PX- 3",
      ],
    },
    {
      id: "additives",
      title: "Fuel Additives",
      description: "Performance additives for fuel enhancement",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "/images/manufacturing-facility.jpg",
      products: ["Fuel Performance Additives", "Engine Treatment Additives", "Fuel System Cleaners"],
    },
    {
      id: "sulphonates",
      title: "Sulphonates",
      description: "Petroleum sulphonates for various applications",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      image: "/images/office-interior.jpg",
      products: [
        "Sodium Petroleum Sulphonate (Eastto PET 60)",
        "Calcium Petroleum Sulphonate (Eastto PET 30)",
        "Barium Petroleum Sulphonate (Eastto PET 800)",
        "Magnesium Petroleum Sulphonate (Eastto PET 1400)",
      ],
    },
    {
      id: "defence",
      title: "Defence Lubricants",
      description: "Military-grade lubricants for defense applications",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      image: "/images/warehouse-storage.jpg",
      products: [
        "Defence Automatic Transmission Oil",
        "Defence Lubricating Oil",
        "Defence Recoiling Fluid",
        "Defence Radiator Coolant",
        "Defence Preservatives",
        "Defence Preventives",
        "Defence Hydraulic Oil",
        "Defence Gear Lubricants",
        "Defence Greases",
        "Defence Engine Oil",
      ],
    },
    {
      id: "emulsifiers",
      title: "Emulsifiers",
      description: "Industrial emulsifiers and cutting compounds",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      image: "/images/production-equipment.jpg",
      products: ["Eastto Conkut EX & CX"],
    },
    {
      id: "larvicidal",
      title: "Mosquito Larvicidal Oil",
      description: "Specialized oil for mosquito control applications",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      image: "/images/branded-storage-tanks.jpg",
      products: ["Mosquito Larvicidal Oil"],
    },
  ]

  const filteredCategories = productCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.products.some((product) => product.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const activeProductCategory = productCategories.find((cat) => cat.id === activeCategory)

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Storage1.jpg"
            alt="Eastern Petroleum Product Range"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Our Products</h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl">
                Comprehensive range of premium lubricants, oils, and specialty products engineered for optimal
                performance across diverse industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Product</h2>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <svg
                  className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>          {/* Product Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 group ${
                  activeCategory === category.id ? "ring-2 ring-orange-500" : ""
                }`}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">{category.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {category.products.slice(0, 3).map((product, productIndex) => (
                    <li key={productIndex} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {product}
                    </li>
                  ))}
                  {category.products.length > 3 && (
                    <li className="text-orange-600 font-medium text-xs">
                      +{category.products.length - 3} more products
                    </li>
                  )}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-orange-600 font-medium text-sm">View Products</span>
                  <svg className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      {activeProductCategory && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    {activeProductCategory.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{activeProductCategory.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{activeProductCategory.description}</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">
                      {activeProductCategory.products.length}
                    </div>
                    <div className="text-gray-600">Products Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">60+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={activeProductCategory.image || "/placeholder.svg"}
                    alt={activeProductCategory.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Products List */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {activeProductCategory.title} - Product Range
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {activeProductCategory.products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-800 font-medium text-sm">{product}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
                <p className="text-lg mb-6 text-orange-100">
                  Contact our technical team for detailed specifications, pricing, and custom solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                  <a
                    href="tel:+91-22-2529-9990"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Our Products */}
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
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">ISO certified manufacturing with stringent quality control processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Advanced Formulation</h3>
              <p className="text-gray-600">State-of-the-art R&D facilities for superior product development</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Reliable Supply</h3>
              <p className="text-gray-600">Extensive distribution network ensuring timely delivery</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Support</h3>
              <p className="text-gray-600">Expert technical assistance and customized solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
