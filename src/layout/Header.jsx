import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/ui/Button";

const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Case Studies", to: "/case-studies" },
];

const ALL_LINKS = [
  { label: "Home", to: "/" },
  ...NAV_LINKS,
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const location = useLocation();

  // Check if we are currently on the homepage
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const statsSectionHeight = 140;
      const threshold = window.innerHeight + statsSectionHeight;
      setScrolledPastHero(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Call it once on mount to ensure correct state if the user refreshes halfway down the page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeaderWhite = isHomePage && !scrolledPastHero;

  const pillLinkClass = ({ isActive }) =>
    `font-sans text-xs tracking-[0.1em] uppercase transition-all duration-200 whitespace-nowrap px-[18px] py-2.5 rounded-full ${
      isActive
        ? "bg-white/10 text-white"
        : "text-white hover:text-white hover:bg-white/10"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block w-full font-sans text-base tracking-[0.08em] uppercase py-3.5 border-b text-left transition-colors duration-200 ${
      isActive ? "text-camel" : "text-cream/70"
    } ${isHeaderWhite ? "text-white border-white/[0.06]" : "text-charcoal border-black/[0.06]"}`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: !isHeaderWhite
          ? "1px solid rgba(28, 28, 26, 0.05)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-9 h-[76px] flex items-center justify-between">
        {/* Left — Logo */}
        <Link to="/" className="flex items-center gap-2.5 z-10 flex-shrink-0">
          {/* Logo Icon */}
          <img
            src="/logo/head-logo.svg"
            alt="Springbok Media"
            style={{ height: 36, width: "auto" }}
            className={"transition-all duration-300 invert-0"}
          />

          {/* Logo Text */}
          <span
            className={`font-serif text-xl hidden sm:block transition-colors duration-300 ${
              isHeaderWhite ? "text-white" : "text-charcoal"
            }`}
          >
            Springbok Media
          </span>
        </Link>

        {/* Center — Glass pill nav */}
        <nav
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 p-1.5 backdrop-blur-sm rounded-full bg-opacity-50 border border-white/[0.14] 
            ${!isHeaderWhite ? "bg-forest" : "bg-white/[0.08]"}`}
        >
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
            className="hidden md:inline-flex items-center font-sans text-xs font-medium tracking-[0.12em] uppercase text-forest bg-white px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-[1px] hover:bg-camel hover:text-white"
            style={{ boxShadow: "0 4px 24px var(--shadow-charcoal)" }}
          >
            Get in touch
          </Link>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-[4px] border  transition-colors duration-500 ${isHeaderWhite ? "border-white/20" : " border-black/20"}`}
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
                className={`block w-[18px] h-[1.5px] transition-all duration-200 ${isHeaderWhite ? "bg-white" : "bg-black/50"}`}
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
            className={`md:hidden bg-charcoal/97 backdrop-blur-xl border-t px-9 pb-8 ${isHeaderWhite ? "border-white/[0.08]" : "border-black/[0.08]"}`}
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
