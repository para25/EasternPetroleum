// Metadata for SEO (Static Site Generation)
export const metadata = {
  title: "Contact Us - Eastern Petroleum | Premium Lubricants & Industrial Oils",
  description: "Get in touch with Eastern Petroleum for premium lubricant solutions. 60+ years of excellence in automotive, industrial, and marine oils. Expert technical support available.",
  keywords: "contact Eastern Petroleum, lubricant supplier, industrial oils, automotive oils, technical support, Mumbai, India",
  openGraph: {
    title: "Contact Eastern Petroleum - Premium Lubricant Solutions",
    description: "Ready to discover premium lubricant solutions? Let's start a conversation with India's trusted lubricant manufacturer.",
    images: ["/east-logo.png"],
  },
}

import ContactForm from './ContactForm'
import HeroSection from './HeroSection'

// Static data that can be pre-rendered
const contactInfo = {
  phone: {
    primary: "022 – 2529 9990 / 91 / 92 / 93",
    secondary: "022 – 2742 1694 / 2742 3819",
    hours: "Mon-Sat 9AM-6PM"
  },
  email: {
    office: "office@eastto.in",
    sales: "sales@eastto.in",
    responseTime: "Response within 24 hours"
  },
  address: {
    city: "Mumbai, Maharashtra, India",
    note: "Schedule an appointment"
  }
}

const companyHighlights = [
  "60+ Years of Excellence",
  "ISO Certified Quality", 
  "500+ Trusted Partners",
  "Expert Technical Support"
]

const statsData = [
  { value: "60+", label: "Years of Excellence" },
  { value: "500+", label: "Trusted Companies" },
  { value: "100+", label: "Product Variants" },
  { value: "25+", label: "States Covered" }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Server Rendered */}
      <HeroSection />

      {/* Main Content - Form and Contact Info Side by Side */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information - Left Side - Server Rendered */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-2xl font-light text-gray-900 mb-8">Contact Information</h2>

                {/* Contact Methods */}
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                      <p className="text-sm text-gray-600 mb-2">{contactInfo.phone.hours}</p>
                      <a
                        href="tel:022-2529-9990"
                        className="text-orange-600 hover:text-orange-700 font-medium text-sm block"
                      >
                        {contactInfo.phone.primary}
                      </a>
                      <a href="tel:022-2742-1694" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                        {contactInfo.phone.secondary}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                      <p className="text-sm text-gray-600 mb-2">{contactInfo.email.responseTime}</p>
                      <a
                        href={`mailto:${contactInfo.email.office}`}
                        className="text-orange-600 hover:text-orange-700 font-medium text-sm block"
                      >
                        {contactInfo.email.office}
                      </a>
                      <a
                        href={`mailto:${contactInfo.email.sales}`}
                        className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                      >
                        {contactInfo.email.sales}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-sm text-gray-600 mb-2">{contactInfo.address.city}</p>
                      <p className="text-sm text-gray-500">{contactInfo.address.note}</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us - Compact */}
                <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-medium text-gray-900 mb-4">Why Choose Eastern Petroleum?</h3>
                  <div className="space-y-3">
                    {companyHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side - Client Island */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Footer - Server Rendered */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsData.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
