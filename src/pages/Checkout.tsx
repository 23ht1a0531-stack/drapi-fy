import { useState } from "react"
import { ArrowRight, CreditCard, Lock, ChevronDown } from "lucide-react"
import { products } from "../data/products"

interface CheckoutProps {
  navigate: (page: string) => void
  cartItems: any[]
}

export default function Checkout({ navigate, cartItems }: CheckoutProps) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    email: "", firstName: "", lastName: "", address: "", city: "", country: "United Kingdom", postal: "", phone: "",
    cardNumber: "", cardExpiry: "", cardCvc: "", cardName: "",
    shipping: "standard",
  })
  const [processing, setProcessing] = useState(false)

  const displayItems = cartItems.length > 0 ? cartItems : products.slice(0, 2).map((p) => ({ ...p, qty: 1, selectedSize: "M" }))
  const subtotal = displayItems.reduce((s: number, item: any) => s + item.price * (item.qty || 1), 0)
  const shipping = form.shipping === "express" ? 25 : subtotal > 250 ? 0 : 15
  const total = subtotal + shipping

  const handlePlace = () => {
    setProcessing(true)
    setTimeout(() => { setProcessing(false); navigate("order-success") }, 2000)
  }

  const update = (key: string, val: string) => setForm({ ...form, [key]: val })

  const inputCls = "w-full px-4 py-3.5 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"

  return (
    <div className="bg-brand-bg min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => navigate("landing")}
            className="text-xl font-bold tracking-[0.2em] text-dark"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            DRAPIFY
          </button>
          <div className="flex items-center gap-2 text-sm">
            {["Contact", "Shipping", "Payment"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                {i > 0 && <div className="w-8 h-px bg-border" />}
                <span className={`font-medium ₹{step === i + 1 ? "text-primary" : step > i + 1 ? "text-dark" : "text-brand-gray"}`}>
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 space-y-6">
            {/* Step 1 - Contact */}
            <div className={`bg-white rounded-3xl border p-6 transition-all ₹{step === 1 ? "border-primary shadow-sm" : "border-border"}`}>
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setStep(1)}>
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ₹{step > 1 ? "bg-green-500 text-white" : "bg-primary text-white"}`}>
                    {step > 1 ? "✓" : "1"}
                  </div>
                  <h2 className="font-bold text-dark">Contact Information</h2>
                </div>
                {step !== 1 && <ChevronDown size={16} className="text-brand-gray" />}
              </div>

              {step === 1 && (
                <div className="mt-6 space-y-4">
                  <input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Email address" className={inputCls} />
                  <div className="grid grid-cols-2 gap-4">
                    <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="First name" className={inputCls} />
                    <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Last name" className={inputCls} />
                  </div>
                  <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Phone number" className={inputCls} />
                  <button
                    onClick={() => setStep(2)}
                    className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    Continue to Shipping <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Step 2 - Shipping */}
            <div className={`bg-white rounded-3xl border p-6 transition-all ₹{step === 2 ? "border-primary shadow-sm" : "border-border"} ₹{step < 2 ? "opacity-60" : ""}`}>
              <div className="flex items-center justify-between cursor-pointer" onClick={() => step > 2 && setStep(2)}>
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ₹{step > 2 ? "bg-green-500 text-white" : step === 2 ? "bg-primary text-white" : "bg-muted text-brand-gray border border-border"}`}>
                    {step > 2 ? "✓" : "2"}
                  </div>
                  <h2 className="font-bold text-dark">Shipping Address</h2>
                </div>
              </div>

              {step === 2 && (
                <div className="mt-6 space-y-4">
                  <input value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Address" className={inputCls} />
                  <div className="grid grid-cols-2 gap-4">
                    <input value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="City" className={inputCls} />
                    <input value={form.postal} onChange={(e) => update("postal", e.target.value)} placeholder="Postal code" className={inputCls} />
                  </div>
                  <select value={form.country} onChange={(e) => update("country", e.target.value)} className={inputCls}>
                    {["United Kingdom", "United States", "France", "Germany", "Italy", "Spain"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>

                  {/* Shipping Options */}
                  <div className="space-y-3 pt-2">
                    <p className="text-sm font-semibold text-dark">Shipping Method</p>
                    {[
                      { id: "standard", label: "Standard Delivery", sub: "3-5 business days", price: subtotal > 250 ? "Free" : "₹15" },
                      { id: "express", label: "Express Delivery", sub: "1-2 business days", price: "₹25" },
                    ].map((opt) => (
                      <label key={opt.id} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ₹{form.shipping === opt.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                        <div className="flex items-center gap-3">
                          <input type="radio" checked={form.shipping === opt.id} onChange={() => update("shipping", opt.id)} className="accent-primary" />
                          <div>
                            <p className="font-medium text-sm text-dark">{opt.label}</p>
                            <p className="text-xs text-brand-gray">{opt.sub}</p>
                          </div>
                        </div>
                        <span className="font-bold text-dark text-sm">{opt.price}</span>
                      </label>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(3)}
                    className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    Continue to Payment <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Step 3 - Payment */}
            <div className={`bg-white rounded-3xl border p-6 transition-all ₹{step === 3 ? "border-primary shadow-sm" : "border-border"} ₹{step < 3 ? "opacity-60" : ""}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ₹{step === 3 ? "bg-primary text-white" : "bg-muted text-brand-gray border border-border"}`}>
                    3
                  </div>
                  <h2 className="font-bold text-dark">Payment</h2>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-brand-gray">
                  <Lock size={12} /> SSL Secured
                </div>
              </div>

              {step === 3 && (
                <div className="mt-6 space-y-4">
                  {/* Card tabs */}
                  <div className="flex gap-2">
                    {["Credit Card", "PayPal", "Apple Pay"].map((method) => (
                      <button
                        key={method}
                        className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ₹{method === "Credit Card" ? "border-primary bg-primary/10 text-primary" : "border-border text-brand-gray hover:border-primary"}`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <input value={form.cardNumber} onChange={(e) => update("cardNumber", e.target.value)} placeholder="Card number" className={inputCls + " pr-12"} />
                    <CreditCard size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray" />
                  </div>
                  <input value={form.cardName} onChange={(e) => update("cardName", e.target.value)} placeholder="Cardholder name" className={inputCls} />
                  <div className="grid grid-cols-2 gap-4">
                    <input value={form.cardExpiry} onChange={(e) => update("cardExpiry", e.target.value)} placeholder="MM / YY" className={inputCls} />
                    <input value={form.cardCvc} onChange={(e) => update("cardCvc", e.target.value)} placeholder="CVC" className={inputCls} />
                  </div>

                  <div className="bg-muted rounded-xl p-4 flex items-center gap-3 text-sm text-brand-gray">
                    <Lock size={14} className="text-primary flex-shrink-0" />
                    Your payment information is encrypted and processed securely.
                  </div>

                  <button
                    onClick={handlePlace}
                    disabled={processing}
                    className="w-full bg-primary hover:bg-secondary disabled:opacity-60 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                  >
                    {processing ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Place Order · ₹{total} <Lock size={14} /></>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-border p-6 sticky top-28">
              <h3 className="font-bold text-dark text-lg mb-6">Your Order</h3>

              <div className="space-y-4 mb-6">
                {displayItems.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-3">
                    <div className="relative w-14 h-18 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl bg-muted" style={{ height: "72px" }} />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-dark text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {item.qty || 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-dark leading-snug line-clamp-1">{item.name}</p>
                      <p className="text-xs text-brand-gray mt-0.5">Size: {item.selectedSize || "M"}</p>
                    </div>
                    <p className="font-bold text-dark text-sm flex-shrink-0">₹{item.price * (item.qty || 1)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-gray">Subtotal</span>
                  <span className="text-dark font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-gray">Shipping</span>
                  <span className={`font-medium ₹{shipping === 0 ? "text-green-600" : "text-dark"}`}>{shipping === 0 ? "Free" : `₹₹{shipping}`}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-dark text-lg border-t border-border pt-4">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

