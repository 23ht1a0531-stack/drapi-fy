import { useState } from "react"
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react"

interface ContactProps {
  navigate: (page: string) => void
}

export default function Contact({ navigate }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", subject: "General Enquiry", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-brand-gray tracking-widest font-semibold mb-4">GET IN TOUCH</p>
          <h1 className="text-5xl font-bold text-dark mb-4">We'd love to hear from you.</h1>
          <p className="text-brand-gray text-lg max-w-md mx-auto">Whether it's a styling question or a return request, we're here.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                sub: "hello@drapify.com",
                desc: "We respond within 24 hours, 7 days a week.",
              },
              {
                icon: Phone,
                title: "Call Us",
                sub: "+44 (0) 20 7123 4567",
                desc: "Monday–Friday, 9am–6pm GMT.",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                sub: "14 Kensington High St, London W8 4PT",
                desc: "By appointment only. Contact us to arrange.",
              },
              {
                icon: Clock,
                title: "Opening Hours",
                sub: "Mon–Fri: 9am–6pm",
                desc: "Sat: 10am–4pm · Sun: Closed",
              },
            ].map(({ icon: Icon, title, sub, desc }) => (
              <div key={title} className="bg-white rounded-3xl border border-border p-6 flex gap-4 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-dark text-sm mb-0.5">{title}</p>
                  <p className="font-semibold text-primary text-sm">{sub}</p>
                  <p className="text-xs text-brand-gray mt-1">{desc}</p>
                </div>
              </div>
            ))}

            {/* FAQ Link */}
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-5">
              <p className="font-bold text-dark mb-1">Looking for quick answers?</p>
              <p className="text-sm text-brand-gray mb-4">Check our FAQ for instant help with common queries.</p>
              <button onClick={() => navigate("faq")} className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Visit FAQ <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-border p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Send size={28} className="text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-2">Message sent!</h2>
                  <p className="text-brand-gray">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-dark mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-brand-gray mb-1.5">Your Name</label>
                        <input
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Isabelle Martin"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-brand-gray mb-1.5">Email Address</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-brand-gray mb-1.5">Subject</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary text-sm"
                      >
                        {["General Enquiry", "Order & Delivery", "Returns & Refunds", "Styling Advice", "Press & Partnerships", "Wholesale", "Other"].map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-brand-gray mb-1.5">Your Message</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us how we can help..."
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-secondary disabled:opacity-60 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
