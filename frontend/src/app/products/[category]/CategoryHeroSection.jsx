"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CategoryIconDisplay } from "@/components/CategoryIconDisplay"

export default function CategoryHeroSection({ category }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
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
                src={category.image}
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
  )
}
