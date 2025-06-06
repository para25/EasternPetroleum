// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center group">
//               <div className="relative">
//                 <Image
//                   src="/east-logo.png"
//                   alt="Eastto Logo"
//                   width={360}
//                   height={40}
//                   className="h-15 w-auto group-hover:scale-105 transition-transform duration-300"
//                   priority
//                 />
//               </div>
//             </Link>
//           </div>          {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <Link
//                 href="/"
//                 className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
//               >
//                 Home
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
//               >
//                 About
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//               <Link
//                 href="/products"
//                 className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
//               >
//                 Products
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
//               >
//                 Contact
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//               <Link
//                 href="/careers"
//                 className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
//               >
//                 Careers
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
//               </Link></div>
//           </div>          {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-200"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>      {/* Mobile menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100">
//           <Link
//             href="/"
//             className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             href="/products"
//             className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
//             onClick={() => setIsOpen(false)}
//           >
//             Products
//           </Link>
//           <Link
//             href="/contact"
//             className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </Link>
//           <Link
//             href="/careers"
//             className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
//             onClick={() => setIsOpen(false)}
//           >Careers
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();
//   const productsRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     setIsProductsOpen(false);
//   };

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (productsRef.current && !productsRef.current.contains(event.target)) {
//         setIsProductsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Navigation items with active state check
//   const isActive = (path) => pathname === path;

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About' },
//     { href: '/contact', label: 'Contact' },
//     { href: '/careers', label: 'Careers' }
//   ];

//   const productCategories = [
//     { href: '/products/software', label: 'Software Solutions', description: 'Custom software development' },
//     { href: '/products/consulting', label: 'Consulting', description: 'Expert business consulting' },
//     { href: '/products/support', label: 'Support Services', description: '24/7 technical support' }
//   ];

//   return (
//     <nav className={`bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'py-2' : 'py-3'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo - Reduced size for better balance */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center group">
//               <div className="relative">
//                 <Image
//                   src="/east-logo.png"
//                   alt="Eastto Logo"
//                   width={240}
//                   height={32}
//                   className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
//                   priority
//                 />
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block">
//             <div className="flex items-center space-x-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative group rounded-lg ${
//                     isActive(item.href)
//                       ? 'text-orange-600 bg-orange-50'
//                       : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
//                   }`}
//                 >
//                   {item.label}
//                   <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300 ${
//                     isActive(item.href) ? 'w-4' : 'w-0 group-hover:w-4'
//                   }`}></span>
//                 </Link>
//               ))}

//               {/* Products Dropdown */}
//               <div className="relative" ref={productsRef}>
//                 <button
//                   onClick={() => setIsProductsOpen(!isProductsOpen)}
//                   onMouseEnter={() => setIsProductsOpen(true)}
//                   className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative group rounded-lg flex items-center ${
//                     pathname.startsWith('/products')
//                       ? 'text-orange-600 bg-orange-50'
//                       : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
//                   }`}
//                 >
//                   Products
//                   <svg 
//                     className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                   <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300 ${
//                     pathname.startsWith('/products') ? 'w-4' : 'w-0 group-hover:w-4'
//                   }`}></span>
//                 </button>

//                 {/* Dropdown Menu */}
//                 <div 
//                   className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 ${
//                     isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//                   }`}
//                   onMouseLeave={() => setIsProductsOpen(false)}
//                 >
//                   <div className="p-4">
//                     {productCategories.map((product) => (
//                       <Link
//                         key={product.href}
//                         href={product.href}
//                         className="block p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 group"
//                         onClick={() => setIsProductsOpen(false)}
//                       >
//                         <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
//                           {product.label}
//                         </div>
//                         <div className="text-sm text-gray-500 mt-1">
//                           {product.description}
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <div className="ml-6 pl-6 border-l border-gray-200">
//                 <Link
//                   href="/contact"
//                   className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Search Icon - Desktop */}
//           <div className="hidden lg:flex items-center">
//             <button className="p-2 text-gray-500 hover:text-orange-600 transition-colors duration-200 rounded-lg hover:bg-orange-50">
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden flex items-center space-x-2">
//             {/* Mobile Search */}
//             <button className="p-2 text-gray-500 hover:text-orange-600 transition-colors duration-200 rounded-lg hover:bg-orange-50">
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
            
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-200"
//               aria-expanded={isOpen}
//               aria-label="Toggle main menu"
//             >
//               <div className="relative w-6 h-6">
//                 <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
//                   isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
//                 }`}></span>
//                 <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
//                   isOpen ? 'opacity-0' : 'opacity-100'
//                 }`}></span>
//                 <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
//                   isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
//                 }`}></span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu - Slide in animation */}
//       <div className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
//         isOpen ? 'translate-x-0' : 'translate-x-full'
//       }`}>
//         <div className="flex flex-col h-full">
//           {/* Mobile menu header */}
//           <div className="flex items-center justify-between p-6 border-b border-gray-100">
//             <Image
//               src="/east-logo.png"
//               alt="Eastto Logo"
//               width={120}
//               height={16}
//               className="h-6 w-auto"
//             />
//             <button
//               onClick={closeMenu}
//               className="p-2 rounded-lg text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition-colors"
//             >
//               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile menu content */}
//           <div className="flex-1 overflow-y-auto py-6">
//             <div className="px-6 space-y-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
//                     isActive(item.href)
//                       ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-500'
//                       : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
//                   }`}
//                   onClick={closeMenu}
//                 >
//                   {item.label}
//                 </Link>
//               ))}

//               {/* Mobile Products Section */}
//               <div className="py-2">
//                 <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
//                   Products
//                 </div>
//                 {productCategories.map((product) => (
//                   <Link
//                     key={product.href}
//                     href={product.href}
//                     className="block px-6 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors duration-200"
//                     onClick={closeMenu}
//                   >
//                     <div className="font-medium">{product.label}</div>
//                     <div className="text-sm text-gray-500 mt-1">{product.description}</div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Mobile CTA */}
//           <div className="p-6 border-t border-gray-100">
//             <Link
//               href="/contact"
//               className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full text-center font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-200 shadow-md block"
//               onClick={closeMenu}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu overlay */}
//       {isOpen && (
//         <div 
//           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
//           onClick={closeMenu}
//         ></div>
//       )}
//     </nav>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => pathname === path;

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
    { href: '/careers', label: 'Careers' },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-2 text-sm font-medium">
        <div className="max-w-8xl mx-auto px-6 flex items-center justify-center space-x-2">
          <span className="animate-pulse">🚀</span>
          <span>Trusted by 10,000+ companies worldwide</span>
          <span className="hidden sm:inline">• Award-winning solutions</span>
        </div>
      </div>

      <nav className={`${
        scrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-xl shadow-gray-900/10 border-b border-gray-200/60' 
          : 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5'
      } sticky top-0 z-50 transition-all duration-300 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            
            {/* Enhanced Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <div className="relative mr-3">
                  <Image
                    src="/east-logo.png"
                    alt="Eastto Logo"
                    width={400}
                    height={45}
                    className="h-16 w-auto group-hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
                    priority
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="hidden lg:block">
                  <div className="text-xs text-gray-600 font-medium">Professional Solutions</div>
                  <div className="text-xs text-orange-600">Since 2020</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group overflow-hidden ${
                      isActive(item.href)
                        ? 'text-orange-600 bg-orange-50/80'
                        : 'text-gray-800 hover:text-orange-600 hover:bg-orange-50/50'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Enhanced hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                    )}
                    
                    {/* Hover underline */}
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - CTA and Contact */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Contact Info */}
              <div className="flex items-center space-x-4 text-sm">
                <a href="tel:1-800-EASTTO" className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="font-medium">1-800-EASTTO</span>
                </a>
                
                {/* Live Chat Indicator */}
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Live Support</span>
                </div>
              </div>

              {/* Primary CTA */}
              <button className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              {/* Secondary CTA */}
              <button className="px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-full font-semibold text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-200"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        <div className={`lg:hidden transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100 max-h-screen' : 'translate-x-full opacity-0 max-h-0'
        } overflow-hidden`}>
          <div className="px-6 pt-4 pb-6 space-y-2 bg-white/98 backdrop-blur-xl border-t border-gray-200/50">
            
            {/* Mobile Contact Info */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Live Support Available</span>
              </div>
              <a href="tel:1-800-EASTTO" className="text-sm font-semibold text-orange-600">
                1-800-EASTTO
              </a>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between py-4 px-4 text-base font-semibold transition-all duration-300 rounded-xl transform hover:scale-105 ${
                  isActive(item.href)
                    ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500'
                    : 'text-gray-800 hover:text-orange-600 hover:bg-orange-50/80'
                }`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span>{item.label}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-6 space-y-3">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-semibold text-base shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Started Free
              </button>
              <button className="w-full border-2 border-orange-500 text-orange-600 py-4 rounded-xl font-semibold text-base hover:bg-orange-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
                <div className="flex items-center space-x-1">
                  <span>⭐</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center space-x-1">
                  <span>🏆</span>
                  <span>Award Winner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Trust Indicators Bar (appears on scroll) */}
      {scrolled && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-md z-40 py-1">
          <div className="max-w-8xl mx-auto px-6 flex items-center justify-center">
            <div className="flex items-center space-x-6 text-xs text-gray-700 animate-fade-in">
              <span className="flex items-center space-x-1">
                <span>🔒</span>
                <span>SSL Secured</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>⚡</span>
                <span>99.9% Uptime</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>✅</span>
                <span>SOC 2 Compliant</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}