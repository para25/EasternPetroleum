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
 
    },
    {
      id: 2,
      image: '/Banner-2.jpg',
      title: 'MOSQUITO LARVICIDAL OIL',
      subtitle: 'Protect Your Family',
      description: 'Effective mosquito control solutions to safeguard your loved ones from vector-borne diseases.',
      cta: 'Learn More',

    },
    {
      id: 3,
      image: '/Banner-3.jpg',
      title: 'SHUTTERING OIL & GREASE',
      subtitle: 'Construction Excellence',
      description: 'High-performance lubrication for formwork ensuring smooth concrete finishing.',
      cta: 'Construction Solutions',

    },
    {
      id: 4,
      image: '/Banner-4.jpg',
      title: 'PETROLEUM JELLY & COSMETIC OILS',
      subtitle: 'Personal Care Solutions',
      description: 'Pure, safe, and effective petroleum-based products for skin and hair care.',
      cta: 'Personal Care Range',

    },
    // {
    //   id: 5,
    //   image: '/Banner-5.jpg',
    //   title: 'ALL TEXTILE MACHINE OILS',
    //   subtitle: 'Industrial Textile Solutions',
    //   description: 'Specialized high-quality machine oils for optimal textile manufacturing performance.',
    //   cta: 'Industrial Solutions',

    // }
  ];


  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);


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
      <div className="relative w-full h-64 sm:h-80 md:h-74 lg:h-[32rem] xl:h-[36rem] 2xl:h-[43rem] flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-orange-600 font-medium">Loading Experience...</p>
        </div>
      </div>
    );
  }

  return (
    <>      <section 
        className="relative w-full h-64 sm:h-80 md:h-74 lg:h-[32rem] xl:h-[36rem] 2xl:h-[43rem] overflow-hidden hero-section"
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
              {/* Background Image using Next.js Image component */}              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain sm:object-cover object-center"
                priority={index === 0}
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 ${slide.overlay}`} />

            </div>
          ))}
        </div>

        {/* Navigation Controls - Responsive sizing */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 pointer-events-auto group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 pointer-events-auto group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>



        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-4 right-8 text-white/60 text-sm flex items-center gap-2">
          <div className="w-px h-12 bg-white/30"></div>
          <span className="scroll-text">Scroll to explore</span>
        </div> */}
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