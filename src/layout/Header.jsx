import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/ui/Button";

const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Industries", to: "/industries" },
];

const ALL_LINKS = [
  { label: "Home", to: "/" },
  ...NAV_LINKS,
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      const fadeStart = heroHeight * 0.78;
      const fadeEnd = heroHeight * 1.05;
      const p = Math.min(
        1,
        Math.max(0, (window.scrollY - fadeStart) / (fadeEnd - fadeStart)),
      );
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero is always dark (golf image) so nav text is always white
  const pillLinkClass = ({ isActive }) =>
    `font-sans text-xs tracking-[0.1em] uppercase transition-all duration-200 whitespace-nowrap px-[18px] py-2.5 rounded-full ${
      isActive
        ? "bg-camel text-white"
        : "text-white/80 hover:text-white hover:bg-white/10"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block w-full font-sans text-base tracking-[0.08em] uppercase py-3.5 border-b border-white/[0.06] text-left transition-colors duration-200 ${
      isActive ? "text-camel" : "text-cream/70"
    }`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: `color-mix(in srgb, var(--color-charcoal) ${Math.round(progress * 28)}%, transparent)`,
        backdropFilter: `blur(${(progress * 12).toFixed(1)}px)`,
        WebkitBackdropFilter: `blur(${(progress * 12).toFixed(1)}px)`,
        boxShadow: progress > 0.95 ? "0 1px 0 rgba(55,55,55,0.07)" : "none",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-9 h-[76px] flex items-center justify-between">
        {/* Left — Logo */}
        <Link to="/" className="flex items-center gap-2.5 z-10 flex-shrink-0">
          <img
            src="/logo/head-logo.svg"
            alt="Springbok Media"
            style={{ height: 36, width: "auto" }}
          />
          <span className="font-serif text-xl hidden sm:block text-cream">
            Springbok Media
          </span>
        </Link>

        {/* Center — Glass pill nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 p-1.5 backdrop-blur-sm rounded-full bg-white/[0.08] border border-white/[0.14]">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={pillLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right — CTA + hamburger */}
        <div className="flex items-center gap-3 z-10">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center font-sans text-xs font-medium tracking-[0.12em] uppercase text-white bg-camel px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:bg-camel/85"
            style={{ boxShadow: "0 4px 24px var(--shadow-camel)" }}
          >
            Get in touch
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-[4px] border border-white/20 transition-colors duration-500"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {[
              menuOpen ? "rotate(45deg) translateY(3.5px)" : "none",
              null,
              menuOpen ? "rotate(-45deg) translateY(-3.5px)" : "none",
            ].map((transform, i) => (
              <span
                key={i}
                className="block w-[18px] h-[1.5px] bg-white transition-all duration-200"
                style={{
                  ...(transform !== null ? { transform } : {}),
                  ...(i === 1 ? { opacity: menuOpen ? 0 : 1 } : {}),
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-charcoal/97 backdrop-blur-xl border-t border-white/[0.08] px-9 pb-8"
          >
            <div className="py-2 flex flex-col">
              {ALL_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <Button
              variant="camel"
              to="/contact"
              className="w-full py-4 text-sm justify-center mt-5"
              onClick={() => setMenuOpen(false)}
            >
              Book a Discovery Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
