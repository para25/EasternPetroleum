"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    location: "",
    currentSalary: "",
    expectedSalary: "",
    noticePeriod: "",
    resume: null,
    coverLetter: "",
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

  // Generate SVG captcha with noise
  const generateCaptchaSvg = (text) => {
    const width = 160
    const height = 50
    const fontSize = 24

    const gradientId = `gradient-${Math.random().toString(36).substring(2, 8)}`
    const gradientDef = `
            <defs>
                <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fff" />
                    <stop offset="100%" stop-color="#f5f5f5" />
                </linearGradient>
            </defs>
        `

    let noisePaths = ""
    for (let i = 0; i < 3; i++) {
      const x1 = Math.random() * width * 0.2
      const y1 = Math.random() * height
      const x2 = width * 0.5 + Math.random() * width * 0.3
      const y2 = Math.random() * height
      const x3 = width * 0.7 + Math.random() * width * 0.3
      const y3 = Math.random() * height
      noisePaths += `<path d="M${x1},${y1} Q${x2},${y2} ${x3},${y3}" stroke="rgba(150,150,150,0.15)" stroke-width="1" fill="none"/>`
    }

    let noiseDots = ""
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = Math.random() * 1.2 + 0.3
      const opacity = Math.random() * 0.2 + 0.05
      noiseDots += `<circle cx="${x}" cy="${y}" r="${radius}" fill="rgba(100,100,100,${opacity})"/>`
    }

    const colors = ["#e65100", "#ed6c02", "#f57c00", "#d84315", "#ef6c00"]
    let textElements = ""

    const textPoints = []
    for (let i = 0; i < text.length; i++) {
      const x = 20 + i * 25
      const y = height / 2 + (Math.random() * 6 - 3)
      textPoints.push({ x, y })
    }

    let connectingLine = '<path d="M'
    textPoints.forEach((point, i) => {
      connectingLine += `${i === 0 ? "" : " L"}${point.x},${point.y}`
    })
    connectingLine +=
      '" stroke="rgba(230,81,0,0.1)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'

    for (let i = 0; i < text.length; i++) {
      const x = 20 + i * 25 + (Math.random() * 6 - 3)
      const y = height / 2 + 10 + (Math.random() * 6 - 3)
      const rotation = Math.random() * 15 - 7.5
      const char = text[i]
      const color = colors[Math.floor(Math.random() * colors.length)]
      textElements += `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="${color}" transform="rotate(${rotation} ${x} ${y})">${char}</text>`
    }

    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            ${gradientDef}
            <rect width="100%" height="100%" fill="url(#${gradientId})" rx="4" ry="4" stroke="#e0e0e0" stroke-width="1"/>
            ${noisePaths}
            ${noiseDots}
            ${connectingLine}
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
    const { name, value, type, checked, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        location: "",
        currentSalary: "",
        expectedSalary: "",
        noticePeriod: "",
        resume: null,
        coverLetter: "",
        terms: false,
        captchaInput: "",
      })
      refreshCaptcha()
    }, 2000)
  }

  const positionOptions = [
    "Production Manager",
    "Quality Control Analyst",
    "Chemical Engineer",
    "Sales Executive",
    "Marketing Manager",
    "R&D Scientist",
    "Operations Supervisor",
    "Laboratory Technician",
    "Maintenance Engineer",
    "Supply Chain Manager",
    "Business Development Executive",
    "Technical Support Engineer",
    "Safety Officer",
    "HR Executive",
    "Finance Manager",
    "Other",
  ]

  const experienceOptions = ["Fresher (0-1 years)", "1-3 years", "3-5 years", "5-10 years", "10-15 years", "15+ years"]

  const noticePeriodOptions = ["Immediate", "15 days", "1 month", "2 months", "3 months", "More than 3 months"]

  const openPositions = [
    {
      title: "Senior Chemical Engineer",
      department: "R&D",
      location: "Mumbai, Maharashtra",
      experience: "5-8 years",
      type: "Full-time",
      description: "Lead product development and process optimization for industrial lubricants.",
      requirements: [
        "B.Tech/M.Tech in Chemical Engineering",
        "Experience in lubricant formulation",
        "Knowledge of API standards",
        "Strong analytical skills",
      ],
    },
    {
      title: "Quality Control Manager",
      department: "Quality Assurance",
      location: "Mumbai, Maharashtra",
      experience: "3-6 years",
      type: "Full-time",
      description: "Oversee quality control processes and ensure compliance with industry standards.",
      requirements: [
        "B.Sc/M.Sc in Chemistry",
        "ISO certification knowledge",
        "Laboratory management experience",
        "Attention to detail",
      ],
    },
    {
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Mumbai, Maharashtra",
      experience: "2-5 years",
      type: "Full-time",
      description: "Drive sales growth and build relationships with industrial clients.",
      requirements: [
        "MBA/B.Tech preferred",
        "Industrial sales experience",
        "Strong communication skills",
        "Willingness to travel",
      ],
    },
    {
      title: "Production Supervisor",
      department: "Manufacturing",
      location: "Mumbai, Maharashtra",
      experience: "3-7 years",
      type: "Full-time",
      description: "Supervise production operations and ensure safety compliance.",
      requirements: [
        "Diploma/B.Tech in Mechanical/Chemical",
        "Manufacturing experience",
        "Safety certification",
        "Leadership skills",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/headoffice.jpg" alt="Eastern Petroleum Careers" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Join Our Team</h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl">
                Build your career with India's leading lubricant manufacturer. Be part of our 60-year legacy of
                excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Eastern Petroleum?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a company that values innovation, growth, and employee development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-600">Continuous learning opportunities and clear career progression paths</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Great Team</h3>
              <p className="text-gray-600">Work with experienced professionals in a collaborative environment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Job Security</h3>
              <p className="text-gray-600">Stable employment with a company that has thrived for 60+ years</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Competitive Benefits</h3>
              <p className="text-gray-600">Attractive compensation packages and comprehensive benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {position.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {position.experience}
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{position.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, position: position.title }))
                    document.getElementById("application-form").scrollIntoView({ behavior: "smooth" })
                  }}
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Apply for a Position</h2>
              <p className="text-xl text-gray-600">
                Join our team and be part of India's leading lubricant manufacturer
              </p>
            </div>

            {submitStatus === "success" && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Thank you! Your application has been submitted successfully. We'll review your application and get
                      back to you soon!
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Position Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Position Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position Applied For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select Position</option>
                      {positionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Total Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select Experience</option>
                      {experienceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Mumbai, Delhi, Bangalore"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-2">
                      Notice Period *
                    </label>
                    <select
                      id="noticePeriod"
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select Notice Period</option>
                      {noticePeriodOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Salary Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Salary Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="currentSalary" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Salary (LPA)
                    </label>
                    <input
                      type="text"
                      id="currentSalary"
                      name="currentSalary"
                      value={formData.currentSalary}
                      onChange={handleInputChange}
                      placeholder="e.g., 5.5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Salary (LPA) *
                    </label>
                    <input
                      type="text"
                      id="expectedSalary"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., 7.0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Documents</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume * (PDF, DOC, DOCX - Max 5MB)
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleInputChange}
                      required
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Security Verification */}
              <div>
                <div className="bg-gray-50 rounded-lg border border-gray-300 shadow-sm p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-700">Security Check</h3>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="text-xs text-orange-600 hover:text-orange-700 hover:underline focus:outline-none flex items-center gap-1"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      New Captcha
                    </button>
                  </div>

                  <div className="flex flex-wrap md:flex-nowrap items-start md:items-center gap-3">
                    <div
                      className="inline-block border border-gray-200 rounded-md shadow-sm overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: captchaSvg }}
                    />

                    <div className="flex-1 min-w-0">
                      <label htmlFor="captchaInput" className="block text-xs font-medium text-gray-600 mb-1">
                        Type the characters above:
                      </label>
                      <input
                        id="captchaInput"
                        type="text"
                        name="captchaInput"
                        value={formData.captchaInput}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter captcha text"
                        className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-1 focus:outline-none focus:border-orange-500 transition-colors uppercase text-lg tracking-wider"
                        maxLength="5"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-5 w-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="terms" className="text-gray-700 text-sm">
                  I hereby accept all terms and conditions and consent to the processing of my personal data for
                  recruitment purposes.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.terms || !formData.captchaInput.trim()}
                  className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
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
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </section>

      {/* Contact HR Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Have Questions About Careers?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Our HR team is here to help you with any questions about career opportunities at Eastern Petroleum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              Contact HR Team
            </Link>
            <a
              href="tel:+91-22-2529-9990"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Call HR: +91-22-2529-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
