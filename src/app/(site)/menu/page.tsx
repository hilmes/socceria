import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Socceria",
  description:
    "World-class Mexican cuisine from Taqueria Ramirez. Cantina-inspired bar program. Soccer. Tacos. Brooklyn.",
};

/* ── Design tokens (from the investor deck) ─────────────────────────── */
const c = {
  nearBlack: "#2C2824",
  terracotta: "#C75B3B",
  warmCream: "#F5F0E8",
  gold: "#D4A853",
  stone: "#a89888",
  muted: "#8a7a6a",
  bg: "#0a0a0a",
};

/* ── Menu data ──────────────────────────────────────────────────────── */

interface MenuItem {
  name: string;
  description?: string;
  highlight?: boolean;
}

interface MenuSection {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

const botanasSection: MenuSection[] = [
  {
    title: "Primera Ronda",
    subtitle: "First Half Snacks",
    items: [
      { name: "Cacahuates Enchilados", description: "Chile-lime peanuts, sal de gusano" },
      { name: "Chicharrón de Cerdo", description: "Puffed pork cracklings, salsa verde, lime" },
      { name: "Tostadas de Tinga", description: "Crispy tortilla, chipotle chicken tinga, lettuce, crema" },
      { name: "Verduras en Escabeche", description: "Pickled jalapeños, carrots, onion, cauliflower" },
      { name: "Esquites", description: "Charred corn, mayo, chile, lime, cotija" },
    ],
  },
  {
    title: "Segunda Ronda",
    subtitle: "Halftime & Beyond",
    items: [
      { name: "Guacamole de la Casa", description: "Tableside preparation, serrano, tomato, cilantro, lime, totopos", highlight: true },
      { name: "Queso Fundido", description: "Melted Oaxaca and Chihuahua cheese, chorizo, flour tortillas" },
      { name: "Ceviche del Día", description: "Market fish, citrus, habanero, red onion, tostadas" },
      { name: "Coctel de Camarón", description: "Gulf shrimp, tomato, avocado, lime, serrano, saltines" },
      { name: "Nachos de la Casa", description: "House chips, black beans, queso, jalapeño, pico, guacamole, crema" },
    ],
  },
];

const taqueriaSection: MenuSection[] = [
  {
    title: "Los Tacos",
    subtitle: "Nixtamal Tortillas · Two Per Order",
    items: [
      { name: "Al Pastor", description: "Chile-rubbed adobo pork, pineapple, onion, cilantro", highlight: true },
      { name: "Carnitas", description: "Slow-braised pork, copper pot rendered, salsa verde" },
      { name: "Birria", description: "Braised beef, consommé dip, onion, cilantro, lime" },
      { name: "Suadero", description: "Crispy beef brisket, salsa roja, onion, cilantro" },
      { name: "Pollo", description: "Adobo-rubbed chicken thigh, salsa macha, avocado" },
      { name: "Hongos", description: "Wild mushrooms, huitlacoche, epazote, salsa negra" },
    ],
  },
  {
    title: "Platos Fuertes",
    subtitle: "Full Plates",
    items: [
      { name: "Pollo a la Leña", description: "Half chicken, adobo glaze, grilled nopales, rice, beans", highlight: true },
      { name: "Mole Negro de Oaxaca", description: "Braised chicken, 30-ingredient mole, sesame, rice, handmade tortillas" },
      { name: "Enchiladas Suizas", description: "Three corn tortillas, roasted chicken, tomatillo cream, gratinéed cheese" },
      { name: "Costillas en Adobo", description: "Pork ribs, guajillo-ancho adobo, charred spring onion, rice, beans" },
      { name: "Pescado a la Talla", description: "Grilled whole fish, adobo rojo, pickled onion, herbs, lime" },
      { name: "Carnitas Michoacanas", description: "Slow-braised pork, copper pot rendered, salsa verde, tortillas, rice, beans" },
    ],
  },
  {
    title: "Los Especiales",
    subtitle: "Weekend Only",
    items: [
      { name: "Pozole Rojo", description: "Slow-simmered pork and hominy, guajillo broth, cabbage, radish, oregano, tostadas", highlight: true },
      { name: "Barbacoa Plate", description: "Slow-cooked lamb, consommé, handmade tortillas, onion, cilantro, salsa" },
      { name: "Tamales del Día", description: "Chef's daily tamale — ask your server" },
    ],
  },
];

const barSection: MenuSection[] = [
  {
    title: "Cócteles",
    subtitle: "Cocktails",
    items: [
      { name: "Margarita de la Casa", description: "Blanco tequila, fresh lime, agave, salt rim" },
      { name: "Paloma Fresca", description: "Reposado tequila, grapefruit, lime, soda, sal de gusano" },
      { name: "Mezcal Negroni", description: "Joven mezcal, Campari, sweet vermouth, orange" },
      { name: "Oaxaca Old Fashioned", description: "Mezcal, reposado tequila, agave, mole bitters" },
      { name: "Michelada", description: "Mexican lager, tomato, lime, hot sauce, Tajín rim" },
      { name: "Espresso Martini Mexicano", description: "Kahlúa, mezcal, espresso, vanilla" },
    ],
  },
  {
    title: "Vuelos",
    subtitle: "Flights",
    items: [
      { name: "Tequila Flight", description: "Three selections — blanco, reposado, añejo — served with sangrita" },
      { name: "Mezcal Flight", description: "Three artisanal mezcals — espadín, tobalá, and seasonal selection" },
    ],
  },
  {
    title: "Cerveza",
    subtitle: "Beer",
    items: [
      { name: "Mexican Lager", description: "Rotating selection" },
      { name: "Negra Modelo" },
      { name: "Craft Draft", description: "Local NYC and global favorites — rotating" },
      { name: "Michelada", description: "Build your own" },
    ],
  },
  {
    title: "Vino",
    subtitle: "Wine & Natural",
    items: [
      { name: "House White — glass" },
      { name: "House Red — glass" },
      { name: "Rosé — glass" },
      { name: "Natural Wine Selection", description: "Curated by Tania — ask your server" },
    ],
  },
];

const cafeSection: MenuSection[] = [
  {
    title: "El Café",
    subtitle: "Specialty Coffee",
    items: [
      { name: "Espresso" },
      { name: "Cortado" },
      { name: "Cappuccino" },
      { name: "Café de Olla", description: "Clay-pot brewed coffee, piloncillo, cinnamon" },
      { name: "Cold Brew" },
    ],
  },
  {
    title: "Sin Alcohol",
    subtitle: "Non-Alcoholic",
    items: [
      { name: "Agua Fresca del Día", description: "Rotating: horchata, jamaica, tamarindo" },
      { name: "Mexican Coke" },
      { name: "Limonada con Chía", description: "Fresh lime, chia seeds, agave" },
    ],
  },
];

/* ── Components ─────────────────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-4">
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4A853]/20 to-transparent" />
    </div>
  );
}

function EditorialBlock({
  label,
  title,
  quote,
  paragraphs,
  accolades,
}: {
  label: string;
  title: string;
  quote?: string;
  paragraphs: string[];
  accolades?: string[];
}) {
  return (
    <div className="max-w-3xl mx-auto text-center px-6">
      {/* Section label */}
      <p
        className="text-xs uppercase tracking-[0.35em] mb-4 font-dm-sans font-semibold"
        style={{ color: c.terracotta }}
      >
        {label}
      </p>
      {/* Title */}
      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-barlow-condensed font-black uppercase tracking-tight mb-8"
        style={{ color: c.warmCream }}
      >
        {title}
      </h2>
      {/* Pull quote */}
      {quote && (
        <blockquote className="mb-10">
          <p
            className="text-xl md:text-2xl italic leading-relaxed font-light"
            style={{ color: c.gold, fontFamily: "'Fraunces', Georgia, serif" }}
          >
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
      )}
      {/* Body paragraphs */}
      <div className="space-y-5">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base md:text-lg leading-relaxed font-dm-sans font-light"
            style={{ color: c.stone }}
          >
            {p}
          </p>
        ))}
      </div>
      {/* Accolades */}
      {accolades && (
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {accolades.map((a, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border rounded-full font-dm-sans font-semibold"
              style={{ color: c.gold, borderColor: `${c.gold}40` }}
            >
              {a}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <div className="mb-14">
      <div className="mb-6">
        <h3
          className="text-2xl md:text-3xl font-barlow-condensed font-bold uppercase tracking-wide"
          style={{ color: c.warmCream }}
        >
          {section.title}
        </h3>
        {section.subtitle && (
          <p
            className="text-xs uppercase tracking-[0.2em] mt-1 font-dm-sans font-semibold"
            style={{ color: c.terracotta }}
          >
            {section.subtitle}
          </p>
        )}
        <div className="h-px w-12 mt-4" style={{ backgroundColor: `${c.gold}30` }} />
      </div>

      <div className="space-y-4">
        {section.items.map((item, i) => (
          <div key={i} className="group">
            <span
              className="text-lg md:text-xl font-dm-sans font-medium"
              style={{ color: item.highlight ? c.gold : c.warmCream }}
            >
              {item.name}
            </span>
            {item.description && (
              <p
                className="text-sm mt-0.5 leading-relaxed max-w-lg font-dm-sans"
                style={{ color: c.muted }}
              >
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function MenuPage() {
  return (
    <div className="pt-16" style={{ backgroundColor: c.bg }}>
      {/* ─── Hero ─── */}
      <section className="py-24 md:py-36 px-6 text-center relative overflow-hidden">
        {/* Subtle warm gradient overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: `radial-gradient(ellipse at center, ${c.terracotta}, transparent 70%)`,
          }}
        />
        <div className="relative z-10">
          <p
            className="text-xs uppercase tracking-[0.4em] mb-5 font-dm-sans font-semibold"
            style={{ color: c.terracotta }}
          >
            Soccer · Tacos · Brooklyn
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-barlow-condensed font-black uppercase tracking-tight mb-6"
            style={{ color: c.warmCream }}
          >
            The Menu
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: `${c.gold}40` }} />
            <p
              className="text-xs uppercase tracking-[0.3em] font-dm-sans"
              style={{ color: c.gold }}
            >
              Taqueria Ramirez Kitchen
            </p>
            <div className="h-px w-12" style={{ backgroundColor: `${c.gold}40` }} />
          </div>
        </div>
      </section>

      {/* ─── Taqueria Ramirez Editorial ─── */}
      <section className="py-16 md:py-24">
        <EditorialBlock
          label="The Kitchen"
          title="Taqueria Ramirez"
          quote="One of the best taquerias not only in NYC, but on the entire planet."
          paragraphs={[
            "Anchored by husband and wife team Gio Cervantes and Tania Apolinair of Taqueria and Carnitas Ramirez. Since opening on a quiet street in Greenpoint three years ago, the restaurant group has become one of the most celebrated destinations for Mexico City–style tacos anywhere in the world.",
            "Known for their chile-rubbed al pastor and meats simmered for hours in a traditional chocicera before landing on perfectly cooked nixtamal tortillas. They've been named among the top restaurants in New York by the New York Times and Eater, and Gio was recently nominated again for a James Beard Award.",
            "Their presence elevates the food program from day one.",
          ]}
          accolades={[
            "James Beard Nominated",
            "NY Times Top Restaurant",
            "Eater Essential",
            "2-Star Review",
          ]}
        />
      </section>

      <SectionDivider />

      {/* ─── Botanas — The Cantina Strategy ─── */}
      <section className="py-16 md:py-24">
        <EditorialBlock
          label="Cultural Foundation"
          title="Botanas"
          quote="Walk in a stranger, leave a regular. That's the magic of a cantina — the food keeps coming, the drinks keep flowing, and the match is always on."
          paragraphs={[
            "Cantina food is a progression — and it matches the rhythm of a match perfectly. First half: peanuts, pickled vegetables, chicharrón, tostadas — quick bites that keep your eyes on the screen. By halftime, the table has graduated to guisados, seafood cocktails, tacos, and stews.",
            "Salt, fat, acid, and spice keep the energy going, regulate the drinks, and make ninety minutes feel like fifteen. Nobody's asking for the check at halftime.",
          ]}
        />
        <div className="max-w-3xl mx-auto mt-16 px-6">
          {botanasSection.map((section, i) => (
            <MenuSectionBlock key={i} section={section} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ─── Taqueria Ramirez Kitchen ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center px-6 mb-16">
          <p
            className="text-xs uppercase tracking-[0.35em] mb-4 font-dm-sans font-semibold"
            style={{ color: c.terracotta }}
          >
            James Beard–Nominated
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-barlow-condensed font-black uppercase tracking-tight mb-6"
            style={{ color: c.warmCream }}
          >
            From the Kitchen
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed font-dm-sans font-light max-w-2xl mx-auto"
            style={{ color: c.stone }}
          >
            World-class Mexican cuisine from a James Beard–nominated chef,
            authentic cantina-inspired bar model, and an immersive fan-first
            viewing environment. Chile-rubbed al pastor. Meats simmered for
            hours in a traditional chocicera. Perfectly cooked nixtamal tortillas.
          </p>
        </div>
        <div className="max-w-3xl mx-auto px-6">
          {taqueriaSection.map((section, i) => (
            <MenuSectionBlock key={i} section={section} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ─── Bar & Cafe Editorial + Menu ─── */}
      <section className="py-16 md:py-24">
        <EditorialBlock
          label="Beverage Program"
          title="The Bar"
          paragraphs={[
            "At the heart of Socceria is an accessible horseshoe bar anchoring the space. Screens integrated thoughtfully throughout the room create flexible viewing areas that support different social configurations depending on the match and crowd.",
            "The taps feature standout global favorites along local New York beers, complemented by a focused wine and cocktail program and strong low- and no-alcohol offerings.",
            "Behind the bar, staff bring both hospitality and footy knowledge to the experience. Anyone can be trained to make a drink, but the good stuff lies in the conversational expertise that connects fans and creates community. Bartenders are just as comfortable making the perfect margarita as they are discussing Arsenal's set piece supremacy.",
          ]}
        />
        <div className="max-w-3xl mx-auto mt-16 px-6">
          {barSection.map((section, i) => (
            <MenuSectionBlock key={i} section={section} />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ─── Cafe ─── */}
      <section className="py-16 md:py-24">
        <EditorialBlock
          label="Morning to Match"
          title="The Café"
          paragraphs={[
            "The day starts here. Specialty coffee worth showing up early for — before the 8am Premier League whistle, before the pregame ritual kicks in. Not an afterthought. A reason to come.",
            "Tania and Gio bring the same sourcing rigor to beans that they bring to mezcal and wine: relationships with growers, not distributors. The cafe program reflects their travels through Europe and the Americas — the kind of coffee that earns a neighborhood's loyalty.",
            "Morning coffee transitions seamlessly into afternoon matchday. One space, one team, continuous service — from first espresso to last call.",
          ]}
        />
        <div className="max-w-3xl mx-auto mt-16 px-6">
          {cafeSection.map((section, i) => (
            <MenuSectionBlock key={i} section={section} />
          ))}
        </div>
      </section>

      {/* ─── Footer Note ─── */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: `${c.gold}20` }} />
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-dm-sans"
              style={{ color: c.muted }}
            >
              46 Norman Ave · Greenpoint · Brooklyn
            </span>
            <div className="h-px w-8" style={{ backgroundColor: `${c.gold}20` }} />
          </div>
          <p
            className="text-xs uppercase tracking-[0.15em] leading-relaxed font-dm-sans"
            style={{ color: `${c.muted}80` }}
          >
            Please inform your server of any allergies or dietary restrictions.
            <br />A 20% gratuity is added to parties of 6 or more.
          </p>
        </div>
      </section>
    </div>
  );
}
