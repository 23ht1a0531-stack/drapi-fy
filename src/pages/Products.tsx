import { useState } from "react"
import { SlidersHorizontal, ChevronDown, Grid3X3, LayoutList, X } from "lucide-react"
import { products } from "../data/products"
import ProductCard from "../components/ProductCard"

interface ProductsProps {
  navigate: (page: string, productId?: number) => void
  onAddToCart: (product: any) => void
  onAddToWishlist: (product: any) => void
}

const categories = ["All", "Outerwear", "Dresses", "Trousers", "Knitwear", "Accessories"]
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating"]

export default function Products({ navigate, onAddToCart, onAddToWishlist }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Featured")
  const [gridView, setGridView] = useState(true)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1200])
  const [sortOpen, setSortOpen] = useState(false)

  const filtered = products.filter((p) =>
    activeCategory === "All" || p.category === activeCategory
  ).sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price
    if (sortBy === "Price: High to Low") return b.price - a.price
    if (sortBy === "Best Rating") return b.rating - a.rating
    return 0
  })

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-xs text-brand-gray mb-4 flex items-center gap-2">
            <button onClick={() => navigate("home")} className="hover:text-primary">Home</button>
            <span>/</span>
            <span className="text-brand-text">Shop</span>
          </nav>
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-4xl font-bold text-dark">All Products</h1>
              <p className="text-brand-gray mt-1">{filtered.length} pieces available</p>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ₹{
                activeCategory === cat
                  ? "bg-dark text-white shadow-sm"
                  : "bg-white border border-border text-brand-text hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 py-4 border-y border-border">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-border rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filters
            </button>
            {activeCategory !== "All" && (
              <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-medium">
                {activeCategory}
                <button onClick={() => setActiveCategory("All")}><X size={13} /></button>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-border rounded-xl text-sm font-medium hover:border-primary transition-colors"
              >
                Sort: {sortBy} <ChevronDown size={14} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-border p-2 w-52 z-10">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setSortOpen(false) }}
                      className={`block w-full text-left px-4 py-2.5 text-sm rounded-xl transition-colors ₹{sortBy === opt ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted text-brand-text"}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex bg-white border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setGridView(true)}
                className={`p-2.5 transition-colors ₹{gridView ? "bg-dark text-white" : "text-brand-gray hover:text-dark"}`}
              >
                <Grid3X3 size={15} />
              </button>
              <button
                onClick={() => setGridView(false)}
                className={`p-2.5 transition-colors ₹{!gridView ? "bg-dark text-white" : "text-brand-gray hover:text-dark"}`}
              >
                <LayoutList size={15} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {filtersOpen && (
            <aside className="w-64 flex-shrink-0">
              <div className="bg-white rounded-3xl p-6 border border-border space-y-8">
                <div>
                  <h3 className="font-semibold text-dark mb-4">Price Range</h3>
                  <div className="flex justify-between text-sm text-brand-gray mb-3">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1200}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, +e.target.value])}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-dark mb-4">Collections</h3>
                  {["Summer Essentials", "Evening Edit", "Classic Collection", "Winter Luxe"].map((col) => (
                    <label key={col} className="flex items-center gap-3 py-1.5 cursor-pointer">
                      <input type="checkbox" className="rounded accent-primary" />
                      <span className="text-sm text-brand-gray">{col}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold text-dark mb-4">Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        className="w-10 h-10 rounded-lg border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-dark mb-4">Tags</h3>
                  {["New In", "Sale", "Bestseller", "Sustainable"].map((tag) => (
                    <label key={tag} className="flex items-center gap-3 py-1.5 cursor-pointer">
                      <input type="checkbox" className="rounded accent-primary" />
                      <span className="text-sm text-brand-gray">{tag}</span>
                    </label>
                  ))}
                </div>

                <button className="w-full bg-dark text-white py-3 rounded-xl text-sm font-semibold hover:bg-primary transition-colors">
                  Apply Filters
                </button>
              </div>
            </aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {gridView ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    navigate={navigate}
                    onAddToCart={onAddToCart}
                    onAddToWishlist={onAddToWishlist}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-border p-4 flex gap-6 cursor-pointer hover:border-primary transition-colors group"
                    onClick={() => navigate("product-detail", product.id)}
                  >
                    <img src={product.image} alt={product.name} className="w-32 h-40 object-cover rounded-xl bg-muted flex-shrink-0" />
                    <div className="flex-1 py-2">
                      <p className="text-xs text-brand-gray tracking-widest font-medium mb-1 uppercase">{product.category}</p>
                      <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors mb-2">{product.name}</h3>
                      <p className="text-sm text-brand-gray leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-dark text-lg">₹{product.price}</span>
                          {product.originalPrice && <span className="text-sm text-brand-gray line-through">₹{product.originalPrice}</span>}
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); onAddToCart(product) }}
                          className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-secondary transition-colors"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
