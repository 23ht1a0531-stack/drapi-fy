import { ArrowRight, Play, Star, ChevronDown } from "lucide-react"
import { products, collections } from "../data/products"
import ProductCard from "../components/ProductCard"

interface LandingProps {
  navigate: (page: string, productId?: number) => void
  onAddToCart: (product: any) => void
  onAddToWishlist: (product: any) => void
}

export default function Landing({ navigate, onAddToCart, onAddToWishlist }: LandingProps) {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=1000&fit=crop&auto=format"
            alt="DRAPIFY Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-xs tracking-[0.4em] font-semibold mb-6">SUMMER 2025 COLLECTION</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Wear the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">
                silence
              </span><br />
              of luxury.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md">
              Premium fashion rooted in craft, guided by restraint. Discover pieces that outlast every trend.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("collections")}
                className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Explore Collections <ArrowRight size={18} />
              </button>
              <button className="glass text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all">
                <Play size={16} fill="white" /> Watch the Edit
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-white/50">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Marquee */}
      <div style={{ backgroundColor: "#0F172A" }} className="py-4 overflow-hidden">
        <div className="flex gap-16 animate-pulse">
          {Array(6).fill("LUXURY · CRAFTSMANSHIP · SUSTAINABILITY · EXCLUSIVITY").map((text, i) => (
            <span key={i} className="text-white/40 text-xs tracking-[0.3em] whitespace-nowrap font-medium">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs text-brand-gray tracking-widest font-semibold mb-3">CURATED EDITS</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark tracking-tight">Our Collections</h2>
          </div>
          <button
            onClick={() => navigate("collections")}
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View All <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Feature */}
          <div
            className="lg:col-span-2 relative overflow-hidden rounded-3xl cursor-pointer group aspect-[16/10]"
            onClick={() => navigate("collections")}
          >
            <img
              src={collections[0].image}
              alt={collections[0].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white/60 text-xs tracking-widest mb-2">{collections[0].count} PIECES</p>
              <h3 className="text-3xl font-bold text-white mb-3">{collections[0].name}</h3>
              <p className="text-white/70 text-sm mb-5">{collections[0].description}</p>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-primary transition-colors">
                Shop Now <ArrowRight size={14} />
              </span>
            </div>
          </div>

          {/* Two Small */}
          <div className="flex flex-col gap-6">
            {collections.slice(1, 3).map((col) => (
              <div
                key={col.id}
                className="relative overflow-hidden rounded-3xl cursor-pointer group flex-1 min-h-[200px]"
                onClick={() => navigate("collections")}
              >
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/60 text-[11px] tracking-widest mb-1">{col.count} PIECES</p>
                  <h3 className="text-lg font-bold text-white">{col.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "12+", label: "Years of Craft" },
            { value: "140+", label: "Premium Pieces" },
            { value: "48K+", label: "Happy Clients" },
            { value: "100%", label: "Ethically Sourced" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-dark mb-1">{stat.value}</p>
              <p className="text-sm text-brand-gray font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs text-brand-gray tracking-widest font-semibold mb-3">EDITOR'S PICKS</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark tracking-tight">New In</h2>
          </div>
          <button
            onClick={() => navigate("products")}
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Shop All <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              navigate={navigate}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=700&fit=crop&auto=format"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div style={{ backgroundColor: "#0F172A" }} className="flex items-center p-12 lg:p-20">
            <div className="max-w-lg">
              <p className="text-blue-400 text-xs tracking-[0.4em] font-semibold mb-6">OUR PHILOSOPHY</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                Luxury is not about excess. It&apos;s about intention.
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                DRAPIFY was born from a conviction: that exceptional clothing should be crafted to last, ethically sourced, and thoughtfully designed. Every piece in our collection tells a story of skilled hands and considered choices.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                We work directly with artisan workshops across Italy, Portugal, and Japan — places where the craft of making clothes is still treated as what it is: an art form.
              </p>
              <button
                onClick={() => navigate("about")}
                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-4 transition-all"
              >
                Our Story <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <p className="text-xs text-brand-gray tracking-widest font-semibold mb-3">WHAT THEY SAY</p>
          <h2 className="text-4xl font-bold text-dark">Loved by Thousands</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              name: "Isabelle M.",
              role: "Creative Director, London",
              text: "DRAPIFY has completely redefined what luxury means to me. The quality is unmatched — these pieces just feel different.",
              rating: 5,
              product: "Silk Column Dress",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
            },
            {
              name: "James K.",
              role: "Architect, Copenhagen",
              text: "I've never owned a coat that garners this many compliments. The tailoring is extraordinary and it ages beautifully.",
              rating: 5,
              product: "Tailored Wool Coat",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
            },
            {
              name: "Sofia L.",
              role: "Fashion Editor, Milan",
              text: "The cashmere turtleneck is the softest thing I own. It wears like a second skin. Worth every penny.",
              rating: 5,
              product: "Cashmere Turtleneck",
              avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
            },
          ].map((review) => (
            <div key={review.name} className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array(review.rating).fill(0).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-brand-text leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
              <p className="text-xs text-brand-gray mb-4 font-medium">Verified purchase: {review.product}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-dark text-sm">{review.name}</p>
                  <p className="text-xs text-brand-gray">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 lg:p-20 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative">
            <p className="text-blue-200 text-xs tracking-[0.4em] font-semibold mb-4">COMPLIMENTARY SHIPPING OVER ₹250</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your wardrobe, elevated.
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Discover this season's most coveted pieces. Free returns, lifetime care, and the DRAPIFY guarantee.
            </p>
            <button
              onClick={() => navigate("products")}
              className="bg-white text-primary font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Shop the Collection <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
