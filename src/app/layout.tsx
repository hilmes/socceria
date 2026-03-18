import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
        className={`${fraunces.variable} ${inter.variable} antialiased min-h-screen flex flex-col bg-[#0a0a0a] text-[#e8e0d8]`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
