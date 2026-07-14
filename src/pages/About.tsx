import { ArrowRight } from "lucide-react"

interface AboutProps {
  navigate: (page: string) => void
}

export default function About({ navigate }: AboutProps) {
  const team = [
    { name: "Céline Moreau", role: "Creative Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&auto=format" },
    { name: "Marco Ferretti", role: "Head of Design", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&auto=format" },
    { name: "Anika Patel", role: "Head of Sourcing", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&auto=format" },
    { name: "James Thornton", role: "Head of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&auto=format" },
  ]

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=1000&fit=crop&auto=format"
            alt="About DRAPIFY"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-xs tracking-[0.4em] font-semibold mb-6">OUR STORY</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              Crafted for<br />
              the few who<br />
              <span className="text-blue-400">understand.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              DRAPIFY was founded in 2013 with a single conviction: that true luxury is defined not by price, but by the integrity of the craft behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-brand-gray tracking-widest font-semibold mb-4">OUR PHILOSOPHY</p>
            <h2 className="text-4xl font-bold text-dark mb-6 leading-tight">We believe less is always more.</h2>
            <div className="space-y-4 text-brand-gray leading-relaxed">
              <p>Every DRAPIFY piece begins with a question: will this outlast the season? If the answer is anything but yes, it doesn't make the cut. We design for longevity — in silhouette, in construction, and in material.</p>
              <p>Our ateliers are in Milan, Lisbon, and Kyoto. The craftspeople we work with are third-generation artisans who share our belief that speed is the enemy of quality.</p>
              <p>We limit each collection to exactly what's needed — no filler, no trend-chasing, no fast fashion compromises. Just the pieces you'll reach for again and again, for years.</p>
            </div>
            <button
              onClick={() => navigate("contact")}
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Talk to Us <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=500&fit=crop&auto=format" alt="Craft" className="rounded-2xl w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop&auto=format" alt="Design" className="rounded-2xl w-full object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: "#0F172A" }} className="text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-xs tracking-widest font-semibold mb-4">WHAT DRIVES US</p>
            <h2 className="text-4xl font-bold">Our Values</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Craft", icon: "✦", desc: "Every stitch, seam, and cut is deliberate. We work only with master craftspeople." },
              { title: "Sustainability", icon: "◈", desc: "OEKO-TEX certified, B Corp aligned. We trace every thread to its origin." },
              { title: "Longevity", icon: "◎", desc: "Pieces built to last a decade — and look better for it. No seasonal throwaway culture." },
              { title: "Transparency", icon: "◇", desc: "We publish our factory list, our margins, and our environmental impact. Honestly." },
            ].map(({ title, icon, desc }) => (
              <div key={title} className="text-center">
                <div className="text-3xl text-blue-400 mb-4 font-bold">{icon}</div>
                <h3 className="font-bold text-white text-xl mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-xs text-brand-gray tracking-widest font-semibold mb-4">THE PEOPLE BEHIND IT</p>
          <h2 className="text-4xl font-bold text-dark">Our Team</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="overflow-hidden rounded-3xl bg-muted aspect-[3/4] mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="font-bold text-dark">{member.name}</p>
              <p className="text-sm text-brand-gray">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs text-brand-gray tracking-widest font-semibold mb-4">OUR JOURNEY</p>
            <h2 className="text-4xl font-bold text-dark">A Decade of DRAPIFY</h2>
          </div>
          <div className="space-y-8">
            {[
              { year: "2013", event: "Founded in London with a 12-piece debut collection, sold exclusively via invitation." },
              { year: "2015", event: "Opened our first atelier partnership in Milan. Launched the Classic Collection." },
              { year: "2018", event: "Achieved B Corp certification. Became the first UK luxury brand to publish full supply chain." },
              { year: "2020", event: "Launched digital-first during COVID. Grew online community to 40,000 members." },
              { year: "2023", event: "Expanded to 6 permanent collections. Introduced the Atelier bespoke programme." },
              { year: "2025", event: "New website, new era. 48,000 clients worldwide. Still made by hand." },
            ].map(({ year, event }) => (
              <div key={year} className="flex gap-8 items-start">
                <div className="text-2xl font-bold text-primary w-16 flex-shrink-0">{year}</div>
                <div className="flex-1 bg-white rounded-2xl p-5 border border-border">
                  <p className="text-brand-gray text-sm leading-relaxed">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
