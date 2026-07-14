import { User, Package, Heart, Settings, LogOut, ChevronRight, Camera, Star, MapPin, CreditCard } from "lucide-react"
import { products } from "../data/products"

interface ProfileProps {
  navigate: (page: string) => void
}

const navItems = [
  { icon: Package, label: "My Orders", page: "orders", count: 4 },
  { icon: Heart, label: "Wishlist", page: "wishlist", count: 3 },
  { icon: MapPin, label: "Addresses", page: "settings", count: null },
  { icon: CreditCard, label: "Payment Methods", page: "settings", count: null },
  { icon: Settings, label: "Settings", page: "settings", count: null },
]

export default function Profile({ navigate }: ProfileProps) {
  const recentOrders = [
    { id: "DRP-A8K2Z1", date: "12 July 2025", status: "Delivered", total: 734, product: products[0] },
    { id: "DRP-B3M9X7", date: "28 June 2025", status: "In Transit", total: 320, product: products[3] },
  ]

  const wishlistItems = products.slice(0, 3)

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl border border-border p-6 text-center">
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-muted mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&auto=format"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center shadow">
                  <Camera size={12} />
                </button>
              </div>
              <p className="font-bold text-dark text-lg">Isabelle Martin</p>
              <p className="text-brand-gray text-sm">Member since 2023</p>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-medium text-amber-600">Gold Member</span>
              </div>
            </div>

            {/* Loyalty Points */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star size={16} className="text-amber-300" fill="currentColor" />
                <span className="text-sm font-semibold text-white/90">Loyalty Points</span>
              </div>
              <p className="text-3xl font-bold mb-1">2,840</p>
              <p className="text-white/70 text-xs">= ₹28 store credit</p>
              <div className="mt-3">
                <div className="flex justify-between text-xs text-white/70 mb-1">
                  <span>Gold level</span>
                  <span>5,000 pts to Platinum</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full">
                  <div className="h-full bg-white rounded-full" style={{ width: "57%" }} />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-3xl border border-border overflow-hidden">
              {navItems.map(({ icon: Icon, label, page, count }) => (
                <button
                  key={label}
                  onClick={() => navigate(page)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted transition-colors border-b border-border last:border-0 group"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className="text-brand-gray group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-brand-text group-hover:text-primary transition-colors">{label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {count && <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">{count}</span>}
                    <ChevronRight size={14} className="text-brand-gray group-hover:text-primary transition-colors" />
                  </div>
                </button>
              ))}
              <button
                onClick={() => navigate("login")}
                className="w-full flex items-center gap-3 px-5 py-4 text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut size={16} />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome */}
            <div className="bg-white rounded-3xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-dark">Good afternoon, Isabelle 👋</h1>
                  <p className="text-brand-gray text-sm mt-1">Here's what's happening with your account.</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Orders", value: "12", sub: "lifetime" },
                  { label: "Wishlist", value: "3", sub: "pieces saved" },
                  { label: "Reviews", value: "8", sub: "submitted" },
                ].map(({ label, value, sub }) => (
                  <div key={label} className="bg-muted rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-dark">{value}</p>
                    <p className="text-sm font-semibold text-dark mt-0.5">{label}</p>
                    <p className="text-xs text-brand-gray">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-3xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-dark text-lg">Recent Orders</h2>
                <button onClick={() => navigate("orders")} className="text-sm font-semibold text-primary hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex gap-4 p-4 rounded-2xl border border-border hover:border-primary/30 transition-colors cursor-pointer">
                    <img src={order.product.image} alt={order.product.name} className="w-14 h-18 object-cover rounded-xl bg-muted flex-shrink-0" style={{ height: "72px" }} />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-dark text-sm">{order.product.name}</p>
                          <p className="text-xs text-brand-gray mt-0.5">{order.id} · {order.date}</p>
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ₹{order.status === "Delivered" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="font-bold text-dark mt-2">₹{order.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wishlist Preview */}
            <div className="bg-white rounded-3xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-dark text-lg">Saved Pieces</h2>
                <button onClick={() => navigate("wishlist")} className="text-sm font-semibold text-primary hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="group cursor-pointer" onClick={() => navigate("product-detail", item.id)}>
                    <div className="overflow-hidden rounded-2xl bg-muted aspect-[3/4] mb-2">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <p className="text-xs font-semibold text-dark truncate">{item.name}</p>
                    <p className="text-xs text-brand-gray">₹{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white rounded-3xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-dark text-lg">Personal Information</h2>
                <button onClick={() => navigate("settings")} className="text-sm font-semibold text-primary hover:underline">Edit</button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "First Name", value: "Isabelle" },
                  { label: "Last Name", value: "Martin" },
                  { label: "Email", value: "isabelle.martin@gmail.com" },
                  { label: "Phone", value: "+44 7700 900 123" },
                  { label: "Location", value: "London, UK" },
                  { label: "Member Since", value: "March 2023" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs text-brand-gray font-medium mb-1">{label}</p>
                    <p className="font-semibold text-dark text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
