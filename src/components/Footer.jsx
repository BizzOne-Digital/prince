import { Link } from 'react-router-dom';
import './Footer.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <h2 className="footer__heading">Your premier destination for professional pressure washing</h2>

          {/* Contact Cards */}
          <div className="footer__cards">
            {/* Phone Card */}
            <div className="footer__card">
              <div className="footer__card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="footer__card-title">Contact Us</div>
              <a href="tel:+16723999637" className="footer__card-value">+1 437 955 4480</a>
              <a href="mailto:sheoranprince42@gmail.com" className="footer__card-value">sheoranprince42@gmail.com</a>
            </div>

            {/* Location 1 */}
            <div className="footer__card">
              <div className="footer__card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="footer__card-title">Surrey Office</div>
              <div className="footer__card-value">Surrey, BC</div>
              <div className="footer__card-hours">
                <div className="footer__card-hours-row">
                  <span>Mon - Fri</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="footer__card-hours-row">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="footer__card-hours-row">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Location 2 */}
            <div className="footer__card">
              <div className="footer__card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="footer__card-title">White Rock / Langley</div>
              <div className="footer__card-value">Serving All Areas</div>
              <div className="footer__card-hours">
                <div className="footer__card-hours-row">
                  <span>Mon - Thu</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="footer__card-hours-row">
                  <span>Fri - Sun</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="footer__social">
            <a
              href="https://instagram.com/Pranvue_services.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href="mailto:sheoranprince42@gmail.com"
              className="footer__social-link"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="footer__nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="footer__nav-link">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              © {currentYear} Pranvue Property Services. All rights reserved.
            </p>
            <Link to="/" className="footer__logo">
              <div className="footer__logo-mark">
                <span>✦</span>
              </div>
              <div className="footer__logo-text">
                <span className="footer__logo-primary">Pranvue</span>
              </div>
            </Link>
            <div className="footer__credit">
              Web Design by <a href="#" className="footer__credit-link">Concept Digital Solution</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
