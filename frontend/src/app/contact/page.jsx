"use client"

import { useState, useEffect } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: "",
    terms: false,
    captchaInput: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [captchaText, setCaptchaText] = useState("")
  const [captchaSvg, setCaptchaSvg] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  // Generate random captcha text
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    let result = ""
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  // Generate clean SVG captcha
  const generateCaptchaSvg = (text) => {
    const width = 140
    const height = 40
    const fontSize = 18

    let textElements = ""
    for (let i = 0; i < text.length; i++) {
      const x = 15 + i * 22
      const y = 25
      const char = text[i]
      textElements += `<text x="${x}" y="${y}" font-family="Inter, sans-serif" font-size="${fontSize}" font-weight="600" fill="#ea580c">${char}</text>`
    }

    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#fef7f0" rx="8" ry="8" stroke="#fed7aa" stroke-width="1"/>
            ${textElements}
        </svg>`
  }

  // Initialize captcha on component mount
  useEffect(() => {
    const newCaptcha = generateCaptcha()
    setCaptchaText(newCaptcha)
    setCaptchaSvg(generateCaptchaSvg(newCaptcha))
    setIsVisible(true)
  }, [])

  // Regenerate captcha
  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha()
    setCaptchaText(newCaptcha)
    setCaptchaSvg(generateCaptchaSvg(newCaptcha))
    setFormData((prev) => ({ ...prev, captchaInput: "" }))
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.terms) {
      alert("Please accept the terms and conditions")
      return
    }

    if (formData.captchaInput.toUpperCase() !== captchaText.toUpperCase()) {
      alert("Captcha verification failed. Please try again.")
      refreshCaptcha()
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiry: "",
        message: "",
        terms: false,
        captchaInput: "",
      })
      refreshCaptcha()
    }, 2000)
  }

  const inquiryOptions = [
    "Product Information",
    "Pricing & Quotes",
    "Technical Support",
    "Partnership Opportunities",
    "Distribution & Supply",
    "Quality & Certifications",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Compact Hero Section */}
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

      {/* Main Content - Form and Contact Info Side by Side */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information - Left Side */}
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
                      <p className="text-sm text-gray-600 mb-2">Mon-Sat 9AM-6PM</p>
                      <a
                        href="tel:022-2529-9990"
                        className="text-orange-600 hover:text-orange-700 font-medium text-sm block"
                      >
                        022 – 2529 9990 / 91 / 92 / 93
                      </a>
                      <a href="tel:022-2742-1694" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                        022 – 2742 1694 / 2742 3819
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
                      <p className="text-sm text-gray-600 mb-2">Response within 24 hours</p>
                      <a
                        href="mailto:office@eastto.in"
                        className="text-orange-600 hover:text-orange-700 font-medium text-sm block"
                      >
                        office@eastto.in
                      </a>
                      <a
                        href="mailto:sales@eastto.in"
                        className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                      >
                        sales@eastto.in
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
                      <p className="text-sm text-gray-600 mb-2">Mumbai, Maharashtra, India</p>
                      <p className="text-sm text-gray-500">Schedule an appointment</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us - Compact */}
                <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-medium text-gray-900 mb-4">Why Choose Eastern Petroleum?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">60+ Years of Excellence</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">ISO Certified Quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">500+ Trusted Partners</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Expert Technical Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-light text-gray-900 mb-2">Send us a message</h2>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-100 rounded-2xl">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm text-green-800">Thank you! Your message has been sent successfully.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                      How can we help? *
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select an option</option>
                      {inquiryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  {/* Security Verification */}
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-medium text-gray-700">Security Check</h3>
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        className="text-xs text-orange-600 hover:text-orange-700 flex items-center gap-1"
                      >
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        Refresh
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <div dangerouslySetInnerHTML={{ __html: captchaSvg }} />
                      <div className="flex-1">
                        <input
                          type="text"
                          name="captchaInput"
                          value={formData.captchaInput}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter code"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 uppercase tracking-wider text-center"
                          maxLength="5"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                      I agree to the terms and conditions and privacy policy.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.terms || !formData.captchaInput.trim()}
                      className="w-full flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "60+", label: "Years of Excellence" },
              { value: "500+", label: "Trusted Companies" },
              { value: "100+", label: "Product Variants" },
              { value: "25+", label: "States Covered" },
            ].map((stat) => (
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
