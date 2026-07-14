interface PrivacyProps {
  navigate: (page: string) => void
}

export default function Privacy({ navigate }: PrivacyProps) {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `When you visit our website, create an account, or make a purchase, we may collect the following information:

• **Personal information**: Name, email address, phone number, and date of birth
• **Billing and shipping information**: Address, payment details (encrypted and processed securely)
• **Account information**: Purchase history, wishlist, preferences, and communications
• **Technical data**: IP address, browser type, cookies, and usage data collected through analytics tools

We collect this information when you register an account, place an order, subscribe to our newsletter, contact us, or browse our website.`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use your information to:

• Process and fulfil your orders
• Manage your account and provide customer support
• Send order confirmations, shipping updates, and return communications
• Send promotional emails (only with your explicit consent)
• Personalise your shopping experience and product recommendations
• Improve our website, products, and services
• Comply with legal obligations and prevent fraud`,
    },
    {
      title: "3. How We Share Your Information",
      content: `We do not sell your personal data. We may share your information with:

• **Payment processors**: To securely process your transactions (e.g., Stripe)
• **Delivery partners**: To fulfil and track your orders (e.g., DHL, DPD)
• **Marketing platforms**: Only with your consent, for targeted advertising
• **Analytics providers**: Aggregated data to understand website performance
• **Legal authorities**: When required by law or to protect our rights

All third-party partners are bound by data processing agreements and comply with GDPR.`,
    },
    {
      title: "4. Cookies",
      content: `We use cookies to enhance your browsing experience, remember your preferences, and analyse traffic patterns. Types of cookies we use:

• **Essential cookies**: Required for the website to function
• **Analytics cookies**: Help us understand how visitors use our site
• **Marketing cookies**: Used to show you relevant advertisements

You can manage cookie preferences at any time through your account settings or browser settings. Declining non-essential cookies will not affect your ability to use our site.`,
    },
    {
      title: "5. Your Rights",
      content: `Under the UK GDPR and EU GDPR, you have the right to:

• **Access**: Request a copy of the personal data we hold about you
• **Rectification**: Correct inaccurate or incomplete data
• **Erasure**: Request deletion of your data ("right to be forgotten")
• **Restriction**: Limit how we use your data in certain circumstances
• **Portability**: Receive your data in a structured, machine-readable format
• **Object**: Object to processing based on legitimate interests or for marketing

To exercise any of these rights, contact us at privacy@drapify.com. We will respond within 30 days.`,
    },
    {
      title: "6. Data Retention",
      content: `We retain your data for as long as necessary to provide our services and comply with legal obligations:

• Account data: For the duration of your account plus 3 years
• Transaction records: 7 years (UK tax law requirement)
• Marketing data: Until you unsubscribe
• Support communications: 3 years

When data is no longer needed, we securely delete or anonymise it.`,
    },
    {
      title: "7. Security",
      content: `We take data security seriously. All personal and payment data is encrypted using industry-standard TLS/SSL encryption. Payment processing is handled by PCI DSS-compliant providers. Access to personal data is strictly limited to authorised personnel.

Despite our best efforts, no internet transmission is 100% secure. If you suspect any misuse of your data, contact us immediately at security@drapify.com.`,
    },
    {
      title: "8. Contact & Complaints",
      content: `For any privacy-related questions, please contact:

**DRAPIFY Data Team**
Email: privacy@drapify.com
Address: 14 Kensington High Street, London W8 4PT, United Kingdom

If you are unhappy with how we handle your data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`,
    },
  ]

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-brand-gray tracking-widest font-semibold mb-4">LEGAL</p>
          <h1 className="text-5xl font-bold text-dark mb-4">Privacy Policy</h1>
          <p className="text-brand-gray">
            Last updated: <strong>1 January 2025</strong>
          </p>
          <p className="text-brand-gray mt-3 leading-relaxed">
            DRAPIFY Limited ("DRAPIFY", "we", "our") is committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights.
          </p>
        </div>

        {/* Quick Nav */}
        <div className="bg-white rounded-2xl border border-border p-5 mb-10">
          <p className="text-xs font-semibold text-brand-gray tracking-widest mb-3">CONTENTS</p>
          <div className="space-y-1.5">
            {sections.map(({ title }) => (
              <div key={title} className="text-sm text-brand-gray hover:text-primary cursor-pointer transition-colors">{title}</div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {sections.map(({ title, content }) => (
            <div key={title} className="bg-white rounded-3xl border border-border p-8">
              <h2 className="text-xl font-bold text-dark mb-4">{title}</h2>
              <div className="text-sm text-brand-gray leading-relaxed whitespace-pre-line">
                {content.split("**").map((part, i) =>
                  i % 2 === 1
                    ? <strong key={i} className="text-dark font-semibold">{part}</strong>
                    : part
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-brand-gray text-sm mb-4">Questions about your data?</p>
          <button
            onClick={() => navigate("contact")}
            className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Contact Our Privacy Team
          </button>
        </div>
      </div>
    </div>
  )
}
