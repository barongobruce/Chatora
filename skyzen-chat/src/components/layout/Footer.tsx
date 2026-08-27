import { siteConfig } from "../../config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo__name">{siteConfig.brand.name}</span>
              <span className="footer-logo__suffix">{siteConfig.brand.nameSuffix}</span>
            </div>
            <p className="footer-description">
              Kindred  Chat connects Kenyans with people around the world through genuine conversations, language exchange, and flexible earning opportunities.
            </p>
          </div>

          {/* Links Columns */}
          <div className="footer-links-group">
            <div className="footer-column">
              <h4 className="footer-heading">Platform</h4>
              <ul className="footer-list">
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#find">Find Someone to Talk To</a></li>
                <li><a href="#become">Become a Friend</a></li>
                <li><a href="#rates">Chat Rates</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-list">
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#refunds">No-Refund Policy</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal & Social</h4>
              <ul className="footer-list">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#guidelines">Community Guidelines</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} Skyzen Chat. All rights reserved.</p>
          <p className="footer-tagline">Made for conversations that matter.</p>
        </div>
      </div>
    </footer>
  );
}