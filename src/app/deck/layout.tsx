import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socceria — Investor Deck",
  description:
    "Socceria Ramirez investor deck. Mexican cantina meets soccer culture in Greenpoint, Brooklyn.",
};

export default function DeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Deck pages render without the main site Nav/Footer
  return <>{children}</>;
}
