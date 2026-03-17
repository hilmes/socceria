import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-3">Socceria</h3>
            <p className="text-sm leading-relaxed">
              Authentic Italian cuisine made with love and tradition.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">
              Hours
            </h4>
            <ul className="space-y-1 text-sm">
              <li>Mon – Thu: 12pm – 10pm</li>
              <li>Fri – Sat: 12pm – 11pm</li>
              <li>Sunday: 1pm – 9pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} Socceria. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
