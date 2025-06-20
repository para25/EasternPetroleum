"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import productCategories, { getDetailedProductCategories, categoryNames } from "@/data/productCategories"
import { CategoryIconDisplay } from "@/components/CategoryIconDisplay"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Get the detailed product categories data that includes objects with id, name, and description
  const detailedCategories = getDetailedProductCategories()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Find the category from detailed categories for display
  const category = detailedCategories.find((cat) => cat.id === categoryId)
  const categoryDisplayName = categoryNames[categoryId] || "Products"

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

  // Filter products based on search term
  const filteredProducts = category.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-orange-600 transition-colors duration-200">
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="text-gray-500 hover:text-orange-600 transition-colors duration-200">
              Products
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-orange-600 font-medium">{categoryDisplayName}</span>
          </nav>
        </div>
      </section>

      {/* Category Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <CategoryIconDisplay paths={category.iconPaths} />
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{category.title}</h1>
                  <p className="text-orange-600 font-medium mt-1">{category.products.length} Products Available</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{category.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{category.products.length}</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">60+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">ISO</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center"
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={category.image || "/products/automotive.jpg"}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{category.title} - Product Range</h2>
              <p className="text-gray-600 mt-1">
                {filteredProducts.length} of {category.products.length} products
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder={`Search ${category.title.toLowerCase()}...`}
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
        </div>
      </section>

      {/* Products List - New Simple Design */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/products/${categoryId}/${product.id}`}
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
                    <span className="text-gray-800 font-medium text-sm">{product.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
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
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or browse all products.</p>
              <button onClick={() => setSearchTerm("")} className="text-orange-600 hover:text-orange-700 font-medium">
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Other Categories</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productCategories
              .filter((cat) => cat.id !== categoryId)
              .slice(0, 4)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  href={`/products/${relatedCategory.id}`}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 group"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                    <CategoryIconDisplay paths={relatedCategory.iconPaths} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                    {relatedCategory.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{relatedCategory.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-600 font-medium">
                      {relatedCategory.products.length} Products
                    </span>
                    <svg
                      className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
            Our technical experts are here to help you select the perfect {category.title.toLowerCase()} for your
            specific needs.
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
