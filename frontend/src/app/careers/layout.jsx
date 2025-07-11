// Metadata for SEO (Static Site Generation)
export const metadata = {
  title: "Careers at Eastern Petroleum | Join Our Lubricant Manufacturing Team",
  description: "Explore exciting career opportunities at Eastern Petroleum. Join our 60+ year legacy in lubricant manufacturing with competitive packages and growth opportunities.",
  keywords: "Eastern Petroleum careers, lubricant industry jobs, manufacturing jobs, automotive industry careers, Mumbai jobs, India",
  alternates: {
    canonical: 'https://www.eastto.in/careers',
  },
  openGraph: {
    title: "Careers at Eastern Petroleum - Join Our Manufacturing Excellence",
    description: "Build your career with India's trusted lubricant manufacturer. Discover opportunities in manufacturing, quality, sales, and technical roles.",
    url: 'https://www.eastto.in/careers',
    images: ["/east-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CareersLayout({ children }) {
  return children
}
