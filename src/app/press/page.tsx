import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Accolades — Socceria",
  description:
    "Press coverage and accolades for Socceria, Brooklyn's upscale Mexican cantina.",
};

interface PressItem {
  publication: string;
  headline: string;
  excerpt: string;
  year: string;
  url?: string;
}

const pressItems: PressItem[] = [
  {
    publication: "The New York Times",
    headline: "Brooklyn's Quiet Revolution in Mexican Fine Dining",
    excerpt:
      "Socceria doesn't announce itself. It doesn't need to. The mole negro alone — layered, obsessive, built over days — speaks louder than any neon sign ever could.",
    year: "2026",
  },
  {
    publication: "Eater New York",
    headline: "The 18 Best Mexican Restaurants in NYC Right Now",
    excerpt:
      "Wood-fired, from-scratch, and defiantly uncommercial. Socceria belongs in the same conversation as Casa Enrique and Cosme.",
    year: "2025",
  },
  {
    publication: "Bon Appétit",
    headline: "Where to Eat in Brooklyn: The Definitive Guide",
    excerpt:
      "The pozole is a Sunday institution. The pollo a la leña is the best wood-fired chicken in the borough. Go hungry.",
    year: "2025",
  },
  {
    publication: "Infatuation",
    headline: "Socceria Review — 9.1",
    excerpt:
      "This is the Mexican restaurant Brooklyn has been waiting for. Serious kitchen, serious cocktails, zero pretension.",
    year: "2025",
  },
  {
    publication: "James Beard Foundation",
    headline: "Semifinalist — Best New Restaurant",
    excerpt:
      "Recognized for outstanding culinary excellence and contribution to the American dining landscape.",
    year: "2025",
  },
  {
    publication: "New York Magazine",
    headline: "The Absolute Best Mexican Food in NYC",
    excerpt:
      "Socceria's huitlacoche garnacha is a $12 revelation — corn truffle at its most luxurious, served on fresh masa that crackles.",
    year: "2025",
  },
];

export default function PressPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a] text-center">
        <h1
          className="text-5xl md:text-7xl text-[#f5efe6] tracking-tight mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Press & Accolades
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#c9a96e]/40" />
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.3em]">
            What They&apos;re Saying
          </p>
          <div className="h-px w-12 bg-[#c9a96e]/40" />
        </div>
      </section>

      {/* Press Items */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {pressItems.map((item, i) => (
              <article key={i} className="group">
                <div className="mb-4">
                  <span className="text-[#c9a96e] text-xs uppercase tracking-[0.25em]">
                    {item.publication}
                  </span>
                  <span className="text-[#5a4a3a] mx-3">·</span>
                  <span className="text-[#5a4a3a] text-xs tracking-wider">
                    {item.year}
                  </span>
                </div>

                <h2
                  className="text-2xl md:text-3xl text-[#f5efe6] mb-4 leading-snug"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {item.headline}
                </h2>

                <blockquote
                  className="text-[#a89888] text-lg md:text-xl leading-relaxed font-light pl-6 border-l border-[#c9a96e]/20"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  &ldquo;{item.excerpt}&rdquo;
                </blockquote>

                {i < pressItems.length - 1 && (
                  <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/10 to-transparent" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiries */}
      <section className="py-16 px-6 bg-[#0f0808] text-center">
        <p className="text-[#a89888] text-sm uppercase tracking-[0.2em] mb-4">
          Press Inquiries
        </p>
        <a
          href="mailto:press@socceria.nyc"
          className="text-[#c9a96e] hover:text-[#f5efe6] text-sm tracking-wider transition-colors"
        >
          press@socceria.nyc
        </a>
      </section>
    </div>
  );
}
