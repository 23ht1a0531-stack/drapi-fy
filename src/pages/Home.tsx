import { ArrowRight, Sparkles, Truck, RefreshCw, Shield } from "lucide-react"
import { products, collections, categories } from "../data/products"
import ProductCard from "../components/ProductCard"

interface HomeProps {
  navigate: (page: string, productId?: number) => void
  onAddToCart: (product: any) => void
  onAddToWishlist: (product: any) => void
}

export default function Home({ navigate, onAddToCart, onAddToWishlist }: HomeProps) {
  const newIn = products.filter((p) => p.isNew)
  const bestsellers = products.filter((p) => p.isBestseller)
  const sale = products.filter((p) => p.isSale)

  return (
    <div className="bg-brand-bg">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-dark text-white pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-white/80">New arrivals just dropped</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              This season's<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">finest edit.</span>
            </h1>
            <p className="text-white/60 leading-relaxed mb-8 text-lg max-w-md">
              From oversized linen to structured cashmere — the pieces that will define how you dress this season.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => navigate("products")}
                className="bg-primary hover:bg-secondary text-white px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Shop Now <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigate("collections")}
                className="border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                View Collections
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&auto=format"
                alt="Featured Look 1"
                className="rounded-2xl w-full object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop&auto=format"
                alt="Featured Look 2"
                className="rounded-2xl w-full object-cover -mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: "Free Shipping", sub: "On orders over ₹250" },
            { icon: RefreshCw, title: "Free Returns", sub: "No questions asked" },
            { icon: Shield, title: "Authenticity", sub: "100% genuine pieces" },
            { icon: Sparkles, title: "Expert Styling", sub: "Personal shoppers" },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-dark">{title}</p>
                <p className="text-xs text-brand-gray">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-brand-gray tracking-widest font-semibold mb-3">BROWSE BY</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark">Category</h2>
          </div>
          <button onClick={() => navigate("products")} className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            All Products <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate("products")}
              className="group flex flex-col items-center gap-3"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-primary/20 transition-colors" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-dark group-hover:text-primary transition-colors">{cat.name}</p>
                <p className="text-xs text-brand-gray">{cat.count} items</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* New In */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-brand-gray tracking-widest font-semibold mb-3">JUST LANDED</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark">New In</h2>
          </div>
          <button onClick={() => navigate("products")} className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            View All <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {(newIn.length ? newIn : products.slice(0, 4)).map((product) => (
            <ProductCard key={product.id} product={product} navigate={navigate} onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} />
          ))}
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-200 text-xs tracking-[0.4em] font-semibold mb-4">FEATURED COLLECTION</p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">{collections[1].name}</h2>
            <p className="text-white/70 leading-relaxed mb-8">{collections[1].description}</p>
            <button
              onClick={() => navigate("collections")}
              className="bg-white text-primary font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Explore Now <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative">
            <img
              src={collections[1].image}
              alt={collections[1].name}
              className="rounded-3xl w-full object-cover max-h-80 lg:max-h-96"
            />
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-brand-gray tracking-widest font-semibold mb-3">COMMUNITY FAVOURITES</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark">Bestsellers</h2>
          </div>
          <button onClick={() => navigate("products")} className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            View All <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {(bestsellers.length ? bestsellers : products.slice(2, 6)).map((product) => (
            <ProductCard key={product.id} product={product} navigate={navigate} onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} />
          ))}
        </div>
      </section>

      {/* Sale Section */}
      {sale.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8 lg:p-12">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest mb-3">SALE</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark">Up to 30% Off</h2>
                <p className="text-brand-gray mt-1">Limited time. Premium pieces, exceptional prices.</p>
              </div>
              <button onClick={() => navigate("products")} className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                View All Sale <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {sale.slice(0, 2).concat(products.slice(0, 2)).map((product) => (
                <ProductCard key={product.id} product={product} navigate={navigate} onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
