import { useState } from "react"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

interface LoginProps {
  navigate: (page: string) => void
}

export default function Login({ navigate }: LoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); navigate("home") }, 1200)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left - Image */}
      <div className="hidden lg:block relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=1100&fit=crop&auto=format"
          alt="Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="text-white/60 text-sm mb-2 tracking-widest">SUMMER 2025</p>
          <h2 className="text-3xl font-bold text-white mb-2">The Evening Edit</h2>
          <p className="text-white/70">Silk, organza, and the art of the perfect evening.</p>
        </div>
        {/* <button
          onClick={() => navigate("landing")}
          className="absolute top-8 left-8 text-xl font-bold tracking-[0.2em] text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          DRAPIFY
        </button> */}
      </div>

      {/* Right - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          {/* <button
            onClick={() => navigate("landing")}
            className="lg:hidden text-xl font-bold tracking-[0.2em] text-dark mb-10 block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            DRAPIFY
          </button> */}

          <div className="mb-10">
            <h1 className="text-3xl font-bold text-dark mb-2">Welcome back.</h1>
            <p className="text-brand-gray">Sign in to your account to continue.</p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {["Google", "Apple"].map((provider) => (
              <button
                key={provider}
                className="flex items-center justify-center gap-2 border border-border rounded-xl py-3 text-sm font-medium text-brand-text hover:bg-muted transition-colors"
              >
                {provider === "Google" ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.09 1.22-2.07 3.64.02 2.87 2.52 3.82 2.54 3.83zm-3.8-17.32c-1.58.06-3.41 1.06-4.51 2.41-.98 1.21-1.79 3.08-1.5 4.92 1.71.13 3.47-.9 4.52-2.25.98-1.28 1.68-3.12 1.49-5.08z"/>
                  </svg>
                )}
                {provider}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-brand-gray font-medium">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-brand-text">Password</label>
                <button type="button" className="text-xs text-primary font-medium hover:underline">Forgot password?</button>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3.5 pr-12 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray hover:text-primary transition-colors p-1"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded accent-primary" />
              <label htmlFor="remember" className="text-sm text-brand-gray">Keep me signed in</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-secondary disabled:opacity-60 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-brand-gray">
            No account yet?{" "}
            <button onClick={() => navigate("signup")} className="text-primary font-semibold hover:underline">
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
