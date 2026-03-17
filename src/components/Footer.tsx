import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a0e0e] to-[#2a1010] text-[#a89888]">
      {/* Thin top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c4956a]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <h3
              className="text-[#f5efe6] text-3xl mb-4 tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Socceria
            </h3>
            <p className="text-sm leading-relaxed text-[#8a7a6a] max-w-xs">
              An upscale Mexican cantina in the heart of Brooklyn.
              Wood-fired cuisine, handcrafted cocktails, and the soul of Mexico.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[#c9a96e] font-semibold mb-4 uppercase tracking-[0.2em] text-xs">
              Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-[#f5efe6] font-medium">
                Monday — <span className="text-[#8a5a5a]">CLOSED</span>
              </li>
              <li>Tuesday – Thursday: 11am – 10pm</li>
              <li>Friday – Saturday: 11am – 11pm</li>
              <li>Sunday: 11am – 9pm</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-[#c9a96e] font-semibold mb-3 uppercase tracking-[0.2em] text-xs">
                Brunch
              </h4>
              <p className="text-sm">Tuesday – Sunday: 11am – 3pm</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a96e] font-semibold mb-4 uppercase tracking-[0.2em] text-xs">
              Visit
            </h4>
            <address className="not-italic text-sm space-y-2">
              <p className="text-[#e8e0d8]">Brooklyn, New York</p>
              <p>
                <a
                  href="mailto:hello@socceria.nyc"
                  className="hover:text-[#f5efe6] transition-colors"
                >
                  hello@socceria.nyc
                </a>
              </p>
            </address>

            <div className="mt-6">
              <h4 className="text-[#c9a96e] font-semibold mb-3 uppercase tracking-[0.2em] text-xs">
                Follow
              </h4>
              <a
                href="https://instagram.com/socceria.nyc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-[#f5efe6] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @socceria
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3d1a1a] mt-12 pt-8 text-center text-xs text-[#5a4a3a]">
          © {new Date().getFullYear()} Socceria. Brooklyn, New York.
        </div>
      </div>
    </footer>
  );
}
