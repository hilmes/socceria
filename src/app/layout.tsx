import type { Metadata } from "next";
import { Fraunces, Inter, Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Socceria — Brooklyn",
  description:
    "Mexican cantina in Brooklyn, NYC. Handmade dishes, handcrafted cocktails, and the soul of Mexico. Open Tuesday through Sunday.",
  metadataBase: new URL("https://socceria.nyc"),
  openGraph: {
    title: "Socceria — Brooklyn",
    description:
      "Mexican cantina in Brooklyn, NYC. Handmade dishes, handcrafted cocktails, and the soul of Mexico.",
    type: "website",
    locale: "en_US",
    url: "https://socceria.nyc",
    siteName: "Socceria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fraunces.variable} ${inter.variable} ${barlowCondensed.variable} ${dmSans.variable} antialiased min-h-screen flex flex-col bg-[#0a0a0a] text-[#e8e0d8]`}
      >
        {children}
      </body>
    </html>
  );
}
