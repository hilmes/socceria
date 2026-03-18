import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Socceria",
  description:
    "Brunch, dinner, cocktails, and more at Socceria. Handmade Mexican cuisine in Brooklyn.",
};

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

const brunchSections: MenuSection[] = [
  {
    title: "Los Huevos",
    subtitle: "Eggs",
    items: [
      {
        name: "Huevos Rancheros",
        description:
          "Fried eggs, black bean purée, ranchera salsa, queso fresco, corn tortillas",
      },
      {
        name: "Huevos Divorciados",
        description:
          "Two eggs, salsa verde & salsa roja, refried beans, crema, avocado",
      },
      {
        name: "Chilaquiles Verdes",
        description:
          "Crispy tortilla chips, tomatillo salsa, two eggs, crema, onion, cilantro",
      },
      {
        name: "Machaca con Huevo",
        description:
          "Dried beef, scrambled eggs, peppers, onion, tomato, flour tortillas",
      },
    ],
  },
  {
    title: "Las Garnachas",
    subtitle: "Antojitos",
    items: [
      {
        name: "Tostada de Tinga",
        description: "Crispy tortilla, chipotle chicken tinga, lettuce, crema, queso",
      },
      {
        name: "Gorditas de Chicharrón",
        description: "Pressed masa cakes, braised pork skin, salsa verde, onion",
      },
      {
        name: "Sope de Frijol",
        description: "Thick masa base, refried black beans, queso fresco, salsa",
      },
      {
        name: "Quesadilla de Flor de Calabaza",
        description: "Squash blossom, Oaxaca cheese, epazote, handmade tortilla",
      },
      {
        name: "Huitlacoche Garnacha",
        description: "Corn truffle, Oaxaca cheese, fresh masa, salsa negra",
        highlight: true,
      },
    ],
  },
  {
    title: "Los Especiales",
    subtitle: "Weekend Specials",
    items: [
      {
        name: "Pozole Rojo",
        description:
          "Slow-simmered pork and hominy, guajillo broth, cabbage, radish, oregano, tostadas",
        highlight: true,
      },
      {
        name: "Enchiladas de Mole",
        description: "Three corn tortillas, chicken, mole negro, sesame, crema",
      },
      {
        name: "Barbacoa Plate",
        description:
          "Slow-cooked lamb, consommé, handmade tortillas, onion, cilantro, salsa",
      },
      {
        name: "Tamales del Día",
        description: "Chef's daily tamale — ask your server",
      },
    ],
  },
];

const dinnerSections: MenuSection[] = [
  {
    title: "Para Empezar",
    subtitle: "Appetizers",
    items: [
      {
        name: "Tacos al Pastor",
        description:
          "Adobo pork, pineapple, onion, cilantro — two per order",
      },
      {
        name: "Tacos de Birria",
        description: "Braised beef, consommé dip, onion, cilantro, lime",
      },
      {
        name: "Guacamole de la Casa",
        description:
          "Tableside preparation, serrano, tomato, cilantro, lime, totopos",
      },
      {
        name: "Queso Fundido",
        description:
          "Melted Oaxaca and Chihuahua cheese, chorizo, flour tortillas",
      },
      {
        name: "Ceviche del Día",
        description: "Market fish, citrus, habanero, red onion, tostadas",
      },
      {
        name: "Esquites",
        description: "Charred corn, mayo, chile, lime, cotija",
      },
    ],
  },
  {
    title: "Platos Fuertes",
    subtitle: "Full Meals",
    items: [
      {
        name: "Pollo a la Leña",
        description:
          "Half chicken, adobo glaze, grilled nopales, rice, beans",
        highlight: true,
      },
      {
        name: "Enchiladas Suizas",
        description:
          "Three corn tortillas, roasted chicken, tomatillo cream, gratinéed cheese, rice",
      },
      {
        name: "Mole Negro de Oaxaca",
        description:
          "Braised chicken, 30-ingredient mole, sesame, rice, handmade tortillas",
      },
      {
        name: "Pescado a la Talla",
        description:
          "Grilled whole fish, adobo rojo, pickled onion, herbs, lime",
      },
      {
        name: "Costillas en Adobo",
        description:
          "Pork ribs, guajillo-ancho adobo, charred spring onion, rice, beans",
      },
      {
        name: "Carnitas Michoacanas",
        description:
          "Slow-braised pork, copper pot rendered, salsa verde, handmade tortillas, rice, beans",
      },
    ],
  },
  {
    title: "Happy Hour",
    subtitle: "Tue–Fri, 4–6pm",
    items: [
      {
        name: "Nachos de la Casa",
        description:
          "House chips, black beans, queso, jalapeño, pico, guacamole, crema",
      },
      {
        name: "Flautas de Pollo",
        description: "Crispy rolled tacos, chicken, crema, salsa verde, lettuce",
      },
      {
        name: "Empanadas de Picadillo",
        description: "Fried turnovers, spiced beef, chipotle aioli",
      },
      {
        name: "Alitas en Chipotle",
        description: "Chipotle-glazed wings, blue cheese, celery",
      },
    ],
  },
];

