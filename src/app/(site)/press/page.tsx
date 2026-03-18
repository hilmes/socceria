import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Accolades — Socceria",
  description:
    "Press coverage and accolades for Socceria, Brooklyn's Mexican cantina.",
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
    publication: "James Beard Foundation",
    headline: "Semifinalist — Outstanding Chef",
    excerpt:
      "Giovanni Cervantes, Carnitas Ramirez, New York, NY — recognized among the nation's most outstanding chefs.",
    year: "2026",
    url: "https://www.eater.com/jbfa/936395/james-beard-awards-2026-semifinalists-chefs-restaurants-jbfa",
  },
  {
    publication: "The New York Times",
    headline: "A Wildly Popular New York Taqueria Nails Its Sequel",
    excerpt:
      "What makes the tacos at Carnitas Ramírez so special is that they are, in a way, unremarkable. They follow a classic formula — a pliable tortilla, a deftly seasoned filling and a brightly stinging salsa. Many taquerias get two out of three right. Carnitas Ramírez nails them all.",
    year: "2024",
    url: "https://www.nytimes.com/2024/09/17/dining/carnitas-ramirez-restaurant-review.html",
  },
  {
    publication: "The New York Times",
    headline: "New York's 14 Best New Restaurants of 2024",
    excerpt:
      "Carnitas Ramírez earned a place among the best new restaurants to open in New York City in 2024.",
    year: "2024",
    url: "https://www.nytimes.com/2024/12/10/dining/best-2024-new-nyc-restaurants.html",
  },
  {
    publication: "Eater New York",
    headline: "2024 Eater Award Winner — Best Counter-Service Spot",
    excerpt:
      "Carnitas Ramirez is game-changing, with pork options so flavorful and so varied — many virtually unknown in restaurants here — that they almost catapult the place into the fine-dining realm.",
    year: "2024",
    url: "https://ny.eater.com/2024/12/3/24299755/eater-awards-winners-new-york-2024-restaurants-bars",
  },
  {
    publication: "Eater New York",
    headline: "Winning Over Brooklyn With Funky, Blowtorched Tacos",
    excerpt:
      "Taqueria Ramirez is simple: It serves tacos, easily some of the city's best. Just as a high-end omakase spot might only sell nigiri sushi, Cervantes offers a singular style of product, constructed with the skill, speed, and intuition of a transplant surgeon.",
    year: "2021",
    url: "https://ny.eater.com/2021/10/26/22744980/taqueria-ramirez-review-greenpoint-nyc-restaurants",
  },
  {
    publication: "New York Magazine / Grub Street",
    headline: "The Absolute Best New Restaurants of 2024",
    excerpt:
      "Taqueria Ramirez turns its attention to pork with a triumphant East Village sequel.",
    year: "2024",
    url: "https://www.grubstreet.com/article/best-new-restaurants-nyc-2024.html",
  },
  {
    publication: "The New York Times",
    headline: "Taqueria Ramírez Brings a Mexico City Specialty to Brooklyn",
    excerpt:
      "A cut of beef little known in the United States emerges from a meat hot tub in Greenpoint to make a smooth, tender taco.",
    year: "2022",
    url: "https://www.nytimes.com/2022/01/24/dining/restaurant-review-taqueria-ramirez.html",
  },
  {
    publication: "The Infatuation",
    headline: "Top 25 — The Best Restaurants in NYC",
    excerpt:
      "From the lines on the sidewalk, you'd think Taqueria Ramirez was selling coveted chunky sneakers or square footage to add to your bathroom. It's better: they're serving some of the city's best tacos.",
    year: "2024",
    url: "https://www.theinfatuation.com/new-york/guides/best-restaurants-nyc",
  },
  {
    publication: "Bon Appétit",
    headline: "NYC's Most Exciting Taqueria Uses an Entire Pig in Their Tacos",
    excerpt:
      "An inside look at how Giovanni Cervantes and Tania Apolinar built two of the most celebrated taquerias in New York City.",
    year: "2024",
    url: "https://www.youtube.com/watch?v=BpCWS3xU7eo",
  },
  {
    publication: "Forbes",
    headline:
      "Pork Tacos Reach New Levels at Carnitas Ramirez and Taqueria Ramirez",
    excerpt:
      "Two pork taquerias are showcasing a new taste for most New Yorkers, reminiscent of dining in Mexico City.",
    year: "2024",
    url: "https://www.forbes.com/sites/garystern/2024/10/08/pork-tacos-taken-to-new-levels-at-carnitas-ramirez-and-taqueria-ramirez-in-nyc/",
  },
  {
    publication: "Time Out New York",
    headline: "Carnitas Ramirez Is Slinging Some of the Best Pork Tacos in NYC",
    excerpt:
      "All pork everything is the name of the game at Carnitas Ramirez. Any order should include the Surtida.",
    year: "2025",
    url: "https://www.timeout.com/newyork/restaurants/carnitas-ramriez",
  },
  {
    publication: "Hell Gate NYC",
    headline:
      "NYC's Best Taqueria Ups Their Taco Game With the New Carnitas Ramirez",
    excerpt:
      "I've eaten at least six or seven different tacos so far at Carnitas Ramirez and loved every one. It's impossible to choose favorites. The offal is all terrific — my favorite new restaurant of the year.",
    year: "2025",
    url: "https://hellgatenyc.com/carnitas-ramirez-nyc-alphabet-city-review/",
  },
  {
    publication: "Eater New York",
    headline: "The 38 Best Restaurants in NYC",
    excerpt:
      "The Eater Award-winning Carnitas Ramirez slings corn tortillas full of Michoacán-styled porky options like chamorro, cachete, barriga, and cuero.",
    year: "2025",
    url: "https://ny.eater.com/maps/best-new-york-restaurants-38-map",
  },
];

export default function PressPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a] text-center">
        <h1
          className="text-5xl md:text-7xl text-[#f5efe6] tracking-tight mb-6"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
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
                    fontFamily: "'Fraunces', Georgia, serif",
                  }}
                >
                  {item.headline}
                </h2>

                <blockquote
                  className="text-[#a89888] text-lg md:text-xl leading-relaxed font-light pl-6 border-l border-[#c9a96e]/20"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
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
