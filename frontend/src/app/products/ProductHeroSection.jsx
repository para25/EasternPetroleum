"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ProductHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-96 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Test5.jpg"
          alt="Eastern Petroleum Product Range"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-black/30"></div>
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl">
              Comprehensive range of premium lubricants, oils, and specialty products engineered for optimal
              performance across diverse industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
