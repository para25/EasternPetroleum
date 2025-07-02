import Link from "next/link"
import Image from "next/image"
import ClientFadeIn from "@/components/ClientFadeIn"

// Add metadata for SEO
export const metadata = {
  title: 'About Eastern Petroleum - Six Decades of Excellence in Lubricants',
  description: 'Learn about Eastern Petroleum\'s 60+ year journey in lubricant manufacturing. Founded in 1964, we serve 500+ companies worldwide with premium quality automotive and industrial lubricants.',
  keywords: 'Eastern Petroleum history, lubricant manufacturer, company profile, automotive lubricants, industrial lubricants, ISO certified',
  openGraph: {
    title: 'About Eastern Petroleum - Six Decades of Excellence in Lubricants',
    description: 'Learn about Eastern Petroleum\'s 60+ year journey in lubricant manufacturing. Founded in 1964, we serve 500+ companies worldwide with premium quality automotive and industrial lubricants.',
    images: ['/headoffice.jpg'],
  },
}

export default function AboutUs() {

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

  const founder = {
    name: "Late Shri Hastimal Ji Rathi",
    role: "Founder & Visionary",
    years: "1964 - Legacy Continues",
    description:
      "The visionary founder who established Eastern Petroleum in 1964 with a dream to provide superior quality lubricants to Indian industries.",
    legacy:
      "His principles of quality, integrity, and customer satisfaction laid the foundation for what Eastern Petroleum is today.",
  }

  const successor = {
    name: "Late Shri Madanlal Rathi",
    role: "Chairman & Leader",
    years: "Son of Founder",
    description:
      "Following his father's footsteps, he led the company's growth and expansion, building Eastern Petroleum into a trusted name across India.",
    legacy:
      "Under his leadership, the company achieved significant milestones and established its reputation for excellence in the lubricant industry.",
  }

  const currentLeadership = [
    {
      name: "Rajesh Rathi",
      role: "CEO",
      description:
        "Leading the company's vision and strategic direction with over 30 years of industry experience, continuing the family legacy of excellence in lubricant manufacturing",
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
            <ClientFadeIn>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">About Eastern Petroleum</h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl">
                Six decades of excellence in lubricant manufacturing, serving industries across the globe with premium
                quality products and unwavering commitment to innovation.
              </p>
            </ClientFadeIn>
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

          {/* Mission, Vision, Promise - Main Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                To provide superior quality lubricants and exceptional service that enhance the performance and
                efficiency of our customers' operations while contributing to sustainable industrial growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                To be the most trusted and innovative lubricant manufacturer globally, setting industry standards for
                quality, sustainability, and customer satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Unwavering commitment to quality, innovation, and customer success through continuous improvement and
                sustainable business practices.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Quality Excellence</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unwavering commitment to delivering premium quality lubricants that exceed industry standards
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Innovation</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Continuous investment in research and development to create cutting-edge lubricant solutions
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Customer Focus</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building lasting partnerships through exceptional service and customized solutions
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Sustainability</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Environmental responsibility and sustainable practices in all our operations
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-3m-3 3l-3-3"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Integrity</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transparent business practices and ethical conduct in all our relationships
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Excellence</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Striving for operational excellence and continuous improvement in everything we do
              </p>
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
              Guided by our founder's vision and led by experienced professionals driving operational excellence
            </p>
          </div>

          {/* Founder & Legacy Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12 border border-orange-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Legacy</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Built on the vision and dedication of two generations of leadership
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Founder */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h4>
                    <div className="inline-flex items-center bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {founder.role}
                    </div>
                    <div className="text-orange-700 font-medium text-sm">{founder.years}</div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed">{founder.description}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{founder.legacy}</p>
                  </div>
                </div>

                {/* Successor */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{successor.name}</h4>
                    <div className="inline-flex items-center bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {successor.role}
                    </div>
                    <div className="text-orange-700 font-medium text-sm">{successor.years}</div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed">{successor.description}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{successor.legacy}</p>
                  </div>
                </div>
              </div>

              {/* Founding Principles */}
              <div className="mt-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Founding Principles</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">Quality First</div>
                      <div className="text-xs text-gray-600">Never compromise on standards</div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">Customer Focus</div>
                      <div className="text-xs text-gray-600">Build lasting relationships</div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">Innovation</div>
                      <div className="text-xs text-gray-600">Continuous improvement</div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-3m-3 3l-3-3"
                          />
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">Integrity</div>
                      <div className="text-xs text-gray-600">Ethical business practices</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Leadership */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Leadership</h3>
            <div className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 max-w-sm">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{currentLeadership[0].name}</h3>
                <div className="text-orange-600 font-semibold mb-4 text-base">{currentLeadership[0].role}</div>
                <p className="text-gray-600 leading-relaxed">{currentLeadership[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
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
                  </div>{" "}
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center relative z-10">
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
      <section className="py-20 bg-white">
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

      {/* Certifications & Quality */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally recognized certifications ensuring the highest standards of quality and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
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
