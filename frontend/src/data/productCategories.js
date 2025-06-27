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
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
      "Motor Oil",
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
      "Hydraulic Oils HLP ZF",
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
      },      technicalData: [
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
    }
    // Additional products can be added here following the same structure
  },
  industrial: {
    "hydraulic-oils-r-o": {
      name: "Hydraulic Oils R & O",
      brand: "EASTTO",
      shortDescription: "High-quality hydraulic oils for rust and oxidation protection",
      heroImage: "/factory-1.jpg",
      fallbackImage: "/images/warehouse-storage.jpg",
      introduction: "Our Hydraulic Oils R & O series provides excellent rust and oxidation protection for hydraulic systems operating under moderate conditions. These oils are formulated with high-quality base stocks and carefully selected additives to ensure optimal performance and equipment protection.",
      sectionTitles: {
        overview: "Product Information",
        applications: "Industrial Applications",
        performanceStandards: "Quality Standards",
        technicalSpecs: "Technical Properties",
        packaging: "Available Sizes",
        resources: "Downloads & Information"
      },
      applications: [
        {
          title: "Mobile Hydraulic Equipment",
          description: "Suitable for hydraulic systems in construction equipment, agricultural machinery, and mobile platforms."
        },
        {
          title: "Industrial Hydraulic Systems",
          description: "Ideal for stationary hydraulic systems in manufacturing and processing facilities."
        }
      ],
      performanceStandards: [
        {
          icon: "ISO",
          title: "ISO Standards",
          value: "ISO 11158 HH"
        },
        {
          icon: "DIN",
          title: "DIN Standards",
          value: "DIN 51524 Part 1"
        }
      ],
      packaging: ["208 L", "50 L", "20 L", "10 L", "5 L"],
      customPackaging: {
        title: "Bulk Supply Available",
        description: "We provide bulk supply options for large industrial operations.",
        linkText: "Inquire about bulk pricing →"
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
