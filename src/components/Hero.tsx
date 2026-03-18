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
        {/* Logo — front and center */}
        <div className="flex justify-center mb-8">
          <img
            src="/socceria-logo-white.svg"
            alt="Socceria"
            className="w-72 sm:w-96 md:w-[480px] h-auto"
          />
        </div>

        {/* Address */}
        <p className="text-base sm:text-lg text-[#e8e0d8]/90 tracking-[0.15em] uppercase font-light mb-3">
          46 Norman Ave · Greenpoint · Brooklyn
        </p>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#c9a96e]/50" />
          <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
            Open Tue – Sun
          </span>
          <div className="h-px w-12 bg-[#c9a96e]/50" />
        </div>

        {/* Closed Mondays */}
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a5a5a]">
          Closed Mondays
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c9a96e]/40" />
      </div>
    </section>
  );
}
