"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "./navbar"

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Auto-slide for hero carousel
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const heroSlides = [
    {
      image: "/images/branded-storage-tanks.jpg",
      title: "Industrial Scale Operations",
      subtitle: "Massive branded storage capacity with Eastto infrastructure serving global markets",
    },
    {
      image: "/images/product-inventory.jpg",
      title: "Extensive Product Range",
      subtitle: "Comprehensive inventory of premium lubricants in various packaging formats",
    },
    {
      image: "/images/manufacturing-facility.jpg",
      title: "Advanced Manufacturing",
      subtitle: "State-of-the-art production facilities ensuring consistent quality and reliability",
    },
    {
      image: "/images/production-equipment.jpg",
      title: "Precision Engineering",
      subtitle: "Cutting-edge processing equipment for superior lubricant formulations",
    },
  ]

  const stats = [
    { number: "60+", label: "Years of Excellence", icon: "🏆" },
    { number: "500+", label: "Trusted Companies", icon: "🤝" },
    { number: "1000+", label: "Product Variants", icon: "🛢️" },
    { number: "50+", label: "Countries Served", icon: "🌍" },
  ]

  const capabilities = [
    {
      title: "Manufacturing Excellence",
      description:
        "State-of-the-art production facilities with advanced processing equipment, ensuring consistent quality and meeting international standards for all our lubricant products.",
      image: "/images/manufacturing-facility.jpg",
      features: [
        "ISO 9001:2015 Certified",
        "Advanced Processing Units",
        "Quality Control Labs",
        "Environmental Compliance",
      ],
    },
    {
      title: "Extensive Product Inventory",
      description:
        "Comprehensive warehouse facilities housing thousands of lubricant drums in various formulations, ensuring immediate availability and quick delivery to our customers.",
      image: "/images/product-inventory.jpg",
      features: ["Diverse Product Range", "Immediate Availability", "Quality Packaging", "Systematic Storage"],
    },
    {
      title: "Robust Infrastructure",
      description:
        "Large-scale storage tanks and processing equipment with Eastto branding, demonstrating our commitment to maintaining the highest standards in lubricant manufacturing.",
      image: "/images/branded-storage-tanks.jpg",
      features: ["Massive Storage Capacity", "Branded Infrastructure", "Safety Standards", "Scalable Operations"],
    },
  ]

  const operationalHighlights = [
    {
      title: "Production Capabilities",
      description: "Advanced processing equipment and precision engineering for superior lubricant formulations",
      image: "/images/production-equipment.jpg",
      stats: ["24/7 Operations", "Automated Systems", "Quality Monitoring"],
    },
    {
      title: "Warehouse Management",
      description: "Systematic storage and inventory management ensuring product quality and availability",
      image: "/images/warehouse-storage.jpg",
      stats: ["Climate Controlled", "Organized Systems", "Quick Access"],
    },
    {
      title: "Distribution Network",
      description: "Reliable logistics and transportation ensuring timely delivery across India and beyond",
      image: "/images/logistics-truck.jpg",
      stats: ["Pan-India Reach", "Timely Delivery", "Safe Transport"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="max-w-4xl">
                <div className="mb-6">
                  <span className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
                    🏭 Leading Indian Lubricant Manufacturer Since 1964
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Eastern Petroleum
                  <span className="block text-3xl lg:text-4xl font-medium text-orange-400 mt-2">
                    Professional Lubricants
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                  {heroSlides[activeSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/products"
                    className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSlide === index ? "bg-orange-500 w-8" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted Excellence</h2>
            <p className="text-xl text-gray-300">Six decades of industry leadership and innovation</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities and expert teams delivering excellence across every aspect of our operations
            </p>
          </div>

          <div className="space-y-20">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{capability.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{capability.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={capability.image || "/placeholder.svg"}
                      alt={capability.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Operational Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From production to delivery, every aspect of our operations is designed for maximum efficiency and quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {operationalHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>
                  <div className="space-y-2">
                    {highlight.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by diverse industries across the globe for superior lubricant solutions and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Heavy machinery, production equipment, and industrial manufacturing processes
              </p>
              <div className="text-sm text-orange-600 font-medium">500+ Manufacturing Partners</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automotive</h3>
              <p className="text-gray-600 mb-4">
                Commercial vehicles, passenger cars, two-wheelers, and automotive OEMs
              </p>
              <div className="text-sm text-orange-600 font-medium">Pan-India Distribution</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marine</h3>
              <p className="text-gray-600 mb-4">Shipping companies, port operations, and marine engine manufacturers</p>
              <div className="text-sm text-orange-600 font-medium">Coastal & International</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Defence</h3>
              <p className="text-gray-600 mb-4">Military vehicles, defense equipment, and government organizations</p>
              <div className="text-sm text-orange-600 font-medium">Government Approved</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Textile</h3>
              <p className="text-gray-600 mb-4">Textile mills, garment manufacturers, and spinning industries</p>
              <div className="text-sm text-orange-600 font-medium">Specialized Solutions</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Power & Energy</h3>
              <p className="text-gray-600 mb-4">
                Power plants, renewable energy, and electrical equipment manufacturers
              </p>
              <div className="text-sm text-orange-600 font-medium">Critical Applications</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors duration-200"
            >
              Explore Our Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Partner with Industry Leaders</h2>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join 500+ companies worldwide who trust Eastern Petroleum for superior lubricant solutions and exceptional
            service excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request Consultation
            </Link>
            <a
              href="tel:+91-22-2529-9990"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call: +91-22-2529-9990
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/east-logo.png" alt="Eastern Lubricants" width={120} height={32} className="h-8 w-auto" />
                <div>
                  <div className="text-sm text-gray-300">Professional Lubricants</div>
                  <div className="text-sm text-orange-400 font-semibold">Since 1964</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Leading Indian lubricant manufacturer with six decades of excellence. Trusted by 500+ companies
                worldwide for premium quality products and exceptional service.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["About Us", "Products", "Services", "Quality", "Careers", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-1 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p className="text-sm">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1
                    1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                  <span>+91-22-2529-9990</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@easternpetroleum.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Eastern Petroleum. All rights reserved. | Privacy Policy | Terms of Service | ISO 9001:2015
              Certified
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
