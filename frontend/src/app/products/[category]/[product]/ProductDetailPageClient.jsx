"use client"

import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import {
  detailedProductData,
  categoryNames,
  defaultSectionTitles,
  categoryFallbackImages,
} from "@/data/productCategories"
import { useState, useEffect } from "react"

export default function ProductDetailPageClient() {
  const params = useParams()
  const { category, product } = params
  const [isVisible, setIsVisible] = useState(false)
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const productInfo = detailedProductData[category]?.[product]
  const categoryName = categoryNames[category] || "Products"

  // Helper function to get section titles with fallbacks
  const getSectionTitle = (sectionKey) => {
    return productInfo?.sectionTitles?.[sectionKey] || defaultSectionTitles[sectionKey]
  }

  // Helper function to get appropriate image with intelligent fallback
  const getProductImage = () => {
    // Priority: product heroImage > product fallbackImage > category fallback > default
    return (
      productInfo?.heroImage || productInfo?.fallbackImage || categoryFallbackImages[category] || "/engine-oil-hero.jpg"
    )
  }

  if (!productInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/products/${category}`}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              ← Back to {categoryName}
            </Link>
            <Link
              href="/products"
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition-colors duration-200"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Breadcrumb Navigation */}
      <section className="bg-gray-50 py-4 border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-gray-50/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/products" className="text-gray-500 hover:text-orange-600 transition-colors duration-200">
                Products
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link
                href={`/products/${category}`}
                className="text-gray-500 hover:text-orange-600 transition-colors duration-200"
              >
                {categoryName}
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-orange-600 font-medium">{productInfo.name}</span>
            </nav>

            {/* Quick Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href={`/products/${category}`}
                className="text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to {categoryName}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium mr-4">
                  {productInfo.brand} {productInfo.series || "Premium Series"}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600 font-medium">Available</span>
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{productInfo.name}</h1>
              {productInfo.specifications?.viscosityGrades && (
                <p className="text-xl text-orange-600 font-semibold mb-6">
                  {productInfo.specifications.viscosityGrades
                    .replace("Available in ", "")
                    .replace(" to suit varied engine designs and operating conditions.", "")}
                </p>
              )}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{productInfo.shortDescription}</p>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Get Quote
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">API Standard</div>
                  <div className="font-semibold text-gray-900">
                    {productInfo.specifications?.apiService?.includes("API")
                      ? productInfo.specifications.apiService.split("standards")[0].replace("Meets ", "").trim()
                      : "Not Available"}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Packaging</div>
                  <div className="font-semibold text-gray-900">{productInfo.packaging?.length || 0} Sizes</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                {productInfo.video?.src && showVideo && (
                  <video
                    controls
                    autoPlay
                    loop
                    playsInline
                    poster={productInfo.video.poster}
                    className="w-full h-full object-cover"
                    onError={() => setShowVideo(false)}
                  >
                    <source src={productInfo.video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Fallback image – renders if video is missing OR errored */}
                <Image
                  src={getProductImage() || "/placeholder.svg"}
                  alt={productInfo.name}
                  fill
                  className="object-cover"
                  priority
                  style={{ display: showVideo && productInfo.video?.src ? "none" : "block" }}
                />

                {/* Gradient overlay only when an image is shown */}
                {(!productInfo.video?.src || !showVideo) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Introduction and Applications */}
            <div
              className={`grid gap-12 ${productInfo.introduction && productInfo.applications?.length > 0 ? "lg:grid-cols-2" : "grid-cols-1"}`}
            >
              {(productInfo.introduction || productInfo.applications?.length > 0) && (
                <>
                  {productInfo.introduction && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">{getSectionTitle("overview")}</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">{productInfo.introduction}</p>
                    </div>
                  )}

                  {productInfo.applications?.length > 0 && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">{getSectionTitle("applications")}</h2>
                      <div className="space-y-4">
                        {productInfo.applications.map((app, index) => (
                          <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                            <h3 className="font-semibold text-gray-900 mb-2">{app.title}</h3>
                            <p className="text-sm text-gray-600">{app.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Performance Standards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {getSectionTitle("performanceStandards")}
              </h2>
              <div
                className={`grid gap-6 ${productInfo.performanceStandards ? `md:grid-cols-${Math.min(productInfo.performanceStandards.length, 4)}` : "md:grid-cols-4"}`}
              >
                {productInfo.performanceStandards ? (
                  productInfo.performanceStandards.map((standard, index) => (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-orange-600 font-bold text-lg">{standard.icon}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{standard.title}</h3>
                      <p className="text-orange-600 font-medium">{standard.value}</p>
                    </div>
                  ))
                ) : (
                  // Fallback to original hardcoded standards
                  <>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-orange-600 font-bold text-lg">API</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">API Standards</h3>
                      <p className="text-orange-600 font-medium">
                        {productInfo.specifications?.apiService?.includes("API")
                          ? productInfo.specifications.apiService.split("standards")[0].replace("Meets ", "").trim()
                          : "No Information Available"}
                      </p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-orange-600 font-bold text-lg">IS</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Industry Standards</h3>
                      <p className="text-orange-600 font-medium">
                        {productInfo.specifications?.industryStandards?.replace("Conforms to ", "") ||
                          "No Information Available"}
                      </p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-orange-600 font-bold text-lg">EPL</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Fleet Requirements</h3>
                      <p className="text-orange-600 font-medium">
                        {productInfo.specifications?.oemRequirements
                          ?.replace("Complies with ", "")
                          .replace(" performance levels.", "") || "No Information Available"}
                      </p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-orange-600 font-bold text-lg">SAE</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Viscosity Grades</h3>
                      <p className="text-orange-600 font-medium">
                        {productInfo.specifications?.viscosityGrades
                          ?.replace("Available in ", "")
                          .replace(" to suit varied engine designs and operating conditions.", "") ||
                          "No Information Available"}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Technical Data and Packaging */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{getSectionTitle("technicalSpecs")}</h2>
                {productInfo.technicalData && productInfo.technicalData.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-orange-50 to-orange-100">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold text-gray-700">Characteristics</th>
                          {Object.keys(productInfo.technicalData[0])
                            .filter((key) => key !== "characteristic")
                            .map((header, index) => (
                              <th key={index} className="px-6 py-4 text-center font-semibold text-gray-700">
                                {header.toUpperCase()}
                              </th>
                            ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {productInfo.technicalData.map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-6 py-4 font-medium text-gray-900">{row.characteristic}</td>
                            {Object.keys(row)
                              .filter((key) => key !== "characteristic")
                              .map((key, colIndex) => (
                                <td key={colIndex} className="px-6 py-4 text-center text-gray-700">
                                  {row[key]}
                                </td>
                              ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 italic">Technical specifications will be available soon.</p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{getSectionTitle("packaging")}</h2>
                {productInfo.packaging && productInfo.packaging.length > 0 ? (
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {productInfo.packaging.map((size, index) => (
                      <div
                        key={index}
                        className="bg-orange-50 border-2 border-orange-200 rounded-lg p-3 text-center hover:border-orange-400 transition-colors"
                      >
                        <div className="text-orange-600 font-bold text-sm">{size}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 mb-6 italic">No standard packaging sizes listed</p>
                )}

                {productInfo.customPackaging ? (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{productInfo.customPackaging.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{productInfo.customPackaging.description}</p>
                    <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                      {productInfo.customPackaging.linkText}
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download & Enquiry Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{getSectionTitle("resources")}</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {/* MSDS Download */}
              {productInfo.pdfs?.msds ? (
                <a
                  href={productInfo.pdfs.msds}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-6 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-sm">Download MSDS</span>
                  </div>
                </a>
              ) : (
                <button className="bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-6 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg group opacity-50 cursor-not-allowed">
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-orange-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-sm">Download MSDS</span>
                  </div>
                </button>
              )}

              {/* PDS Download */}
              {productInfo.pdfs?.pds ? (
                <a
                  href={productInfo.pdfs.pds}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-6 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-sm">Product Data Sheet</span>
                  </div>
                </a>
              ) : (
                <button className="bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-6 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg group opacity-50 cursor-not-allowed">
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-orange-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-sm">Product Data Sheet</span>
                  </div>
                </button>
              )}

              {/* Brochure Download */}
              {productInfo.pdfs?.brochure ? (
                <a
                  href={productInfo.pdfs.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-6 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    <span className="text-sm">Download Brochure</span>
                  </div>
                </a>
              ) : (
                <button className="bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-6 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg group opacity-50 cursor-not-allowed">
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-orange-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    <span className="text-sm">Download Brochure</span>
                  </div>
                </button>
              )}

              <Link
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-6 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 text-white mb-3 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="text-sm">Send Enquiry</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Interested in {productInfo.name}?</h2>
              <p className="text-gray-300">Get expert consultation and competitive pricing</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center"
              >
                Contact Us
              </Link>
              <Link
                href={`/products/${category}`}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 text-center"
              >
                View More Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
