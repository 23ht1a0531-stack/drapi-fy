import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react"
import { products } from "../data/products"

interface WishlistProps {
  navigate: (page: string, productId?: number) => void
  onAddToCart: (product: any) => void
  wishlistItems: number[]
  onRemoveFromWishlist: (id: number) => void
}

export default function Wishlist({ navigate, onAddToCart, wishlistItems, onRemoveFromWishlist }: WishlistProps) {
  const wishlisted = products.filter((p) => wishlistItems.includes(p.id)).length > 0
    ? products.filter((p) => wishlistItems.includes(p.id))
    : products.slice(0, 3)

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <Heart size={28} className="text-primary" fill="currentColor" />
          <div>
            <h1 className="text-4xl font-bold text-dark">My Wishlist</h1>
            <p className="text-brand-gray">{wishlisted.length} saved piece{wishlisted.length !== 1 ? "s" : ""}</p>
          </div>
        </div>

        {wishlisted.length === 0 ? (
          <div className="text-center py-24">
            <Heart size={56} className="text-border mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-dark mb-2">Your wishlist is empty</h2>
            <p className="text-brand-gray mb-8">Save pieces you love and come back to them anytime.</p>
            <button onClick={() => navigate("products")} className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 hover:bg-secondary transition-colors">
              Discover Pieces <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {wishlisted.map((product) => (
                <div key={product.id} className="bg-white rounded-3xl border border-border p-5 flex gap-6 group hover:border-primary/30 transition-colors">
                  <div
                    className="relative overflow-hidden rounded-2xl bg-muted cursor-pointer flex-shrink-0 w-28 h-36"
                    onClick={() => navigate("product-detail", product.id)}
                  >
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {product.isSale && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">SALE</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs text-brand-gray tracking-widest font-medium mb-1 uppercase">{product.category}</p>
                        <h3
                          className="font-bold text-dark hover:text-primary cursor-pointer transition-colors leading-snug"
                          onClick={() => navigate("product-detail", product.id)}
                        >
                          {product.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-brand-gray hover:text-red-500 transition-colors p-1 flex-shrink-0"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-2 mb-4">
                      <span className="font-bold text-dark">₹{product.price}</span>
                      {product.originalPrice && <span className="text-sm text-brand-gray line-through">₹{product.originalPrice}</span>}
                    </div>

                    {/* Size selector */}
                    <div className="flex gap-2 flex-wrap mb-4">
                      {product.sizes.slice(0, 4).map((size) => (
                        <button key={size} className="px-3 py-1.5 text-xs border border-border rounded-lg hover:border-primary hover:text-primary transition-colors font-medium">
                          {size}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="flex items-center gap-2 bg-dark hover:bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                    >
                      <ShoppingBag size={14} />
                      Move to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl border border-border p-6">
                <h3 className="font-bold text-dark text-lg mb-4">Wishlist Summary</h3>
                <div className="space-y-3 mb-6">
                  {wishlisted.map((p) => (
                    <div key={p.id} className="flex justify-between text-sm">
                      <span className="text-brand-gray truncate max-w-[180px]">{p.name}</span>
                      <span className="font-semibold text-dark">₹{p.price}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-bold text-dark">
                    <span>Total</span>
                    <span>₹{wishlisted.reduce((s, p) => s + p.price, 0)}</span>
                  </div>
                </div>
                <button
                  onClick={() => wishlisted.forEach(onAddToCart)}
                  className="w-full bg-primary hover:bg-secondary text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingBag size={16} />
                  Add All to Bag
                </button>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-3xl p-5">
                <p className="font-semibold text-dark text-sm mb-1">Share Your List</p>
                <p className="text-xs text-brand-gray mb-4">Let friends and family know what you love.</p>
                <button className="w-full border border-primary/30 text-primary text-sm font-medium py-2.5 rounded-xl hover:bg-primary/10 transition-colors">
                  Copy Wishlist Link
                </button>
              </div>
            </div>
          </div>
        )}

        {/* You may also like */}
        <div className="mt-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-dark">You May Also Like</h2>
            <button onClick={() => navigate("products")} className="text-sm font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4, 8).map((product) => (
              <div key={product.id} className="group cursor-pointer" onClick={() => navigate("product-detail", product.id)}>
                <div className="overflow-hidden rounded-2xl bg-muted aspect-[3/4] mb-3">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs text-brand-gray uppercase tracking-widest mb-1">{product.category}</p>
                <p className="font-semibold text-dark text-sm group-hover:text-primary transition-colors">{product.name}</p>
                <p className="font-bold text-dark">₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
