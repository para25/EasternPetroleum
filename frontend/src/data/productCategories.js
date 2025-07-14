// productCategories.js
// Shared data file for product categories to be used across the application

// SVG path definitions for icons
export const svgIcons = {
  automotive: [
    "M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z",
    "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
  ],
  industrial: [
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  ],
  specialty: [
    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  ],
  marine: [
    "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
  ],
  textile: [
    "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"
  ],
  waxes: [
    "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  ],
  grease: [
    "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  ],
  metalworking: [
    "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0z"
  ],
  solvents: [
    "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  ],
  baseoils: [
    "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  ],
  additives: [
    "M13 10V3L4 14h7v7l9-11h-7z"
  ],
  sulphonates: [
    "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  ],
  defence: [
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  ],
  emulsifiers: [
    "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  ],
  larvicidal: [
    "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  ]
};

// Helper function to convert string products to detailed object format
export const convertToDetailedProducts = (products) => {
  return products.map((product) => {
    if (typeof product === 'string') {
      // Convert string to object format with generated ID
      const id = product
        .toLowerCase()
        .replace(/[^\w\s]/g, '')  // Remove special characters
        .replace(/\s+/g, '-');     // Replace spaces with hyphens

      return {
        id,
        name: product,
        description: `High-quality ${product.toLowerCase()}`
      };
    }
    return product; // Already in object format
  });
};

// Product categories data
const productCategories = [
  {
    id: "automotive",
    title: "Automotive Oils",
    description: "Premium lubricants for all types of vehicles and automotive applications",
    iconPaths: svgIcons.automotive,
    image: "/products/automotive.jpg",
    products: [
      "Engine Oil",
      "Tractor Oil",
      "Gen Set Oil",
      "Pump Set Oil",
      "2T Oil",
      "Gas Engine Oil",
      "Gear Oil",
      "Radiator Coolant",
      "Shock Absorber Oil",
      "Calibration Fluids",
      "Ultra TC Engine Oils",
      "Supreme 4T Engine Oil",
      "Rio Engine Oil",
      "Ready Kool",
      "Multigrad Oil",
      // "Motor Oil",
      "GEM 15W/-40",
      "Brake Fluid",
    ],
  }, {
    id: "industrial",
    title: "Industrial Oils",
    description: "High-performance lubricants for industrial machinery and equipment",
    iconPaths: svgIcons.industrial,
    image: "/images/warehouse-storage.jpg",
    products: [
      "Turbine Oils",
      "Hydraulic Oils R & O",
      "Hydraulic Oils Anti Wear Type",
      "Hydraulic Oils HLP",
      "Hydraulic Oils HVI",
      // "Hydraulic Oils HLP ZF",
      "Refrigeration Oils",
      "Compressor Oil",
      "Sugar Mill Oils",
      "Open Gear Compounds",
      "Steel Mill Oil",
      "Morgan Bearing Oils",
      "Industrial Gear Oils",
      "Vacuum Pump Oils",
      "Steam Cylinder Oils",
      "Pneumatic Tool Oils",
      "MIST Oils",
      "Tool Way Oils",
      "Circulating Oils",
      "Compounded Fluids",
      "Axle Oils",
    ],
  }, {
    id: "specialty",
    title: "Industrial Specialty Oils",
    description: "Specialized lubricants for unique industrial applications",
    iconPaths: svgIcons.specialty,
    image: "/images/production-equipment.jpg",
    products: [
      "Heatra Fluids",
      "Rubber Process Oil",
      "Glass Mould Oils",
      "Agricultural Spray Oil",
      "Transformer Oil",
      "Aluminium Rolling Oils",
      "Orchard Spray Oil",
      "Napthenic Oils",
      "Mango Spray Oil",
      "Grape Spray Oil",
      "Banana Spray Oil",
      "Apple Spray Oil",
      "Formwork Oil",
      "Shuttering Oil",
      "Demoulding Oil",
      "Mould Releasing Agent",
    ],
  }, {
    id: "marine",
    title: "Marine Oils",
    description: "Marine-grade lubricants for maritime applications",
    iconPaths: svgIcons.marine,
    image: "/images/branded-storage-tanks.jpg",
    products: ["Marine Engine Oil", "Marine Turbine Oil", "Marine Hydraulic Oil"],
  }, {
    id: "textile",
    title: "Textile Oils",
    description: "Specialized lubricants for textile machinery and processes",
    iconPaths: svgIcons.textile,
    image: "/images/manufacturing-facility.jpg",
    products: [
      "Conning Oil 10",
      "Knitting Oils",
      "Loom Oils",
      "Textile Machinery Oils",
      "Spintex Oils",
      "Conmol Oil",
    ],
  }, {
    id: "waxes",
    title: "Specialty Oils & Waxes",
    description: "Premium waxes and specialty oils for various applications",
    iconPaths: svgIcons.waxes,
    image: "/images/office-interior.jpg",
    products: [
      "Polypropylene Wax",
      "Petroleum Jelly (IP)",
      "Paraffin Wax",
      "Liquid Paraffin Oil",
      "White Mineral Oil",
      "White Mineral Oil (Pharma Grade)",
      "Bees Wax",
      "Carnauba Wax",
    ],
  }, {
    id: "grease",
    title: "Grease",
    description: "High-quality greases for various lubrication needs",
    iconPaths: svgIcons.grease,
    image: "/images/product-inventory.jpg",
    products: [
      "Eastto EP Grease (NLGI 0,1,2,3)",
      "Eastto Wheel Bearing Grease",
      "Cup Grease (NLGI 2,3)",
      "Eastto Chassis Grease",
      "Eastto Lithox Grease (NLGI 2&3)",
      "Eastto High Temp Grease",
    ],
  }, {
    id: "metalworking",
    title: "Metal Working Fluids",
    description: "Cutting fluids and metalworking lubricants",
    iconPaths: svgIcons.metalworking,
    image: "/images/warehouse-storage.jpg",
    products: [
      "Soluble Cutting Oil",
      "Semi Synth Cutting Oil",
      "Quenching Oil",
      "Metal Drawing 15",
      "Metalhone TX",
      "Gun Drilling Oil",
    ],
  }, {
    id: "solvents",
    title: "Solvents",
    description: "Industrial solvents and aromatic compounds",
    iconPaths: svgIcons.solvents,
    image: "/images/production-equipment.jpg",
    products: [
      "Eastto Max Series (Paraffin Rich Low Aromatic Solvent)",
      "Eastto Max 110 (Paraffin Rich Low Aromatic Solvent)",
      "Eastto Max 80 (Paraffin Rich Low Aromatic Solvent)",
      "Paraffin Rich Low Aromatic Solvent",
      "Eastonol-A (Paraffin Rich Low Aromatic Solvent)",
    ],
  }, {
    id: "baseoils",
    title: "Base Oils",
    description: "High-quality base oils for lubricant formulation",
    iconPaths: svgIcons.baseoils,
    image: "/images/branded-storage-tanks.jpg",
    products: [
      "Base Oil : BX-12, BX-32, BX-100/120",
      "Base Oil : BX-460",
      "Base Oils : LX-30, LX-100",
      "Low Visc PX- 3",
    ],
  }, {
    id: "additives",
    title: "Fuel Additives",
    description: "Performance additives for fuel enhancement",
    iconPaths: svgIcons.additives,
    image: "/images/manufacturing-facility.jpg",
    products: ["Fuel Performance Additives", "Engine Treatment Additives", "Fuel System Cleaners"],
  }, {
    id: "sulphonates",
    title: "Sulphonates",
    description: "Petroleum sulphonates for various applications",
    iconPaths: svgIcons.sulphonates,
    image: "/images/office-interior.jpg",
    products: [
      "Sodium Petroleum Sulphonate (Eastto PET 60)",
      "Calcium Petroleum Sulphonate (Eastto PET 30)",
      "Barium Petroleum Sulphonate (Eastto PET 800)",
      "Magnesium Petroleum Sulphonate (Eastto PET 1400)",
    ],
  }, {
    id: "defence",
    title: "Defence Lubricants",
    description: "Military-grade lubricants for defense applications",
    iconPaths: svgIcons.defence,
    image: "/images/warehouse-storage.jpg",
    products: [
      "Defence Automatic Transmission Oil",
      "Defence Lubricating Oil",
      "Defence Recoiling Fluid",
      "Defence Radiator Coolant",
      "Defence Preservatives",
      "Defence Preventives",
      "Defence Hydraulic Oil",
      "Defence Gear Lubricants",
      "Defence Greases",
      "Defence Engine Oil",
    ],
  }, {
    id: "emulsifiers",
    title: "Emulsifiers",
    description: "Industrial emulsifiers and cutting compounds",
    iconPaths: svgIcons.emulsifiers,
    image: "/images/production-equipment.jpg",
    products: ["Eastto Conkut EX & CX"],
  }, {
    id: "larvicidal",
    title: "Mosquito Larvicidal Oil",
    description: "Specialized oil for mosquito control applications",
    iconPaths: svgIcons.larvicidal,
    image: "/images/branded-storage-tanks.jpg",
    products: ["Mosquito Larvicidal Oil"],
  },
];

// Define the detailed product data for the category detail page
export const getDetailedProductCategories = () => {
  return productCategories.map(category => {
    return {
      ...category,
      products: convertToDetailedProducts(category.products)
    };
  });
};

// Detailed product information for individual product pages
export const detailedProductData = {
  automotive: {
    "engine-oil": {
      name: "Motor Engine Oil (SAE 30, 40, 50)",
      brand: "EASTTO",
      shortDescription: "High-performance motor engine oils for various applications",
      heroImage: "/engine-oil-hero.jpg",
      fallbackImage: "/products/automotive.jpg", // Category-specific fallback
      introduction: "Motor Engine Oils in grades SAE 30, SAE 40, and SAE 50 are expertly blended from highly refined base stocks with a high viscosity index. They incorporate a balanced additive package providing detergent, dispersant, antioxidant, and anti-wear properties. These oils are designed to ensure reliable lubrication, prevent deposit formation, control oxidation, and protect moving parts under a range of operating conditions.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Four-Stroke Gasoline Engines (Older Designs)",
          description: "Ideal for crankcase lubrication in vintage or less-demanding gasoline engines where these viscosity grades have proven suitability."
        },
        {
          title: "Stationary Diesel Engines",
          description: "Recommended for pumpset and genset applications, where consistent performance and longevity are critical."
        },
        {
          title: "Older Automotive Diesel Engines (Commercial Fleets)",
          description: "Particularly well-suited for legacy diesel engines in fleet operation, offering protection under heavy-duty cycles."
        }
      ], specifications: {
        apiService: "Meets API CC/SC standards, aligning with requirements for older diesel and gasoline engines.",
        industryStandards: "Conforms to IS 13656:2002.",
        oemRequirements: "Complies with EPL-1 / EDL-1 performance levels.",
        viscosityGrades: "Available in SAE 30, SAE 40, and SAE 50 to suit varied engine designs and operating conditions."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API CC/SC"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS 13656:2002"
        },
        {
          icon: "EPL",
          title: "Fleet Requirements",
          value: "EPL-1 / EDL-1"
        },
        {
          icon: "SAE",
          title: "Viscosity Grades",
          value: "30, 40, 50"
        }
      ],
      packaging: ["210 L", "26 L", "20 L", "15 L", "10 L", "7.5 L", "5 L", "3.5 L", "1 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C., cSt",
          sae30: "11.0",
          sae40: "14.0",
          sae50: "19.0"
        },
        {
          characteristic: "Flash Point,°C (COC), Min.",
          sae30: "220",
          sae40: "220",
          sae50: "220"
        },
        {
          characteristic: "TBN, mg KOH / gm.",
          sae30: "5.0",
          sae40: "5.0",
          sae50: "5.0"
        },
        {
          characteristic: "Pour Point, °C Max.",
          sae30: "(-) 6",
          sae40: "(-) 6",
          sae50: "(-) 6"
        }
      ], pdfs: {
        msds: "/pdfs/motor_oil/EASTTO MOTOR OILS  MSDS.pdf",
        pds: "/pdfs/motor_oil/EASTTO MOTOR OIL PDS.pdf",
        brochure: "/pdfs/motor_oil/EASTTO MOTOR OIL BROCHURE.pdf"
      }, video: {
        src: "/pdfs/motor_oil/9. Motor Engine Oil Video.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "tractor-oil": {
      name: "EASTTO Tractor Oil 40",
      brand: "EASTTO",
      shortDescription: "Premium quality diesel engine oil specially formulated for tractors",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "EASTTO Tractor Oil 40 is premium quality diesel engine oil specially formulated to meet the lubrication requirements of tractors. EASTTO Tractor Oil 40 is blended from highly refined base stocks and specially selected additives to impart excellent detergency, oxidation stability, good anti-wear and anti-corrosion properties.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Tractor Engines",
          description: "EASTTO Tractor Oil 40 is recommended as the engine oil for various make and models of tractors."
        },
        {
          title: "Agricultural Equipment",
          description: "Specially formulated for agricultural machinery requiring high-performance diesel engine lubrication."
        },
        {
          title: "Heavy-Duty Farm Operations",
          description: "Designed to provide reliable protection under demanding agricultural operating conditions."
        }
      ],
      specifications: {
        apiService: "Meets API CD standards for diesel engine applications.",
        industryStandards: "Conforms to IS 13656:2002.",
        oemRequirements: "Complies with EDL-2 and Caterpillar series 3 performance levels.",
        viscosityGrades: "SAE 40 viscosity grade optimized for tractor applications."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API CD"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS 13656:2002"
        },
        {
          icon: "EDL",
          title: "Fleet Requirements",
          value: "EDL-2"
        },
        {
          icon: "CAT",
          title: "OEM Standards",
          value: "Caterpillar Series 3"
        }
      ],
      packaging: ["210 L", "50 L", "26 L", "20 L", "15 L", "10 L", "7.5 L", "5 L", "3.5 L", "1 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific requirements.",
        linkText: "Contact for custom sizes →"
      }, technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          value: "14.5 - 16.0"
        },
        {
          characteristic: "Viscosity Index, Min.",
          value: "90"
        },
        {
          characteristic: "Flash Point, COC, °C, Min.",
          value: "220"
        },
        {
          characteristic: "TBN, mg KOH / gm",
          value: "9.0 - 10.0"
        }
      ],
      pdfs: {
        msds: "/pdfs/tractor_oil/EASTTO TRACTOR OIL 40 MSDS.pdf",
        pds: "/pdfs/tractor_oil/EASTTO TRACTOR OIL 40 PDS.pdf",
        brochure: "/pdfs/tractor_oil/EASTTO TRACTOR OIL BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/tractor_oil/17. Tractor Engine Oil.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "gen-set-oil": {
      name: "EASTTO Gen Set Oil 20W-40",
      brand: "EASTTO",
      shortDescription: "Premium generator set oil for stationary diesel engines",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "GEN SET OIL 20W-40 is blended from highly refined base stocks with high viscosity index and additives that impart detergent, dispersant, anti-oxidant and anti-wear properties. Besides lowering the maintenance cost, EASTTO GEN SET OIL 20W-40 enhances the engine life with less wear and tear and controlling sludge / varnish.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Stationary Diesel Engines",
          description: "EASTTO GEN SET OIL 20W-40 is recommended for use as crankcase oils for slow, medium and high speed stationary diesel engines."
        },
        {
          title: "Generator Set Applications",
          description: "Specially formulated for generator set oil applications, ensuring reliable power generation with reduced maintenance costs."
        },
        {
          title: "All-Season Performance",
          description: "Suitable for all seasons and reduces oil consumption, making it ideal for continuous operation requirements."
        }
      ],
      specifications: {
        apiService: "Meets API CF standards for diesel engine applications.",
        industryStandards: "Conforms to IS: 13656-2014.",
        oemRequirements: "Complies with EDL-2 performance levels.",
        viscosityGrades: "SAE 20W-40 multigrade formulation for optimal flow characteristics."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API CF"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 13656-2014"
        },
        {
          icon: "EDL",
          title: "Fleet Requirements",
          value: "EDL-2"
        },
        {
          icon: "SAE",
          title: "Viscosity Grade",
          value: "20W-40"
        }
      ],
      packaging: ["210 L", "50 L", "26 L", "20 L", "10 L", "7.5 L", "5 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          value: "14.5"
        },
        {
          characteristic: "Flash Point, COC, °C, Min.",
          value: "220"
        },
        {
          characteristic: "TBN, mg KOH / gm",
          value: "10.0"
        },
        {
          characteristic: "Pour Point, °C",
          value: "(-) 21"
        }
      ],
      pdfs: {
        msds: "/pdfs/genset_oil/EASTTO GEN SET OIL SAE 40  MSDS.pdf",
        pds: "/pdfs/genset_oil/EASTTO GEN SET OIL 20W-40 PDS.pdf",
        brochure: "/pdfs/genset_oil/EASTTO GEN SET OIL 20W-40 BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/genset_oil/8. Generator set Oil.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "pump-set-oil": {
      name: "EASTTO Pump Set Oil (SAE 40, 50)",
      brand: "EASTTO",
      shortDescription: "Premium pump set oils for stationary diesel engines in agricultural applications",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "Pump Set Oil 40, 50 are blended from highly refined base stocks with high viscosity index and additives that impart detergent, dispersant, anti-oxidant and anti-wear properties. Besides lowering the maintenance cost, EASTTO PUMP SET OIL 40, 50 enhance the engine life with less wear and tear.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Stationary Diesel Engines",
          description: "EASTTO Pump Set Oil 40, 50 are recommended for use as crankcase oils for slow, medium and high speed stationary diesel engines."
        },
        {
          title: "Agricultural Pump Sets",
          description: "Specially formulated as Pump Set Oil for agricultural applications, ensuring reliable water pumping operations with enhanced engine protection."
        },
        {
          title: "Generator Set Applications",
          description: "Also suitable for use as Generator Set Oil, providing versatile performance for various stationary engine applications."
        },
        {
          title: "Agricultural Area Operations",
          description: "Especially recommended for agricultural areas where reliable and cost-effective lubrication is essential for farming operations."
        }
      ],
      specifications: {
        apiService: "Meets API CC/SC standards for diesel and gasoline engine applications.",
        industryStandards: "Conforms to IS: 13656-2014.",
        oemRequirements: "Complies with EPL-1/EDL-1 performance levels.",
        viscosityGrades: "Available in SAE 40 and SAE 50 grades to suit different operating conditions and engine requirements."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API CC/SC"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 13656-2014"
        },
        {
          icon: "EPL",
          title: "Fleet Requirements",
          value: "EPL-1/EDL-1"
        },
        {
          icon: "SAE",
          title: "Viscosity Grades",
          value: "40, 50"
        }
      ],
      packaging: ["210 L", "26 L", "20 L", "15 L", "10 L", "7.5 L", "5 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          sae40: "12.0",
          sae50: "14.0"
        },
        {
          characteristic: "Flash Point, COC, °C",
          sae40: "220",
          sae50: "220"
        },
        {
          characteristic: "TBN, mg KOH / gm",
          sae40: "5.0",
          sae50: "5.0"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          sae40: "(-) 6",
          sae50: "(-) 6"
        }
      ],
      pdfs: {
        msds: "/pdfs/pump_set_oil/EASTTO PUMP SET OILS  MSDS.pdf",
        pds: "/pdfs/pump_set_oil/EASTTO PUMP SET OIL PDS.pdf",
        brochure: "/pdfs/pump_set_oil/EASTTO PUMP SET OIL BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/pump_set_oil/11. Pump Set Oil_A.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "2t-oil": {
      name: "EASTTO 2T Oil",
      brand: "EASTTO",
      shortDescription: "Low smoke semi-synthetic two stroke engine oil for mopeds, scooters, and motorcycles",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "EASTTO 2T OIL is low smoke semi-synthetic two stroke engine oil developed to meet the critical requirements of two stroke engines manufactured by all leading auto makers. It is blended from selected base stocks and special additives to minimise spark plug fouling and pre – ignition, prevent rusting, minimise deposit formation and provide protection against seizure, scuffing and wear. It is specifically formulated to give additional advantage of lower consumption of fuel. It contains a diluent for easy mixing with gasoline and is dyed green for easy identification.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Two-Stroke Engine Vehicles",
          description: "EASTTO 2T OIL is recommended for lubrication of mopeds, scooters, motorcycles and autorickshaws, operating on two stroke engines."
        },
        {
          title: "Fuel Mixing Application",
          description: "The recommended dosage is 20 ml of oil per litre of petrol for optimal engine protection and performance."
        },
        {
          title: "Urban Transportation",
          description: "Ideal for city commuting vehicles where low smoke emission and fuel efficiency are important considerations."
        }
      ],
      specifications: {
        apiService: "Meets JASO FC specifications for two-stroke engine applications.",
        industryStandards: "Conforms to JASO FC performance standards.",
        oemRequirements: "Suitable for all leading auto makers' two-stroke engines.",
        viscosityGrades: "Optimized viscosity for two-stroke engine lubrication requirements."
      },
      performanceStandards: [
        {
          icon: "JASO",
          title: "JASO Standards",
          value: "JASO FC"
        },
        {
          icon: "2T",
          title: "Engine Type",
          value: "Two-Stroke"
        },
        {
          icon: "MIX",
          title: "Mixing Ratio",
          value: "20 ml per litre"
        },
        {
          icon: "GREEN",
          title: "Identification",
          value: "Green Dyed"
        }
      ],
      packaging: ["210 L", "26 L", "20 L", "1 L", "900 ml", "800 ml", "500 ml pouch"],
      customPackaging: {
        title: "Custom Packaging",
        description: "Available in convenient pouch packs for easy handling and storage.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 40°C, cSt",
          value: "50.0 to 60.0"
        },
        {
          characteristic: "Flash Point, COC, °C, Min.",
          value: "70"
        },
        {
          characteristic: "Sulphated Ash, % by Weight, Max",
          value: "0.25"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          value: "(-) 12"
        }
      ],
      pdfs: {
        msds: "/pdfs/2T_oil/EASTTO 2T OIL MSDS.pdf",
        pds: "/pdfs/2T_oil/EASTTO 2T OIL PDS.pdf",
        brochure: "/pdfs/2T_oil/EASTTO 2T OIL BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/2T_oil/2T OIL.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "gas-engine-oil": {
      name: "Gas Engine Oil (SAE 40, 20W-50)",
      brand: "EASTTO",
      shortDescription: "High performance premium quality gas engine oils for CNG and LPG vehicles",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "GAS ENGINE OIL SAE 40 & 20W-50 are high performance premium quality Gas Engine Oils with medium ash content for light vehicles running on Compressed Natural Gas (CNG) and Liquefied Petroleum Gas (LPG). These oils have extended oil life due to excellent oxidation and nitration resistance. Medium ash content prolongs the life of the exhaust valves and spark plugs and keeps the pistons and engine clean for smooth operation. These oils are also compatible with catalytic converter fitted in the exhaust system of vehicles.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "CNG Vehicles",
          description: "EASTTO GAS ENGINE OIL SAE 40 & 20W-50 are recommended for use in light vehicles, cars, buses, etc. running on Compressed Natural Gas (CNG)."
        },
        {
          title: "LPG Vehicles",
          description: "Specially formulated for vehicles operating on Liquefied Petroleum Gas (LPG), providing excellent protection and performance."
        },
        {
          title: "Commercial Transportation",
          description: "Ideal for Autorickshaws (4 stroke), Taxis, and commercial vehicles that require reliable lubrication for gas-powered engines."
        },
        {
          title: "Catalytic Converter Compatible",
          description: "Compatible with catalytic converter systems, ensuring compliance with emission standards while maintaining engine cleanliness."
        }
      ],
      specifications: {
        apiService: "Meets API CD/SF standards for gas engine applications.",
        industryStandards: "Conforms to IS: 13656-2002.",
        oemRequirements: "Complies with EDL-2 performance levels.",
        viscosityGrades: "Available in SAE 40 and SAE 20W-50 grades for different operating conditions and seasonal requirements."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API CD/SF"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 13656-2002"
        },
        {
          icon: "EDL",
          title: "Fleet Requirements",
          value: "EDL-2"
        },
        {
          icon: "GAS",
          title: "Fuel Compatibility",
          value: "CNG/LPG"
        }
      ],
      packaging: ["210 L", "26 L", "20 L", "15 L", "10 L", "7.5 L", "5 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and fleet operations.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          sae40: "14",
          "20w50": "18.5"
        },
        {
          characteristic: "Flash Point, °C, Min.",
          sae40: "220",
          "20w50": "220"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          sae40: "(-) 9",
          "20w50": "(-) 21"
        },
        {
          characteristic: "Sulphated Ash, % Wt., Max.",
          sae40: "1.0",
          "20w50": "1.0"
        }
      ],
      pdfs: {
        msds: "/pdfs/gas_engine_oil/EASTTO GAS ENGINE OIL MSDS.pdf",
        pds: "/pdfs/gas_engine_oil/EASTTO GAS ENGINE OIL PDS.pdf",
        brochure: "/pdfs/gas_engine_oil/EASTTO GAS ENGINE OIL BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/gas_engine_oil/Gas Engine Oil Video.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "gear-oil": {
      name: "EASTTO Gear Oil (80W-90 API GL-5, 85W-140 API GL-5)",
      brand: "EASTTO",
      shortDescription: "Extreme pressure multi-grade automotive gear lubricants for hypoid and spiral bevel gears",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "Gear oil 80W-90 API GL-5, 85W-140 API GL-5 are extreme pressure multi-grade automotive gear lubricants. These oils are blended from specially selected base stocks and additives to provide extreme pressure, anti-rust, anti-corrosion characteristics. These high-performance gear oils are specially designed for power transmission units of vehicles operating under demanding conditions, including sub-zero temperatures.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Automotive Differential Systems",
          description: "Gear oil 80W-90 API GL-5, 85W-140 API GL-5 oils are recommended for passenger car, bus and highway truck for the lubrication of hypoid, spiral bevel and worm gear axles."
        },
        {
          title: "Manual Transmissions",
          description: "Specially formulated for manual transmission systems requiring extreme pressure gear lubricants of API GL-5 specification."
        },
        {
          title: "Commercial Vehicle Applications",
          description: "Ideal for heavy-duty commercial vehicles including buses and highway trucks operating under severe service conditions."
        },
        {
          title: "Sub-Zero Temperature Operations",
          description: "EASTTO GEAR OIL EP 80W & EP 80W-90 are specially designed for power transmission units of vehicles operating at sub-zero temperatures."
        }
      ],
      specifications: {
        apiService: "Meets API GL-5 service classification for extreme pressure applications.",
        industryStandards: "Conforms to IS: 1118-1992 EP Type GL-5.",
        oemRequirements: "Complies with API service classification GL-4 and GL-5 performance levels.",
        viscosityGrades: "Available in 80W-90 and 85W-140 viscosity grades for different operating temperature ranges and load conditions."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API GL-5"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 1118-1992 EP Type GL-5"
        },
        {
          icon: "EP",
          title: "Extreme Pressure",
          value: "EP Protection"
        },
        {
          icon: "TEMP",
          title: "Temperature Range",
          value: "Sub-Zero Capable"
        }
      ],
      packaging: ["210 L", "26 L", "20 L", "15 L", "10 L", "7.5 L", "5 L", "1 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and fleet operations.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          "80w90": "9",
          "85w140": "14.5"
        },
        {
          characteristic: "Viscosity Index, Min.",
          "80w90": "90",
          "85w140": "90"
        },
        {
          characteristic: "Flash Point, COC, °C",
          "80w90": "170",
          "85w140": "180"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          "80w90": "(-) 24",
          "85w140": "(-) 24"
        }
      ],
      pdfs: {
        msds: "/pdfs/gear_oil/EASTTO GEAR OIL EP 90 & EP 140 MSDS.pdf",
        pds: "/pdfs/gear_oil/EASTTO GEAR OIL EP 90 & EP 140 PDS.pdf",
        brochure: "/pdfs/gear_oil/EASTTO EXTRA EP 80W-90 & 85W-140  brochure.pdf"
      },
      video: {
        src: "/pdfs/gear_oil/Gear Oil 90-140 video.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "radiator-coolant": {
      name: "EASTTO Radiator Coolant",
      brand: "EASTTO",
      shortDescription: "Premium quality synthetic radiator coolant for all-season engine protection",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "Radiator Coolant is a premium quality synthetic radiator coolant which is free from amines, borates, silicates and phosphates. Radiator Coolant is easily miscible with water and possesses excellent hard water stability. Radiator Coolant has good chemical stability and protects non-metallic components of engine radiator coolant, like gaskets and hoses. It exhibits high boiling point and low freezing point to take care of summer and winter conditions.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Mobile Automotive Engines",
          description: "Radiator Coolant is recommended for use in mobile automotive engines having closed loop radiator coolant circulation systems."
        },
        {
          title: "Stationary Automotive Engines",
          description: "Ideal for stationary automotive engines requiring reliable cooling system protection and temperature management."
        },
        {
          title: "Mixing Recommendation",
          description: "Advised to use one part of the concentrated fluid with two parts of water (preferably Demineralised Water) in the engine radiator coolant or as per the recommendation of OEM."
        },
        {
          title: "All-Season Protection",
          description: "Formulated to provide excellent protection in both summer and winter conditions with high boiling point and low freezing point characteristics."
        }
      ],
      specifications: {
        apiService: "Premium synthetic formulation free from harmful additives.",
        industryStandards: "Conforms to JIS K-2234-1934 and IS: 5759-1994 standards.",
        oemRequirements: "Compatible with OEM specifications for closed-loop cooling systems.",
        viscosityGrades: "Concentrated coolant for mixing with water as per application requirements."
      },
      performanceStandards: [
        {
          icon: "JIS",
          title: "JIS Standards",
          value: "JIS K-2234-1934"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 5759-1994"
        },
        {
          icon: "SYNTHETIC",
          title: "Formulation",
          value: "Synthetic Premium"
        },
        {
          icon: "SEASON",
          title: "Protection",
          value: "All-Season"
        }
      ],
      packaging: ["210 L"],
      customPackaging: {
        title: "Bulk Supply Available",
        description: "Available in concentrated form for mixing with water as per application requirements.",
        linkText: "Contact for bulk pricing →"
      },
      technicalData: [
        {
          characteristic: "Color",
          value: "Bluish Green"
        },
        {
          characteristic: "Flash Point, °C (COC), Min.",
          value: "155"
        },
        {
          characteristic: "Freezing Point, °C",
          value: "(-) 35"
        },
        {
          characteristic: "Pour Point, °C Max.",
          value: "(-) 15"
        }
      ],
      pdfs: {
        msds: "/pdfs/radiator_coolant/EASTTO REDIATOR COOLANT  MSDS.pdf",
        pds: "/pdfs/radiator_coolant/EASTTO RADIATOR COOLANT PDS.pdf",
        brochure: "/pdfs/radiator_coolant/EASTTO RADIATOR COOLANT BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/radiator_coolant/Radiator Coolant.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "shock-absorber-oil": {
      name: "EASTTO Shock Absorber Oil (Grade 12, 18)",
      brand: "EASTTO",
      shortDescription: "High viscosity index shock absorber oils with excellent dampening characteristics",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "SHOCK ABSORBER OILs are blended from high viscosity index oils and specially selected additives to provide excellent anti-wear, anti-rust and anti-oxidation properties. EASTTO SHOCK ABSORBER OILs have very good chemical stability, excellent seal compatibility and very low pour point (for usage over wide range of temperature variations) with excellent dampening characteristics.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Automotive Shock Absorbers",
          description: "EASTTO SHOCK ABSORBER OILs are recommended for use in shock absorbers across various vehicle types."
        },
        {
          title: "Wide Temperature Range Operation",
          description: "Formulated with very low pour point for usage over wide range of temperature variations, ensuring consistent performance in diverse climatic conditions."
        },
        {
          title: "Superior Dampening Performance",
          description: "Designed to provide excellent dampening characteristics for optimal ride comfort and vehicle stability."
        }
      ],
      specifications: {
        apiService: "Proprietary performance level formulation.",
        industryStandards: "Meets proprietary standards for shock absorber applications.",
        oemRequirements: "Compatible with automotive shock absorber systems.",
        viscosityGrades: "Available in Grade 12 and Grade 18 for different viscosity requirements."
      },
      performanceStandards: [
        {
          icon: "PROP",
          title: "Performance Level",
          value: "Proprietary"
        },
        {
          icon: "VI",
          title: "Viscosity Index",
          value: "High VI"
        },
        {
          icon: "TEMP",
          title: "Temperature Range",
          value: "Wide Range"
        },
        {
          icon: "DAMP",
          title: "Dampening",
          value: "Excellent"
        }
      ],
      packaging: ["210 L", "26 L", "20 L", "5 L", "1 L", "500 ml", "100 ml pouch"],
      customPackaging: {
        title: "Multiple Size Options",
        description: "Available in various convenient sizes from industrial drums to small pouches for different application needs.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          grade12: "11.0 – 13.0",
          grade18: "17.0 – 19.0"
        },
        {
          characteristic: "Viscosity Index, Min.",
          grade12: "45",
          grade18: "45"
        },
        {
          characteristic: "Flash Point, COC, °C, Min.",
          grade12: "145",
          grade18: "160"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          grade12: "(-) 39",
          grade18: "(-) 36"
        }
      ],
      pdfs: {
        msds: "/pdfs/shock_absorber_oil/EASTTO SHOCK ABSORBER OILS MSDS.pdf",
        pds: "/pdfs/shock_absorber_oil/EASTTO SHOCK ABSORBER OIL PDS.pdf",
        brochure: "/pdfs/shock_absorber_oil/EASTTO SHOCK ABSORBER OIL BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/shock_absorber_oil/Shock Absorber Oil.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "calibration-fluids": {
      name: "EASTTO Calibration Fluids (Type 2, 5)",
      brand: "EASTTO",
      shortDescription: "Simulated fuels with diesel-like properties for calibration of fuel system components",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "CALIBRATING FLUIDS 2, 5 are simulated fuels with properties similar to diesel fuel. These specially developed fluids are not only safer to use, but are formulated to meet tighter, more demanding specifications required in the manufacturing processes used by the fuel system component manufacturers when building fuel pumps, fuel injectors and fuel, air and oil filters. These fluids contain a range of special additives to enhance corrosion resistance, oxidation stability and anti-wear. EASTTO CALIBRATING FLUIDS 2, 5 are more suitable than commercially refined fuels for use in manufacturing processes due to the precisely controlled viscosity, density, higher & safer flash points and lower aromatic hydrocarbon content.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Fuel Pump Calibration",
          description: "EASTTO CALIBRATING FLUIDS 2, 5 are recommended for the calibration of fuel pumps with precisely controlled properties for accurate testing."
        },
        {
          title: "Fuel Injector Calibration",
          description: "Ideal for calibration of fuel injectors, providing consistent performance characteristics required for manufacturing processes."
        },
        {
          title: "Filter Testing and Calibration",
          description: "Specially formulated for calibration of fuel, air and oil filters, ensuring reliable performance in manufacturing environments."
        },
        {
          title: "Manufacturing Process Applications",
          description: "More suitable than commercially refined fuels due to precisely controlled viscosity, density, higher & safer flash points and lower aromatic hydrocarbon content."
        }
      ],
      specifications: {
        apiService: "Specially formulated to meet tighter, more demanding specifications for manufacturing processes.",
        industryStandards: "Designed for fuel system component manufacturing standards.",
        oemRequirements: "Compatible with fuel system component manufacturer requirements.",
        viscosityGrades: "Available in Type 2 and Type 5 with different viscosity ranges for varied calibration needs."
      },
      performanceStandards: [
        {
          icon: "SAFE",
          title: "Safety Enhanced",
          value: "Higher Flash Points"
        },
        {
          icon: "PREC",
          title: "Precision Control",
          value: "Controlled Properties"
        },
        {
          icon: "CORR",
          title: "Corrosion Resistance",
          value: "Enhanced Protection"
        },
        {
          icon: "STAB",
          title: "Oxidation Stability",
          value: "Superior Stability"
        }
      ],
      packaging: ["210 L", "50 L", "20 L", "5 L", "1 L"],
      customPackaging: {
        title: "Manufacturing Grade Packaging",
        description: "Available in precise volumes for manufacturing and calibration applications with consistent quality control.",
        linkText: "Contact for bulk manufacturing orders →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 40°C, cSt",
          type2: "1.98 - 2.42",
          type5: "4.14 – 5.06"
        },
        {
          characteristic: "Flash Point, PMCC, °C, Min.",
          type2: "75",
          type5: "130"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          type2: "(-) 6",
          type5: "(-) 6"
        }
      ],
      pdfs: {
        msds: "/pdfs/calibration_fluids/EASTTO CALLIBRATION OIL MSDS.pdf",
        pds: "/pdfs/calibration_fluids/EASTTO CALIBRATION FLUIDS PDS.pdf",
        brochure: "/pdfs/calibration_fluids/CALIBRATION FLUIDS BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/calibration_fluids/Calibration Fluids orign.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "ultra-tc-engine-oils": {
      name: "EASTTO Ultra TC Engine Oils (10W, 30, 40, 50)",
      brand: "EASTTO",
      shortDescription: "Heavy duty diesel engine oils for turbocharged engines with superior performance under severe conditions",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "EASTTO Ultra TC 10W, 30, 40, 50 are heavy duty diesel engine oils blended from highly refined base stocks and selected additives, and they have high level of detergency, excellent thermal and oxidation stability with superior performance under severe conditions.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Turbocharged Diesel Engines",
          description: "EASTTO Ultra TC 10W, 30, 40, 50 are recommended for turbocharged diesel engines of heavy duty commercial vehicles."
        },
        {
          title: "Earth Moving Equipment",
          description: "Specially formulated for earth moving equipment requiring superior lubrication under severe operating conditions."
        },
        {
          title: "Multi Utility Vehicles",
          description: "Ideal for multi utility vehicles that demand high-performance diesel engine oils with excellent thermal stability."
        },
        {
          title: "Heavy Duty Commercial Applications",
          description: "Designed for heavy duty commercial vehicles operating under demanding conditions with superior detergency and oxidation stability."
        }
      ],
      specifications: {
        apiService: "Meets API CD performance standards for heavy duty diesel engine applications.",
        industryStandards: "Conforms to IS: 13656-2014.",
        oemRequirements: "Complies with EDL-2 performance levels.",
        viscosityGrades: "Available in 10W, 30, 40, and 50 grades to suit different operating conditions and engine requirements."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API CD"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 13656-2014"
        },
        {
          icon: "EDL",
          title: "Fleet Requirements",
          value: "EDL-2"
        },
        {
          icon: "TURBO",
          title: "Engine Type",
          value: "Turbocharged"
        }
      ],
      packaging: ["210 L", "50 L", "26 L", "20 L", "1 L", "900 ml"],
      customPackaging: {
        title: "Heavy Duty Packaging",
        description: "Available in various sizes from industrial drums to convenient small packs for different commercial applications.",
        linkText: "Contact for bulk commercial orders →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          "10w": "5 Min.",
          "30": "10.0 – 12.0",
          "40": "13.0 – 15.0",
          "50": "18.0 – 20.0"
        },
        {
          characteristic: "Viscosity Index, Min.",
          "10w": "100",
          "30": "90",
          "40": "90",
          "50": "90"
        },
        {
          characteristic: "Flash Point, COC, °C, Min.",
          "10w": "220",
          "30": "220",
          "40": "220",
          "50": "220"
        },
        {
          characteristic: "TBN, mg KOH / gm",
          "10w": "9.0 – 11.0",
          "30": "9.0 – 11.0",
          "40": "9.0 – 11.0",
          "50": "9.0 – 11.0"
        }
      ],
      pdfs: {
        msds: "/pdfs/ultra_tc_engine_oils/EASTTO ULTRA TC OILS MSDS.pdf",
        pds: "/pdfs/ultra_tc_engine_oils/EASTTO ULTRA TC PDS.pdf",
        brochure: "/pdfs/ultra_tc_engine_oils/EASTTO ULTRA TC BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/ultra_tc_engine_oils/Ultra TC Engine Oils.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "supreme-4t-engine-oil": {
      name: "EASTTO Supreme 4T Engine Oil (20W-40, 20W-50)",
      brand: "EASTTO",
      shortDescription: "High performance multigrade 4-stroke engine oils for air-cooled two wheelers with excellent oxidation stability",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "EASTTO SUPREME 4T 20W-40, 4T 20W-50 are high performance multigrade 4 Stroke Engine oils that are blended from highly refined base stocks and specially selected additives to meet the high temperature operating conditions in air cooled 4 Stroke two wheelers with excellent oxidation stability and, control the sludge and varnish formations. These 4 Stroke Engine oils also provide protection against wear, long engine life, higher fuel efficiency and outstanding engine cleanness.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "4-Stroke Motorcycles",
          description: "EASTTO SUPREME 4T 20W-40, 4T 20W-50 are recommended as multipurpose engine oils for the lubrication of 4 Stroke two wheelers of all models of Motor Cycles."
        },
        {
          title: "4-Stroke Scooters",
          description: "Specially formulated for 4-stroke scooters operating on petrol, providing excellent protection against wear and long engine life."
        },
        {
          title: "Auto Rickshaws",
          description: "Ideal for Auto rickshaws operating on Petrol and CNG/LPG, ensuring higher fuel efficiency and outstanding engine cleanness."
        },
        {
          title: "High Temperature Operations",
          description: "Designed to meet the high temperature operating conditions in air cooled 4 Stroke two wheelers with superior oxidation stability."
        }
      ],
      specifications: {
        apiService: "Meets API SL performance standards for gasoline engine applications.",
        industryStandards: "Conforms to JASO T 903 (MA2 Specification).",
        oemRequirements: "Complies with API SL / JASO T 903 (MA2 Specification) performance levels.",
        viscosityGrades: "Available in 20W-40 and 20W-50 multigrade formulations for different operating conditions."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API SL"
        },
        {
          icon: "JASO",
          title: "JASO Standards",
          value: "JASO T 903 (MA2)"
        },
        {
          icon: "4T",
          title: "Engine Type",
          value: "4-Stroke"
        },
        {
          icon: "MULTI",
          title: "Fuel Compatibility",
          value: "Petrol/CNG/LPG"
        }
      ],
      packaging: ["210 L", "50 L", "26 L", "20 L", "1 L"],
      customPackaging: {
        title: "Two Wheeler Packaging",
        description: "Available in convenient sizes optimized for two wheeler applications and service centers.",
        linkText: "Contact for dealer packaging →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          "20w40": "15",
          "20w50": "17"
        },
        {
          characteristic: "Flash Point, COC, °C, Min.",
          "20w40": "200",
          "20w50": "200"
        },
        {
          characteristic: "TBN, mg KOH / gm",
          "20w40": "6.0",
          "20w50": "6.0"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          "20w40": "(-) 21",
          "20w50": "(-) 21"
        }
      ],
      pdfs: {
        msds: "/pdfs/supreme_4t_engine_oil/EASTTO SUPREME 4T  MSDS.pdf",
        pds: "/pdfs/supreme_4t_engine_oil/EASTTO SUPREME 4T PDS.pdf",
        brochure: "/pdfs/supreme_4t_engine_oil/EASTTO SUPREME 4T BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/supreme_4t_engine_oil/Supreme 4T Engine Oils.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "rio-engine-oil": {
      name: "EASTTO Rio Engine Oil (SAE 30, 40)",
      brand: "EASTTO",
      shortDescription: "Preservation-cum running-in engine oil for automobile industries with excellent wear and rust control",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "Rio Engine Oil SAE 30 & 40 are suitable for preservation-cum running-in oil and also as engine oil for driving away the chassis. They have excellent wear and rust control with superior performance.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Preservation and Running-in Oil",
          description: "Rio Engine Oil SAE 30 & 40 are used mainly as \"Preservation and Running-in-oil\" for the Automobile Industries."
        },
        {
          title: "Export Engine Protection",
          description: "Can be used for engines scheduled for export where time lag between production of engines and use by the customers is quite significant."
        },
        {
          title: "Pre-Sale Engine Fill",
          description: "Ideal as fill oil prior to sale and protect the engine parts from sea water during shipment and storage."
        },
        {
          title: "Chassis Drive-Away Operations",
          description: "Suitable as engine oil for driving away the chassis with excellent wear and rust control properties."
        }
      ],
      specifications: {
        apiService: "Meets API CD performance standards for diesel engine applications.",
        industryStandards: "Conforms to IS: 13656-2014.",
        oemRequirements: "Complies with EDL-2 performance levels.",
        viscosityGrades: "Available in SAE 30 and SAE 40 grades for different preservation and running-in requirements."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API CD"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 13656-2014"
        },
        {
          icon: "EDL",
          title: "Fleet Requirements",
          value: "EDL-2"
        },
        {
          icon: "PRESERVE",
          title: "Application Type",
          value: "Preservation & Running-in"
        }
      ],
      packaging: ["210 L", "5 L", "1 L"],
      customPackaging: {
        title: "Industrial Packaging",
        description: "Available in convenient sizes optimized for automobile industry preservation and running-in applications.",
        linkText: "Contact for industrial packaging →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          sae30: "11.5",
          sae40: "14.5"
        },
        {
          characteristic: "Flash Point, COC, °C",
          sae30: "230",
          sae40: "230"
        },
        {
          characteristic: "TBN, mg KOH / gm",
          sae30: "10.5",
          sae40: "10.5"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          sae30: "(-) 6",
          sae40: "(-) 6"
        }
      ],
      pdfs: {
        msds: "/pdfs/rio_engine_oil/EASTTO RIO MSDS.pdf",
        pds: "/pdfs/rio_engine_oil/EASTTO RIO PDS.pdf",
        brochure: "/pdfs/rio_engine_oil/EASTTO RIO BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/rio_engine_oil/Rio Engine Oil SAE 30 & 40.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "ready-kool": {
      name: "EASTTO Ready Kool",
      brand: "EASTTO",
      shortDescription: "Premium quality premixed synthetic radiator coolant for automotive cooling systems",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "READY KOOL is a premium quality premixed (ready to use) synthetic radiator coolant which is free from amines, borates, silicates and phosphates. It takes care of engine blocks and radiator from rust and corrosion. It has good chemical stability and protects non-metallic components of engine radiator, like gaskets and hoses. It exhibits high boiling point and low freezing point to take care of summer and winter.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Mobile Automotive Engines",
          description: "EASTTO READY KOOL is recommended for use in mobile automotive engines having closed loop coolant circulation systems."
        },
        {
          title: "Stationary Automotive Engines",
          description: "Ideal for stationary automotive engines requiring reliable cooling system protection with ready-to-use convenience."
        },
        {
          title: "Ready-to-Use Convenience",
          description: "Premixed synthetic coolant eliminates the need for dilution, providing immediate protection for engine blocks and radiators."
        },
        {
          title: "All-Season Protection",
          description: "Formulated to provide excellent protection in both summer and winter conditions with high boiling point and low freezing point characteristics."
        }
      ],
      specifications: {
        apiService: "Premium synthetic formulation free from harmful additives (amines, borates, silicates, phosphates).",
        industryStandards: "Conforms to JIS K-2234-1934 and IS: 5759-2006 standards.",
        oemRequirements: "Compatible with closed-loop cooling systems for automotive applications.",
        viscosityGrades: "Ready-to-use premixed formulation requiring no dilution."
      },
      performanceStandards: [
        {
          icon: "JIS",
          title: "JIS Standards",
          value: "JIS K-2234-1934"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 5759-2006"
        },
        {
          icon: "PREMIX",
          title: "Formulation",
          value: "Ready-to-Use Premixed"
        },
        {
          icon: "SEASON",
          title: "Protection",
          value: "All-Season"
        }
      ],
      packaging: ["210 L"],
      customPackaging: {
        title: "Ready-to-Use Supply",
        description: "Available in premixed form for immediate use without dilution requirements.",
        linkText: "Contact for bulk ready-to-use supply →"
      },
      technicalData: [
        {
          characteristic: "Colour",
          value: "Bluish Green"
        },
        {
          characteristic: "Boiling Point, °C, Min.",
          value: "105"
        },
        {
          characteristic: "Freezing Point, °C",
          value: "(-) 15"
        },
        {
          characteristic: "Freezing Point, %",
          value: "70"
        }
      ],
      pdfs: {
        msds: "/pdfs/ready_kool/EASTTO READY KOOL MSDS.pdf",
        pds: "/pdfs/ready_kool/EASTTO READY KOOL PDS.pdf",
        brochure: "/pdfs/ready_kool/EASTTO READY KOOL BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/ready_kool/Ready Kool.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "multigrad-oil": {
      name: "EASTTO Multigrade Oil (10W-30, 20W-40, 20W-50)",
      brand: "EASTTO",
      shortDescription: "High viscosity index multigrade engine oils for gasoline and diesel engines with all-season performance",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "MULTIGRADE 10W-30, 20W-40, 20W-50 are blended from highly refined base stocks and specially selected additives to meet special characteristics and performance levels, like excellent thermal and oxidation stability, protection against rust, corrosion and wear. They have very high viscosity index to provide ease in starting and ensure adequate oil film thickness at extreme temperature to eliminate seasonal oil changes, reduce oil consumption, and keep the engine clean.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Gasoline Engines",
          description: "EASTTO MULTIGRADE 10W-30, 20W-40, 20W-50 oils are recommended for use in gasoline engines operating over wide range of temperatures throughout the year."
        },
        {
          title: "Diesel Engines",
          description: "Specially formulated for diesel engines requiring multigrade protection with excellent thermal and oxidation stability."
        },
        {
          title: "All-Season Operation",
          description: "High viscosity index formulation provides ease in starting and ensures adequate oil film thickness at extreme temperatures to eliminate seasonal oil changes."
        },
        {
          title: "Wide Temperature Range",
          description: "Designed for engines operating over wide temperature ranges throughout the year with reduced oil consumption and enhanced engine cleanliness."
        }
      ],
      specifications: {
        apiService: "Meets API CC/SC performance standards for gasoline and diesel engine applications.",
        industryStandards: "Conforms to MIL-L-2104 B and IS: 13656-2014 standards.",
        oemRequirements: "Complies with E-PL1/E-DL1 performance levels.",
        viscosityGrades: "Available in 10W-30, 20W-40, and 20W-50 multigrade formulations for different operating conditions."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API CC/SC"
        },
        {
          icon: "MIL",
          title: "Military Standards",
          value: "MIL-L-2104 B"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 13656-2014"
        },
        {
          icon: "EPL",
          title: "Fleet Requirements",
          value: "E-PL1/E-DL1"
        }
      ],
      packaging: ["210 L"],
      customPackaging: {
        title: "Multigrade Supply",
        description: "Available in drum packaging for commercial and industrial multigrade engine oil requirements.",
        linkText: "Contact for multigrade supply →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          "10w30": "12.0",
          "20w40": "14",
          "20w50": "18"
        },
        {
          characteristic: "Flash Point, COC, °C, Min.",
          "10w30": "190",
          "20w40": "200",
          "20w50": "200"
        },
        {
          characteristic: "TBN, mg KOH / gm",
          "10w30": "6.0",
          "20w40": "6.0",
          "20w50": "6.0"
        },
        {
          characteristic: "Pour Point, °C",
          "10w30": "(-) 24",
          "20w40": "(-) 21",
          "20w50": "(-) 21"
        }
      ],
      pdfs: {
        msds: "/pdfs/multigrad_oil/EASTTO MULTIGRADE OILS MSDS.pdf",
        pds: "/pdfs/multigrad_oil/EASTTO MULTIGRADE PDS.pdf",
        brochure: "/pdfs/multigrad_oil/EASTTO MULTIGRADE BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/multigrad_oil/Multigrade 10w-30, 20w-40, 20w-50.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "gem-15w40": {
      name: "EASTTO GEM 15W-40",
      brand: "EASTTO",
      shortDescription: "Premium quality diesel engine oil with excellent detergent-dispersant properties for heavy duty applications",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "EASTTO GEM 15W-40 is premium quality diesel engine oil. It is formulated from highly refined base stocks and superior quality additives for high viscosity index and excellent detergent-dispersant inhibition to keep engine clean, prevent oil degradation / thickening and corrosive wear. It is also provide long draining periods, extended TBN retention and reduced oil consumption with better fuel economy.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Diesel Passenger Cars",
          description: "It is recommended for diesel passenger cars requiring premium quality engine oil with excellent detergent-dispersant properties."
        },
        {
          title: "Commercial Heavy Duty Diesel Engines",
          description: "Specially formulated for commercial heavy duty diesel engines on-highway and off-highway equipment."
        },
        {
          title: "Industrial Equipment",
          description: "Ideal for mining, earthmoving, construction industry and DG sets requiring long draining periods and extended TBN retention."
        },
        {
          title: "Gasoline Engines",
          description: "Also suitable for gasoline engines where API CI-4 performance level is required with better fuel economy."
        }
      ],
      specifications: {
        apiService: "Meets API CI-4 performance standards for advanced diesel engine applications.",
        industryStandards: "Formulated to meet premium diesel engine oil requirements.",
        oemRequirements: "Complies with API CI-4 performance levels for heavy duty applications.",
        viscosityGrades: "15W-40 multigrade formulation for optimal performance across temperature ranges."
      },
      performanceStandards: [
        {
          icon: "API",
          title: "API Standards",
          value: "API CI-4"
        },
        {
          icon: "PREMIUM",
          title: "Quality Level",
          value: "Premium Diesel"
        },
        {
          icon: "DETERGENT",
          title: "Detergent Properties",
          value: "Excellent"
        },
        {
          icon: "ECONOMY",
          title: "Fuel Economy",
          value: "Enhanced"
        }
      ],
      packaging: ["210 L"],
      customPackaging: {
        title: "Heavy Duty Supply",
        description: "Available in drum packaging for heavy duty diesel engine applications with extended drain intervals.",
        linkText: "Contact for commercial supply →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          value: "14.0"
        },
        {
          characteristic: "Flash Point, COC, °C, Min.",
          value: "210"
        },
        {
          characteristic: "TBN, mg KOH / gm",
          value: "10.5"
        },
        {
          characteristic: "Pour Point, °C",
          value: "(-) 21"
        }
      ],
      pdfs: {
        msds: "/pdfs/gem_15w_40/EASTTO GEM 15W-40 CI4 MSDS.pdf",
        pds: "/pdfs/gem_15w_40/EASTTO GEM CI4 PDS.pdf",
        brochure: "/pdfs/gem_15w_40/EASTTO GEM 15W-40 CI4 BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/gem_15w_40/GEM 15W-40.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    },

    "brake-fluid": {
      name: "EASTTO Brake Fluid DOT 3",
      brand: "EASTTO",
      shortDescription: "High performance premium quality fully synthetic heavy duty hydraulic brake fluid",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/products/automotive.jpg",
      introduction: "BRAKE FLUID DOT 3 is a red dyed high performance premium quality fully synthetic heavy duty hydraulic brake fluid. It contains anti-oxidant, metal de-activator and corrosion inhibitor for long service life of brake fluid and brake components. Due to its high Equilibrium Reflux Boiling Point (above 205ºC), the vapour locking problem is greatly reduced in high temperature operating condition, especially in cities where stop-and -go conditions require frequent application of brakes. Its excellent low temperature characteristics enable it to function up to minus 40ºC.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Modern Hydraulic Braking Systems",
          description: "EASTTO BRAKE FLUID DOT 3 is recommended for modern hydraulic braking systems including both disc and drum type."
        },
        {
          title: "High Temperature Operations",
          description: "Specially formulated for high temperature operating conditions, especially in cities where stop-and-go conditions require frequent application of brakes."
        },
        {
          title: "Disc Brake Systems",
          description: "Ideal for disc brake systems requiring high performance brake fluid with excellent thermal stability and vapor lock resistance."
        },
        {
          title: "Drum Brake Systems",
          description: "Suitable for drum brake systems with excellent low temperature characteristics enabling function up to minus 40°C."
        }
      ],
      specifications: {
        apiService: "Meets FMVSS 116 DOT-3 federal motor vehicle safety standards.",
        industryStandards: "Conforms to SAE J 1703 and IS: 8654-2001 standards.",
        oemRequirements: "Complies with DOT-3 performance levels for hydraulic brake systems.",
        viscosityGrades: "Fully synthetic formulation with optimized viscosity characteristics for wide temperature range operation."
      },
      performanceStandards: [
        {
          icon: "DOT",
          title: "DOT Standards",
          value: "FMVSS 116 DOT-3"
        },
        {
          icon: "SAE",
          title: "SAE Standards",
          value: "SAE J 1703"
        },
        {
          icon: "IS",
          title: "Industry Standards",
          value: "IS: 8654-2001"
        },
        {
          icon: "SYNTHETIC",
          title: "Formulation",
          value: "Fully Synthetic"
        }
      ],
      packaging: ["210 L"],
      customPackaging: {
        title: "Brake Fluid Supply",
        description: "Available in drum packaging for automotive service centers and brake system applications.",
        linkText: "Contact for brake fluid supply →"
      },
      technicalData: [
        {
          characteristic: "Colour",
          value: "Red"
        },
        {
          characteristic: "Kinematic Viscosity at 100°C, cSt",
          value: "2.2"
        },
        {
          characteristic: "Kinematic Viscosity at (-) 40°C, cSt",
          value: "1500"
        },
        {
          characteristic: "Equilibrium Reflux Boiling Point, °C, Max.",
          value: "205"
        }
      ],
      pdfs: {
        msds: "/pdfs/brake_fluid/EASTTO BRAKE FLUID DOT 3 MSDS.pdf",
        pds: "/pdfs/brake_fluid/EASTTO BRAKE FLUID DOT 3 PDS.pdf",
        brochure: "/pdfs/brake_fluid/BRAKE FLUID DOT 3 BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/brake_fluid/Brake Fluid DOT.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    }
    // Additional products can be added here following the same structure
  },
  industrial: {
    "turbine-oils": {
      name: "Turbine Oil (Grades 32, 46, 57, 68, 76)",
      brand: "EASTTO",
      shortDescription: "High-performance turbine oils for steam, gas and hydraulic turbines",
      heroImage: "/turbine-oil-hero.jpg",
      fallbackImage: "/products/industrial.jpg", // Category-specific fallback
      introduction: "These oils are blended from highly refined turbine base stocks containing antioxidant, rust inhibitor and antifoam additives. They have excellent thermal stability and demulsibility, ensuring reliable performance in demanding turbine applications.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Steam Turbines",
          description: "Specially formulated for lubrication of steam turbines, providing excellent thermal stability and protection against oxidation under high-temperature conditions."
        },
        {
          title: "Gas Turbines",
          description: "Ideal for gas turbine applications, offering superior demulsibility and resistance to foam formation while maintaining consistent performance."
        },
        {
          title: "Hydraulic Turbines",
          description: "Recommended for hydraulic turbine lubrication, delivering reliable protection and extended service life in water-exposed environments."
        }
      ],
      specifications: {
        indianStandards: "Meets IS-489-1983 Specifications and BIS-1012-1987 (Reaffirmed 1993) standards.",
        internationalStandards: "Complies with General Electric GEK 27070 Specification and KWU (Siemens) W. Germany standards.",
        viscosityGrades: "Available in grades 32, 46, 57, 68, and 76 to meet diverse turbine requirements.",
        additivePackage: "Contains antioxidant, rust inhibitor, and antifoam additives for comprehensive protection."
      },
      performanceStandards: [
        {
          icon: "IS",
          title: "Indian Standards",
          value: "IS-489-1983, BIS-1012-1987"
        },
        {
          icon: "GE",
          title: "General Electric",
          value: "GEK 27070"
        },
        {
          icon: "KWU",
          title: "Siemens KWU",
          value: "W. Germany Standard"
        },
        {
          icon: "GRADES",
          title: "Viscosity Grades",
          value: "32, 46, 57, 68, 76"
        }
      ],
      packaging: ["210 L", "26 L", "20 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific industrial requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity @ 40°C, cSt",
          grade32: "30-34",
          grade46: "44-48",
          grade57: "54-60",
          grade68: "66-70",
          grade76: "74-78"
        },
        {
          characteristic: "Viscosity Index, Min.",
          grade32: "100",
          grade46: "100",
          grade57: "98",
          grade68: "98",
          grade76: "98"
        },
        {
          characteristic: "Flash Point, °C (COC), Min.",
          grade32: "200",
          grade46: "200",
          grade57: "210",
          grade68: "210",
          grade76: "220"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          grade32: "-9",
          grade46: "-9",
          grade57: "-9",
          grade68: "-9",
          grade76: "-9"
        }
      ],
      pdfs: {
        msds: "/pdfs/2.Industry Oils/Turbine Oils/MSDS.pdf",
        pds: "/pdfs/2.Industry Oils/Turbine Oils/PDS.pdf",
        brochure: "/pdfs/2.Industry Oils/Turbine Oils/BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/2.Industry Oils/Turbine Oils/Video.mp4",
        poster: "/turbine-oil-hero.jpg"
      }
    },
    "hydraulic-oils-r-o": {
      name: "Hydraulic Oil R & O (Grades 32, 46, 57, 68, 81, 100, 150)",
      brand: "EASTTO",
      shortDescription: "Advanced hydraulic oils for circulating and hydraulic transmission systems",
      heroImage: "/hydraulic-oil-r-o-hero.jpg",
      fallbackImage: "/products/industrial.jpg", // Category-specific fallback
      introduction: "EASTTO HYDRAULIC OILS R & O are specially developed for circulating and hydraulic transmission systems, and are manufactured from highly refined base stocks with high viscosity index. These oils are fortified with anti-oxidant, anti-corrosion, anti-wear, anti-rust and antifoam additives to ensure optimal performance and protection.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Moderate Hydraulic Systems",
          description: "Specially formulated for moderate hydraulic systems, providing excellent anti-wear protection and maintaining consistent performance across varying operating conditions."
        },
        {
          title: "Industrial Circulating Systems",
          description: "Ideal for a wide variety of circulating systems in industrial equipment, offering superior anti-oxidant and anti-corrosion properties for extended service life."
        },
        {
          title: "Hydraulic Transmission Systems",
          description: "Recommended for hydraulic transmission applications, delivering reliable lubrication with enhanced anti-rust and antifoam characteristics."
        }
      ],
      specifications: {
        baseStock: "Manufactured from highly refined base stocks with high viscosity index for superior performance.",
        additivePackage: "Fortified with anti-oxidant, anti-corrosion, anti-wear, anti-rust and antifoam additives.",
        viscosityGrades: "Available in grades 32, 46, 57, 68, 81, 100, and 150 to meet diverse hydraulic system requirements.",
        systemCompatibility: "Suitable for moderate hydraulic systems and wide variety of circulating systems."
      },
      performanceStandards: [
        {
          icon: "ANTI_WEAR",
          title: "Anti-Wear Protection",
          value: "Advanced Additive Package"
        },
        {
          icon: "VISCOSITY",
          title: "Viscosity Index",
          value: "High VI Base Stocks"
        },
        {
          icon: "CORROSION",
          title: "Corrosion Protection",
          value: "Anti-Corrosion & Anti-Rust"
        },
        {
          icon: "GRADES",
          title: "Viscosity Grades",
          value: "32, 46, 57, 68, 81, 100, 150"
        }
      ],
      packaging: ["210 L", "26 L", "20 L", "5 L", "1 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific industrial requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity @ 40°C, cSt",
          grade32: "32",
          grade46: "46",
          grade57: "57",
          grade68: "68",
          grade81: "81",
          grade100: "100",
          grade150: "150"
        },
        {
          characteristic: "Viscosity Index, Min.",
          grade32: "95",
          grade46: "95",
          grade57: "95",
          grade68: "95",
          grade81: "95",
          grade100: "95",
          grade150: "95"
        },
        {
          characteristic: "Flash Point (COC), °C, Min.",
          grade32: "190",
          grade46: "210",
          grade57: "210",
          grade68: "210",
          grade81: "210",
          grade100: "220",
          grade150: "220"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          grade32: "-6",
          grade46: "-6",
          grade57: "-6",
          grade68: "-6",
          grade81: "-6",
          grade100: "-6",
          grade150: "-6"
        }
      ],
      pdfs: {
        msds: "/pdfs/2.Industry Oils/Hydraulic Oils R & O/MSDS.pdf",
        pds: "/pdfs/2.Industry Oils/Hydraulic Oils R & O/PDS.pdf",
        brochure: "/pdfs/2.Industry Oils/Hydraulic Oils R & O/BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/2.Industry Oils/Hydraulic Oils R & O/Video.mp4",
        poster: "/hydraulic-oil-r-o-hero.jpg"
      }
    },
    "hydraulic-oils-anti-wear-type": {
      name: "Hydraulic Oil AW (Grades 32, 46, 57, 68, 81, 100, 150)",
      brand: "EASTTO",
      shortDescription: "Anti-wear hydraulic oils for high-pressure systems and high-speed pumps",
      heroImage: "/hydraulic-oil-aw-hero.jpg",
      fallbackImage: "/products/industrial.jpg", // Category-specific fallback
      introduction: "Hydraulic Oils AW are blended from highly refined base stocks have high demulsibility index and specially selected anti-oxidant, anti-corrosion, anti-wear, anti-rust and antifoam additives. These oils can sustain very high pressure of the system and high speed of the pumps, and compatible with the seals normally used in the hydraulic system.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "High-Pressure Hydraulic Systems",
          description: "Specially formulated to sustain very high pressure systems, providing excellent anti-wear protection and maintaining performance under extreme operating conditions."
        },
        {
          title: "High-Speed Pump Applications",
          description: "Ideal for high-speed pump operations, offering superior lubrication and protection while maintaining compatibility with standard hydraulic seals."
        },
        {
          title: "Industrial Hydraulic & Circulation Systems",
          description: "Recommended for long service life applications in a wide variety of industrial hydraulic and circulation systems requiring reliable performance."
        }
      ],
      specifications: {
        baseStock: "Blended from highly refined base stocks with high demulsibility index for superior performance.",
        additivePackage: "Specially selected anti-oxidant, anti-corrosion, anti-wear, anti-rust and antifoam additives.",
        viscosityGrades: "Available in grades 32, 46, 57, 68, 81, 100, and 150 to meet diverse hydraulic system requirements.",
        systemCompatibility: "Compatible with seals normally used in hydraulic systems and suitable for high-pressure, high-speed applications."
      },
      performanceStandards: [
        {
          icon: "IS",
          title: "Indian Standards",
          value: "IS: 10522:1983 (Reaffirmed 1998)"
        },
        {
          icon: "ANTI_WEAR",
          title: "Anti-Wear Protection",
          value: "Advanced AW Additive Package"
        },
        {
          icon: "PRESSURE",
          title: "High Pressure",
          value: "Extreme Pressure Capability"
        },
        {
          icon: "GRADES",
          title: "Viscosity Grades",
          value: "32, 46, 57, 68, 81, 100, 150"
        }
      ],
      packaging: ["210 L", "26 L", "20 L", "5 L", "1 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific industrial requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity @ 40°C, cSt",
          grade32: "30-34",
          grade46: "46-48",
          grade57: "54-60",
          grade68: "66-70",
          grade81: "78-84",
          grade100: "95-105",
          grade150: "145-155"
        },
        {
          characteristic: "Viscosity Index, Min.",
          grade32: "95",
          grade46: "95",
          grade57: "95",
          grade68: "95",
          grade81: "95",
          grade100: "95",
          grade150: "95"
        },
        {
          characteristic: "Flash Point (COC), °C, Min.",
          grade32: "190",
          grade46: "210",
          grade57: "210",
          grade68: "210",
          grade81: "210",
          grade100: "220",
          grade150: "220"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          grade32: "-6",
          grade46: "-6",
          grade57: "-6",
          grade68: "-6",
          grade81: "-6",
          grade100: "-6",
          grade150: "-6"
        }
      ],
      pdfs: {
        msds: "/pdfs/2.Industry Oils/Hydraulic Oils Anti Wear Type/MSDS.pdf",
        pds: "/pdfs/2.Industry Oils/Hydraulic Oils Anti Wear Type/PDS.pdf",
        brochure: "/pdfs/2.Industry Oils/Hydraulic Oils Anti Wear Type/BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/2.Industry Oils/Hydraulic Oils Anti Wear Type/Video.mp4",
        poster: "/hydraulic-oil-aw-hero.jpg"
      }
    },
    "hydraulic-oils-hlp": {
      name: "Hydraulic Oil HLP (Grades 32, 46, 68, 100, 150)",
      brand: "EASTTO",
      shortDescription: "High-performance hydraulic oils for demanding industrial applications",
      heroImage: "/hydraulic-oil-hlp-hero.jpg",
      fallbackImage: "/products/industrial.jpg", // Category-specific fallback
      introduction: "HYDRAULIC OILS HLP are blended from highly refined base stocks with high viscosity index and specially selected anti-oxidant, anticorrosion, anti-wear, anti-rust and anti-foam additives. These oils can sustain very high pressure of the system and high speed of the pumps, and compatible with the seals normally used in the hydraulic system.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "High-Pressure Hydraulic Systems",
          description: "Engineered to sustain very high pressure systems while maintaining optimal performance and providing superior protection against wear and corrosion."
        },
        {
          title: "High-Speed Pump Operations",
          description: "Specially formulated for high-speed pump applications, offering excellent lubrication properties and compatibility with standard hydraulic seals."
        },
        {
          title: "Industrial Hydraulic & Circulation Systems",
          description: "Recommended for long service life applications in a wide variety of industrial hydraulic and circulation systems requiring reliable performance."
        }
      ],
      specifications: {
        baseStock: "Blended from highly refined base stocks with high viscosity index for superior performance.",
        additivePackage: "Specially selected anti-oxidant, anticorrosion, anti-wear, anti-rust and anti-foam additives.",
        viscosityGrades: "Available in grades 32, 46, 68, 100, and 150 to meet diverse hydraulic system requirements.",
        systemCompatibility: "Compatible with seals normally used in hydraulic systems and suitable for high-pressure, high-speed applications."
      },
      performanceStandards: [
        {
          icon: "HLP",
          title: "HLP Standard",
          value: "High Performance Grade"
        },
        {
          icon: "ANTI_WEAR",
          title: "Anti-Wear Protection",
          value: "Advanced Additive Package"
        },
        {
          icon: "PRESSURE",
          title: "High Pressure",
          value: "Extreme Pressure Capability"
        },
        {
          icon: "GRADES",
          title: "Viscosity Grades",
          value: "32, 46, 68, 100, 150"
        }
      ],
      packaging: ["210 L", "26 L", "20 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific industrial requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity @ 40°C, cSt",
          grade32: "30-34",
          grade46: "44-48",
          grade68: "66-70",
          grade100: "95-105",
          grade150: "145-155"
        },
        {
          characteristic: "Viscosity Index, Min.",
          grade32: "95",
          grade46: "95",
          grade68: "95",
          grade100: "95",
          grade150: "95"
        },
        {
          characteristic: "Flash Point (COC), °C, Min.",
          grade32: "190",
          grade46: "210",
          grade68: "210",
          grade100: "220",
          grade150: "220"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          grade32: "-6",
          grade46: "-6",
          grade68: "-6",
          grade100: "-6",
          grade150: "-6"
        }
      ],
      pdfs: {
        msds: "/pdfs/2.Industry Oils/Hydraulic Oils HLP/MSDS.pdf",
        pds: "/pdfs/2.Industry Oils/Hydraulic Oils HLP/PDS.pdf",
        brochure: "/pdfs/2.Industry Oils/Hydraulic Oils HLP/BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/2.Industry Oils/Hydraulic Oils HLP/Video.mp4",
        poster: "/hydraulic-oil-hlp-hero.jpg"
      }
    },
    "hydraulic-oils-hvi": {
      name: "Hydraulic Oil HVI (Grades 32, 46, 68, 100)",
      brand: "EASTTO",
      shortDescription: "Premium grade high viscosity index hydraulic oils for excavators and industrial applications",
      heroImage: "/hydraulic-oil-hvi-hero.jpg",
      fallbackImage: "/products/industrial.jpg", // Category-specific fallback
      introduction: "EASTTO HYDRAULIC OILS HVI – 32, 46, 68 & 100 – are premium grade high viscosity index hydraulic oils which have excellent shear stability and can withstand wide range of temperatures. These oils contain special additive package that reduces wear, rust, oxidation, etc, and imparts good hydrolytic stability and water separation characteristics. Good anti-foam and air release properties ensure smooth operation and system efficiency. They have excellent compatibility with seals normally used in hydraulic system.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Hydraulic Excavators",
          description: "Mainly recommended for hydraulic excavators of Tata–Hitachi, L & T, Komatsu, etc., providing excellent performance under demanding operating conditions."
        },
        {
          title: "Industrial Hydraulic Applications",
          description: "Suitable for various industrial applications requiring premium hydraulic fluid performance with excellent shear stability and temperature resistance."
        },
        {
          title: "Wide Temperature Range Operations",
          description: "Engineered to withstand wide range of temperatures while maintaining optimal viscosity characteristics and system efficiency."
        }
      ],
      specifications: {
        performance: "Premium grade high viscosity index hydraulic oils with excellent shear stability.",
        additivePackage: "Special additive package that reduces wear, rust, oxidation and imparts good hydrolytic stability.",
        temperatureRange: "Can withstand wide range of temperatures while maintaining performance.",
        systemCompatibility: "Excellent compatibility with seals normally used in hydraulic systems."
      },
      performanceStandards: [
        {
          icon: "DIN",
          title: "DIN Standards",
          value: "DIN 51524 Part 3"
        },
        {
          icon: "HVI",
          title: "High Viscosity Index",
          value: "Premium Grade"
        },
        {
          icon: "SHEAR",
          title: "Shear Stability",
          value: "Excellent Performance"
        },
        {
          icon: "GRADES",
          title: "Viscosity Grades",
          value: "32, 46, 68, 100"
        }
      ],
      packaging: ["210 L", "26 L", "20 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific industrial requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity @ 40°C, cSt",
          grade32: "30-34",
          grade46: "46-48",
          grade68: "66-70",
          grade100: "95-105"
        },
        {
          characteristic: "Viscosity Index, Min.",
          grade32: "95",
          grade46: "95",
          grade68: "95",
          grade100: "95"
        },
        {
          characteristic: "Flash Point (COC), °C, Min.",
          grade32: "190",
          grade46: "210",
          grade68: "210",
          grade100: "220"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          grade32: "-6",
          grade46: "-6",
          grade68: "-6",
          grade100: "-6"
        }
      ],
      pdfs: {
        msds: "/pdfs/2.Industry Oils/Hydraulic Oils HVI/MSDS.pdf",
        pds: "/pdfs/2.Industry Oils/Hydraulic Oils HVI/PDS.pdf",
        brochure: "/pdfs/2.Industry Oils/Hydraulic Oils HVI/BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/2.Industry Oils/Hydraulic Oils HVI/Video.mp4",
        poster: "/hydraulic-oil-hvi-hero.jpg"
      }
    },
    "refrigeration-oils": {
      name: "Refrigeration Oil (Grades 12, 22, 32, 46, 68, 100)",
      brand: "EASTTO",
      shortDescription: "High fluidity refrigeration oils for compressors operating at very low temperatures",
      heroImage: "/refrigeration-oil-hero.jpg",
      fallbackImage: "/products/industrial.jpg", // Category-specific fallback
      introduction: "EASTTO Refrigeration Oils – 12, 22, 32, 46, 68 & 100 – possess very high fluidity at very low temperatures (low pour point) with low flock point, resist deposit formation; have good chemical stability with minimum tendency to foam. They also have good oxidation and thermal stability.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Open Refrigeration Compressors",
          description: "Recommended for lubrication of open type refrigeration compressors, providing excellent low-temperature fluidity and chemical stability."
        },
        {
          title: "Hermetically Sealed Compressors",
          description: "Ideal for hermetically sealed reciprocating and rotary compressors, offering superior oxidation resistance and minimal foaming tendency."
        },
        {
          title: "Semi-Sealed Compressors",
          description: "Suitable for semi-sealed compressor applications using conventional refrigerants (except SO2) at moderate thermal load conditions."
        }
      ],
      specifications: {
        temperaturePerformance: "Very high fluidity at very low temperatures with low pour point and low flock point.",
        chemicalStability: "Good chemical stability with minimum tendency to foam and resist deposit formation.",
        thermalStability: "Good oxidation and thermal stability for reliable long-term performance.",
        refrigerantCompatibility: "Compatible with conventional type refrigerants (except SO2) at moderate thermal load."
      },
      performanceStandards: [
        {
          icon: "TEMPERATURE",
          title: "Low Temperature",
          value: "Very High Fluidity"
        },
        {
          icon: "STABILITY",
          title: "Chemical Stability",
          value: "Excellent Performance"
        },
        {
          icon: "REFRIGERANT",
          title: "Refrigerant Compatible",
          value: "Conventional Types"
        },
        {
          icon: "GRADES",
          title: "Viscosity Grades",
          value: "12, 22, 32, 46, 68, 100"
        }
      ],
      packaging: ["210 L", "26 L", "20 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific industrial requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity @ 40°C, cSt",
          grade12: "12-14",
          grade22: "20-24",
          grade32: "30-34",
          grade46: "44-48",
          grade68: "66-70",
          grade100: "95-105"
        },
        {
          characteristic: "Flash Point (COC), °C, Min.",
          grade12: "140",
          grade22: "140",
          grade32: "150",
          grade46: "160",
          grade68: "170",
          grade100: "200"
        },
        {
          characteristic: "Pour Point, °C, Max.",
          grade12: "-39",
          grade22: "-39",
          grade32: "-30",
          grade46: "-27",
          grade68: "-24",
          grade100: "-24"
        },
        {
          characteristic: "Viscosity Index, Min.",
          grade12: "55",
          grade22: "55",
          grade32: "55",
          grade46: "55",
          grade68: "55",
          grade100: "60"
        }
      ],
      pdfs: {
        msds: "/pdfs/2.Industry Oils/Refrigeration Oils/MSDS.pdf",
        pds: "/pdfs/2.Industry Oils/Refrigeration Oils/PDS.pdf",
        brochure: "/pdfs/2.Industry Oils/Refrigeration Oils/BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/2.Industry Oils/Refrigeration Oils/Video.mp4",
        poster: "/refrigeration-oil-hero.jpg"
      }
    },
    "compressor-oil": {
      name: "Compressor Oil (32, 46, 68, 100, 150, 220 & 320)",
      brand: "EASTTO",
      shortDescription: "High-performance compressor oils for reciprocating and rotary air compressors",
      heroImage: "/compressor-oil-hero.jpg",
      fallbackImage: "/products/industrial.jpg", // Category-specific fallback
      introduction: "Compressor Oils – 32, 46, 68, 100, 150, 220 & 320 are blended from highly refined based stocks with antioxidant and rust inhibitor. They provide excellent lubrication under high temperature and high load conditions.",
      sectionTitles: {
        overview: "Product Overview",
        applications: "Applications",
        performanceStandards: "Performance Standards",
        technicalSpecs: "Technical Specifications",
        packaging: "Packaging Options",
        resources: "Product Resources"
      },
      applications: [
        {
          title: "Reciprocating Compressors",
          description: "Recommended for cylinder lubrication of reciprocating compressors operating up to 220°C air discharge temperature."
        },
        {
          title: "Rotary Air Compressors",
          description: "Ideal for rotary air compressor applications with high temperature and high load operating conditions."
        }
      ],
      specifications: {
        apiService: "Meet requirements of cylinder lubricants in reciprocating and rotary air compressors.",
        industryStandards: "Formulated to provide excellent lubrication under high temperature and high load conditions.",
        oemRequirements: "Suitable for compressors operating up to 220°C air discharge temperature.",
        viscosityGrades: "Available in ISO VG 32, 46, 68, 100, 150, 220 & 320 to suit varied compressor designs and operating conditions."
      },
      performanceStandards: [
        {
          icon: "TEMP",
          title: "Operating Temperature",
          value: "Up to 220°C"
        },
        {
          icon: "COMP",
          title: "Compressor Type",
          value: "Reciprocating & Rotary"
        },
        {
          icon: "ISO",
          title: "Viscosity Grades",
          value: "32, 46, 68, 100, 150, 220, 320"
        },
        {
          icon: "PERF",
          title: "Performance Level",
          value: "High Temperature & Load"
        }
      ],
      packaging: ["210 L", "26 L", "20 L"],
      customPackaging: {
        title: "Custom Packaging",
        description: "We offer custom packaging solutions for bulk orders and specific requirements.",
        linkText: "Contact for custom sizes →"
      },
      technicalData: [
        {
          characteristic: "Kinematic Viscosity at 40°C, cSt",
          iso32: "30 to 34",
          iso46: "44 to 48",
          iso68: "66 to 70",
          iso100: "95 to 105",
          iso150: "145 to 155",
          iso220: "210 to 230",
          iso320: "310 to 330"
        },
        {
          characteristic: "Viscosity Index, Min.",
          iso32: "95",
          iso46: "95",
          iso68: "95",
          iso100: "95",
          iso150: "95",
          iso220: "95",
          iso320: "95"
        },
        {
          characteristic: "Flash Point, COC, °C, Min.",
          iso32: "190",
          iso46: "190",
          iso68: "200",
          iso100: "200",
          iso150: "210",
          iso220: "220",
          iso320: "220"
        },
        {
          characteristic: "Pour Point, °C Max.",
          iso32: "(-) 6",
          iso46: "(-) 6",
          iso68: "(-) 6",
          iso100: "(-) 6",
          iso150: "(-) 6",
          iso220: "(-) 6",
          iso320: "(-) 6"
        }
      ],
      pdfs: {
        msds: "/pdfs/2.Industry Oils/Compressor Oil/MSDS.pdf",
        pds: "/pdfs/2.Industry Oils/Compressor Oil/PDS.pdf",
        brochure: "/pdfs/2.Industry Oils/Compressor Oil/BROCHURE.pdf"
      },
      video: {
        src: "/pdfs/2.Industry Oils/Compressor Oil/Video.mp4",
        poster: "/compressor-oil-hero.jpg"
      }
    }
  }
  // Additional categories can be added here
};

