import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a] relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-[#c9a96e]/30" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
              Our Story
            </span>
            <div className="h-px w-16 bg-[#c9a96e]/30" />
          </div>

          <p
            className="text-2xl md:text-3xl leading-relaxed text-[#e8e0d8] font-light mb-8"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Socceria is a Mexican cantina rooted in tradition and
            elevated by craft. Every dish is built from scratch — masa ground
            daily, salsas charred over open flame, proteins cooked low and slow
            over mesquite and oak.
          </p>
          <p className="text-[#a89888] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            From huitlacoche garnachas at brunch to pollo a la leña
            at dinner, we honor the depth of Mexican culinary tradition while
            keeping it intimate, seasonal, and unmistakably Brooklyn.
          </p>
        </div>
      </section>

      {/* Divider Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </section>

      {/* Hours Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl text-[#f5efe6] mb-12 tracking-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Hours
          </h2>

          <div className="space-y-4 text-lg">
            <div className="flex items-center justify-center gap-6">
              <span className="text-[#8a5a5a] uppercase tracking-[0.15em] text-sm w-40 text-right">
                Monday
              </span>
              <span className="text-[#8a5a5a] font-medium">CLOSED</span>
            </div>
            <div className="flex items-center justify-center gap-6">
              <span className="text-[#a89888] uppercase tracking-[0.15em] text-sm w-40 text-right">
                Tue – Thu
              </span>
              <span className="text-[#e8e0d8]">11am – 10pm</span>
            </div>
            <div className="flex items-center justify-center gap-6">
              <span className="text-[#a89888] uppercase tracking-[0.15em] text-sm w-40 text-right">
                Fri – Sat
              </span>
              <span className="text-[#e8e0d8]">11am – 11pm</span>
            </div>
            <div className="flex items-center justify-center gap-6">
              <span className="text-[#a89888] uppercase tracking-[0.15em] text-sm w-40 text-right">
                Sunday
              </span>
              <span className="text-[#e8e0d8]">11am – 9pm</span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-[#c9a96e] uppercase tracking-[0.2em] text-xs mb-2">
              Brunch
            </p>
            <p className="text-[#a89888]">Tuesday – Sunday, 11am – 3pm</p>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-[#c9a96e] uppercase tracking-[0.2em] text-xs mb-2">
              Happy Hour
            </p>
            <p className="text-[#a89888]">
              Tuesday – Friday, 4pm – 6pm
            </p>
          </div>
        </div>
      </section>

      {/* Menu CTA */}
      <section className="py-20 px-6 bg-[#0f0808] text-center">
        <Link
          href="/menu"
          className="inline-block border border-[#c9a96e]/40 hover:border-[#c9a96e] text-[#c9a96e] hover:text-[#f5efe6] px-12 py-4 uppercase tracking-[0.25em] text-sm font-light transition-all duration-300"
        >
          View the Menu
        </Link>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 bg-[#0a0a0a] text-center">
        <a
          href="https://instagram.com/socceria.nyc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a89888] hover:text-[#f5efe6] text-sm uppercase tracking-[0.2em] font-light transition-colors"
        >
          Follow @socceria.nyc on Instagram
        </a>
      </section>
    </>
  );
}
