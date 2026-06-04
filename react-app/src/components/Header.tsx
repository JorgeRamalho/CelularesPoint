import { useState } from 'react';
import { NAV_LINKS } from '../data/siteData';
import { useHeaderScroll, useActiveSection } from '../hooks/useScrollAnimation';

const SECTION_IDS = ['hero', 'universo', 'produtos', 'tecnologia', 'servicos', 'depoimentos', 'faq', 'contato'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useHeaderScroll();
  const activeSection = useActiveSection(SECTION_IDS);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden';
      return !prev;
    });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <nav className="nav container">
        <a href="#hero" className="nav__logo" onClick={closeMenu}>
          <span className="nav__logo-icon">◈</span>
          <span className="nav__logo-text">
            POINT<span className="accent">CELULAR</span>
          </span>
        </a>

        <button
          className={`nav__toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav__menu ${menuOpen ? 'active' : ''}`} id="nav-menu">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav__link ${'cta' in link && link.cta ? 'nav__link--cta' : ''} ${
                  activeSection === link.href.slice(1) ? 'active' : ''
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
