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
      { label: "Social Media", to: "/services" },
      { label: "Email Marketing", to: "/services" },
      { label: "Member Comms", to: "/services" },
      { label: "Content Strategy", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Industries", to: "/industries" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-[1280px] mx-auto px-10 pt-20 pb-10">
        {/* Main grid */}
        <div
          className="grid gap-16 pb-16 border-b border-white/10"
          style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
        >
          {/* Col 1 — Brand */}
          <div>
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
              Bespoke digital marketing for Ontario's finest private clubs. We
              speak your language because we understand your world.
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

        {/* Bottom bar */}
        <div className="pt-8 flex justify-between items-center">
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
