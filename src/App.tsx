import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Collections from "./pages/Collections"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderSuccess from "./pages/OrderSuccess"
import Orders from "./pages/Orders"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import About from "./pages/About"
import Contact from "./pages/Contact"
import FAQ from "./pages/FAQ"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import NotFound from "./pages/NotFound"

// Pages that don't show navbar/footer
const BARE_PAGES = ["login", "signup"]

// Pages that don't show footer
const NO_FOOTER_PAGES = ["checkout", "order-success"]

// Toast notification
function Toast({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 3000)
    return () => clearTimeout(t)
  }, [onDismiss])

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-dark text-white px-5 py-3.5 rounded-2xl shadow-2xl text-sm font-medium flex items-center gap-3 animate-pulse">
      <span className="text-green-400">✓</span>
      {message}
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState<string>("login")
  const [productId, setProductId] = useState<number | null>(null)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [wishlistItems, setWishlistItems] = useState<number[]>([])
  const [toast, setToast] = useState<string | null>(null)

  const navigate = (newPage: string, id?: number) => {
    setPage(newPage)
    if (id !== undefined) setProductId(id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const showToast = (msg: string) => {
    setToast(msg)
  }

  const addToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: (i.qty || 1) + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
    showToast(`₹{product.name} added to bag`)
  }

  const addToWishlist = (product: any) => {
    setWishlistItems((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed from wishlist`)
        return prev.filter((id) => id !== product.id)
      }
      showToast(`₹{product.name} saved to wishlist`)
      return [...prev, product.id]
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== productId))
  }

  const updateQty = (productId: number, qty: number) => {
    setCartItems((prev) => prev.map((i) => i.id === productId ? { ...i, qty } : i))
  }

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((prev) => prev.filter((id) => id !== productId))
  }

  const isBare = BARE_PAGES.includes(page)
  const noFooter = NO_FOOTER_PAGES.includes(page)

  const renderPage = () => {
    switch (page) {
      case "landing": return <Landing navigate={navigate} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />
      case "login": return <Login navigate={navigate} />
      case "signup": return <Signup navigate={navigate} />
      case "home": return <Home navigate={navigate} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />
      case "collections": return <Collections navigate={navigate} />
      case "products": return <Products navigate={navigate} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />
      case "product-detail": return <ProductDetail productId={productId || 1} navigate={navigate} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />
      case "wishlist": return <Wishlist navigate={navigate} onAddToCart={addToCart} wishlistItems={wishlistItems} onRemoveFromWishlist={removeFromWishlist} />
      case "cart": return <Cart navigate={navigate} cartItems={cartItems} onUpdateQty={updateQty} onRemoveFromCart={removeFromCart} />
      case "checkout": return <Checkout navigate={navigate} cartItems={cartItems} />
      case "order-success": return <OrderSuccess navigate={navigate} />
      case "orders": return <Orders navigate={navigate} />
      case "profile": return <Profile navigate={navigate} />
      case "settings": return <Settings navigate={navigate} />
      case "about": return <About navigate={navigate} />
      case "contact": return <Contact navigate={navigate} />
      case "faq": return <FAQ navigate={navigate} />
      case "privacy": return <Privacy navigate={navigate} />
      case "terms": return <Terms navigate={navigate} />
      default: return <NotFound navigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg" style={{ fontFamily: "'Inter', sans-serif" }}>
      {!isBare && (
        <Navbar
          currentPage={page}
          navigate={navigate}
          cartCount={cartItems.reduce((s, i) => s + (i.qty || 1), 0)}
          wishlistCount={wishlistItems.length}
        />
      )}

      <main>
        {renderPage()}
      </main>

      {!isBare && !noFooter && (
        <Footer navigate={navigate} />
      )}

      {toast && (
        <Toast message={toast} onDismiss={() => setToast(null)} />
      )}
    </div>
  )
}
