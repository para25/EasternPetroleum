"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import productCategories, { getDetailedProductCategories } from "@/data/productCategories"
import { CategoryIconDisplay } from "@/components/CategoryIconDisplay"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category
  const [isVisible, setIsVisible] = useState(false)
  
  // Get the detailed product categories data that includes objects with id, name, and description
  const detailedCategories = getDetailedProductCategories()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Find the category from detailed categories for display
  const category = detailedCategories.find(cat => cat.id === categoryId)

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
  }  return (
    <div className="min-h-screen bg-white">
      {/* Product Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">                <div className="text-4xl mr-4 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CategoryIconDisplay paths={category.iconPaths} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{category.description}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    {category.products.length}
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
                  src={category.image || "/engine-oil-hero.jpg"}
                  alt={category.title}
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
              {category.title} - Product Range
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.products.map((product, index) => (
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
