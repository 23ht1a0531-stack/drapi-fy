import { useState } from "react"
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react"

interface SignupProps {
  navigate: (page: string) => void
}

export default function Signup({ navigate }: SignupProps) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); navigate("home") }, 1200)
  }

  const passwordStrength = form.password.length > 10 ? "Strong" : form.password.length > 6 ? "Good" : form.password.length > 0 ? "Weak" : ""
  const strengthColor = passwordStrength === "Strong" ? "bg-green-500" : passwordStrength === "Good" ? "bg-amber-400" : "bg-red-400"
  const strengthWidth = passwordStrength === "Strong" ? "w-full" : passwordStrength === "Good" ? "w-2/3" : "w-1/3"

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left - Form */}
      <div className="flex items-center justify-center p-8 bg-white order-2 lg:order-1">
        <div className="w-full max-w-md">
          {/* <button
            onClick={() => navigate("landing")}
            className="lg:hidden text-xl font-bold tracking-[0.2em] text-dark mb-10 block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            DRAPIFY
          </button> */}

          <div className="mb-10">
            <h1 className="text-3xl font-bold text-dark mb-2">Create your account.</h1>
            <p className="text-brand-gray">Join the DRAPIFY circle today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">First Name</label>
                <input
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  placeholder="Isabelle"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">Last Name</label>
                <input
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  placeholder="Martin"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="At least 8 characters"
                  required
                  minLength={8}
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
              {form.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-brand-gray">Password strength</span>
                    <span className={`text-xs font-medium ₹{passwordStrength === "Strong" ? "text-green-600" : passwordStrength === "Good" ? "text-amber-500" : "text-red-500"}`}>{passwordStrength}</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ₹{strengthColor} ₹{strengthWidth}`} />
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="bg-muted rounded-2xl p-4 space-y-2.5">
              {["Free returns on every order", "Early access to new collections", "Exclusive member discounts"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-brand-gray">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ₹{agreed ? "bg-primary border-primary" : "border-border"}`}
              >
                {agreed && <Check size={12} className="text-white" />}
              </button>
              <label className="text-sm text-brand-gray leading-relaxed">
                I agree to the{" "}
                <button type="button" onClick={() => navigate("terms")} className="text-primary hover:underline">Terms & Conditions</button>
                {" "}and{" "}
                <button type="button" onClick={() => navigate("privacy")} className="text-primary hover:underline">Privacy Policy</button>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || !agreed}
              className="w-full bg-primary hover:bg-secondary disabled:opacity-60 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Create Account <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-brand-gray">
            Already have an account?{" "}
            <button onClick={() => navigate("login")} className="text-primary font-semibold hover:underline">
              Sign in
            </button>
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="hidden lg:block relative overflow-hidden order-1 lg:order-2">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&h=1100&fit=crop&auto=format"
          alt="Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="text-white/60 text-sm mb-2 tracking-widest">AUTUMN 2025</p>
          <h2 className="text-3xl font-bold text-white mb-2">The Autumn Archive</h2>
          <p className="text-white/70">Rich textures, deep tones — our most beloved edit.</p>
        </div>
        {/* <button
          onClick={() => navigate("landing")}
          className="absolute top-8 right-8 text-xl font-bold tracking-[0.2em] text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          DRAPIFY
        </button> */}
      </div>
    </div>
  )
}
