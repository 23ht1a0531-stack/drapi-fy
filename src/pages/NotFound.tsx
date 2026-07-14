import { ArrowRight, Home } from "lucide-react"

interface NotFoundProps {
  navigate: (page: string) => void
}

export default function NotFound({ navigate }: NotFoundProps) {
  return (
    <div className="bg-brand-bg min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=1000&fit=crop&auto=format"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        {/* Logo */}
        <button
          onClick={() => navigate("landing")}
          className="text-xl font-bold tracking-[0.2em] text-dark mb-12 block mx-auto"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          DRAPIFY
        </button>

        {/* 404 */}
        <div className="relative mb-8">
          <span
            className="text-[160px] lg:text-[220px] font-black text-dark/5 leading-none select-none block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-4 tracking-tight">
          This page doesn't exist.
        </h1>
        <p className="text-brand-gray text-lg mb-10 leading-relaxed">
          We couldn't find what you were looking for. Perhaps it was moved, renamed, or never existed to begin with.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("home")}
            className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            <Home size={18} /> Back to Home
          </button>
          <button
            onClick={() => navigate("products")}
            className="border border-border text-brand-text hover:border-primary hover:text-primary px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            Browse Products <ArrowRight size={18} />
          </button>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-brand-gray tracking-widest font-semibold mb-5">POPULAR PAGES</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Collections", page: "collections" },
              { label: "New In", page: "products" },
              { label: "Sale", page: "products" },
              { label: "FAQ", page: "faq" },
              { label: "Contact", page: "contact" },
            ].map(({ label, page }) => (
              <button
                key={label}
                onClick={() => navigate(page)}
                className="text-sm font-medium text-brand-gray hover:text-primary bg-white border border-border hover:border-primary px-4 py-2 rounded-xl transition-all"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
