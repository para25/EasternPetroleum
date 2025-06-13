'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      id: 1,
      image: '/Banner-1.jpg',
      title: 'POWERING YOUR DRIVE',
      subtitle: 'Premium Automotive Lubricants',
      description: 'Advanced engine oils and lubricants for superior vehicle performance and protection.',
      cta: 'Explore Automotive Solutions',
    //   overlay: 'bg-gradient-to-r from-black/70 to-transparent'
    },
    {
      id: 2,
      image: '/Banner-2.jpg',
      title: 'MOSQUITO LARVICIDAL OIL',
      subtitle: 'Protect Your Family',
      description: 'Effective mosquito control solutions to safeguard your loved ones from vector-borne diseases.',
      cta: 'Learn More',
    //   overlay: 'bg-gradient-to-r from-blue-900/70 to-transparent'
    },
    {
      id: 3,
      image: '/Banner-3.jpg',
      title: 'SHUTTERING OIL & GREASE',
      subtitle: 'Construction Excellence',
      description: 'High-performance lubrication for formwork ensuring smooth concrete finishing.',
      cta: 'Construction Solutions',
    //   overlay: 'bg-gradient-to-r from-gray-900/70 to-transparent'
    },
    {
      id: 4,
      image: '/Banner-4.jpg',
      title: 'PETROLEUM JELLY & COSMETIC OILS',
      subtitle: 'Personal Care Solutions',
      description: 'Pure, safe, and effective petroleum-based products for skin and hair care.',
      cta: 'Personal Care Range',
    //   overlay: 'bg-gradient-to-r from-amber-900/70 to-transparent'  
    },
    {
      id: 5,
      image: '/Banner-5.jpg',
      title: 'ALL TEXTILE MACHINE OILS',
      subtitle: 'Industrial Textile Solutions',
      description: 'Specialized high-quality machine oils for optimal textile manufacturing performance.',
      cta: 'Industrial Solutions',
    //   overlay: 'bg-gradient-to-r from-blue-900/70 to-transparent'
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  // Preload images
  useEffect(() => {
    const imagePromises = slides.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = slide.image;
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [slides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextSlide();
          break;
        case ' ':
          event.preventDefault();
          togglePlayPause();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, togglePlayPause, goToSlide, slides.length]);

  if (isLoading) {
    return (
      <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-orange-600 font-medium">Loading Experience...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section 
        className="relative w-full h-172 overflow-hidden"
        role="region"
        aria-label="Product showcase slideshow"
      >
        {/* Slide Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              aria-hidden={index !== currentSlide}
            >
              {/* Background Image using Next.js Image component */}
              <Image
                src={slide.image}
                alt={slide.title}
                // width={1920}
                // height={1080}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 ${slide.overlay}`} />
              
              {/* Content */}
              {/* <div className="relative z-10 h-full flex items-center"> */}
                 {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"> */}
                  {/* <div className="max-w-3xl"> */}
                    {/* <div className="slide-content"> */}
                      {/* <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h2>
                      <h3 className="text-xl md:text-2xl text-orange-300 mb-6 font-semibold">
                        {slide.subtitle}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                        {slide.description}
                      </p> */}
                      {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        {slide.cta}
                      </button> */}
                    {/* </div> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 pointer-events-auto group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-auto group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          {/* Slide Indicators */}
          <div className="flex items-center gap-3" role="tablist" aria-label="Slide navigation">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>

          {/* Progress Bar */}
          <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-orange-400 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>

          {/* Slide Counter */}
          <div className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
        </div>

        {/* Company Badge */}
        {/* <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg">
          <div className="font-bold text-lg">Eastern Petroleum</div>
          <div className="text-sm opacity-90">Premium Lubricants</div>
        </div> */}

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 right-8 text-white/60 text-sm flex items-center gap-2">
          <div className="w-px h-12 bg-white/30"></div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </section>

      <style jsx>{`
        .slide-content > * {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .slide-content > *:nth-child(1) { animation-delay: 0.2s; }
        .slide-content > *:nth-child(2) { animation-delay: 0.4s; }
        .slide-content > *:nth-child(3) { animation-delay: 0.6s; }
        .slide-content > *:nth-child(4) { animation-delay: 0.8s; }
        
        .scroll-text {
          transform: rotate(90deg);
          transform-origin: center;
          white-space: nowrap;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default HeroSlideshow;