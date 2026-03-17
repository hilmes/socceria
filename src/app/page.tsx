import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Section Placeholder */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-stone-800 mb-4">Our Story</h2>
        <p className="text-stone-500 max-w-xl mx-auto text-lg">
          Fresh ingredients. Traditional recipes. Modern soul.
        </p>
      </section>

      {/* Menu Teaser Placeholder */}
      <section className="py-20 px-6 bg-stone-50 text-center">
        <h2 className="text-3xl font-bold text-stone-800 mb-4">The Menu</h2>
        <p className="text-stone-500 max-w-xl mx-auto text-lg mb-8">
          Handmade pasta, wood-fired pizza, and seasonal Italian classics.
        </p>
        <a
          href="/menu"
          className="inline-block bg-red-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors"
        >
          View Full Menu
        </a>
      </section>

      {/* Reserve Placeholder */}
      <section className="py-20 px-6 bg-red-700 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Reserve a Table</h2>
        <p className="text-red-200 max-w-xl mx-auto text-lg mb-8">
          Join us for an unforgettable evening. Reservations recommended.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
        >
          Book Now
        </a>
      </section>
    </>
  );
}
