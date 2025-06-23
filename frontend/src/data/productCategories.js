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
  },  {
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
  },  {
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
  },  {
    id: "marine",
    title: "Marine Oils",
    description: "Marine-grade lubricants for maritime applications",
    iconPaths: svgIcons.marine,
    image: "/images/branded-storage-tanks.jpg",
    products: ["Marine Engine Oil", "Marine Turbine Oil", "Marine Hydraulic Oil"],
  },  {
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
  },  {
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
  },  {
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
  },  {
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
  },  {
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
  },  {
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
  },  {
    id: "additives",
    title: "Fuel Additives",
    description: "Performance additives for fuel enhancement",
    iconPaths: svgIcons.additives,
    image: "/images/manufacturing-facility.jpg",
    products: ["Fuel Performance Additives", "Engine Treatment Additives", "Fuel System Cleaners"],
  },  {
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
  },  {
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
  },  {
    id: "emulsifiers",
    title: "Emulsifiers",
    description: "Industrial emulsifiers and cutting compounds",
    iconPaths: svgIcons.emulsifiers,
    image: "/images/production-equipment.jpg",
    products: ["Eastto Conkut EX & CX"],
  },  {
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
export const detailedProductData = {  automotive: {
    "engine-oil": {
      name: "Motor Engine Oil (SAE 30, 40, 50)",
      brand: "EASTTO",
      shortDescription: "High-performance motor engine oils for various applications",
      heroImage: "/engine-oil-hero.jpg",
      introduction: "Motor Engine Oils in grades SAE 30, SAE 40, and SAE 50 are expertly blended from highly refined base stocks with a high viscosity index. They incorporate a balanced additive package providing detergent, dispersant, antioxidant, and anti-wear properties. These oils are designed to ensure reliable lubrication, prevent deposit formation, control oxidation, and protect moving parts under a range of operating conditions.",
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
      ],
      specifications: {
        apiService: "Meets API CC/SC standards, aligning with requirements for older diesel and gasoline engines.",
        industryStandards: "Conforms to IS 13656:2002.",
        oemRequirements: "Complies with EPL-1 / EDL-1 performance levels.",
        viscosityGrades: "Available in SAE 30, SAE 40, and SAE 50 to suit varied engine designs and operating conditions."
      },
      packaging: ["210 L", "26 L", "20 L", "15 L", "10 L", "7.5 L", "5 L", "3.5 L", "1 L"],
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
      ],      pdfs: {
        msds: "/pdfs/motor_oil/EASTTO MOTOR OILS  MSDS.pdf",
        pds: "/pdfs/motor_oil/EASTTO MOTOR OIL PDS.pdf",
        brochure: "/pdfs/motor_oil/EASTTO MOTOR OIL BROCHURE.pdf"
      },      video: {
        src: "/pdfs/motor_oil/9. Motor Engine Oil Video.mp4",
        poster: "/engine-oil-hero.jpg"
      }
    }
    // Additional products can be added here following the same structure
  }
  // Additional categories can be added here
};

// Category display names for navigation
export const  categoryNames = {
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

export default productCategories;
