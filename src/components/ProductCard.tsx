import { useState } from "react"
import { Heart, ShoppingBag, Star } from "lucide-react"
import type { Product } from "../data/products"

interface ProductCardProps {
  product: Product
  navigate: (page: string, productId?: number) => void
  onAddToWishlist?: (product: Product) => void
  onAddToCart?: (product: Product) => void
  isWishlisted?: boolean
}

export default function ProductCard({ product, navigate, onAddToWishlist, onAddToCart, isWishlisted }: ProductCardProps) {
  const [hovered, setHovered] = useState(false)
  const [wishlisted, setWishlisted] = useState(isWishlisted || false)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation()
    setWishlisted(!wishlisted)
    onAddToWishlist?.(product)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    setAddedToCart(true)
    onAddToCart?.(product)
    setTimeout(() => setAddedToCart(false), 1800)
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate("product-detail", product.id)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[3/4] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">NEW</span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">-{discount}%</span>
          )}
          {product.isBestseller && (
            <span className="bg-dark text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">BESTSELLER</span>
          )}
        </div>

        {/* Actions */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ₹{hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
          <button
            onClick={handleWishlist}
            className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md transition-colors ₹{
              wishlisted ? "bg-red-500 text-white" : "bg-white text-brand-text hover:text-red-500"
            }`}
          >
            <Heart size={15} fill={wishlisted ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ₹{hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ₹{
              addedToCart
                ? "bg-green-500 text-white"
                : "bg-dark text-white hover:bg-primary"
            }`}
          >
            <ShoppingBag size={15} />
            {addedToCart ? "Added!" : "Add to Bag"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        {/* Colors */}
        <div className="flex gap-1.5">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-3.5 h-3.5 rounded-full border border-border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <p className="text-xs text-brand-gray uppercase tracking-widest font-medium">{product.category}</p>
        <h3 className="font-semibold text-brand-text text-sm leading-snug group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-border"}
              />
            ))}
          </div>
          <span className="text-[11px] text-brand-gray">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-brand-text">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-brand-gray line-through">₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}
