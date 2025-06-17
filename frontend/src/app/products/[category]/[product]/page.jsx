"use client"

import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

// Product data - simplified for essential information only
const productData = {
  automotive: {
    "engine-oil": {
      name: "Motor Engine Oil (SAE 30, 40, 50)",
      brand: "EASTTO",
      shortDescription: "High-performance motor engine oils for various applications",
      heroImage: "/engine-oil-hero.jpg",
      introduction: "Motor Engine Oils in grades SAE 30, SAE 40, and SAE 50 are expertly blended from highly refined base stocks with a high viscosity index. They incorporate a balanced additive package providing detergent, dispersant, antioxidant, and anti-wear properties. These oils are designed to ensure reliable lubrication, prevent deposit formation, control oxidation, and protect moving parts under a range of operating conditions.",
      applications: [
        {
          title: "Four-Stroke Gasoline Engines (Older Designs)",
          description: "Ideal for crankcase lubrication in vintage or less-demanding gasoline engines where these viscosity grades have proven suitability."
        },
        {
          title: "Stationary Diesel Engines",
          description: "Recommended for pumpset and genset applications, where consistent performance and longevity are critical."
        },
        {
          title: "Older Automotive Diesel Engines (Commercial Fleets)",
          description: "Particularly well-suited for legacy diesel engines in fleet operation, offering protection under heavy-duty cycles."
        }
      ],
      specifications: {
        apiService: "Meets API CC/SC standards, aligning with requirements for older diesel and gasoline engines.",
        industryStandards: "Conforms to IS 13656:2002.",
        oemRequirements: "Complies with EPL-1 / EDL-1 performance levels.",
        viscosityGrades: "Available in SAE 30, SAE 40, and SAE 50 to suit varied engine designs and operating conditions."
      },
      packaging: ["210 L", "26 L", "20 L", "15 L", "10 L", "7.5 L", "5 L", "3.5 L", "1 L"],
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C., cSt",
          sae30: "11.0",
          sae40: "14.0",
          sae50: "19.0"
        },
        {
          characteristic: "Flash Point,°C (COC), Min.",
          sae30: "220",
          sae40: "220",
          sae50: "220"
        },
        {
          characteristic: "TBN, mg KOH / gm.",
          sae30: "5.0",
          sae40: "5.0",
          sae50: "5.0"
        },
        {
          characteristic: "Pour Point, °C Max.",
          sae30: "(-) 6",
          sae40: "(-) 6",
          sae50: "(-) 6"
        }
      ]
    }
    // Add more products here...
  }
  // Add more categories here...
}

const categoryNames = {
  automotive: "Automotive Oils",
  industrial: "Industrial Oils",
  // Add more categories...
}

export default function ProductDetailPage() {
  const params = useParams()
  const { category, product } = params

  const productInfo = productData[category]?.[product]
  const categoryName = categoryNames[category] || "Products"

  if (!productInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-orange-600 hover:text-orange-700">
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">      {/* Hero Section - Compact */}
      <section className="relative h-64 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={productInfo.heroImage}
            alt={productInfo.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">            <div className="transition-all duration-300">
              <nav className="text-sm breadcrumbs mb-3 font-sans">
                <Link href="/products" className="text-gray-300 hover:text-white">Products</Link>
                <span className="text-gray-400 mx-2">›</span>
                <Link href={`/products/${category}`} className="text-gray-300 hover:text-white">{categoryName}</Link>
                <span className="text-gray-400 mx-2">›</span>
                <span className="text-white">{productInfo.name}</span>
              </nav>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-serif">{productInfo.name}</h1>
              <p className="text-gray-200 max-w-3xl font-semibold font-sans">
                GRADES: SAE 30, 40, 50
              </p>
              <div className="mt-3">
                <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full font-semibold font-sans">
                  {productInfo.brand}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* Product Information - Compact Layout */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
              {/* Introduction and Applications - Side by Side */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Introduction</h2>
                <p className="text-gray-700 leading-relaxed font-sans">
                  {productInfo.introduction}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Applications</h2>
                <div className="space-y-4">
                  {productInfo.applications.map((app, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <h3 className="font-semibold text-gray-900 mb-2 font-sans">{app.title}</h3>
                      <p className="text-sm text-gray-600 font-sans">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>            {/* Performance Specifications - Compact Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-5 font-serif">Performance Level</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2 font-sans">API Service</h3>
                  <p className="text-sm text-orange-600 font-medium">API CC/SC</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2 font-sans">Industry Standards</h3>
                  <p className="text-sm text-orange-600 font-medium">IS 13656:2002</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2 font-sans">OEM Requirements</h3>
                  <p className="text-sm text-orange-600 font-medium">EPL-1 / EDL-1</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2 font-sans">Grades</h3>
                  <p className="text-sm text-orange-600 font-medium">SAE 30, 40, 50</p>
                </div>
              </div>
            </div>            {/* Technical Data and Packaging - Side by Side */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-5 font-serif">Typical Properties</h2>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-orange-50 to-orange-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 font-sans">
                          Characteristics
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 font-sans">
                          SAE 30
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 font-sans">
                          SAE 40
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 font-sans">
                          SAE 50
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {productInfo.technicalData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 font-medium text-gray-900 font-sans">
                            {row.characteristic}
                          </td>
                          <td className="px-4 py-3 text-gray-700 font-sans">
                            {row.sae30}
                          </td>
                          <td className="px-4 py-3 text-gray-700 font-sans">
                            {row.sae40}
                          </td>
                          <td className="px-4 py-3 text-gray-700 font-sans">
                            {row.sae50}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 font-serif">Packing</h2>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {productInfo.packaging.map((size, index) => (
                    <div key={index} className="bg-white border-2 border-orange-200 rounded-lg p-3 text-center hover:border-orange-400 transition-colors">
                      <div className="text-orange-600 font-bold font-sans">{size}</div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{productInfo.brand}</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-sans">
                  EASTTO - is an emerging brand in Engine Oil. Eastern Petroleum (EPPL) is the leading Manufacturers, exporter, and supplier of Engine Oil from India to Middle east countries and global markets.
                </p>
              </div>            </div>

          </div>
        </div>
      </section>

      {/* Download & Enquiry Buttons Section */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Product Resources</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <button className="bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg group">
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-orange-600 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-sans text-sm">Download MSDS</span>
                </div>
              </button>
              
              <button className="bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg group">
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-orange-600 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-sans text-sm">Product Data Sheet</span>
                </div>
              </button>
              
              <button className="bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg group">
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-orange-600 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span className="font-sans text-sm">Download Brochure</span>
                </div>
              </button>
              
              <Link
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-white mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-sans text-sm">Send Enquiry</span>
                </div>
              </Link>
            </div>
            
            <p className="text-sm text-gray-600 mt-4 font-sans">
              Need technical support or have questions? Our team is here to help you choose the right product.
            </p>
          </div>
        </div>
      </section>{/* Contact Section - Compact */}
      <section className="py-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-bold mb-3">Interested in {productInfo.name}?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-sm"
            >
              Contact Us
            </Link>
            <Link
              href={`/products/${category}`}
              className="border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 text-sm"
            >
              View More Products
            </Link>
          </div>
        </div>
      </section>
    </div>  )
}