// Category display names for navigation
export const categoryNames = {
  automotive: "Automotive Oils",
  industrial: "Industrial Oils",
  specialty: "Specialty Lubricants",
  marine: "Marine Oils",
  textile: "Textile Oils",
  waxes: "Waxes & Paraffins",
  grease: "Greases",
  metalworking: "Metalworking Fluids",
  solvents: "Solvents",
  baseoils: "Base Oils",
  additives: "Additives",
  sulphonates: "Sulphonates",
  defence: "Defence Products",
  emulsifiers: "Emulsifiers",
  larvicidal: "Mosquito Larvicidal Oil"
};

// Default section titles - used when not specified in product data
export const defaultSectionTitles = {
  overview: "Product Overview",
  applications: "Applications",
  performanceStandards: "Performance Standards",
  technicalSpecs: "Technical Specifications",
  packaging: "Packaging Options",
  resources: "Product Resources"
};

// Category fallback images - used when product doesn't have heroImage or fallbackImage
export const categoryFallbackImages = {
  automotive: "/products/automotive.jpg",
  industrial: "/images/warehouse-storage.jpg",
  specialty: "/images/production-equipment.jpg",
  marine: "/images/branded-storage-tanks.jpg",
  textile: "/images/manufacturing-facility.jpg",
  waxes: "/images/office-interior.jpg",
  grease: "/images/product-inventory.jpg",
  metalworking: "/engine-oil-hero.jpg", // Default fallback
  solvents: "/engine-oil-hero.jpg",
  baseoils: "/engine-oil-hero.jpg",
  additives: "/engine-oil-hero.jpg",
  sulphonates: "/engine-oil-hero.jpg",
  defence: "/engine-oil-hero.jpg",
  emulsifiers: "/engine-oil-hero.jpg",
  larvicidal: "/engine-oil-hero.jpg"
};

export default productCategories;
