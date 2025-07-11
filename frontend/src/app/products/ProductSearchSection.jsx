"use client"

import { useState } from "react"
import Link from "next/link"
import { CategoryIconDisplay } from "@/components/CategoryIconDisplay"

export default function ProductSearchSection({ categories }) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.products.some((product) =>
        typeof product === 'string'
          ? product.toLowerCase().includes(searchTerm.toLowerCase())
          : product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
  )

  return (
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
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products/${category.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 group"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                <CategoryIconDisplay paths={category.iconPaths} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                {category.title}
              </h3>
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
                    {typeof product === 'string' ? product : product.name}
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

        {/* No results message */}
        {filteredCategories.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search term or browse all categories above.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
