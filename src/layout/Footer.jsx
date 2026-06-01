import { Link } from "react-router-dom";

const LINK_COLS = [
  {
    title: "Navigation",
    links: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Social Media Strategy", to: "/services" },
      { label: "Email & Newsletter Comms", to: "/services" },
      { label: "Content Creation", to: "/services" },
      { label: "Ads Strategy & Execution", to: "/services" },
      { label: "Web Development", to: "/services" },
      { label: "SEO Strategy", to: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 pb-16 border-b border-white/10">
          {/* Col 1 — Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img
                src="/logo/head-logo.svg"
                alt="Springbok Media"
                style={{ height: 36, width: "auto" }}
              />
              <span
                className="font-script text-xl text-cream"
                style={{ fontWeight: 600 }}
              >
                Springbok Media
              </span>
            </Link>
            <p
              className="font-sans text-sm leading-relaxed max-w-[280px]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              A small studio creating thoughtful marketing for hospitality and
              lifestyle brands.
            </p>
          </div>

          {/* Cols 2–4 — Link columns */}
          {LINK_COLS.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-camel mb-5 font-medium">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm transition-colors duration-200 hover:text-cream"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar*/}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p
            className="font-sans text-xs tracking-[0.05em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            © {new Date().getFullYear()} Springbok Media. All rights reserved.
            Ontario, Canada.
          </p>
          <p
            className="font-sans text-xs tracking-[0.05em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Specialists in Private Club Marketing
          </p>
        </div>
      </div>
    </footer>
  );
}
