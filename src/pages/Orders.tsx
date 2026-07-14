import { Package, Truck, CheckCircle, Clock, RefreshCw, ArrowRight, ChevronRight } from "lucide-react"
import { products } from "../data/products"

interface OrdersProps {
  navigate: (page: string, productId?: number) => void
}

const orders = [
  {
    id: "DRP-A8K2Z1",
    date: "12 July 2025",
    status: "Delivered",
    total: 734,
    items: [products[0], products[1]],
  },
  {
    id: "DRP-B3M9X7",
    date: "28 June 2025",
    status: "In Transit",
    total: 320,
    items: [products[3]],
  },
  {
    id: "DRP-C5P4W8",
    date: "10 June 2025",
    status: "Processing",
    total: 1195,
    items: [products[2]],
  },
  {
    id: "DRP-D7Q1N2",
    date: "2 May 2025",
    status: "Delivered",
    total: 445,
    items: [products[1]],
  },
]

const statusConfig: Record<string, { color: string; icon: any; bg: string }> = {
  Delivered: { color: "text-green-600", bg: "bg-green-50 border-green-200", icon: CheckCircle },
  "In Transit": { color: "text-blue-600", bg: "bg-blue-50 border-blue-200", icon: Truck },
  Processing: { color: "text-amber-600", bg: "bg-amber-50 border-amber-200", icon: Clock },
  Cancelled: { color: "text-red-600", bg: "bg-red-50 border-red-200", icon: RefreshCw },
}

export default function Orders({ navigate }: OrdersProps) {
  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <Package size={28} className="text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-dark">My Orders</h1>
            <p className="text-brand-gray">{orders.length} orders placed</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {["All", "Delivered", "In Transit", "Processing"].map((filter) => (
            <button
              key={filter}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ₹{filter === "All" ? "bg-dark text-white" : "bg-white border border-border text-brand-text hover:border-primary hover:text-primary"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {orders.map((order) => {
            const { color, bg, icon: Icon } = statusConfig[order.status] || statusConfig.Processing
            return (
              <div key={order.id} className="bg-white rounded-3xl border border-border overflow-hidden hover:border-primary/30 transition-colors group">
                {/* Header */}
                <div className="px-6 py-4 border-b border-border flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-xs text-brand-gray font-medium">Order</p>
                      <p className="font-bold text-dark">{order.id}</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-xs text-brand-gray font-medium">Date</p>
                      <p className="font-semibold text-dark text-sm">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-brand-gray font-medium">Total</p>
                      <p className="font-bold text-dark">₹{order.total}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border ₹{bg} ₹{color}`}>
                      <Icon size={12} />
                      {order.status}
                    </span>
                    <button className="text-brand-gray hover:text-primary transition-colors">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Items */}
                <div className="px-6 py-5">
                  <div className="flex gap-4 items-start">
                    <div className="flex -space-x-3">
                      {order.items.map((item, i) => (
                        <div key={i} className="w-14 h-18 rounded-xl overflow-hidden border-2 border-white bg-muted flex-shrink-0" style={{ height: "72px" }}>
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        {order.items.map((item, i) => (
                          <span key={i} className="text-sm font-semibold text-dark">{item.name}{i < order.items.length - 1 ? "," : ""}</span>
                        ))}
                      </div>
                      <p className="text-xs text-brand-gray mt-1">{order.items.length} piece{order.items.length > 1 ? "s" : ""}</p>
                    </div>

                    <div className="flex gap-2 flex-shrink-0">
                      {order.status === "Delivered" && (
                        <button className="text-sm font-medium text-primary border border-primary/30 px-4 py-2 rounded-xl hover:bg-primary/10 transition-colors">
                          Reorder
                        </button>
                      )}
                      {order.status === "In Transit" && (
                        <button className="text-sm font-medium text-primary border border-primary/30 px-4 py-2 rounded-xl hover:bg-primary/10 transition-colors flex items-center gap-1.5">
                          <Truck size={13} /> Track
                        </button>
                      )}
                      <button className="text-sm font-medium text-brand-gray border border-border px-4 py-2 rounded-xl hover:border-primary hover:text-primary transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        <div className="mt-12 text-center py-8">
          <p className="text-brand-gray text-sm mb-4">Need help with an order?</p>
          <button onClick={() => navigate("contact")} className="text-primary font-semibold text-sm flex items-center gap-2 mx-auto hover:gap-3 transition-all">
            Contact Support <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
