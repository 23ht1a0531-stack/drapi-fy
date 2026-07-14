import { useState } from "react"
import { Bell, Lock, Globe, Palette, Trash2, ChevronRight, Check, Plus } from "lucide-react"

interface SettingsProps {
  navigate: (page: string) => void
}

export default function Settings({ navigate }: SettingsProps) {
  const [activeTab, setActiveTab] = useState("account")
  const [notifications, setNotifications] = useState({
    orders: true, promotions: false, newArrivals: true, wishlistAlerts: true, newsletters: false,
  })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const tabs = [
    { id: "account", label: "Account" },
    { id: "notifications", label: "Notifications" },
    { id: "addresses", label: "Addresses" },
    { id: "payment", label: "Payment" },
    { id: "privacy", label: "Privacy" },
  ]

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-dark">Settings</h1>
            <p className="text-brand-gray">Manage your account preferences</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tabs */}
          <div className="bg-white rounded-3xl border border-border p-3 h-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all ₹{
                  activeTab === tab.id ? "bg-primary text-white" : "text-brand-text hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeTab === "account" && (
              <>
                <div className="bg-white rounded-3xl border border-border p-6">
                  <h2 className="font-bold text-dark text-lg mb-6">Personal Details</h2>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {[
                      { label: "First Name", value: "Isabelle", type: "text" },
                      { label: "Last Name", value: "Martin", type: "text" },
                      { label: "Email Address", value: "isabelle.martin@gmail.com", type: "email" },
                      { label: "Phone", value: "+44 7700 900 123", type: "tel" },
                    ].map(({ label, value, type }) => (
                      <div key={label}>
                        <label className="block text-xs font-medium text-brand-gray mb-1.5">{label}</label>
                        <input
                          type={type}
                          defaultValue={value}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-medium text-brand-gray mb-1.5">Date of Birth</label>
                    <input type="date" defaultValue="1992-04-15" className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary text-sm max-w-xs" />
                  </div>
                  <button
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ₹{saved ? "bg-green-500 text-white" : "bg-primary hover:bg-secondary text-white"}`}
                  >
                    {saved ? <><Check size={14} /> Saved!</> : "Save Changes"}
                  </button>
                </div>

                <div className="bg-white rounded-3xl border border-border p-6">
                  <h2 className="font-bold text-dark text-lg mb-6">Change Password</h2>
                  <div className="space-y-4 max-w-md">
                    {["Current Password", "New Password", "Confirm New Password"].map((label) => (
                      <div key={label}>
                        <label className="block text-xs font-medium text-brand-gray mb-1.5">{label}</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:bg-white transition-all text-sm" />
                      </div>
                    ))}
                    <button className="bg-dark hover:bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2">
                      <Lock size={14} /> Update Password
                    </button>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-3xl p-6">
                  <h2 className="font-bold text-red-700 text-base mb-2">Danger Zone</h2>
                  <p className="text-sm text-red-600 mb-4">Once you delete your account, all your data will be permanently removed.</p>
                  <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                    <Trash2 size={14} /> Delete Account
                  </button>
                </div>
              </>
            )}

            {activeTab === "notifications" && (
              <div className="bg-white rounded-3xl border border-border p-6">
                <h2 className="font-bold text-dark text-lg mb-6">Notification Preferences</h2>
                <div className="space-y-5">
                  {[
                    { key: "orders", label: "Order Updates", sub: "Confirmations, shipping, and delivery updates" },
                    { key: "promotions", label: "Promotions & Offers", sub: "Exclusive discounts and seasonal sales" },
                    { key: "newArrivals", label: "New Arrivals", sub: "Be the first to know when new pieces drop" },
                    { key: "wishlistAlerts", label: "Wishlist Alerts", sub: "When saved items go on sale or run low" },
                    { key: "newsletters", label: "Newsletter", sub: "Monthly editorial and inspiration" },
                  ].map(({ key, label, sub }) => (
                    <div key={key} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                      <div>
                        <p className="font-semibold text-dark text-sm">{label}</p>
                        <p className="text-xs text-brand-gray mt-0.5">{sub}</p>
                      </div>
                      <button
                        onClick={() => setNotifications({ ...notifications, [key]: !notifications[key as keyof typeof notifications] })}
                        className={`w-11 h-6 rounded-full transition-colors relative ₹{notifications[key as keyof typeof notifications] ? "bg-primary" : "bg-border"}`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ₹{notifications[key as keyof typeof notifications] ? "translate-x-6" : "translate-x-1"}`} />
                      </button>
                    </div>
                  ))}
                </div>
                <button onClick={handleSave} className={`mt-4 flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ₹{saved ? "bg-green-500 text-white" : "bg-primary text-white hover:bg-secondary"}`}>
                  {saved ? <><Check size={14} /> Saved!</> : "Save Preferences"}
                </button>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="space-y-4">
                {[
                  { label: "Home", address: "14 Kensington High Street, London W8 4PT, United Kingdom", default: true },
                  { label: "Office", address: "32 Old Street, London EC1V 9AE, United Kingdom", default: false },
                ].map((addr) => (
                  <div key={addr.label} className="bg-white rounded-3xl border border-border p-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold text-dark">{addr.label}</p>
                        {addr.default && <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">Default</span>}
                      </div>
                      <p className="text-sm text-brand-gray leading-relaxed">{addr.address}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="text-sm text-primary font-medium hover:underline">Edit</button>
                      <button className="text-sm text-red-500 font-medium hover:underline">Delete</button>
                    </div>
                  </div>
                ))}
                <button className="w-full border-2 border-dashed border-border rounded-3xl p-5 text-sm font-medium text-brand-gray hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                  <Plus size={16} /> Add New Address
                </button>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="space-y-4">
                {[
                  { type: "Visa", last4: "4242", expiry: "12/27", default: true },
                  { type: "Mastercard", last4: "8888", expiry: "06/26", default: false },
                ].map((card) => (
                  <div key={card.last4} className="bg-white rounded-3xl border border-border p-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-[9px] font-bold text-white">{card.type.toUpperCase()}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm">•••• •••• •••• {card.last4}</p>
                        <p className="text-xs text-brand-gray">Expires {card.expiry}</p>
                      </div>
                      {card.default && <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">Default</span>}
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm text-brand-gray hover:text-primary font-medium">Edit</button>
                      <button className="text-sm text-red-500 font-medium">Remove</button>
                    </div>
                  </div>
                ))}
                <button className="w-full border-2 border-dashed border-border rounded-3xl p-5 text-sm font-medium text-brand-gray hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                  <Plus size={16} /> Add Payment Method
                </button>
              </div>
            )}

            {activeTab === "privacy" && (
              <div className="bg-white rounded-3xl border border-border p-6">
                <h2 className="font-bold text-dark text-lg mb-6">Privacy Settings</h2>
                <div className="space-y-5">
                  {[
                    { label: "Allow cookies for analytics", sub: "Help us improve your shopping experience" },
                    { label: "Personalised recommendations", sub: "See products tailored to your style" },
                    { label: "Share data with partners", sub: "For targeted advertisements across platforms" },
                    { label: "Public profile", sub: "Allow other members to see your profile" },
                  ].map(({ label, sub }) => (
                    <div key={label} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                      <div>
                        <p className="font-semibold text-dark text-sm">{label}</p>
                        <p className="text-xs text-brand-gray mt-0.5">{sub}</p>
                      </div>
                      <button
                        className="w-11 h-6 rounded-full bg-primary relative"
                      >
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 translate-x-6 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => navigate("privacy")} className="text-sm font-semibold text-primary hover:underline">Privacy Policy</button>
                  <span className="text-border">|</span>
                  <button className="text-sm font-semibold text-red-500 hover:underline">Download My Data</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
