"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeroSlideshow from "@/components/HeroSection";

export default function Home() {
  // Slideshow state and configuration
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "/headoffice.jpg",
      alt: "Product transportation and logistics"
    },
    {
      src: "/factory-1.jpg",
      alt: "Industrial lubricants manufacturing facility"
    },
    {
      src: "/FactoryTanks.jpg",
      alt: "Storage tanks and industrial infrastructure"
    },
    {
      src: "/InsideFactory.jpg",
      alt: "Advanced manufacturing technology"
    },
    {
      src: "/Lab2.jpg",
      alt: "Quality assurance laboratory"
    },
    {
      src: "/Transportation.jpg",
      alt: "Product transportation and logistics"
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div>
      {/* Hero Section */}
      <HeroSlideshow
      />
      {/* Hero Section with Overlay */}

      {/* Stats Section */}
      <section className="py-16 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">60+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Trusted Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-600">Product Variants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
              <div className="text-gray-600">States Covered</div>
            </div>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Eastern Petroleum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six decades of innovation, quality, and reliability in the lubricant industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/Lab1.jpg"
                  alt="Quality Assurance Lab"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                ISO certified manufacturing processes ensuring consistent quality and performance standards
              </p>
            </div>

            <div className="text-center">
              <div className="h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/InsideFactory.jpg"
                  alt="Advanced Manufacturing Technology"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art research and development facilities for cutting-edge lubricant solutions
              </p>
            </div>

            <div className="text-center">
              <div className="h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/headoffice.jpg"
                  alt="Expert Support Team"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated technical support team providing customized solutions for your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {/* 5 Star Rating using SVG */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Eastern Petroleum has been our trusted partner for over 15 years. Their industrial lubricants have
                significantly improved our machinery efficiency.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Rajesh Kumar</div>
              <div className="text-sm text-gray-500">Manufacturing Director, ABC Industries</div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {/* 5 Star Rating using SVG */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Exceptional quality and reliable supply chain. Their automotive lubricants have helped us maintain
                our fleet performance at optimal levels.&quot;
              </p>
              <div className="font-semibold text-gray-900">Priya Sharma</div>
              <div className="text-sm text-gray-500">Fleet Manager, XYZ Logistics</div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {/* 5 Star Rating using SVG */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &#34;Their technical support team is outstanding. They provided customized solutions that perfectly
                matched our specific requirements.&#34;
              </p>
              <div className="font-semibold text-gray-900">Amit Patel</div>
              <div className="text-sm text-gray-500">Operations Head, DEF Marine</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/factory-5.jpg"
            alt="Manufacturing facility background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-orange-500 bg-opacity-90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Experience Premium Quality?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our experts to find the perfect lubricant solution for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-500 hover:bg-gray-100 font-medium text-lg px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Get Quote Now
            </Link>

            {/* Secondary CTA Button */}
            <Link
              href="/downloads"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-orange-500 font-medium text-lg px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Download Catalog
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}