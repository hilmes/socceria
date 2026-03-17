import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Socceria — Brooklyn",
  description:
    "Upscale Mexican cantina in Brooklyn, NYC. Wood-fired dishes, handcrafted cocktails, and the soul of Mexico. Open Tuesday through Sunday.",
  metadataBase: new URL("https://socceria.nyc"),
  openGraph: {
    title: "Socceria — Brooklyn",
    description:
      "Upscale Mexican cantina in Brooklyn, NYC. Wood-fired dishes, handcrafted cocktails, and the soul of Mexico.",
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
        className={`${playfair.variable} ${inter.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col bg-[#0a0a0a] text-[#e8e0d8]`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
