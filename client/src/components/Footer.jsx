import React from 'react';

export default function Footer() {
  return (
    <footer className="ref-footer-section">
      <div className="ref-footer-container">
        <div className="ref-footer-card">
          <div className="ref-footer-grid">
            {/* Col 1: Office */}
            <div className="footer-block">
              <h4 className="footer-block-title">Office</h4>
              <p className="footer-address">
                No.33, SIDCO Industrial Estate, CMDA<br />
                Phase – 2, Maraimalai Nagar,<br />
                Chengalpattu, Tamil Nadu 603209
              </p>
              <div className="footer-meta-block">
                <p className="footer-cert-note">
                  An ISO 9001:2015, 14001:2015, 45001:2018<br />
                  certified company
                </p>
                <p className="footer-copyright-note">
                  &copy; 2026 ARHAM OIL. All rights reserved. Site by Dezvolta
                </p>
              </div>
            </div>

            {/* Col 2: Contact */}
            <div className="footer-block">
              <h4 className="footer-block-title">Contact</h4>
              <p className="footer-phone">+91 98197 41402</p>
              <p className="footer-phone">+91 96770 99223</p>
              <p className="footer-email">contact@arhamoil.com</p>
            </div>

            {/* Col 3: Quick link & Brochure Download */}
            <div className="footer-block">
              <h4 className="footer-block-title">Quick link</h4>
              <ul className="footer-quick-links">
                <li><a href="#about">Our Story</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#raas">RaaS</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <a href="#contact" className="btn-brochure-download">
                <span className="brochure-icon">&darr;</span>
                <span>ARHAM OIL BROCHURE</span>
              </a>
            </div>

            {/* Col 4: Socials & Large Brand Logo */}
            <div className="footer-block footer-brand-col">
              <div className="footer-social-row">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <img src="/assets/linkedin-badge.png" alt="LinkedIn" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="YouTube"
                >
                  <img src="/assets/youtube-badge.png" alt="YouTube" />
                </a>
              </div>

              <div className="footer-big-brand-logo">
                <img
                  src="/assets/arham-logo.png"
                  alt="Arham Oil"
                  className="arham-footer-logo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
