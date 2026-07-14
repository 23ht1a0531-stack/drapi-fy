import { useState } from "react"
import { Trash2, ShoppingBag, ArrowRight, Tag, Truck, Gift } from "lucide-react"
import { products } from "../data/products"

interface CartProps {
  navigate: (page: string) => void
  cartItems: any[]
  onUpdateQty: (productId: number, qty: number) => void
  onRemoveFromCart: (productId: number) => void
}


export default function Cart({ navigate, cartItems, onUpdateQty, onRemoveFromCart }: CartProps) {
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)
  const [giftWrap, setGiftWrap] = useState(false)

  const displayItems = cartItems.length > 0
    ? cartItems
    : products.slice(0, 2).map((p) => ({ ...p, qty: 1, selectedSize: "M" }))

  const subtotal = displayItems.reduce((s: number, item: any) => s + item.price * (item.qty || 1), 0)
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0
  const shipping = subtotal > 250 ? 0 : 15
  const giftCost = giftWrap ? 12 : 0
  const total = subtotal - discount + shipping + giftCost

  const handlePromo = () => {
    if (promoCode.toUpperCase() === "DRAPE10") {
      setPromoApplied(true)
    }
  }

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <ShoppingBag size={28} className="text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-dark">Your Bag</h1>
            <p className="text-brand-gray">{displayItems.length} item{displayItems.length !== 1 ? "s" : ""}</p>
          </div>
        </div>

        {displayItems.length === 0 ? (
          <div className="text-center py-24">
            <ShoppingBag size={56} className="text-border mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-dark mb-2">Your bag is empty</h2>
            <p className="text-brand-gray mb-8">Add some exceptional pieces to get started.</p>
            <button onClick={() => navigate("products")} className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 hover:bg-secondary transition-colors">
              Continue Shopping <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {displayItems.map((item: any, idx: number) => (
                <div key={idx} className="bg-white rounded-3xl border border-border p-5 flex gap-5">
                  <div
                    className="overflow-hidden rounded-2xl bg-muted cursor-pointer flex-shrink-0 w-28 h-36"
                    onClick={() => navigate("products")}
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <p className="text-xs text-brand-gray tracking-widest font-medium uppercase mb-1">{item.category}</p>
                        <h3 className="font-bold text-dark leading-snug">{item.name}</h3>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-brand-gray hover:text-red-500 transition-colors p-1 flex-shrink-0"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="flex gap-3 text-xs text-brand-gray mb-4 mt-2">
                      <span>Size: <strong className="text-dark">{item.selectedSize || "M"}</strong></span>
                      <span className="text-border">|</span>
                      <span className="flex items-center gap-1">
                        Color:
                        <span
                          className="w-3.5 h-3.5 rounded-full inline-block border border-border"
                          style={{ backgroundColor: item.colors?.[0] || "#1A1A1A" }}
                        />
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 border border-border rounded-xl overflow-hidden">
                        <button
                          onClick={() => onUpdateQty(item.id, Math.max(1, (item.qty || 1) - 1))}
                          className="w-9 h-9 flex items-center justify-center hover:bg-muted transition-colors text-brand-gray hover:text-dark"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.qty || 1}</span>
                        <button
                          onClick={() => onUpdateQty(item.id, (item.qty || 1) + 1)}
                          className="w-9 h-9 flex items-center justify-center hover:bg-muted transition-colors text-brand-gray hover:text-dark"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-dark">₹{(item.price * (item.qty || 1)).toFixed(0)}</p>
                        {(item.qty || 1) > 1 && <p className="text-xs text-brand-gray">₹{item.price} each</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Shipping Banner */}
              <div className={`rounded-2xl p-4 flex items-center gap-3 ₹{shipping === 0 ? "bg-green-50 border border-green-200" : "bg-primary/5 border border-primary/20"}`}>
                <Truck size={18} className={shipping === 0 ? "text-green-600" : "text-primary"} />
                <p className="text-sm font-medium">
                  {shipping === 0
                    ? "You have free shipping! 🎉"
                    : `Add ₹₹{(250 - subtotal).toFixed(0)} more for free shipping.`}
                </p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl border border-border p-6">
                <h3 className="font-bold text-dark text-lg mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-gray">Subtotal ({displayItems.length} items)</span>
                    <span className="font-medium text-dark">₹{subtotal}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600 font-medium flex items-center gap-1"><Tag size={12} /> DRAPE10</span>
                      <span className="text-green-600 font-medium">−₹{discount}</span>
                    </div>
                  )}
                  {giftWrap && (
                    <div className="flex justify-between text-sm">
                      <span className="text-brand-gray flex items-center gap-1"><Gift size={12} /> Gift Wrapping</span>
                      <span className="text-dark font-medium">+₹12</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-gray">Shipping</span>
                    <span className={`font-medium ₹{shipping === 0 ? "text-green-600" : "text-dark"}`}>
                      {shipping === 0 ? "Free" : `₹₹{shipping}`}
                    </span>
                  </div>
                </div>

                {/* Promo */}
                <div className="flex gap-2 mb-4">
                  <input
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code"
                    disabled={promoApplied}
                    className="flex-1 px-3 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-primary disabled:opacity-50"
                  />
                  <button
                    onClick={handlePromo}
                    disabled={promoApplied || !promoCode}
                    className="px-4 py-2.5 bg-dark text-white rounded-xl text-sm font-medium hover:bg-primary disabled:opacity-40 transition-colors whitespace-nowrap"
                  >
                    {promoApplied ? "Applied!" : "Apply"}
                  </button>
                </div>

                {/* Gift wrap */}
                <label className="flex items-center gap-3 cursor-pointer py-3 border-y border-border mb-6">
                  <input type="checkbox" checked={giftWrap} onChange={(e) => setGiftWrap(e.target.checked)} className="accent-primary w-4 h-4" />
                  <div>
                    <p className="text-sm font-medium text-dark">Gift Wrapping (+₹12)</p>
                    <p className="text-xs text-brand-gray">Premium tissue, ribbon, and handwritten note</p>
                  </div>
                </label>

                <div className="flex justify-between font-bold text-dark text-lg mb-6">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <button
                  onClick={() => navigate("checkout")}
                  className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                >
                  Checkout <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => navigate("products")}
                  className="w-full mt-3 border border-border text-brand-text py-3.5 rounded-2xl font-medium text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  Continue Shopping
                </button>

                <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-border">
                  {["VISA", "MC", "AMEX", "PAYPAL"].map((c) => (
                    <span key={c} className="text-[10px] font-bold text-brand-gray bg-muted px-2 py-1 rounded">{c}</span>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex gap-3">
                <Truck size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-dark">Estimated delivery</p>
                  <p className="text-xs text-brand-gray">3-5 business days · Free returns</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
