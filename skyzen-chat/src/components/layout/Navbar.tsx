import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircleHeart } from "lucide-react";
import Container from "../Container";
import Button from "../common/Button";
import { siteConfig } from "../../config/site";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Container className="navbar__inner">
        <a href="/" className="navbar__brand" aria-label={`${siteConfig.brand.name} ${siteConfig.brand.nameSuffix} — home`}>
          <span className="navbar__brand-icon">
            <MessageCircleHeart size={20} strokeWidth={2.4} aria-hidden="true" />
          </span>
          <span className="navbar__brand-text">
            {siteConfig.brand.name}
            <span className="navbar__brand-accent"> {siteConfig.brand.nameSuffix}</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {siteConfig.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <Button href={siteConfig.nav.login.href} variant="ghost">
            {siteConfig.nav.login.label}
          </Button>
          <Button href={siteConfig.nav.signup.href} variant="primary">
            {siteConfig.nav.signup.label}
          </Button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="mobile-menu__list">
              {siteConfig.nav.links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a href={link.href} className="mobile-menu__link" onClick={closeMenu}>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mobile-menu__actions">
              <Button href={siteConfig.nav.login.href} variant="secondary" className="mobile-menu__btn" onClick={closeMenu}>
                {siteConfig.nav.login.label}
              </Button>
              <Button href={siteConfig.nav.signup.href} variant="primary" className="mobile-menu__btn" onClick={closeMenu}>
                {siteConfig.nav.signup.label}
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}