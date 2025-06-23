"use client"

import React from 'react';
import { svgIcons } from '@/data/productCategories';

export function CategoryIconDisplay({ paths, categoryId }) {
  // If paths are directly provided, use them
  // Otherwise, look up paths by categoryId
  const iconPaths = paths || (categoryId && svgIcons[categoryId]) || [];
  
  if (!iconPaths.length) {
    return null;
  }
  
  return (
    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {iconPaths.map((path, index) => (
        <path
          key={index}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={path}
        />
      ))}
    </svg>
  );
}
