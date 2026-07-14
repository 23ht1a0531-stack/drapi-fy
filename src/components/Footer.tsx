import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface FooterProps {
  navigate: (page: string) => void
}

export default function Footer({ navigate }: FooterProps) {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <footer style={{ backgroundColor: "#0F172A" }} className="text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-widest text-blue-400 mb-3 font-medium">THE DRAPIFY EDIT</p>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Dressed by desire,<br />
              <span className="text-blue-400">delivered to you.</span>
            </h3>
          </div>
          <div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Join our inner circle for early access to new collections, private events, and stories from our ateliers.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-3 text-blue-400 font-medium">
                <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">✓</div>
                Welcome to the edit. Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary px-5 py-3 rounded-xl text-white font-medium text-sm transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  Subscribe <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1">
          <div className="text-xl font-bold tracking-[0.2em] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            DRAPIFY
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Premium fashion, consciously made. Crafted for those who understand that true luxury is effortless.
          </p>
          <div className="flex gap-3">
            {["IG", "𝕏", "YT"].map((label) => (
              <button key={label} className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-colors text-xs font-bold text-white">
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <p className="text-xs tracking-widest text-white/40 mb-5 font-semibold">SHOP</p>
          {["New In", "Collections", "Outerwear", "Dresses", "Accessories", "Sale"].map((item) => (
            <button key={item} onClick={() => navigate("products")} className="block text-sm text-white/60 hover:text-white mb-3 transition-colors text-left">
              {item}
            </button>
          ))}
        </div>

        {/* Company */}
        <div>
          <p className="text-xs tracking-widest text-white/40 mb-5 font-semibold">COMPANY</p>
          {[
            { label: "About", page: "about" },
            { label: "Careers", page: "about" },
            { label: "Sustainability", page: "about" },
            { label: "Press", page: "about" },
            { label: "Contact", page: "contact" },
          ].map((item) => (
            <button key={item.label} onClick={() => navigate(item.page)} className="block text-sm text-white/60 hover:text-white mb-3 transition-colors text-left">
              {item.label}
            </button>
          ))}
        </div>

        {/* Help */}
        <div>
          <p className="text-xs tracking-widest text-white/40 mb-5 font-semibold">HELP</p>
          {[
            { label: "FAQ", page: "faq" },
            { label: "Shipping", page: "faq" },
            { label: "Returns", page: "faq" },
            { label: "Size Guide", page: "faq" },
            { label: "Orders", page: "orders" },
          ].map((item) => (
            <button key={item.label} onClick={() => navigate(item.page)} className="block text-sm text-white/60 hover:text-white mb-3 transition-colors text-left">
              {item.label}
            </button>
          ))}
        </div>

        {/* Legal */}
        <div>
          <p className="text-xs tracking-widest text-white/40 mb-5 font-semibold">LEGAL</p>
          {[
            { label: "Privacy Policy", page: "privacy" },
            { label: "Terms & Conditions", page: "terms" },
            { label: "Cookie Policy", page: "privacy" },
            { label: "Accessibility", page: "privacy" },
          ].map((item) => (
            <button key={item.label} onClick={() => navigate(item.page)} className="block text-sm text-white/60 hover:text-white mb-3 transition-colors text-left">
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2025 DRAPIFY. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs">Made with care, shipped with love.</span>
            <div className="flex gap-2">
              {["VISA", "MC", "AMEX", "PAYPAL"].map((card) => (
                <span key={card} className="text-[10px] font-bold text-white/30 bg-white/10 px-2 py-1 rounded">{card}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
