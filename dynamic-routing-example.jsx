// 🎯 DYNAMIC ROUTING EXAMPLE FOR EASTERN PETROLEUM
// This file explains how your current dynamic routing works

// ============================================
// 1. FOLDER STRUCTURE EXPLANATION
// ============================================
/*
src/app/products/
├── page.jsx                    // Route: /products
├── [category]/                 // Dynamic segment for category
│   ├── page.jsx               // Route: /products/[category]
│   └── [product]/             // Nested dynamic segment
│       └── page.jsx           // Route: /products/[category]/[product]
*/

// ============================================
// 2. MAIN PRODUCTS PAGE (/products)
// ============================================
"use client"
import Link from "next/link"
import productCategories from "@/data/productCategories"

export default function ProductsPage() {
  return (
    <div>
      <h1>All Product Categories</h1>
      {productCategories.map(category => (
        <Link 
          key={category.id}
          href={`/products/${category.id}`}  // Creates: /products/automotive
        >
          {category.title}
        </Link>
      ))}
    </div>
  )
}

// ============================================
// 3. CATEGORY PAGE (/products/[category])
// ============================================
"use client"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category  // Gets "automotive" from URL
  
  // Find the category data
  const category = productCategories.find(cat => cat.id === categoryId)
  
  if (!category) {
    return <div>Category not found!</div>
  }
  
  return (
    <div>
      <h1>{category.title}</h1>
      {category.products.map(product => (
        <Link 
          key={product.id}
          href={`/products/${categoryId}/${product.id}`}  // Creates: /products/automotive/engine-oil
        >
          {product.name}
        </Link>
      ))}
    </div>
  )
}

// ============================================
// 4. PRODUCT DETAIL PAGE (/products/[category]/[product])
// ============================================
"use client"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams()
  const { category, product } = params  // Destructure both parameters
  
  // category = "automotive", product = "engine-oil"
  
  const productData = detailedProductData[category]?.[product]
  
  if (!productData) {
    return <div>Product not found!</div>
  }
  
  return (
    <div>
      <h1>{productData.name}</h1>
      <p>{productData.description}</p>
      {/* Product details */}
    </div>
  )
}

// ============================================
// 5. HOW PARAMETERS FLOW
// ============================================
/*
URL: /products/automotive/engine-oil

1. Next.js matches the route pattern: /products/[category]/[product]
2. Extracts parameters: { category: "automotive", product: "engine-oil" }
3. Passes to your component via useParams()
4. You use the parameters to fetch/filter data
*/

// ============================================
// 6. DATA STRUCTURE EXAMPLE
// ============================================
const productCategories = [
  {
    id: "automotive",           // Used in URL: /products/automotive
    title: "Automotive Oils",
    products: [
      {
        id: "engine-oil",       // Used in URL: /products/automotive/engine-oil
        name: "Engine Oil",
        description: "..."
      },
      {
        id: "gear-oil",         // Used in URL: /products/automotive/gear-oil
        name: "Gear Oil",
        description: "..."
      }
    ]
  }
]

// ============================================
// 7. LINKING BETWEEN PAGES
// ============================================

// From products page to category:
{/* <Link href="/products/automotive">Automotive</Link> */}

// From category page to product:
{/* <Link href="/products/automotive/engine-oil">Engine Oil</Link> */}

// From product back to category:
{/* <Link href="/products/automotive">← Back to Automotive</Link> */}

// From any page to products:
{/* <Link href="/products">All Products</Link> */}

// ============================================
// 8. BREADCRUMB NAVIGATION EXAMPLE
// ============================================
export function Breadcrumb({ category, product }) {
  return (
    <nav>
      <Link href="/products">Products</Link>
      {category && (
        <>
          <span> / </span>
          <Link href={`/products/${category}`}>{categoryNames[category]}</Link>
        </>
      )}
      {product && (
        <>
          <span> / </span>
          <span>{product}</span>
        </>
      )}
    </nav>
  )
}

// ============================================
// 9. ERROR HANDLING PATTERNS
// ============================================

// Check if category exists
if (!category) {
  return (
    <div>
      <h1>Category Not Found</h1>
      <Link href="/products">← Back to Products</Link>
    </div>
  )
}

// Check if product exists
if (!productData) {
  return (
    <div>
      <h1>Product Not Found</h1>
      <Link href={`/products/${category}`}>← Back to {categoryName}</Link>
    </div>
  )
}

// ============================================
// 10. SEARCH & FILTERING WITH DYNAMIC ROUTES
// ============================================
export function CategoryPageWithSearch() {
  const params = useParams()
  const [searchTerm, setSearchTerm] = useState("")
  
  const category = productCategories.find(cat => cat.id === params.category)
  
  // Filter products based on search
  const filteredProducts = category.products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      
      {filteredProducts.map(product => (
        <Link href={`/products/${params.category}/${product.id}`}>
          {product.name}
        </Link>
      ))}
    </div>
  )
}