const drinkSections: MenuSection[] = [
  {
    title: "Cócteles",
    subtitle: "Cocktails",
    items: [
      {
        name: "Margarita de la Casa",
        description: "Blanco tequila, fresh lime, agave, salt rim",
      },
      {
        name: "Mezcal Negroni",
        description: "Joven mezcal, Campari, sweet vermouth, orange",
      },
      {
        name: "Paloma Fresca",
        description: "Reposado tequila, grapefruit, lime, soda, sal de gusano",
      },
      {
        name: "Oaxaca Old Fashioned",
        description: "Mezcal, reposado tequila, agave, mole bitters",
      },
      {
        name: "Michelada",
        description: "Mexican lager, tomato, lime, hot sauce, Tajín rim",
      },
      {
        name: "Espresso Martini Mexicano",
        description: "Kahlúa, mezcal, espresso, vanilla",
      },
    ],
  },
  {
    title: "Vuelos",
    subtitle: "Flights",
    items: [
      {
        name: "Tequila Flight",
        description:
          "Three selections — blanco, reposado, añejo — served with sangrita",
      },
      {
        name: "Mezcal Flight",
        description:
          "Three artisanal mezcals — espadín, tobalá, and seasonal selection",
      },
    ],
  },
  {
    title: "Cerveza",
    subtitle: "Beer",
    items: [
      { name: "Mexican Lager" },
      { name: "Negra Modelo" },
      { name: "Craft Draft — rotating" },
      { name: "Michelada" },
    ],
  },
  {
    title: "Vino y Más",
    subtitle: "Wine & Spritz",
    items: [
      { name: "House White — glass" },
      { name: "House Red — glass" },
      { name: "Rosé — glass" },
      { name: "Sparkling — glass" },
      { name: "Reserve Selection — glass", description: "Ask your server" },
    ],
  },
  {
    title: "Sin Alcohol",
    subtitle: "Non-Alcoholic",
    items: [
      { name: "Agua Fresca del Día", description: "Rotating: horchata, jamaica, tamarindo" },
      { name: "Mexican Coke" },
      { name: "Café de Olla", description: "Clay-pot brewed coffee, piloncillo, cinnamon" },
      { name: "Espresso" },
      { name: "Cappuccino" },
      { name: "Cortado" },
    ],
  },
  {
    title: "Brunch Drinks",
    items: [
      { name: "Mimosa Carafe", description: "Full carafe, fresh-squeezed orange" },
      {
        name: "Bloody Maria",
        description: "Tequila, house tomato mix, lime, celery, Tajín",
      },
      { name: "Agua Fresca" },
    ],
  },
];

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h3
          className="text-2xl md:text-3xl text-[#f5efe6] tracking-tight"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {section.title}
        </h3>
        {section.subtitle && (
          <p className="text-[#c9a96e] text-sm uppercase tracking-[0.2em] mt-1">
            {section.subtitle}
          </p>
        )}
        <div className="h-px w-16 bg-[#c9a96e]/30 mt-4" />
      </div>

      <div className="space-y-5">
        {section.items.map((item, i) => (
          <div key={i} className="group">
            <div className="flex items-baseline">
              <span
                className={`text-lg md:text-xl font-medium ${
                  item.highlight ? "text-[#c9a96e]" : "text-[#e8e0d8]"
                }`}
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 500,
                }}
              >
                {item.name}
              </span>
            </div>
            {item.description && (
              <p className="text-[#8a7a6a] text-sm mt-1 leading-relaxed max-w-lg">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a] text-center">
        <h1
          className="text-5xl md:text-7xl text-[#f5efe6] tracking-tight mb-6"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          The Menu
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#c9a96e]/40" />
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.3em]">
            Wood-Fired Mexican Cuisine
          </p>
          <div className="h-px w-12 bg-[#c9a96e]/40" />
        </div>
      </section>

      {/* Brunch */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl text-[#f5efe6] tracking-tight mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Brunch
            </h2>
            <p className="text-[#a89888] text-sm uppercase tracking-[0.2em]">
              Tuesday – Sunday, 11am – 3pm
            </p>
          </div>
          {brunchSections.map((section, i) => (
            <MenuSectionBlock key={i} section={section} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent" />
      </div>

      {/* Dinner */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl text-[#f5efe6] tracking-tight mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Dinner
            </h2>
            <p className="text-[#a89888] text-sm uppercase tracking-[0.2em]">
              Tuesday – Sunday
            </p>
          </div>
          {dinnerSections.map((section, i) => (
            <MenuSectionBlock key={i} section={section} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent" />
      </div>

      {/* Drinks */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl text-[#f5efe6] tracking-tight mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Drinks
            </h2>
            <p className="text-[#a89888] text-sm uppercase tracking-[0.2em]">
              Cocktails, Wine, Beer & More
            </p>
          </div>
          {drinkSections.map((section, i) => (
            <MenuSectionBlock key={i} section={section} />
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#5a4a3a] text-xs uppercase tracking-[0.15em] leading-relaxed">
            Please inform your server of any allergies or dietary restrictions.
            <br />A 20% gratuity is added to parties of 6 or more.
          </p>
        </div>
      </section>
    </div>
  );
}
