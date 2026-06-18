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
  const logoFilter = scrolled || !isHome ? '' : 'brightness-0 invert';

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
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Logo-dmp-creations.jpeg"
              alt="dmp créations"
              className={`h-11 w-auto object-contain rounded transition-all duration-300 ${logoFilter}`}
            />
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
            <img src="/Logo-dmp-creations.jpeg" alt="dmp créations" className="h-14 w-auto object-contain rounded-xl mb-4 brightness-0 invert" />
            <p className="text-white/50 text-sm leading-relaxed">
              Menuisier-ébéniste artisan.<br />
              Atelier à Trévé, Centre-Bretagne.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              {[
                { label: 'Instagram', url: siteConfig.social.instagram },
                { label: 'Facebook', url: siteConfig.social.facebook },
                { label: 'LinkedIn', url: siteConfig.social.linkedin },
                { label: 'Pinterest', url: siteConfig.social.pinterest },
              ].map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                  className="text-xs border border-white/20 hover:border-[#C8893A] hover:text-[#C8893A] px-3 py-1.5 rounded-full text-white/50 transition-colors">
                  {label}
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
