"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"


export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const milestones = [
    {
      year: "1964",
      title: "Foundation",
      description: "Eastern Petroleum established as a pioneering lubricant manufacturer in India",
    },
    {
      year: "1980s",
      title: "Expansion",
      description: "Expanded production capacity and introduced advanced manufacturing processes",
    },
    {
      year: "1990s",
      title: "Quality Certification",
      description: "Achieved ISO 9001 certification, setting new standards in quality management",
    },
    {
      year: "2000s",
      title: "Global Reach",
      description: "Extended operations to international markets, serving 50+ countries",
    },
    {
      year: "2010s",
      title: "Technology Advancement",
      description: "Invested in cutting-edge technology and automated production systems",
    },
    {
      year: "2020s",
      title: "Sustainable Future",
      description: "Leading initiatives in sustainable manufacturing and environmental responsibility",
    },
  ]

  const values = [
    {
      title: "Quality Excellence",
      description: "Unwavering commitment to delivering premium quality lubricants that exceed industry standards",
      icon: "🏆",
    },
    {
      title: "Innovation",
      description: "Continuous investment in research and development to create cutting-edge lubricant solutions",
      icon: "💡",
    },
    {
      title: "Customer Focus",
      description: "Building lasting partnerships through exceptional service and customized solutions",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility and sustainable practices in all our operations",
      icon: "🌱",
    },
    {
      title: "Integrity",
      description: "Transparent business practices and ethical conduct in all our relationships",
      icon: "⚖️",
    },
    {
      title: "Excellence",
      description: "Striving for operational excellence and continuous improvement in everything we do",
      icon: "⭐",
    },
  ]

  const leadership = [
    {
      name: "Managing Director",
      role: "Strategic Leadership",
      description: "Leading the company's vision and strategic direction with over 30 years of industry experience",
    },
    {
      name: "Technical Director",
      role: "Product Development",
      description: "Overseeing R&D and ensuring our products meet the highest technical standards",
    },
    {
      name: "Operations Director",
      role: "Manufacturing Excellence",
      description: "Managing production operations and maintaining our commitment to quality",
    },
  ]

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality standards",
    },
    {
      title: "ISO 14001",
      description: "Environmental Management System for sustainable manufacturing practices",
    },
    {
      title: "OHSAS 18001",
      description: "Occupational Health and Safety Management System certification",
    },
    {
      title: "BIS Certification",
      description: "Bureau of Indian Standards certification for product quality and safety",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/headoffice.jpg"
            alt="Eastern Petroleum Corporate Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">About Eastern Petroleum</h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl">
                Six decades of excellence in lubricant manufacturing, serving industries across the globe with premium
                quality products and unwavering commitment to innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-600">Legacy</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 1964, Eastern Petroleum has been at the forefront of India's lubricant industry. What started as a
                vision to provide superior quality lubricants has evolved into a legacy of excellence, innovation, and
                trust.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we stand as one of India's leading lubricant manufacturers, serving over 500 companies worldwide
                with our comprehensive range of automotive, industrial, and specialty lubricants. Our commitment to
                quality, innovation, and customer satisfaction has made us a trusted partner across diverse industries.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With state-of-the-art manufacturing facilities, advanced R&D capabilities, and a dedicated team of
                professionals, we continue to set new benchmarks in the lubricant industry while staying true to our
                core values of quality, integrity, and excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">60+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-gray-600">Trusted Partners</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/factory-1.jpg"
                  alt="Eastern Petroleum Manufacturing Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong values and guided by a clear vision for the future
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide superior quality lubricants and exceptional service that enhance the performance and
                efficiency of our customers' operations while contributing to sustainable industrial growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">👁️</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative lubricant manufacturer globally, setting industry standards for
                quality, sustainability, and customer satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">💎</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                Unwavering commitment to quality, innovation, and customer success through continuous improvement and
                sustainable business practices.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{value.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900">{value.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six decades of growth, innovation, and excellence in the lubricant industry
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Infrastructure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities and advanced technology ensuring superior product quality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Storage1.jpg"
                alt="Product Inventory"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Extensive Inventory</h3>
                <p className="text-sm">Comprehensive product range ready for immediate delivery</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/InsideFactory.jpg"
                alt="Production Equipment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Advanced Manufacturing</h3>
                <p className="text-sm">Cutting-edge equipment for precision formulation</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/factory-5.jpg"
                alt="Storage Infrastructure"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Storage Capacity</h3>
                <p className="text-sm">Massive storage infrastructure for bulk operations</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Lab1.jpg"
                alt="Modern Office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Professional Workspace</h3>
                <p className="text-sm">Modern facilities housing our expert teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving our vision and ensuring operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl">👨‍💼</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <div className="text-orange-600 font-semibold mb-4">{leader.role}</div>
                <p className="text-gray-600 leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally recognized certifications ensuring the highest standards of quality and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🏅</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience the Eastern Petroleum difference. Join our family of satisfied customers and discover why we've
            been trusted for over six decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  )
}
