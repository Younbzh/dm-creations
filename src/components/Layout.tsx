import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navBg = scrolled || !isHome ? 'bg-[#FAF7F2] border-b border-[#1C1208]/8 shadow-sm' : 'bg-transparent';
  const linkColor = scrolled || !isHome ? 'text-[#1C1208] hover:text-[#C8893A]' : 'text-white hover:text-white/70';
  const activeColor = scrolled || !isHome ? 'text-[#C8893A]' : 'text-white/70';
  const burgerColor = scrolled || !isHome ? 'text-[#1C1208]' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-[#1C1208]' : 'text-white';
  const logoSub = scrolled || !isHome ? 'text-[#C8893A]' : 'text-white/60';

  const navLinks = [
    { label: 'Prestations', to: '/prestations' },
    { label: 'Galerie', to: '/galerie' },
    { label: "L'atelier", to: '/latelier' },
  ];

  return (
    <>
      <ScrollToTop />

      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col leading-tight transition-colors duration-300">
            <span className={`text-[9px] uppercase tracking-[0.3em] transition-colors duration-300 ${logoSub}`}>
              menuisier · ébéniste
            </span>
            <span className={`font-display text-xl font-bold italic transition-colors duration-300 ${logoColor}`}>
              dmp créations
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? activeColor : linkColor}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/votre-projet"
              className="bg-[#C8893A] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#B57A2E] transition-colors"
            >
              Votre projet
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(v => !v)} className={`md:hidden ${burgerColor}`}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-t border-[#1C1208]/10 px-5 py-6 flex flex-col gap-5">
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="text-[#1C1208] font-medium text-lg">
                {label}
              </Link>
            ))}
            <Link
              to="/votre-projet"
              className="bg-[#C8893A] text-white font-semibold px-6 py-3 rounded-full text-center"
            >
              Votre projet
            </Link>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1C1208] text-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="mb-5">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C8893A]">menuisier · ébéniste</span>
              <p className="font-display text-2xl font-bold italic text-white leading-none mt-1">dmp créations</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Menuisier-ébéniste artisan.<br />
              Atelier à Trévé, Centre-Bretagne.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                {
                  label: 'Instagram',
                  url: siteConfig.social.instagram,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  url: siteConfig.social.facebook,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  url: siteConfig.social.linkedin,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
                {
                  label: 'Pinterest',
                  url: siteConfig.social.pinterest,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                  ),
                },
              ].map(({ label, url, icon }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-[#C8893A] hover:text-[#C8893A] transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#C8893A] mb-5">Contact</p>
            <div className="space-y-2 text-sm text-white/60">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors text-xs">
                <Mail className="w-3.5 h-3.5" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#C8893A] mb-5">L'atelier</p>
            <p className="text-sm text-white/60 leading-relaxed">
              {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}<br />
              {siteConfig.contact.address.region} · Bretagne
            </p>
            <p className="text-xs text-white/30 mt-3">{siteConfig.contact.atelierNote}</p>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-white/25 max-w-6xl mx-auto px-5">
          © {new Date().getFullYear()} {siteConfig.businessName} — tous droits réservés
        </div>
      </footer>

      {/* Sticky mobile CTA — masqué sur /votre-projet */}
      {pathname !== '/votre-projet' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-[#1C1208]/10 bg-[#FAF7F2]">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-[#1C1208] font-semibold text-sm border-r border-[#1C1208]/10"
          >
            <Phone className="w-4 h-4" /> Appeler
          </a>
          <Link
            to="/votre-projet"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#C8893A] text-white font-semibold text-sm"
          >
            Votre projet
          </Link>
        </div>
      )}
    </>
  );
}
