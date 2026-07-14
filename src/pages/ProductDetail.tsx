import { useState } from "react"
import { Star, Heart, ShoppingBag, Truck, RefreshCw, Shield, ChevronDown, ArrowLeft } from "lucide-react"
import type { Product } from "../data/products"
import { products } from "../data/products"
import ProductCard from "../components/ProductCard"

interface ProductDetailProps {
  productId: number
  navigate: (page: string, productId?: number) => void
  onAddToCart: (product: any, size?: string) => void
  onAddToWishlist: (product: any) => void
}

export default function ProductDetail({ productId, navigate, onAddToCart, onAddToWishlist }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId) || products[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [qty, setQty] = useState(1)
  const [sizeError, setSizeError] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>("details")

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)
    .concat(products.filter((p) => p.id !== product.id).slice(0, 4)).slice(0, 4)

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return }
    setSizeError(false)
    setAddedToCart(true)
    onAddToCart({ ...product, selectedSize }, selectedSize)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const accordions = [
    {
      key: "details",
      title: "Product Details",
      content: product.description + " Each piece is finished by hand and inspected for quality before dispatch.",
    },
    {
      key: "care",
      title: "Care Instructions",
      content: "Dry clean recommended. Hand wash in cool water with mild detergent. Lay flat to dry. Do not tumble dry or iron directly.",
    },
    {
      key: "shipping",
      title: "Shipping & Returns",
      content: "Complimentary shipping on orders over ₹250. Standard delivery 3-5 business days. Free returns within 30 days — no questions asked.",
    },
    {
      key: "sustainability",
      title: "Sustainability",
      content: "This piece is made from ethically sourced materials. Our supply chain is fully traceable and certified by OEKO-TEX and B Corp standards.",
    },
  ]

  return (
    <div className="bg-brand-bg min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-brand-gray mb-8">
          <button onClick={() => navigate("home")} className="hover:text-primary">Home</button>
          <span>/</span>
          <button onClick={() => navigate("products")} className="hover:text-primary">Shop</button>
          <span>/</span>
          <span className="text-brand-text">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl bg-muted aspect-[4/5]">
              <img
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">NEW</div>
              )}
              {product.isSale && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">SALE</div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative overflow-hidden rounded-xl aspect-square w-20 border-2 transition-all ₹{selectedImage === i ? "border-primary" : "border-transparent"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs text-brand-gray tracking-widest font-semibold mb-2 uppercase">{product.category} · {product.collection}</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-dark tracking-tight">{product.name}</h1>
              </div>
              <button
                onClick={() => { setWishlisted(!wishlisted); onAddToWishlist(product) }}
                className={`p-3 rounded-2xl border transition-all ₹{wishlisted ? "border-red-200 bg-red-50 text-red-500" : "border-border hover:border-red-200 hover:text-red-500"}`}
              >
                <Heart size={20} fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-border"} />
                ))}
              </div>
              <span className="text-sm font-semibold text-dark">{product.rating}</span>
              <span className="text-sm text-brand-gray">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-dark">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-brand-gray line-through">₹{product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Colors */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-dark mb-3">Color</p>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ₹{selectedColor === i ? "border-primary scale-110" : "border-transparent hover:scale-105"}`}
                    style={{ backgroundColor: color, boxShadow: "0 0 0 2px #E2E8F0" }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-dark">Size</p>
                <button className="text-xs text-primary font-medium hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setSizeError(false) }}
                    className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ₹{
                      selectedSize === size
                        ? "border-dark bg-dark text-white"
                        : "border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && <p className="text-red-500 text-xs mt-2 font-medium">Please select a size to continue.</p>}
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-dark mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-lg hover:border-primary transition-colors"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold text-dark">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-lg hover:border-primary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ₹{
                  addedToCart
                    ? "bg-green-500 text-white"
                    : "bg-dark hover:bg-primary text-white hover:-translate-y-0.5 hover:shadow-lg"
                }`}
              >
                <ShoppingBag size={18} />
                {addedToCart ? "Added to Bag!" : "Add to Bag"}
              </button>
              <button
                onClick={() => { navigate("cart") }}
                className="flex-1 py-4 rounded-2xl font-bold text-sm border-2 border-dark text-dark hover:bg-dark hover:text-white transition-all"
              >
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-border">
              {[
                { icon: Truck, text: "Free shipping over ₹250" },
                { icon: RefreshCw, text: "Free returns, 30 days" },
                { icon: Shield, text: "Authenticity guaranteed" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-2 text-center">
                  <Icon size={18} className="text-primary" />
                  <span className="text-xs text-brand-gray leading-tight">{text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="space-y-2">
              {accordions.map(({ key, title, content }) => (
                <div key={key} className="border border-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === key ? null : key)}
                    className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-dark hover:text-primary transition-colors"
                  >
                    {title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ₹{openAccordion === key ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openAccordion === key && (
                    <div className="px-5 pb-4 text-sm text-brand-gray leading-relaxed border-t border-border pt-3">
                      {content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-24">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs text-brand-gray tracking-widest font-semibold mb-3">YOU MAY ALSO LIKE</p>
                <h2 className="text-3xl font-bold text-dark">Related Pieces</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} navigate={navigate} onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
