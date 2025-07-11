import Link from "next/link"
import { detailedProductData, categoryNames, categoryFallbackImages } from "@/data/productCategories"
import ProductDetailPageClient from "./ProductDetailPageClient"

// Generate static params for all product pages
export async function generateStaticParams() {
  const params = []

  // Loop through all categories and their products
  Object.keys(detailedProductData).forEach((category) => {
    Object.keys(detailedProductData[category]).forEach((product) => {
      params.push({
        category: category,
        product: product,
      })
    })
  })

  return params
}

// Generate metadata for each product page
export async function generateMetadata({ params }) {
  const { category, product } = await params
  const productInfo = detailedProductData[category]?.[product]
  const categoryName = categoryNames[category] || "Products"

  if (!productInfo) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${productInfo.name} - Premium Quality | Eastern Petroleum Products`,
    description: `${productInfo.shortDescription || 'Premium quality lubricant from Eastern Petroleum'}. ${productInfo.introduction ? productInfo.introduction.substring(0, 155) + "..." : "Premium lubricants with superior performance and reliability."}`,
    keywords: `${productInfo.name}, ${productInfo.brand}, ${categoryName}, lubricants, industrial oils, Eastern Petroleum, premium quality${productInfo.specifications?.viscosityGrades ? `, ${productInfo.specifications.viscosityGrades}` : ''}`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/products/${category}/${product}`,
    },
    openGraph: {
      title: `${productInfo.name} - Premium Quality | Eastern Petroleum`,
      description: `Discover ${productInfo.name} - ${productInfo.shortDescription}. Premium lubricants engineered for optimal performance.`,
      url: `/products/${category}/${product}`,
      siteName: 'Eastern Petroleum',
      images: [
        {
          url:
            productInfo.heroImage ||
            productInfo.fallbackImage ||
            categoryFallbackImages[category] ||
            "/east-logo.png",
          width: 1200,
          height: 630,
          alt: productInfo.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${productInfo.name} - Premium Quality | Eastern Petroleum`,
      description: `Discover ${productInfo.name} - ${productInfo.shortDescription}. Premium lubricants engineered for optimal performance.`,
      images: [
        productInfo.heroImage ||
        productInfo.fallbackImage ||
        categoryFallbackImages[category] ||
        "/east-logo.png"
      ],
    },
  }
}

export default async function ProductDetailPage({ params }) {
  const { category, product } = await params
  const productInfo = detailedProductData[category]?.[product]
  const categoryName = categoryNames[category] || "Products"

  if (!productInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/products/${category}`}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              ← Back to {categoryName}
            </Link>
            <Link
              href="/products"
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition-colors duration-200"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Pass data to client component for interactivity
  return (
    <ProductDetailPageClient 
      productInfo={productInfo}
      category={category}
      categoryName={categoryName}
    />
  )
}
