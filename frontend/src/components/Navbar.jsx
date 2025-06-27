'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Update underline position based on active navigation item
  useEffect(() => {
    if (!navRef.current) return;

    const updateUnderlinePosition = () => {
      const navContainer = navRef.current;
      const navItems = navContainer.querySelectorAll('[data-nav-item]');
      
      let activeElement = null;
      
      // Find active navigation item
      navItems.forEach((item, index) => {
        const href = item.getAttribute('data-href');
        const isDropdown = item.getAttribute('data-is-dropdown') === 'true';
        
        if (isDropdown) {
          const dropdownLabel = item.getAttribute('data-dropdown-label');
          if (pathname.startsWith(`/${dropdownLabel?.toLowerCase()}`)) {
            activeElement = item;
          }
        } else if (href === pathname) {
          activeElement = item;
        }
      });
      
      if (activeElement) {
        const containerRect = navContainer.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();
        
        setUnderlineStyle({
          left: activeRect.left - containerRect.left,
          width: activeRect.width
        });
      }
    };

    updateUnderlinePosition();
    
    // Update on window resize
    window.addEventListener('resize', updateUnderlinePosition);
    return () => window.removeEventListener('resize', updateUnderlinePosition);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => pathname === path;

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    {
      label: 'Services',
      dropdown: [
        { href: '/services/toll-blending', label: 'Toll-Blending' },
        { href: '/services/used-oil', label: 'Used Oil Collection' },
        { href: '/services/custom-packaging', label: 'Custom Packaging' },
      ]
    }, 
    // { href: '/downloads', label: 'Downloads' },
    { href: '/CSR_Policy_easternpetroleum.pdf', label: 'CSR Policy', target: '_blank' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];


  return (
    <>      {/* Enhanced Top announcement bar with better contrast */}
      <div className="bg-eastto-orange text-white text-center py-2 text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-3">
          <span className="hidden sm:inline">🏭 Leading Indian lubricant maker since 1964</span>
          <span className="sm:hidden">🏭 Trusted since 1964</span>
          <span className="hidden md:inline">• Trusted by 500+ companies worldwide</span>
        </div>
      </div><nav className={`${scrolled
        ? 'bg-white/96 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-white/92 backdrop-blur-md shadow-md border-b border-gray-100'
        } sticky top-0 z-50 transition-all duration-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Simplified Logo Section */}
            <div className="flex-shrink-0">              <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/east-logo.png"
                  alt="Eastern Lubricants"
                  width={200}
                  height={52}
                  className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="hidden xl:block">
                <div className="text-xs text-gray-600 font-medium">Professional Lubricants</div>
                <div className="text-xs text-eastto-orange font-semibold">Since 1964</div>
              </div>
            </Link>
            </div>            {/* Desktop Navigation - Updated with sliding underline */}
            <div className="hidden lg:block">
              <div ref={navRef} className="flex items-center space-x-2 relative">
                {navItems.map((item, index) => (
                  <div key={item.href || item.label} className="relative">
                    {item.dropdown ? (
                      // Dropdown item
                      <div
                        className="relative"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={(e) => {
                          // Add a small delay to prevent dropdown from closing too quickly
                          setTimeout(() => {
                            if (!e.currentTarget.contains(document.activeElement)) {
                              setOpenDropdown(null);
                            }
                          }, 100);
                        }}
                      >                        <button
                        data-nav-item
                        data-is-dropdown="true"
                        data-dropdown-label={item.label}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md flex items-center space-x-1 focus:outline-none relative ${pathname.startsWith(`/${item.label.toLowerCase()}`)
                          ? 'text-eastto-orange'
                          : 'text-gray-700 hover:text-eastto-orange hover:bg-gray-50'
                          }`}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                      >
                          <span>{item.label}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Dropdown Menu - Enhanced with better positioning */}
                        {openDropdown === item.label && (
                          <div 
                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                            onMouseEnter={() => setOpenDropdown(item.label)}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:text-eastto-orange hover:bg-gray-50 transition-colors duration-150"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}                      </div>) : (
                      // Regular link
                      <Link
                        href={item.href}
                        target={item.target}
                        data-nav-item
                        data-href={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md relative focus:outline-none ${isActive(item.href)
                          ? 'text-eastto-orange'
                          : 'text-gray-700 hover:text-eastto-orange hover:bg-gray-50'
                          }`}
                      >
                        {item.label}
                        {item.target === '_blank' && (
                          <svg className="w-3 h-3 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Sliding underline indicator */}
                <div 
                  className="absolute bottom-0 h-0.5 bg-eastto-orange rounded-full transition-all duration-300 ease-out"
                  style={{
                    left: `${underlineStyle.left}px`,
                    width: `${underlineStyle.width}px`,
                    opacity: underlineStyle.width > 0 ? 1 : 0
                  }}
                />
              </div>
            </div>            {/* Right side - Simplified Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Contact Info - Updated with dropdown for multiple numbers */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-eastto-orange transition-colors duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="font-medium">Call Now</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Phone numbers dropdown */}
                <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="tel:022-2529-9990" className="block px-4 py-2 text-sm text-gray-700 hover:text-eastto-orange hover:bg-gray-50 transition-colors duration-150">
                    <div className="font-medium">Office</div>
                    <div className="text-xs text-gray-500">022 – 2529 9990 / 91 / 92 / 93</div>
                  </a>
                  <a href="tel:022-2742-1694" className="block px-4 py-2 text-sm text-gray-700 hover:text-eastto-orange hover:bg-gray-50 transition-colors duration-150">
                    <div className="font-medium">Factory</div>
                    <div className="text-xs text-gray-500">022 – 2742 1694 / 2742 3819</div>
                  </a>
                </div>
              </div>{/* Primary CTA with enhanced focus */}
              <Link href="/contact" className="bg-eastto-orange text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-eastto-red transition-colors duration-200 focus:outline-none">
                Get Quote
              </Link>
            </div>            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-eastto-orange hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 relative">
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                    }`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-200 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                    }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>        {/* Mobile menu - Updated with underline effect */}
        <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'
          }`}>
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-200">            {/* Mobile Contact Info - Updated with both numbers */}
            <div className="py-3 border-b border-gray-100 mb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Need help?</span>
                <span className="text-xs text-eastto-orange font-medium">Call Now</span>
              </div>
              <div className="space-y-1">
                <a href="tel:022-2529-9990" className="block text-sm font-medium text-gray-700 hover:text-eastto-orange">
                  <span className="text-xs text-gray-500">Office:</span> 022 – 2529 9990 / 91 / 92 / 93
                </a>
                <a href="tel:022-2742-1694" className="block text-sm font-medium text-gray-700 hover:text-eastto-orange">
                  <span className="text-xs text-gray-500">Factory:</span> 022 – 2742 1694 / 2742 3819
                </a>
              </div>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <div key={item.href || item.label}>
                {item.dropdown ? (
                  // Mobile dropdown item
                  <div>                    <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className={`flex items-center justify-between w-full py-3 px-3 text-base font-medium rounded-lg transition-colors duration-200 relative ${pathname.startsWith(`/${item.label.toLowerCase()}`)
                      ? 'text-eastto-orange'
                      : 'text-gray-700 hover:text-eastto-orange hover:bg-gray-50'
                      }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns[item.label] ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {/* Mobile underline for active dropdown */}
                    <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-eastto-orange rounded-full transition-all duration-300 ${pathname.startsWith(`/${item.label.toLowerCase()}`) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></span>
                  </button>

                    {/* Mobile dropdown content */}
                    {mobileDropdowns[item.label] && (
                      <div className="ml-4 mt-1 space-y-1 bg-gray-50 rounded-lg p-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-3 px-3 text-sm text-gray-600 hover:text-eastto-orange hover:bg-white rounded-lg transition-colors duration-200"
                            onClick={() => {
                              setIsOpen(false);
                              setMobileDropdowns(prev => ({ ...prev, [item.label]: false }));
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>) : (                  // Mobile regular link - Updated with underline effect
                  <Link
                    href={item.href}
                    target={item.target}
                    className={`block py-3 px-3 text-base font-medium rounded-lg transition-colors duration-200 relative ${isActive(item.href)
                      ? 'text-eastto-orange'
                      : 'text-gray-700 hover:text-eastto-orange hover:bg-gray-50'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center">
                      {item.label}
                      {item.target === '_blank' && (
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </span>
                    {/* Mobile active underline indicator */}
                    <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-eastto-orange rounded-full transition-all duration-300 ${isActive(item.href) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></span>
                  </Link>
                )}
              </div>
            ))}            {/* Mobile CTA with enhanced accessibility */}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="block w-full bg-eastto-orange text-white text-center py-3 rounded-lg font-medium hover:bg-eastto-red transition-colors duration-200 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}