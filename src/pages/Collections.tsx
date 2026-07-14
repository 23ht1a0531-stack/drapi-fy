import { ArrowRight } from "lucide-react"
import { collections } from "../data/products"

interface CollectionsProps {
  navigate: (page: string) => void
}

export default function Collections({ navigate }: CollectionsProps) {
  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-brand-gray tracking-widest font-semibold mb-4">CURATED FOR YOU</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-dark tracking-tight mb-4">Our Collections</h1>
          <p className="text-brand-gray text-lg max-w-xl mx-auto">
            Six carefully edited worlds, each with its own character, palette, and intent.
          </p>
        </div>

        {/* Hero Collection */}
        <div
          className="relative overflow-hidden rounded-3xl cursor-pointer group mb-8 aspect-[21/9]"
          onClick={() => navigate("products")}
        >
          <img
            src={collections[0].image}
            alt={collections[0].name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-12 lg:p-20">
              <p className="text-white/50 text-xs tracking-widest font-semibold mb-3 uppercase">Featured Collection</p>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">{collections[0].name}</h2>
              <p className="text-white/70 max-w-md text-lg mb-6">{collections[0].description}</p>
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary transition-colors">
                Shop {collections[0].count} Pieces <ArrowRight size={16} />
              </div>
            </div>
          </div>
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium">
            {collections[0].count} Pieces
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {collections.slice(1, 4).map((col) => (
            <div
              key={col.id}
              className="relative overflow-hidden rounded-3xl cursor-pointer group aspect-[4/5]"
              onClick={() => navigate("products")}
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/50 text-[11px] tracking-widest font-semibold mb-2 uppercase">{col.count} Pieces</p>
                <h3 className="text-2xl font-bold text-white mb-2">{col.name}</h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">{col.description}</p>
                <span className="text-white/80 text-sm font-medium inline-flex items-center gap-2 group-hover:text-accent transition-colors">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Two */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {collections.slice(4).map((col) => (
            <div
              key={col.id}
              className="relative overflow-hidden rounded-3xl cursor-pointer group aspect-[16/9]"
              onClick={() => navigate("products")}
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <p className="text-white/50 text-[11px] tracking-widest font-semibold mb-2 uppercase">{col.count} Pieces</p>
                  <h3 className="text-2xl font-bold text-white mb-1">{col.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{col.description}</p>
                  <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-primary transition-colors">
                    Shop Now <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-brand-gray mb-4">Can't find what you're looking for?</p>
          <button
            onClick={() => navigate("contact")}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
          >
            Talk to a Personal Stylist <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
