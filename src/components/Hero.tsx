export default function Hero() {
  return (
    <section className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-red-950 opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-48 text-center">
        <p className="text-red-400 uppercase tracking-widest text-sm font-semibold mb-4">
          Authentic Italian Cuisine
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Where Every Meal<br />
          <span className="text-red-500">Tells a Story</span>
        </h1>
        <p className="text-stone-300 text-xl max-w-2xl mx-auto mb-10">
          Handcrafted pasta, wood-fired oven, the finest seasonal ingredients —
          brought together in the heart of the neighborhood.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/menu"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Explore the Menu
          </a>
          <a
            href="/contact"
            className="border border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
