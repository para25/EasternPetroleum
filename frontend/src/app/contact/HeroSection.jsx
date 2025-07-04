"use client"

import { useState, useEffect } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-25"></div>

      {/* Minimal Geometric Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-orange-100 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Get in <span className="font-medium text-orange-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to discover premium lubricant solutions? Let's start a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
