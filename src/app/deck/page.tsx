"use client";

import { useEffect, useState } from "react";

// ============================================
// SOCCERIA INVESTOR DECK
// Design system: Barlow Condensed / DM Sans
// Warm editorial aesthetic from TopStar deck
// ============================================

// ── Design Tokens (matching topstar deck exactly) ───────────

const colors = {
  nearBlack: "#2C2824",
  darkWarmGray: "#3A3530",
  mediumWarmGray: "#7A756F",
  lightWarmGray: "#B5B0AA",
  terracotta: "#C75B3B",
  sageFill: "rgba(255,255,255,0.22)",
  sageBorder: "rgba(0,0,0,0.10)",
  cardBorder: "#6B6560",
  rowDivider: "#C5C0BA",
  watermark: "#C8C3BC",
  bgLight: "#D8D3CC",
  bgGradientFrom: "#E0DBD4",
  bgGradientTo: "#D0CBC4",
  barDefault: "#4A4540",
  warmCream: "#F5F0E8",
  gold: "#D4A853",
} as const;

// ── Shared Components ───────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-barlow-condensed uppercase"
      style={{
        fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
        fontWeight: 800,
        color: colors.nearBlack,
        letterSpacing: "0.02em",
        lineHeight: 1.1,
      }}
    >
      {children}
    </h2>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-barlow-condensed uppercase text-sm mb-2"
      style={{
        letterSpacing: "0.15em",
        color: colors.mediumWarmGray,
        fontWeight: 700,
      }}
    >
      {children}
    </p>
  );
}

function SagePanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-full flex flex-col ${className}`}
      style={{
        backgroundColor: colors.sageFill,
        boxShadow: "-3px 3px 8px rgba(0,0,0,0.10)",
        padding: "clamp(1rem, 3vw, 1.5rem)",
      }}
    >
      {children}
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="py-4 pl-6 my-8"
      style={{ borderLeft: `3px solid ${colors.gold}` }}
    >
      <p
        className="font-dm-sans italic text-2xl leading-relaxed"
        style={{ color: colors.nearBlack }}
      >
        {children}
      </p>
    </div>
  );
}

function DataRow({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div
      className="flex items-baseline justify-between py-3"
      style={{ borderBottom: `1px solid ${colors.rowDivider}` }}
    >
      <span
        className="font-dm-sans text-base"
        style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
      >
        {label}
      </span>
      <div className="text-right">
        <span
          className="font-dm-sans text-2xl"
          style={{ color: colors.darkWarmGray, fontWeight: 600 }}
        >
          {value}
        </span>
        {sub && (
          <span
            className="block font-dm-sans text-sm mt-0.5"
            style={{ color: colors.lightWarmGray }}
          >
            {sub}
          </span>
        )}
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <span
        className="mt-2 w-2 h-2 shrink-0"
        style={{ backgroundColor: colors.terracotta, borderRadius: "50%" }}
      />
      <p
        className="font-dm-sans text-base"
        style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
      >
        {children}
      </p>
    </div>
  );
}

function TerracottaDivider() {
  return (
    <div
      style={{ width: 30, height: 2, backgroundColor: colors.terracotta }}
      className="my-6"
    />
  );
}

function SlideDivider() {
  return (
    <div
      style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
      className="my-16"
    />
  );
}

// ── Countdown Hook ──────────────────────────────────────────

function useDaysUntilWorldCup() {
  const WC_KICKOFF = new Date("2026-06-11T00:00:00-04:00");
  const calc = () =>
    Math.max(0, Math.ceil((WC_KICKOFF.getTime() - Date.now()) / 86_400_000));
  const [days, setDays] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setDays(calc), 60_000);
    return () => clearInterval(id);
  }, []);
  return days;
}

// ── Page Component ──────────────────────────────────────────

export default function DeckPage() {
  const daysUntil = useDaysUntilWorldCup();

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${colors.bgGradientFrom}, ${colors.bgGradientTo})`,
        minHeight: "100vh",
      }}
    >
      {/* ═══════════════════════════════════════════════════════
          COVER SLIDE
          ═══════════════════════════════════════════════════════ */}
      <section
        className="flex flex-col items-start justify-center relative"
        style={{ minHeight: "100dvh", overflow: "hidden" }}
      >
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(251,248,244,0.92) 0%, rgba(251,248,244,0.75) 50%, rgba(251,248,244,0.30) 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${colors.bgGradientFrom}ee, ${colors.bgGradientTo}cc)`,
          }}
        />

        <div
          className="relative z-10"
          style={{
            padding: "clamp(2rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem)",
            maxWidth: "56rem",
          }}
        >
          <p
            className="font-dm-sans text-xs uppercase mb-8"
            style={{
              letterSpacing: "0.3em",
              color: colors.mediumWarmGray,
              fontWeight: 300,
            }}
          >
            Confidential
          </p>

          <div
            className="mb-6"
            style={{ width: 30, height: 2, backgroundColor: colors.terracotta }}
          />

          <div className="mb-6 max-w-2xl space-y-3">
            <p
              className="font-dm-sans italic text-xl sm:text-3xl leading-snug"
              style={{ color: colors.nearBlack }}
            >
              New York is the ultimate soccer city.
            </p>
            <p
              className="font-dm-sans italic text-xl sm:text-3xl leading-snug"
              style={{ color: colors.nearBlack }}
            >
              {daysUntil} days from now it gets even bigger with the 2026 FIFA
              World Cup.
            </p>
            <p
              className="font-dm-sans italic text-xl sm:text-3xl leading-snug"
              style={{ color: colors.nearBlack }}
            >
              After the final whistle, all the bars and cafes go back to normal.
            </p>
            <p
              className="font-dm-sans italic text-xl sm:text-3xl leading-snug"
              style={{ color: colors.nearBlack }}
            >
              But we&apos;re here to stay.
            </p>
          </div>

          {/* Socceria wordmark */}
          <div className="mb-10">
            <h1
              className="font-barlow-condensed uppercase"
              style={{
                fontSize: "clamp(3rem, 12vw, 8rem)",
                fontWeight: 900,
                color: colors.nearBlack,
                letterSpacing: "-0.02em",
                lineHeight: 0.9,
              }}
            >
              Socceria
            </h1>
            <p
              className="font-barlow-condensed uppercase mt-1"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.8rem)",
                fontWeight: 700,
                color: colors.terracotta,
                letterSpacing: "0.15em",
              }}
            >
              Ramirez
            </p>
          </div>

          <p
            className="font-dm-sans text-base mb-1"
            style={{ color: colors.terracotta, fontWeight: 400 }}
          >
            46 Norman Ave · Greenpoint · Opening May 2026
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE OPPORTUNITY
          ═══════════════════════════════════════════════════════ */}
      <section
        className="max-w-4xl mx-auto px-6 pt-12 pb-20"
        style={{ position: "relative" }}
      >
        <SectionTitle>The Opportunity</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 items-start">
          <div>
            <p
              className="font-dm-sans text-xl leading-relaxed mb-6"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              World-class Mexican cuisine from a James Beard–nominated chef,
              authentic cantina-inspired bar model, and an immersive fan-first
              viewing environment.
            </p>
            <div
              style={{
                width: "100%",
                height: 1,
                background: colors.rowDivider,
                margin: "1.25rem 0",
              }}
            />
            <p
              className="font-dm-sans text-xl leading-relaxed"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              <strong
                style={{
                  fontWeight: 800,
                  color: colors.nearBlack,
                  textTransform: "uppercase",
                }}
              >
                Socceria
              </strong>{" "}
              Ideally located in Greenpoint, Brooklyn, a neighborhood
              experiencing dynamic growth and increased foot traffic, Socceria
              offers investors a scalable model that captures high-frequency,
              all-day revenue from a passionate, diverse, and inclusive audience.
            </p>
          </div>
          <div>
            <p
              className="font-dm-sans text-xl leading-relaxed"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              Programming spanning men&apos;s and women&apos;s leagues globally,
              expert-driven hospitality, and a design that balances intimacy with
              large-scale events, Socceria is poised to become the definitive
              home for soccer in New York City — timed perfectly to capitalize on
              the city&apos;s once-in-a-lifetime 2026 World Cup moment.
            </p>
          </div>
        </div>

        {/* Concept cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {[
            {
              title: "All-Day Soccer",
              body: "Morning European leagues → afternoon Champions League → evening MLS / Liga MX / NWSL / Brazil / Argentina. Continuous daily demand.",
            },
            {
              title: "Taqueria Ramirez",
              body: "James Beard–nominated. The culinary anchor from day one.",
            },
            {
              title: "Purpose-Built AV",
              body: '20+ screens, 85" centerpiece, zoned surround. Built for match day, not bolted on.',
            },
            {
              title: "The Space",
              body: "3,500 sqft corner space — 100 seats — 20+ ft bar. Built by Matthew Maddy (Public Records, Lilia, Nura, Oxomoco).",
            },
          ].map((card) => (
            <SagePanel key={card.title}>
              <h3
                className="font-barlow-condensed uppercase text-base mb-2"
                style={{
                  fontWeight: 700,
                  color: colors.nearBlack,
                  letterSpacing: "0.02em",
                }}
              >
                {card.title}
              </h3>
              <p
                className="font-dm-sans text-base"
                style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
              >
                {card.body}
              </p>
            </SagePanel>
          ))}
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          THE CONCEPT
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionTitle>The Concept</SectionTitle>

        <p
          className="font-dm-sans text-xl mb-10 mt-3"
          style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
        >
          Soccer is watched every day — morning Premier League, afternoon
          Champions League, evening MLS. The fans are here. The venues
          aren&apos;t.{" "}
          <strong style={{ fontWeight: 700, color: colors.nearBlack }}>
            Socceria
          </strong>{" "}
          is the fix: airy, light-filled, all-ages. A place built for the match,
          not bolted around it.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <SagePanel>
              <h3
                className="font-barlow-condensed uppercase text-base mb-2"
                style={{
                  fontWeight: 700,
                  color: colors.nearBlack,
                  letterSpacing: "0.02em",
                }}
              >
                All-Day Soccer
              </h3>
              <p
                className="font-dm-sans text-base"
                style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
              >
                Morning European leagues → afternoon Champions League → evening
                MLS / Liga MX / NWSL / Brazil / Argentina. Continuous daily
                demand.
              </p>
            </SagePanel>
            <SagePanel>
              <h3
                className="font-barlow-condensed uppercase text-base mb-2"
                style={{
                  fontWeight: 700,
                  color: colors.nearBlack,
                  letterSpacing: "0.02em",
                }}
              >
                Taqueria Ramirez
              </h3>
              <p
                className="font-dm-sans text-base"
                style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
              >
                James Beard–nominated. 27% food cost.
              </p>
            </SagePanel>
            <SagePanel>
              <h3
                className="font-barlow-condensed uppercase text-base mb-2"
                style={{
                  fontWeight: 700,
                  color: colors.nearBlack,
                  letterSpacing: "0.02em",
                }}
              >
                Purpose-Built AV
              </h3>
              <p
                className="font-dm-sans text-base"
                style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
              >
                20+ screens, 85&quot; centerpiece, zoned surround. Built for
                match day, not bolted on.
              </p>
            </SagePanel>

            <div
              style={{
                backgroundColor: colors.sageFill,
                boxShadow: "-3px 3px 8px rgba(0,0,0,0.10)",
                padding: "clamp(1rem, 3vw, 1.5rem)",
              }}
            >
              <p
                className="font-dm-sans text-base leading-relaxed"
                style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
              >
                <span
                  className="font-dm-sans"
                  style={{ fontWeight: 600, color: colors.darkWarmGray }}
                >
                  3,500 sqft corner space
                </span>{" "}
                — 100 seats — 20+ ft bar — Built by{" "}
                <span
                  className="font-dm-sans"
                  style={{ fontWeight: 600, color: colors.darkWarmGray }}
                >
                  Matthew Maddy
                </span>{" "}
                (2× James Beard nominated — Public Records, Lilia, Nura,
                Oxomoco).
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <p
              className="font-dm-sans text-base leading-relaxed"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              The concept sits at the intersection of three converging trends:
              soccer&apos;s explosive growth in the U.S. market, Brooklyn&apos;s
              insatiable appetite for experiential dining, and the
              once-in-a-generation catalyst of the 2026 FIFA World Cup arriving
              at MetLife Stadium — 12 miles from our front door.
            </p>
          </div>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          THE CANTINA
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionLabel>Beverage & Atmosphere</SectionLabel>
        <SectionTitle>The Cantina</SectionTitle>

        <PullQuote>
          Not a sports bar with tacos. A cantina with soccer.
        </PullQuote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p
              className="font-dm-sans text-base leading-relaxed mb-4"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              The bar program is rooted in Mexico&apos;s cantina tradition —
              mezcal flights, house-infused tepache, and a curated natural wine
              list that pairs with charred salsas and slow-cooked moles. The
              beverage mix targets 35% of total revenue.
            </p>
            <p
              className="font-dm-sans text-base leading-relaxed mb-6"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              Every detail — from the hand-thrown ceramic cups to the playlist
              that shifts from morning cumbia to evening deep house — is designed
              to keep people seated longer and spending more.
            </p>
          </div>

          <div>
            <h3
              className="font-barlow-condensed uppercase text-sm mb-4"
              style={{
                letterSpacing: "0.15em",
                color: colors.mediumWarmGray,
                fontWeight: 700,
              }}
            >
              Economic Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "35% Beverage Mix", detail: "High-margin anchor" },
                { metric: "27% Food Cost", detail: "James Beard kitchen" },
                {
                  metric: "$42 Avg. Check",
                  detail: "Blended all-day average",
                },
                {
                  metric: "100 Seats",
                  detail: "3,500 sqft corner lot",
                },
              ].map(({ metric, detail }, i) => (
                <SagePanel key={i} className="w-full">
                  <div
                    style={{
                      width: 20,
                      height: 2,
                      background: colors.terracotta,
                      marginBottom: 8,
                    }}
                  />
                  <p
                    className="font-barlow-condensed uppercase text-base"
                    style={{
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: colors.darkWarmGray,
                    }}
                  >
                    {metric}
                  </p>
                  <p
                    className="font-dm-sans text-sm mt-1"
                    style={{
                      color: colors.mediumWarmGray,
                      fontWeight: 300,
                      fontStyle: "italic",
                    }}
                  >
                    {detail}
                  </p>
                </SagePanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          TAQUERIA RAMIREZ
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionLabel>Taqueria Ramirez</SectionLabel>
        <SectionTitle>Taqueria Ramirez</SectionTitle>

        <PullQuote>
          &ldquo;One of the best taquerias not only in NYC, but on the entire
          planet.&rdquo;
        </PullQuote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p
              className="font-dm-sans text-base leading-relaxed mb-4"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              Anchored by husband and wife team Gio Cervantes and Tania Apolinar
              of Taqueria and Carnitas Ramirez. Since opening on a quiet street
              in Greenpoint three years ago, the restaurant group has become one
              of the most celebrated destinations for Mexico City–style tacos
              anywhere in the world.
            </p>
            <p
              className="font-dm-sans text-base leading-relaxed mb-4"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              Known for their chile-rubbed al pastor and meats simmered for hours
              in a traditional chocicera before landing on perfectly cooked
              nixtamal tortillas. They&apos;ve been named among the top
              restaurants in New York by the New York Times and Eater, and Gio
              was recently nominated again for a James Beard Award.
            </p>
            <p
              className="font-dm-sans text-base leading-relaxed mb-6"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              Their presence elevates the food program from day one.
            </p>

            {/* Accolade chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "James Beard Nominated",
                "NY Times Top Restaurant",
                "Eater Essential",
                "2-Star Review",
              ].map((accolade) => (
                <span
                  key={accolade}
                  className="font-dm-sans text-xs px-3 py-1.5"
                  style={{
                    backgroundColor: "rgba(212, 168, 83, 0.15)",
                    color: colors.darkWarmGray,
                    fontWeight: 600,
                  }}
                >
                  {accolade}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="font-barlow-condensed uppercase text-sm mb-4"
              style={{
                letterSpacing: "0.15em",
                color: colors.mediumWarmGray,
                fontWeight: 700,
              }}
            >
              The Team
            </h3>

            <div className="mb-6">
              <p
                className="font-dm-sans text-lg"
                style={{ fontWeight: 600, color: colors.darkWarmGray }}
              >
                Giovanni Cervantes
              </p>
              <p
                className="font-barlow-condensed uppercase text-xs mb-2"
                style={{
                  letterSpacing: "0.1em",
                  color: colors.gold,
                  fontWeight: 700,
                }}
              >
                Chef & Co-founder
              </p>
              <p
                className="font-dm-sans text-base leading-relaxed"
                style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
              >
                Chef and co-founder of Taqueria Ramirez. From Mexico City.
                Three-time James Beard nominee. Built one of New York&apos;s
                most celebrated Mexico City–style kitchens from a Greenpoint
                storefront.
              </p>
            </div>

            <div className="mb-6">
              <p
                className="font-dm-sans text-lg"
                style={{ fontWeight: 600, color: colors.darkWarmGray }}
              >
                Tania Apolinar
              </p>
              <p
                className="font-barlow-condensed uppercase text-xs mb-2"
                style={{
                  letterSpacing: "0.1em",
                  color: colors.gold,
                  fontWeight: 700,
                }}
              >
                Operations & Co-founder
              </p>
              <p
                className="font-dm-sans text-base leading-relaxed"
                style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
              >
                Operations and co-founder of Taqueria Ramirez. From Torreón.
                Runs front-of-house, sourcing, and the natural wine and mezcal
                program with the same rigor Gio applies to the kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          AV / THE CROWN
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionLabel>Audio-Visual</SectionLabel>
        <SectionTitle>The Crown</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <p
              className="font-dm-sans text-base leading-relaxed mb-4"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              At the heart of Socceria is The Crown — a kinetic, motorized
              85-inch screen rig that raises and lowers on demand. On match day,
              The Crown descends to create an immersive theater. Between matches,
              it rises to reveal the botanical bar ceiling above.
            </p>
            <p
              className="font-dm-sans text-base leading-relaxed mb-4"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              The AV system is purpose-built: directional speaker arrays per
              zone, multi-zone audio routing for simultaneous match viewing, and
              a 4K screen array across the venue.
            </p>
            <p
              className="font-dm-sans text-base leading-relaxed"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              High-backed banquettes, acoustic clouds, and living plant walls
              create natural sound isolation between zones. Step outside one
              zone, and the audio fades naturally.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3
                className="font-barlow-condensed uppercase text-sm mb-3"
                style={{
                  letterSpacing: "0.15em",
                  color: colors.mediumWarmGray,
                  fontWeight: 700,
                }}
              >
                The Crown Features
              </h3>
              <ul className="space-y-2">
                {[
                  "85-inch 4K centerpiece — motorized raise/lower",
                  "LED ring synced to match events and goals",
                  "Acoustic mass absorbs ceiling reflections",
                  "Transforms the room between match and lounge mode",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 text-xs"
                      style={{ color: colors.gold }}
                    >
                      —
                    </span>
                    <span
                      className="font-dm-sans text-base"
                      style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="font-barlow-condensed uppercase text-sm mb-3"
                style={{
                  letterSpacing: "0.15em",
                  color: colors.mediumWarmGray,
                  fontWeight: 700,
                }}
              >
                AV System
              </h3>
              <ul className="space-y-2">
                {[
                  "8+ screens across three audio zones",
                  "Directional speaker arrays per zone",
                  "Tactile transducers for localized bass",
                  "Motorized curtains over inactive screens",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 text-xs"
                      style={{ color: colors.sageFill }}
                    >
                      —
                    </span>
                    <span
                      className="font-dm-sans text-base"
                      style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: "8+", label: "Screens" },
                { value: "4K", label: "Resolution" },
                { value: "3", label: "Audio Zones" },
                { value: "↓↑", label: "Kinetic" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-dm-sans text-2xl"
                    style={{ fontWeight: 600, color: colors.darkWarmGray }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-dm-sans text-sm mt-0.5"
                    style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          COMMUNITY — WOMEN'S SOCCER
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionLabel>Community</SectionLabel>
        <SectionTitle>Women&apos;s Soccer</SectionTitle>

        <p
          className="font-dm-sans text-xl mt-3 mb-6"
          style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
        >
          Socceria programs women&apos;s leagues with the same prominence as
          men&apos;s. NWSL, WSL, Liga MX Femenil, and the Women&apos;s World
          Cup get premium screen time, dedicated watch parties, and equal
          marketing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p
              className="font-dm-sans text-base leading-relaxed mb-4"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              This isn&apos;t a checkbox. Women&apos;s soccer viewership grew
              43% year-over-year and the NWSL just signed a $240M broadcast
              deal. Gotham FC plays in Harrison — 20 minutes from our door. The
              audience is here, underserved, and spending.
            </p>
            <p
              className="font-dm-sans text-base leading-relaxed"
              style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
            >
              We&apos;re building relationships with Gotham FC, local women&apos;s
              leagues, and community soccer organizations to make Socceria the
              home bar for the women&apos;s game in New York.
            </p>
          </div>

          <SagePanel>
            <div
              style={{
                width: 20,
                height: 2,
                background: colors.terracotta,
                marginBottom: 12,
              }}
            />
            <h3
              className="font-barlow-condensed uppercase text-sm mb-4"
              style={{
                letterSpacing: "0.15em",
                color: colors.mediumWarmGray,
                fontWeight: 700,
              }}
            >
              Why It Matters
            </h3>
            <div className="space-y-3">
              {[
                "NWSL viewership up 43% year-over-year",
                "$240M broadcast deal signed 2024",
                "Gotham FC — 20 min from Greenpoint",
                "Women 25-44: fastest growing soccer demo",
                "Brand-aligned: inclusive, premium, community-first",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 mt-2 shrink-0"
                    style={{ backgroundColor: colors.terracotta }}
                  />
                  <p
                    className="font-dm-sans text-sm"
                    style={{
                      fontWeight: 300,
                      color: colors.darkWarmGray,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </SagePanel>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          PROGRAMMING
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionLabel>Programming</SectionLabel>
        <SectionTitle>Year-Round Soccer</SectionTitle>

        <p
          className="font-dm-sans text-base leading-relaxed mt-4 mb-8 max-w-2xl"
          style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
        >
          Soccer isn&apos;t seasonal — it&apos;s 365 days a year across dozens
          of leagues and time zones. Socceria is built to capture every match,
          every day, all day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              label: "AM",
              title: "Morning",
              time: "7:30 AM – 12 PM",
              region: "Europe & UK",
              leagues: [
                "Premier League",
                "La Liga",
                "Bundesliga",
                "Serie A",
              ],
            },
            {
              label: "PM",
              title: "Afternoon",
              time: "12 PM – 6 PM",
              region: "Americas & Europe",
              leagues: [
                "Champions League",
                "MLS",
                "Liga MX",
                "Copa Libertadores",
              ],
            },
            {
              label: "EVE",
              title: "Evening",
              time: "6 PM – Close",
              region: "Americas",
              leagues: ["NWSL", "MLS", "Liga MX", "Brazil / Argentina"],
            },
          ].map((daypart) => (
            <SagePanel key={daypart.label}>
              <div
                style={{
                  borderTop: "2px solid rgba(199,91,59,0.3)",
                  paddingTop: "clamp(0.75rem, 2vw, 1rem)",
                }}
              >
                <h3
                  className="font-barlow-condensed uppercase text-lg mb-1"
                  style={{
                    letterSpacing: "0.2em",
                    color: colors.darkWarmGray,
                    fontWeight: 700,
                  }}
                >
                  {daypart.title}
                </h3>
                <div
                  style={{
                    width: 24,
                    height: 2,
                    background: colors.terracotta,
                    marginBottom: 6,
                  }}
                />
                <p
                  className="font-dm-sans text-xs mb-6"
                  style={{
                    color: colors.lightWarmGray,
                    fontWeight: 300,
                    fontStyle: "italic",
                  }}
                >
                  {daypart.time}
                </p>
                <p
                  className="font-barlow-condensed text-sm uppercase mb-2"
                  style={{
                    letterSpacing: "0.12em",
                    color: colors.terracotta,
                    fontWeight: 600,
                  }}
                >
                  {daypart.region}
                </p>
                <ul className="space-y-1 mb-2">
                  {daypart.leagues.map((league) => (
                    <li
                      key={league}
                      className="font-dm-sans text-sm"
                      style={{
                        color: colors.mediumWarmGray,
                        fontWeight: 300,
                        fontStyle: "italic",
                      }}
                    >
                      {league}
                    </li>
                  ))}
                </ul>
              </div>
            </SagePanel>
          ))}
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          MARKET
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionTitle>Market</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3
              className="font-barlow-condensed uppercase text-sm mb-4"
              style={{
                letterSpacing: "0.15em",
                color: colors.mediumWarmGray,
                fontWeight: 700,
              }}
            >
              Market Sizing
            </h3>
            <div className="space-y-4">
              {[
                {
                  label: "TAM",
                  value: "$320M",
                  desc: "Brooklyn bar & restaurant nightlife (2,100+ establishments)",
                },
                {
                  label: "SAM",
                  value: "$48M",
                  desc: "Sports-viewing bars in North Brooklyn",
                },
                {
                  label: "SOM",
                  value: "$4.2M (Year 1)",
                  desc: "Live model output for the first 15-month operating period",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 mt-2 shrink-0"
                    style={{ backgroundColor: colors.terracotta }}
                  />
                  <div>
                    <p
                      className="font-dm-sans text-base"
                      style={{
                        fontWeight: 600,
                        color: colors.darkWarmGray,
                      }}
                    >
                      {item.label} — {item.value}
                    </p>
                    <p
                      className="font-dm-sans text-sm mt-0.5"
                      style={{
                        color: colors.mediumWarmGray,
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="font-barlow-condensed uppercase text-sm mb-4"
              style={{
                letterSpacing: "0.15em",
                color: colors.mediumWarmGray,
                fontWeight: 700,
              }}
            >
              World Cup 2026
            </h3>
            <SagePanel>
              <div className="space-y-4">
                <div>
                  <p
                    className="font-dm-sans text-2xl"
                    style={{
                      fontWeight: 600,
                      color: colors.darkWarmGray,
                    }}
                  >
                    June 11 – July 19
                  </p>
                  <p
                    className="font-dm-sans text-sm mt-1"
                    style={{
                      color: colors.mediumWarmGray,
                      fontWeight: 300,
                    }}
                  >
                    39 days of tournament play
                  </p>
                </div>
                <div>
                  <p
                    className="font-dm-sans text-2xl"
                    style={{
                      fontWeight: 600,
                      color: colors.darkWarmGray,
                    }}
                  >
                    1.6× revenue
                  </p>
                  <p
                    className="font-dm-sans text-sm mt-1"
                    style={{
                      color: colors.mediumWarmGray,
                      fontWeight: 300,
                    }}
                  >
                    $529K peak month vs $340K baseline
                  </p>
                </div>
                <div>
                  <p
                    className="font-dm-sans text-2xl"
                    style={{
                      fontWeight: 600,
                      color: colors.darkWarmGray,
                    }}
                  >
                    Semi-Finals & Final
                  </p>
                  <p
                    className="font-dm-sans text-sm mt-1"
                    style={{
                      color: colors.mediumWarmGray,
                      fontWeight: 300,
                    }}
                  >
                    MetLife Stadium — 12 miles away
                  </p>
                </div>
              </div>
            </SagePanel>
          </div>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          GREENPOINT
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionLabel>Location</SectionLabel>
        <SectionTitle>Greenpoint, Brooklyn</SectionTitle>

        <p
          className="font-dm-sans text-base leading-relaxed mt-4 mb-8 max-w-2xl"
          style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
        >
          46 Norman Ave sits at the intersection of Greenpoint&apos;s residential
          core and its commercial corridor. Corner lot, ground floor, high
          visibility, foot traffic from the G train and the waterfront.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 mb-8">
          <DataRow label="Sqft" value="3,500" />
          <DataRow label="Norman Ave frontage" value="50ft" sub="+ 70ft Guernsey St" />
          <DataRow label="Seats" value="100" />
          <DataRow label="Bar" value="20+ ft" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3
              className="font-barlow-condensed uppercase text-sm mb-3"
              style={{
                letterSpacing: "0.15em",
                color: colors.mediumWarmGray,
                fontWeight: 700,
              }}
            >
              Demographics
            </h3>
            <div className="space-y-3">
              {[
                "Median age 32 — peak sports bar demo",
                "Median HHI $105K — high discretionary spend",
                "35% Hispanic/Latino population — built-in soccer culture",
                "G train + waterfront foot traffic",
                "Dense residential + growing commercial corridor",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 mt-2 shrink-0"
                    style={{ backgroundColor: colors.terracotta }}
                  />
                  <p
                    className="font-dm-sans text-sm"
                    style={{
                      color: colors.mediumWarmGray,
                      fontWeight: 300,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <SagePanel>
            <h3
              className="font-barlow-condensed uppercase text-sm mb-3"
              style={{
                letterSpacing: "0.15em",
                color: colors.mediumWarmGray,
                fontWeight: 700,
              }}
            >
              Lease Highlights
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Initial Term", value: "11 years", sub: "Locked through 2031" },
                { label: "Structure", value: "Triple Net", sub: "Standard commercial" },
                { label: "Escalation", value: "3%/yr", sub: "Annual increase" },
                { label: "Extension", value: "5 years", sub: "Optional renewal" },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    className="font-dm-sans text-xs"
                    style={{
                      color: colors.mediumWarmGray,
                      fontWeight: 300,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-dm-sans text-base"
                    style={{ fontWeight: 600, color: colors.darkWarmGray }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="font-dm-sans text-xs mt-0.5"
                    style={{
                      color: colors.lightWarmGray,
                      fontWeight: 300,
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </SagePanel>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          THE FUTURE / TRACTION
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionTitle>Traction & You</SectionTitle>

        <p
          className="font-dm-sans text-xl mt-3 mb-2"
          style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
        >
          This is already moving. The question isn&apos;t whether we&apos;re
          building — it&apos;s whether you&apos;re at the table when we open the
          doors.
        </p>

        <div
          className="py-4 pl-6 mb-8"
          style={{ borderLeft: `3px solid ${colors.terracotta}` }}
        >
          <p
            className="font-dm-sans italic text-lg leading-relaxed"
            style={{ color: colors.nearBlack }}
          >
            The kitchen is locked. The lease is signed. The buildout starts in
            weeks. We&apos;re raising a limited round to finish the build and
            open strong — and this window closes fast.
          </p>
        </div>

        <div className="mt-8 space-y-0">
          {[
            {
              date: "Feb 2026",
              title: "Lease executed",
              desc: "11-year, $58.83/sqft. 3,500 sqft corner lot, 46 Norman Ave.",
              done: true,
            },
            {
              date: "Mar–Apr 2026",
              title: "59-day buildout",
              desc: "Matthew Maddy. Kitchen, bar, AV, interior.",
              done: false,
            },
            {
              date: "May 1",
              title: "Soft launch",
              desc: "Full operations. 41 days before World Cup.",
              done: false,
            },
            {
              date: "Jun 11",
              title: "FIFA World Cup",
              desc: "39 days. Semi-finals + final at MetLife.",
              done: false,
            },
          ].map((milestone, i) => (
            <div key={i} className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div
                  className="w-3 h-3 shrink-0"
                  style={{
                    backgroundColor: milestone.done
                      ? colors.terracotta
                      : "transparent",
                    border: milestone.done
                      ? "none"
                      : `2px solid ${colors.lightWarmGray}`,
                  }}
                />
                {i < 3 && (
                  <div
                    className="w-px h-full min-h-[3rem]"
                    style={{ backgroundColor: colors.rowDivider }}
                  />
                )}
              </div>
              <div className="pb-6">
                <span
                  className="font-dm-sans text-sm"
                  style={{ color: colors.lightWarmGray, fontWeight: 300 }}
                >
                  {milestone.date}
                </span>
                <h3
                  className="font-dm-sans text-lg mt-0.5"
                  style={{ fontWeight: 600, color: colors.darkWarmGray }}
                >
                  {milestone.title}
                </h3>
                <p
                  className="font-dm-sans text-base mt-1"
                  style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
                >
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOMO callout */}
        <div className="mt-8">
          <SagePanel>
            <div className="text-center py-4">
              <p
                className="font-barlow-condensed uppercase text-sm mb-2"
                style={{
                  letterSpacing: "0.15em",
                  color: colors.terracotta,
                  fontWeight: 700,
                }}
              >
                Limited Raise · Closing Soon
              </p>
              <p
                className="font-dm-sans text-base"
                style={{ color: colors.mediumWarmGray, fontWeight: 300 }}
              >
                We open in May. The World Cup starts in June. Every week that
                passes is a week closer to the biggest sporting event in history
                landing in our backyard. This is where you come in.
              </p>
            </div>
          </SagePanel>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════ */}
      <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2
          className="font-barlow-condensed uppercase mb-4"
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 900,
            color: colors.nearBlack,
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
          }}
        >
          Socceria
        </h2>
        <p
          className="font-barlow-condensed uppercase"
          style={{
            fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
            fontWeight: 700,
            color: colors.terracotta,
            letterSpacing: "0.15em",
          }}
        >
          Ramirez
        </p>
        <TerracottaDivider />
        <p
          className="font-dm-sans text-sm"
          style={{ color: colors.lightWarmGray, fontWeight: 300 }}
        >
          46 Norman Ave · Greenpoint · Brooklyn · NYC
        </p>
        <p
          className="font-dm-sans text-xs mt-4"
          style={{ color: colors.lightWarmGray, fontWeight: 300 }}
        >
          Confidential — Authorized recipients only
        </p>
      </footer>
    </div>
  );
}
