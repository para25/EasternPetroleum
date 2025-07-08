import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import productCategories, { getDetailedProductCategories, categoryNames } from "@/data/productCategories"
import { CategoryIconDisplay } from "@/components/CategoryIconDisplay"
import CategoryHeroSection from './CategoryHeroSection'
import CategoryProductSearch from './CategoryProductSearch'

// Generate static params for all category pages
export async function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.id,
  }))
}

// Generate metadata for each category page
export async function generateMetadata({ params }) {
  const { category: categoryId } = await params
  const detailedCategories = getDetailedProductCategories()
  const category = detailedCategories.find((cat) => cat.id === categoryId)
  
  if (!category) {
    return {
      title: "Category Not Found | Eastern Petroleum",
    }
  }

  return {
    title: `${category.title} - Premium Lubricants | Eastern Petroleum Products`,
    description: `Explore our comprehensive range of ${category.title.toLowerCase()} including premium lubricants and industrial oils. ${category.description}`,
    keywords: `${category.title.toLowerCase()}, lubricants, industrial oils, Eastern Petroleum, premium quality, ${category.products.map(p => p.name).join(', ')}`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/products/${categoryId}`,
    },
    openGraph: {
      title: `${category.title} - Premium Lubricants | Eastern Petroleum`,
      description: `Discover our ${category.title.toLowerCase()} range with ${category.products.length} premium products engineered for optimal performance.`,
      url: `/products/${categoryId}`,
      siteName: 'Eastern Petroleum',
      images: [
        {
          url: category.image || "/east-logo.png",
          width: 1200,
          height: 630,
          alt: `${category.title} - Eastern Petroleum`,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.title} - Premium Lubricants | Eastern Petroleum`,
      description: `Discover our ${category.title.toLowerCase()} range with ${category.products.length} premium products.`,
      images: [category.image || "/east-logo.png"],
    },
  }
}

export default async function CategoryPage({ params }) {
  const { category: categoryId } = await params
  const detailedCategories = getDetailedProductCategories()
  const category = detailedCategories.find((cat) => cat.id === categoryId)
  const categoryDisplayName = categoryNames[categoryId] || "Products"

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation - Static */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/products" className="text-gray-500 hover:text-eastto-orange transition-colors duration-200">
              Products
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-eastto-orange font-medium">{categoryDisplayName}</span>
          </nav>
        </div>
      </section>

      {/* Category Hero Section - Client Island for Animation */}
      <CategoryHeroSection category={category} />

      {/* Search and Products Section - Client Island for Interactivity */}
      <CategoryProductSearch category={category} categoryId={categoryId} />

      {/* Related Categories - Static */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Other Categories</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productCategories
              .filter((cat) => cat.id !== categoryId)
              .slice(0, 4)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  href={`/products/${relatedCategory.id}`}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 group"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                    <CategoryIconDisplay paths={relatedCategory.iconPaths} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-eastto-orange transition-colors duration-200">
                    {relatedCategory.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{relatedCategory.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-eastto-orange font-medium">
                      {relatedCategory.products.length} Products
                    </span>
                    <svg
                      className="w-4 h-4 text-eastto-orange group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Static */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Our technical experts are here to help you select the perfect {category.title.toLowerCase()} for your
            specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              Contact Our Experts
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}