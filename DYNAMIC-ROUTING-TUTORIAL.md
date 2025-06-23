# 🎯 Dynamic Routing Tutorial for Eastern Petroleum Website

## What is Dynamic Routing?

Dynamic routing allows you to create pages with variable URL segments. Instead of creating separate files for each product, you create template pages that can handle multiple URLs.

## Your Current Implementation

### Folder Structure
```
src/app/products/
├── page.jsx                    // Route: /products
├── [category]/                 // Dynamic segment
│   ├── page.jsx               // Route: /products/automotive
│   └── [product]/             // Nested dynamic segment
│       └── page.jsx           // Route: /products/automotive/engine-oil
```

### How URLs Map to Files
- `/products` → `products/page.jsx`
- `/products/automotive` → `products/[category]/page.jsx`
- `/products/automotive/engine-oil` → `products/[category]/[product]/page.jsx`

## Key Concepts

### 1. useParams() Hook
This hook extracts dynamic segments from the URL:

```jsx
import { useParams } from "next/navigation"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category  // Gets "automotive" from URL
}
```

### 2. Creating Dynamic Links
```jsx
// Link to category page
<Link href={`/products/${categoryId}`}>
  {categoryName}
</Link>

// Link to product page
<Link href={`/products/${categoryId}/${productId}`}>
  {productName}
</Link>
```

### 3. Data Flow
1. **URL**: `/products/automotive/engine-oil`
2. **Next.js extracts**: `{ category: "automotive", product: "engine-oil" }`
3. **Your code uses these** to find the right data
4. **Display the content** for that specific product

## Example: How Your Category Page Works

```jsx
"use client"
import { useParams } from "next/navigation"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category  // "automotive"
  
  // Find category data
  const category = productCategories.find(cat => cat.id === categoryId)
  
  if (!category) {
    return <div>Category not found!</div>
  }
  
  return (
    <div>
      <h1>{category.title}</h1>
      {category.products.map(product => (
        <Link href={`/products/${categoryId}/${product.id}`}>
          {product.name}
        </Link>
      ))}
    </div>
  )
}
```

## Benefits of Your Current Setup

1. **SEO Friendly URLs**: Clean, readable URLs like `/products/automotive/engine-oil`
2. **Scalable**: Add new products without creating new files
3. **Organized**: Logical hierarchy that matches your data structure
4. **User Experience**: Intuitive navigation with breadcrumbs

## Error Handling

Your code already includes good error handling:

```jsx
if (!category) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1>Category Not Found</h1>
        <Link href="/products">← Back to Products</Link>
      </div>
    </div>
  )
}
```

## Advanced Features You're Using

### 1. Breadcrumb Navigation
Shows users where they are in the site hierarchy

### 2. Search Functionality
Filter products within categories

### 3. Responsive Design
Works well on all device sizes

### 4. Loading States
Handle data loading gracefully

## Summary

Your dynamic routing setup is excellent! It provides:
- Clean URLs
- Scalable architecture
- Good user experience
- SEO benefits
- Easy maintenance

The system automatically handles routing for any new products or categories you add to your data file, without needing to create new page files.
