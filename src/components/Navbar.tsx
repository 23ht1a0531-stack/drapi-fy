import { useState } from "react"
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown } from "lucide-react"

interface NavbarProps {
  currentPage: string
  navigate: (page: string) => void
  cartCount?: number
  wishlistCount?: number
}

export default function Navbar({ currentPage, navigate, cartCount = 0, wishlistCount = 0 }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [shopHover, setShopHover] = useState(false)

  const navLinks = [
    { label: "New In", page: "home" },
    { label: "Collections", page: "collections" },
    { label: "Shop", page: "products", hasDropdown: true },
    { label: "About", page: "about" },
  ]

  const shopCategories = ["Outerwear", "Dresses", "Trousers", "Knitwear", "Accessories", "Footwear"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div style={{ backgroundColor: "#0F172A" }} className="text-white text-center py-2.5 text-xs tracking-widest font-medium">
        COMPLIMENTARY SHIPPING ON ORDERS OVER ₹250 · NEW COLLECTION NOW LIVE
      </div>

      {/* Main Nav */}
      <nav className="glass border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => navigate("landing")}
              className="text-xl font-bold tracking-[0.2em] text-dark hover:text-primary transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              DRAPIFY
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setShopHover(true)}
                  onMouseLeave={() => link.hasDropdown && setShopHover(false)}
                >
                  <button
                    onClick={() => navigate(link.page)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors tracking-wide ₹{
                      currentPage === link.page
                        ? "text-primary"
                        : "text-brand-text hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} />}
                  </button>

                  {/* Dropdown */}
                  {link.hasDropdown && shopHover && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-2xl shadow-xl border border-border p-6 w-56 grid grid-cols-1 gap-1">
                      {shopCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => { navigate("products"); setShopHover(false) }}
                          className="text-left px-3 py-2 text-sm text-brand-gray hover:text-primary hover:bg-muted rounded-lg transition-colors"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-xl hover:bg-muted transition-colors text-brand-text hover:text-primary"
              >
                <Search size={18} />
              </button>

              {/* Wishlist */}
              <button
                onClick={() => navigate("wishlist")}
                className="p-2 rounded-xl hover:bg-muted transition-colors text-brand-text hover:text-primary relative"
              >
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => navigate("cart")}
                className="p-2 rounded-xl hover:bg-muted transition-colors text-brand-text hover:text-primary relative"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Profile */}
              <button
                onClick={() => navigate("profile")}
                className="p-2 rounded-xl hover:bg-muted transition-colors text-brand-text hover:text-primary"
              >
                <User size={18} />
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors ml-1"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar Expanded */}
          {searchOpen && (
            <div className="pb-4">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for pieces, collections, styles..."
                  className="w-full pl-10 pr-4 py-3 bg-muted rounded-xl text-sm border border-border focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { navigate(link.page); setMenuOpen(false) }}
                className="block w-full text-left text-base font-medium text-brand-text hover:text-primary py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border flex gap-4">
              <button onClick={() => { navigate("login"); setMenuOpen(false) }} className="text-sm text-brand-gray hover:text-primary">Sign In</button>
              <span className="text-border">|</span>
              <button onClick={() => { navigate("signup"); setMenuOpen(false) }} className="text-sm text-brand-gray hover:text-primary">Create Account</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
