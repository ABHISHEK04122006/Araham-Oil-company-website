import React, { useState } from 'react';

export default function Drawer({ isOpen, onClose }) {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      <div className={`nav-drawer-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <aside className={`nav-drawer ${isOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close Navigation">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" strokeWidth="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="drawer-content">
          <nav className="drawer-nav">
            <div className="nav-item">
              <a href="#technology" className="nav-link" onClick={onClose}>Our Story</a>
            </div>

            <div className={`nav-item has-dropdown ${productsOpen ? 'open' : ''}`}>
              <div className="nav-link-dropdown-toggle" onClick={() => setProductsOpen(!productsOpen)}>
                <span>Robotics & Services</span>
                <span className="dropdown-icon">+</span>
              </div>

              <div className="drawer-submenu">
                <div className="sub-category">
                  <h4>Robotic Hardware</h4>
                  <ul>
                    <li><a href="#geometries" onClick={onClose}>Robot MUSHAQ 2.0 (Tank Cleaning)</a></li>
                    <li><a href="#geometries" onClick={onClose}>Robot GAJANAN 1.0 (Lagoon Dredger)</a></li>
                    <li><a href="#innovations" onClick={onClose}>Neodymium Magnetic Crawlers</a></li>
                    <li><a href="#innovations" onClick={onClose}>Autonomous Oil Skimmer Robots</a></li>
                  </ul>
                </div>
                <div className="sub-category">
                  <h4>Sludge & Oil Reprocessing</h4>
                  <ul>
                    <li><a href="#technology" onClick={onClose}>Patented Heating Coil (Patent 592382)</a></li>
                    <li><a href="#technology" onClick={onClose}>Low Steam Processing Unit (LSPU)</a></li>
                    <li><a href="#technology" onClick={onClose}>3-Phase Tricanter Centrifugation</a></li>
                    <li><a href="#technology" onClick={onClose}>ARSC31 & ARSC51 Chemical Demulsifiers</a></li>
                  </ul>
                </div>
                <div className="sub-category">
                  <h4>Refinery Services</h4>
                  <ul>
                    <li><a href="#raas" onClick={onClose}>Online Mechanical Desludging</a></li>
                    <li><a href="#raas" onClick={onClose}>Robo-Verse™ Turnkey Maintenance</a></li>
                    <li><a href="#certifications" onClick={onClose}>ATEX Zone-0 Certified Turnaround</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-item">
              <a href="#raas" className="nav-link" onClick={onClose}>Robo-Verse™ & RaaS</a>
            </div>

            <div className="nav-item">
              <a href="#faq" className="nav-link" onClick={onClose}>Technical FAQ</a>
            </div>

            <div className="nav-item">
              <a href="#contact" className="nav-link" onClick={onClose}>Contact & Brochure</a>
            </div>
          </nav>

          <div className="drawer-footer-meta">
            <div className="meta-block">
              <span className="meta-label">Corporate Office</span>
              <p>806, North Plaza, Visat Gandhinagar Highway, Motera, Ahmedabad, Gujarat - 380005, India</p>
            </div>
            <div className="meta-block">
              <span className="meta-label">Registered Office</span>
              <p>A-403, Arham Regency, Sabarmati, Ahmedabad, Gujarat - 380005, India</p>
            </div>
            <div className="meta-block">
              <span className="meta-label">Direct Contacts</span>
              <p><a href="tel:+917486042709">+91 74860 42709</a> / <a href="tel:+917486042707">+91 74860 42707</a></p>
              <p><a href="mailto:aogpspl@arhamoil.com">aogpspl@arhamoil.com</a> | <a href="mailto:admin@arhamoil.com">admin@arhamoil.com</a></p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
