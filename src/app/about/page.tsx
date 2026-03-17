import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Socceria",
  description:
    "The story behind Socceria — an upscale Mexican cantina in Brooklyn, New York.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl text-[#f5efe6] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            About
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-[#c9a96e]/40" />
            <span className="text-[#c9a96e] text-xs uppercase tracking-[0.3em]">
              Our Story
            </span>
            <div className="h-px w-12 bg-[#c9a96e]/40" />
          </div>

          <div className="space-y-8">
            <p
              className="text-2xl md:text-3xl text-[#e8e0d8] font-light leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Socceria was born from a belief that Mexican cuisine deserves the
              same reverence given to any of the world&apos;s great culinary
              traditions — without losing its soul in the process.
            </p>

            <p className="text-[#a89888] text-base md:text-lg leading-relaxed">
              Our kitchen runs on fire. Mesquite and oak fuel our wood-burning
              oven and grill, imparting the deep, smoky character that defines
              our cooking. Masa is ground fresh each morning. Chiles are toasted
              and ground in-house. Salsas are charred over open flame. Nothing
              comes from a jar.
            </p>

            <p className="text-[#a89888] text-base md:text-lg leading-relaxed">
              The menu draws from the full breadth of Mexican regional cooking —
              Oaxacan moles, Michoacán carnitas, Yucatecan citrus, and the
              street-food traditions of Mexico City — reinterpreted with the
              precision and seasonal awareness of fine dining, served in an
              atmosphere that feels like home.
            </p>

            <p className="text-[#a89888] text-base md:text-lg leading-relaxed">
              We are a neighborhood restaurant first. A place where a couple can
              share pozole and a carafe of mimosas on a Sunday afternoon, or
              where a table of eight can work through the entire mole negro and a
              mezcal flight on a Friday night. Every visit should feel like the
              first time and the hundredth time at once.
            </p>
          </div>
        </div>
      </section>

      {/* Values / Approach */}
      <section className="py-16 md:py-24 px-6 bg-[#0f0808]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="text-center">
              <h3
                className="text-xl text-[#f5efe6] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Wood-Fired
              </h3>
              <p className="text-[#8a7a6a] text-sm leading-relaxed">
                Mesquite and oak. Open flame. Every protein, every char, every
                layer of smoke is earned — never simulated.
              </p>
            </div>
            <div className="text-center">
              <h3
                className="text-xl text-[#f5efe6] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                From Scratch
              </h3>
              <p className="text-[#8a7a6a] text-sm leading-relaxed">
                Masa ground daily. Moles built over days. Salsas charred to
                order. The work is in the details — and you taste it.
              </p>
            </div>
            <div className="text-center">
              <h3
                className="text-xl text-[#f5efe6] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Brooklyn Soul
              </h3>
              <p className="text-[#8a7a6a] text-sm leading-relaxed">
                Rooted in tradition, shaped by our neighborhood. Seasonal,
                intentional, and always welcoming.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
