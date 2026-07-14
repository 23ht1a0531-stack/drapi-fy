export interface Product {
  id: number
  name: string
  brand: string
  price: number
  originalPrice?: number
  category: string
  collection: string
  rating: number
  reviews: number
  image: string
  images: string[]
  colors: string[]
  sizes: string[]
  description: string
  tags: string[]
  isNew?: boolean
  isSale?: boolean
  isBestseller?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "Oversized Linen Blazer",
    brand: "DRAPIFY",
    price: 2189,
    originalPrice: 389,
    category: "Outerwear",
    collection: "Summer Essentials",
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4f94?w=600&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&h=800&fit=crop&auto=format",
    ],
    colors: ["#F5F0E8", "#1A1A1A", "#8B7355"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Effortlessly refined, this oversized linen blazer is crafted from 100% European flax linen with a fluid, breathable hand. Perfect for warm evenings or crisp office mornings.",
    tags: ["linen", "blazer", "oversized", "summer"],
    isSale: true,
  },
  {
    id: 2,
    name: "Silk Column Dress",
    brand: "DRAPIFY",
    price: 1245,
    category: "Dresses",
    collection: "Evening Edit",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop&auto=format",
    ],
    colors: ["#000000", "#C8A882", "#1D4ED8"],
    sizes: ["XS", "S", "M", "L"],
    description: "A sleek, bias-cut silk column dress with a subtle sheen. Designed to move gracefully with the body, this is evening dressing at its most sophisticated.",
    tags: ["silk", "evening", "dress", "luxury"],
    isNew: true,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Wide-Leg Trousers",
    brand: "DRAPIFY",
    price: 1195,
    category: "Trousers",
    collection: "Classic Collection",
    rating: 4.7,
    reviews: 213,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9NcAoN9ACM3xq1ksVviBWvOefLzNhiDZemVuWBFu-w&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9NcAoN9ACM3xq1ksVviBWvOefLzNhiDZemVuWBFu-w&s=10",
    ],
    colors: ["#2C2C2C", "#ECEDE9", "#8B7355"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Tailored from a fluid wool-crepe blend, these wide-leg trousers pair seamlessly with anything from a simple tee to an evening blouse.",
    tags: ["trousers", "tailored", "wide-leg"],
    isBestseller: true,
  },
  {
    id: 4,
    name: "Cashmere Turtleneck",
    brand: "DRAPIFY",
    price: 1320,
    category: "Knitwear",
    collection: "Winter Luxe",
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&h=800&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&h=800&fit=crop&auto=format",
    ],
    colors: ["#F5F0E8", "#1A1A1A", "#8B7355", "#1D4ED8"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Pure Grade-A Mongolian cashmere, hand-finished and brushed to an impossibly soft finish. The turtleneck silhouette is both protective and refined.",
    tags: ["cashmere", "knitwear", "luxury", "winter"],
    isNew: true,
  },
  {
    id: 5,
    name: "Leather Trench Coat",
    brand: "DRAPIFY",
    price: 1890,
    originalPrice: 1100,
    category: "Outerwear",
    collection: "Autumn Archive",
    rating: 4.8,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop&auto=format",
    ],
    colors: ["#1A1A1A", "#8B4513"],
    sizes: ["S", "M", "L", "XL"],
    description: "Full-grain Italian leather in a classic belted trench silhouette. An investment piece built to last decades and improve with every wear.",
    tags: ["leather", "trench", "outerwear", "luxury"],
    isSale: true,
  },
  {
    id: 6,
    name: "Structured Mini Bag",
    brand: "DRAPIFY",
    price: 2265,
    category: "Accessories",
    collection: "Summer Essentials",
    rating: 4.6,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&auto=format",
    ],
    colors: ["#000000", "#C8A882", "#FFFFFF"],
    sizes: ["One Size"],
    description: "Crafted from pebbled calfskin leather, this compact structured bag features a top handle, removable shoulder strap, and gold-tone hardware.",
    tags: ["bag", "leather", "accessories"],
    isNew: true,
  },
  {
    id: 7,
    name: "Ribbed Slip Dress",
    brand: "DRAPIFY",
    price: 1890,
    category: "Dresses",
    collection: "Classic Collection",
    rating: 4.5,
    reviews: 302,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop&auto=format",
    ],
    colors: ["#000000", "#ECEDE9", "#1D4ED8"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A wardrobe-essential ribbed modal slip dress that falls mid-calf. Layer it, dress it up, or wear it alone — endlessly versatile.",
    tags: ["dress", "slip", "minimal"],
    isBestseller: true,
  },
  {
    id: 8,
    name: "Tailored Wool Coat",
    brand: "DRAPIFY",
    price: 1920,
    category: "Outerwear",
    collection: "Autumn Archive",
    rating: 4.9,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=800&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=800&fit=crop&auto=format",
    ],
    colors: ["#2C2C2C", "#8B7355", "#C8A882"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A double-faced wool coat with impeccable tailoring. The clean lapels and structured shoulders make this the definitive outerwear investment.",
    tags: ["wool", "coat", "tailored", "luxury"],
  },
]

export const collections = [
  {
    id: 1,
    name: "Summer Essentials",
    description: "Breathable fabrics and refined silhouettes for the warmest months.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop&auto=format",
    count: 24,
    color: "#F5F0E8",
  },
  {
    id: 2,
    name: "Evening Edit",
    description: "After-dark dressing elevated to an art form.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop&auto=format",
    count: 18,
    color: "#0F172A",
  },
  {
    id: 3,
    name: "Classic Collection",
    description: "Timeless wardrobe anchors crafted to outlast every trend.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
    count: 32,
    color: "#ECEDE9",
  },
  {
    id: 4,
    name: "Winter Luxe",
    description: "Cashmere, wool, and fur-trim pieces for the coldest season.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&h=600&fit=crop&auto=format",
    count: 21,
    color: "#1D4ED8",
  },
  {
    id: 5,
    name: "Autumn Archive",
    description: "Rich textures and deep tones — our most beloved seasonal edit.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop&auto=format",
    count: 29,
    color: "#8B7355",
  },
  {
    id: 6,
    name: "The Atelier",
    description: "Bespoke and made-to-order pieces from our master artisans.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop&auto=format",
    count: 12,
    color: "#111827",
  },
]

export const categories = [
  { id: 1, name: "Outerwear", count: 45, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=500&fit=crop&auto=format" },
  { id: 2, name: "Dresses", count: 38, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&auto=format" },
  { id: 3, name: "Trousers", count: 29, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9NcAoN9ACM3xq1ksVviBWvOefLzNhiDZemVuWBFu-w&s=10" },
  { id: 4, name: "Knitwear", count: 22, image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=400&h=500&fit=crop&auto=format" },
  { id: 5, name: "Accessories", count: 51, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop&auto=format" },
  { id: 6, name: "Footwear", count: 34, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop&auto=format" },
]
