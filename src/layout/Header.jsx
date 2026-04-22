import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '@/ui/Button'

const NAV_LINKS = [
  { label: 'Services',     to: '/services' },
  { label: 'About',        to: '/about' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Industries',   to: '/industries' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-200 whitespace-nowrap ${
      isActive ? 'text-camel' : 'text-cream/75 hover:text-cream'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

        {/* Left — Logo */}
        <Link to="/" className="flex items-center gap-3 z-10">
          <img
            src="/media/head-logo.svg"
            alt="Springbok Media"
            className="h-8 w-auto"
          />
          <span className="font-serif italic text-xl text-cream tracking-wide hidden sm:block">
            Springbok Media
          </span>
        </Link>

        {/* Center — Glass pill nav (desktop only, truly centered) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 px-8 py-2.5 rounded-full bg-charcoal/60 backdrop-blur-md border border-camel/20">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right — Contact button + hamburger */}
        <div className="flex items-center gap-4 z-10">
          <Button variant="outline" to="/contact" className="hidden md:inline-flex py-2 text-xs">
            Contact
          </Button>
          <button
            className="md:hidden text-cream/80 hover:text-cream transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-cream/10 px-6 py-6 flex flex-col gap-5"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-cream/10">
              <Button
                variant="outline"
                to="/contact"
                className="w-full py-2.5 text-xs justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
