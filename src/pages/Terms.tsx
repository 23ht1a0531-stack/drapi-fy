interface TermsProps {
  navigate: (page: string) => void
}

export default function Terms({ navigate }: TermsProps) {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using the DRAPIFY website (drapify.com) or placing an order, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.

We reserve the right to update these terms at any time. Continued use of our website following any changes constitutes your acceptance of the revised terms.`,
    },
    {
      title: "2. Our Products",
      content: `All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time.

Product images are for illustrative purposes. While we strive for accuracy, colours may vary slightly depending on your screen settings. Dimensions and measurements are approximate.

We take reasonable steps to ensure all product descriptions are accurate. However, errors may occasionally occur. If we discover a material error in a product description, we will contact you before processing your order.`,
    },
    {
      title: "3. Pricing & Payment",
      content: `All prices are displayed in USD and include applicable taxes where required. Prices may change at any time without notice, but changes will not affect orders already confirmed.

We accept major credit and debit cards, PayPal, and Apple Pay. Payment is taken at the point of order. By providing payment details, you confirm you are authorised to use the chosen payment method.

If a payment cannot be processed, we will notify you and cancel the order. We will not charge you until an order is confirmed.`,
    },
    {
      title: "4. Orders & Contract",
      content: `Placing an order constitutes an offer to purchase. A contract is formed only when we send you an order confirmation email. We reserve the right to refuse any order at our discretion.

Order confirmations are sent within 24 hours of purchase. If you have not received confirmation, please check your spam folder or contact us.

DRAPIFY reserves the right to cancel orders in the event of pricing errors, fraud detection, or product unavailability. We will notify you promptly and issue a full refund.`,
    },
    {
      title: "5. Delivery",
      content: `Delivery timescales are estimates and not guaranteed. We are not liable for delays caused by third-party carriers, customs, or events beyond our control.

Risk passes to you upon delivery. Title to goods passes to you upon full payment.

For international orders, you are responsible for any applicable import duties, taxes, and customs fees. These are not included in our prices.`,
    },
    {
      title: "6. Returns & Refunds",
      content: `You have the right to cancel and return any order within 30 days of delivery for any reason, provided items are unworn, unwashed, and in their original condition with all tags attached.

To initiate a return, log in to your account or contact hello@drapify.com. We will provide a prepaid return label.

Refunds are processed within 5-10 business days of receiving the returned item and will be credited to your original payment method.

Items purchased in our sale may be returned for exchange or store credit only, not monetary refund, unless faulty.`,
    },
    {
      title: "7. Intellectual Property",
      content: `All content on this website — including text, images, logos, product names, and design — is the intellectual property of DRAPIFY Limited and protected by copyright law.

You may not reproduce, distribute, or commercially exploit any content without our prior written consent. Personal, non-commercial use is permitted.

Feedback and suggestions you provide us may be used to improve our products and services without compensation.`,
    },
    {
      title: "8. Limitation of Liability",
      content: `To the maximum extent permitted by law, DRAPIFY's liability is limited to the value of the goods or services purchased. We are not liable for:

• Indirect, incidental, or consequential loss
• Loss of profits, data, or business opportunity
• Losses arising from events beyond our reasonable control

Nothing in these terms excludes liability for death or personal injury caused by our negligence, or for fraudulent misrepresentation.`,
    },
    {
      title: "9. Governing Law",
      content: `These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.

If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force.`,
    },
  ]

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-brand-gray tracking-widest font-semibold mb-4">LEGAL</p>
          <h1 className="text-5xl font-bold text-dark mb-4">Terms & Conditions</h1>
          <p className="text-brand-gray">
            Last updated: <strong>1 January 2025</strong>
          </p>
          <p className="text-brand-gray mt-3 leading-relaxed">
            Please read these Terms & Conditions carefully before using the DRAPIFY website or placing an order. These terms govern your relationship with DRAPIFY Limited (company no. 09876543, registered in England and Wales).
          </p>
        </div>

        <div className="space-y-6">
          {sections.map(({ title, content }) => (
            <div key={title} className="bg-white rounded-3xl border border-border p-8">
              <h2 className="text-xl font-bold text-dark mb-4">{title}</h2>
              <p className="text-sm text-brand-gray leading-relaxed whitespace-pre-line">{content}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-brand-gray text-sm mb-4">Questions about our terms?</p>
          <button
            onClick={() => navigate("contact")}
            className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Contact Our Legal Team
          </button>
        </div>
      </div>
    </div>
  )
}
