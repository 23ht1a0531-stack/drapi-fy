import { CheckCircle, Package, Truck, MapPin, ArrowRight } from "lucide-react"
import { products } from "../data/products"

interface OrderSuccessProps {
  navigate: (page: string) => void
}

export default function OrderSuccess({ navigate }: OrderSuccessProps) {
  const orderItems = products.slice(0, 2)
  const orderNumber = "DRP-" + Math.random().toString(36).substring(2, 8).toUpperCase()

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Success Icon */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <p className="text-xs text-brand-gray tracking-widest font-semibold mb-2">ORDER CONFIRMED</p>
          <h1 className="text-4xl font-bold text-dark mb-3">Thank you for your order!</h1>
          <p className="text-brand-gray">
            Your confirmation has been sent to <strong className="text-dark">you@example.com</strong>
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-3xl border border-border p-8 mb-6">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
            <div>
              <p className="text-xs text-brand-gray font-medium mb-1">Order Number</p>
              <p className="text-xl font-bold text-dark">{orderNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-brand-gray font-medium mb-1">Order Date</p>
              <p className="font-semibold text-dark">
                {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-4 mb-6">
            {orderItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-xl bg-muted flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-dark text-sm">{item.name}</p>
                  <p className="text-xs text-brand-gray mt-1">Size: M · Qty: 1</p>
                </div>
                <p className="font-bold text-dark">₹{item.price}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-brand-gray">Subtotal</span>
              <span className="font-medium">₹{orderItems.reduce((s, p) => s + p.price, 0)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-brand-gray">Shipping</span>
              <span className="font-medium text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold text-dark text-lg pt-2 border-t border-border mt-2">
              <span>Total</span>
              <span>₹{orderItems.reduce((s, p) => s + p.price, 0)}</span>
            </div>
          </div>
        </div>

        {/* Delivery Timeline */}
        <div className="bg-white rounded-3xl border border-border p-8 mb-6">
          <h3 className="font-bold text-dark mb-6">Delivery Timeline</h3>
          <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border" />
            {[
              { icon: CheckCircle, label: "Order Confirmed", sub: "Just now", done: true },
              { icon: Package, label: "Processing", sub: "Today, by end of day", done: true },
              { icon: Truck, label: "Shipped", sub: "Expected tomorrow", done: false },
              { icon: MapPin, label: "Delivered", sub: "In 3-5 business days", done: false },
            ].map(({ icon: Icon, label, sub, done }, i) => (
              <div key={i} className="flex items-start gap-6 mb-5 last:mb-0 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ₹{done ? "bg-green-500" : "bg-muted border-2 border-border"}`}>
                  <Icon size={14} className={done ? "text-white" : "text-brand-gray"} />
                </div>
                <div>
                  <p className={`font-semibold text-sm ₹{done ? "text-dark" : "text-brand-gray"}`}>{label}</p>
                  <p className="text-xs text-brand-gray">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-muted rounded-2xl p-5 mb-8 flex gap-3">
          <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-dark text-sm mb-1">Shipping To</p>
            <p className="text-sm text-brand-gray">Isabelle Martin · 14 Kensington High Street, London W8 4PT, United Kingdom</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("orders")}
            className="flex-1 bg-dark hover:bg-primary text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Package size={16} />
            Track Order
          </button>
          <button
            onClick={() => navigate("products")}
            className="flex-1 border border-border text-brand-text py-4 rounded-2xl font-semibold hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
          >
            Continue Shopping <ArrowRight size={16} />
          </button>
        </div>

        <p className="text-center text-xs text-brand-gray mt-8">
          Need help?{" "}
          <button onClick={() => navigate("contact")} className="text-primary font-medium hover:underline">Contact our team</button>
        </p>
      </div>
    </div>
  )
}
