import Link from "next/link"

// Metadata for SEO
export const metadata = {
  title: "Page Not Found - Eastern Petroleum",
  description: "The page you're looking for doesn't exist or may have been moved. Browse our premium lubricants and industrial oils or return to the homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Return to Homepage
          </Link>
          
          <div className="text-base space-y-2">
            <Link href="/products" className="text-orange-600 hover:text-orange-700 py-2 px-2 min-h-[44px] inline-flex items-center touch-manipulation">
              Browse Products
            </Link>
            <span className="text-gray-400 mx-2">|</span>
            <Link href="/about" className="text-orange-600 hover:text-orange-700 py-2 px-2 min-h-[44px] inline-flex items-center touch-manipulation">
              About Us
            </Link>
            <span className="text-gray-400 mx-2">|</span>
            <Link href="/contact" className="text-orange-600 hover:text-orange-700 py-2 px-2 min-h-[44px] inline-flex items-center touch-manipulation">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
