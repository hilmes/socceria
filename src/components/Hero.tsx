export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Pitch-invading dog — looping background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://82kji4cadp9uioad.public.blob.vercel-storage.com/pitch-invading-dog.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Subtle warm gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Restaurant name — massive */}
        <h1
          className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#f5efe6] mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Socceria
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#c9a96e]/50" />
          <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
            Brooklyn
          </span>
          <div className="h-px w-12 bg-[#c9a96e]/50" />
        </div>

        {/* Tagline */}
        <p
          className="text-xl sm:text-2xl md:text-3xl text-[#c4956a] font-light tracking-wide mb-10"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Upscale Mexican Cantina
        </p>

        {/* Status + Hours */}
        <div className="space-y-3 mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-[#e8e0d8]/80 font-light">
            Open Tuesday through Sunday
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a5a5a]">
            Closed Mondays
          </p>
        </div>

        {/* Address */}
        <p className="text-sm text-[#a89888] tracking-wide">
          Brooklyn, New York
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c9a96e]/40" />
      </div>
    </section>
  );
}
