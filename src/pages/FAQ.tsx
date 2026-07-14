import { useState } from "react"
import { ChevronDown, Search, ArrowRight } from "lucide-react"

interface FAQProps {
  navigate: (page: string) => void
}

const faqData = [
  {
    category: "Orders & Shipping",
    items: [
      { q: "How long does delivery take?", a: "Standard delivery takes 3-5 business days. Express delivery is available for 1-2 business days. We offer free standard shipping on all orders over ₹250." },
      { q: "Can I track my order?", a: "Yes! Once your order ships, you'll receive a tracking link via email. You can also check your order status in your account under 'My Orders'." },
      { q: "Do you ship internationally?", a: "We ship to over 50 countries worldwide. International delivery times vary from 5-14 business days. Duties and taxes may apply based on your country's import regulations." },
      { q: "Can I change or cancel my order?", a: "Orders can be amended or cancelled within 1 hour of placement. After this, we begin processing for dispatch. Please contact us immediately at hello@drapify.com." },
    ],
  },
  {
    category: "Returns & Refunds",
    items: [
      { q: "What is your return policy?", a: "We offer free returns within 30 days of delivery. Items must be unworn, unwashed, and in their original packaging with all tags attached." },
      { q: "How do I initiate a return?", a: "Log in to your account, go to 'My Orders', find the relevant order and select 'Return Item'. We'll email you a prepaid return label within 24 hours." },
      { q: "How long do refunds take?", a: "Once we receive your return, we inspect it within 2-3 business days. Refunds are then processed to your original payment method and take 5-10 business days to appear." },
    ],
  },
  {
    category: "Products & Sizing",
    items: [
      { q: "How do I know which size to order?", a: "Each product page includes a detailed size guide with measurements in both cm and inches. If you're between sizes, we generally recommend sizing up for a more relaxed fit." },
      { q: "Are your materials ethically sourced?", a: "Yes. Every material we use is either GOTS certified (for natural fibres), OEKO-TEX certified (for performance fabrics), or verified through our own supply chain audits." },
      { q: "How should I care for my pieces?", a: "Each item comes with detailed care instructions on the label. Generally, we recommend dry cleaning for structured pieces and cold hand-washing for knitwear and silk." },
    ],
  },
  {
    category: "Account & Loyalty",
    items: [
      { q: "What is the DRAPIFY loyalty programme?", a: "Every purchase earns you points at a rate of 1 point per ₹1 spent. Points can be redeemed for store credit. Reach 5,000 points to unlock Platinum status and exclusive perks." },
      { q: "Can I shop as a guest?", a: "Yes. However, creating an account allows you to track orders, save a wishlist, and build loyalty points. Registration is free and takes under a minute." },
    ],
  },
]

export default function FAQ({ navigate }: FAQProps) {
  const [open, setOpen] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...faqData.map((c) => c.category)]

  const filtered = faqData
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          (activeCategory === "All" || section.category === activeCategory) &&
          (search === "" || item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase()))
      ),
    }))
    .filter((s) => s.items.length > 0)

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-brand-gray tracking-widest font-semibold mb-4">SUPPORT</p>
          <h1 className="text-5xl font-bold text-dark mb-4">Frequently Asked Questions</h1>
          <p className="text-brand-gray text-lg">Quick answers to common questions.</p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white focus:outline-none focus:border-primary text-sm shadow-sm"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ₹{activeCategory === cat ? "bg-dark text-white" : "bg-white border border-border text-brand-text hover:border-primary hover:text-primary"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {filtered.map((section) => (
            <div key={section.category}>
              {activeCategory === "All" && (
                <p className="text-xs text-brand-gray tracking-widest font-semibold mb-4 uppercase">{section.category}</p>
              )}
              <div className="space-y-2">
                {section.items.map((item) => {
                  const key = `₹{section.category}-₹{item.q}`
                  return (
                    <div
                      key={key}
                      className={`bg-white rounded-2xl border transition-all overflow-hidden ₹{open === key ? "border-primary shadow-sm" : "border-border"}`}
                    >
                      <button
                        onClick={() => setOpen(open === key ? null : key)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                      >
                        <span className={`font-semibold text-sm leading-snug pr-4 ₹{open === key ? "text-primary" : "text-dark"}`}>
                          {item.q}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`text-brand-gray flex-shrink-0 transition-transform ₹{open === key ? "rotate-180 text-primary" : ""}`}
                        />
                      </button>
                      {open === key && (
                        <div className="px-6 pb-5 text-sm text-brand-gray leading-relaxed border-t border-border pt-4">
                          {item.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-brand-gray mb-2 font-medium">No results found for &ldquo;{search}&rdquo;</p>
              <p className="text-sm text-brand-gray">Try a different search or contact our team directly.</p>
            </div>
          )}
        </div>

        {/* Still need help */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-dark mb-2">Still need help?</h2>
          <p className="text-brand-gray mb-6">Our team is always happy to assist. Reach out anytime.</p>
          <button
            onClick={() => navigate("contact")}
            className="bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Contact Support <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
