import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Socceria",
  description:
    "Brunch, dinner, cocktails, and more at Socceria. Wood-fired Mexican cuisine in Brooklyn.",
};

interface MenuItem {
  name: string;
  description?: string;
  price: string;
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
        price: "16",
      },
      {
        name: "Huevos Divorciados",
        description:
          "Two eggs, salsa verde & salsa roja, refried beans, crema, avocado",
        price: "17",
      },
      {
        name: "Chilaquiles Verdes",
        description:
          "Crispy tortilla chips, tomatillo salsa, two eggs, crema, onion, cilantro",
        price: "18",
      },
      {
        name: "Machaca con Huevo",
        description:
          "Dried beef, scrambled eggs, peppers, onion, tomato, flour tortillas",
        price: "21",
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
        price: "8",
      },
      {
        name: "Gorditas de Chicharrón",
        description: "Pressed masa cakes, braised pork skin, salsa verde, onion",
        price: "9",
      },
      {
        name: "Sope de Frijol",
        description: "Thick masa base, refried black beans, queso fresco, salsa",
        price: "9",
      },
      {
        name: "Quesadilla de Flor de Calabaza",
        description: "Squash blossom, Oaxaca cheese, epazote, handmade tortilla",
        price: "10",
      },
      {
        name: "Huitlacoche Garnacha",
        description: "Corn truffle, Oaxaca cheese, fresh masa, salsa negra",
        price: "12",
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
        price: "24",
        highlight: true,
      },
      {
        name: "Enchiladas de Mole",
        description: "Three corn tortillas, chicken, mole negro, sesame, crema",
        price: "19",
      },
      {
        name: "Barbacoa Plate",
        description:
          "Slow-cooked lamb, consommé, handmade tortillas, onion, cilantro, salsa",
        price: "22",
      },
      {
        name: "Tamales del Día",
        description: "Chef's daily tamale — ask your server",
        price: "17",
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
        price: "14",
      },
      {
        name: "Tacos de Birria",
        description: "Braised beef, consommé dip, onion, cilantro, lime",
        price: "16",
      },
      {
        name: "Guacamole de la Casa",
        description:
          "Tableside preparation, serrano, tomato, cilantro, lime, totopos",
        price: "14",
      },
      {
        name: "Queso Fundido",
        description:
          "Melted Oaxaca and Chihuahua cheese, chorizo, flour tortillas",
        price: "16",
      },
      {
        name: "Ceviche del Día",
        description: "Market fish, citrus, habanero, red onion, tostadas",
        price: "18",
      },
      {
        name: "Esquites",
        description: "Charred corn, mayo, chile, lime, cotija",
        price: "9",
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
          "Half chicken, wood-fired, adobo glaze, grilled nopales, rice, beans",
        price: "34",
        highlight: true,
      },
      {
        name: "Enchiladas Suizas",
        description:
          "Three corn tortillas, roasted chicken, tomatillo cream, gratinéed cheese, rice",
        price: "26",
      },
      {
        name: "Mole Negro de Oaxaca",
        description:
          "Braised chicken, 30-ingredient mole, sesame, rice, handmade tortillas",
        price: "30",
      },
      {
        name: "Pescado a la Talla",
        description:
          "Grilled whole fish, adobo rojo, pickled onion, herbs, lime",
        price: "32",
      },
      {
        name: "Costillas en Adobo",
        description:
          "Pork ribs, guajillo-ancho adobo, charred spring onion, rice, beans",
        price: "30",
      },
      {
        name: "Carnitas Michoacanas",
        description:
          "Slow-braised pork, copper pot rendered, salsa verde, handmade tortillas, rice, beans",
        price: "28",
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
        price: "14",
      },
      {
        name: "Flautas de Pollo",
        description: "Crispy rolled tacos, chicken, crema, salsa verde, lettuce",
        price: "15",
      },
      {
        name: "Empanadas de Picadillo",
        description: "Fried turnovers, spiced beef, chipotle aioli",
        price: "14",
      },
      {
        name: "Alitas en Chipotle",
        description: "Chipotle-glazed wings, blue cheese, celery",
        price: "18",
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
        price: "17",
      },
      {
        name: "Mezcal Negroni",
        description: "Joven mezcal, Campari, sweet vermouth, orange",
        price: "18",
      },
      {
        name: "Paloma Fresca",
        description: "Reposado tequila, grapefruit, lime, soda, sal de gusano",
        price: "16",
      },
      {
        name: "Oaxaca Old Fashioned",
        description: "Mezcal, reposado tequila, agave, mole bitters",
        price: "19",
      },
      {
        name: "Michelada",
        description: "Mexican lager, tomato, lime, hot sauce, Tajín rim",
        price: "15",
      },
      {
        name: "Espresso Martini Mexicano",
        description: "Kahlúa, mezcal, espresso, vanilla",
        price: "19",
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
        price: "30",
      },
      {
        name: "Mezcal Flight",
        description:
          "Three artisanal mezcals — espadín, tobalá, and seasonal selection",
        price: "34",
      },
    ],
  },
  {
    title: "Cerveza",
    subtitle: "Beer",
    items: [
      { name: "Mexican Lager", price: "8" },
      { name: "Negra Modelo", price: "8" },
      { name: "Craft Draft — rotating", price: "10" },
      { name: "Michelada", price: "12" },
    ],
  },
  {
    title: "Vino y Más",
    subtitle: "Wine & Spritz",
    items: [
      { name: "House White — glass", price: "15" },
      { name: "House Red — glass", price: "15" },
      { name: "Rosé — glass", price: "16" },
      { name: "Sparkling — glass", price: "18" },
      { name: "Reserve Selection — glass", description: "Ask your server", price: "28–56" },
    ],
  },
  {
    title: "Sin Alcohol",
    subtitle: "Non-Alcoholic",
    items: [
      { name: "Agua Fresca del Día", description: "Rotating: horchata, jamaica, tamarindo", price: "5" },
      { name: "Mexican Coke", price: "5" },
      { name: "Café de Olla", description: "Clay-pot brewed coffee, piloncillo, cinnamon", price: "6" },
      { name: "Espresso", price: "5" },
      { name: "Cappuccino", price: "7" },
      { name: "Cortado", price: "6" },
    ],
  },
  {
    title: "Brunch Drinks",
    items: [
      { name: "Mimosa Carafe", description: "Full carafe, fresh-squeezed orange", price: "52" },
      {
        name: "Bloody Maria",
        description: "Tequila, house tomato mix, lime, celery, Tajín",
        price: "16",
      },
      { name: "Agua Fresca", price: "8" },
    ],
  },
];

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h3
          className="text-2xl md:text-3xl text-[#f5efe6] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 500,
                }}
              >
                {item.name}
              </span>
              <span className="price-dots" />
              <span className="text-[#a89888] text-base tabular-nums">
                {item.price.includes("–") ? item.price : item.price}
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
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
            Prices subject to change. Please inform your server of any allergies
            or dietary restrictions.
            <br />A 20% gratuity is added to parties of 6 or more.
          </p>
        </div>
      </section>
    </div>
  );
}
