import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',       to: '/' },
  { label: 'Services',   to: '/services' },
  { label: 'About Us',   to: '/about' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact',    to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/media/head-logo.svg" alt="Springbok Media" className="h-7 w-auto opacity-80" />
            <span className="font-serif italic text-lg text-cream/80">Springbok Media</span>
          </Link>
          <p className="font-sans text-xs text-cream/40 leading-relaxed max-w-xs">
            Niche digital marketing for private golf, country, and sports clubs in Ontario. Hands-on, tailored, and built for your culture.
          </p>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-cream/30 mb-5">Navigation</p>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-sans text-sm text-cream/55 hover:text-camel transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact info */}
        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-cream/30 mb-5">Contact</p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@springbokmedia.com"
              className="font-sans text-sm text-cream/55 hover:text-camel transition-colors duration-200"
            >
              hello@springbokmedia.com
            </a>
            <p className="font-sans text-sm text-cream/40">Ontario, Canada</p>
            <a
              href="#calendly"
              className="font-sans text-xs tracking-[0.15em] uppercase text-camel/70 hover:text-camel transition-colors duration-200 mt-2"
            >
              Book a Discovery Call →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-cream/25">
            © {new Date().getFullYear()} Springbok Media. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/20">
            springbokmedia.com
          </p>
        </div>
      </div>
    </footer>
  )
}
