import React, { useState } from 'react';

const CERTIFICATES = [
  {
    id: 1,
    image: '/assets/cert-1.png',
    code: 'NMER-TI23ATEX-1679-X',
    title: 'Certified Robotic System for Hazardous Tank Environments',
  },
  {
    id: 2,
    image: '/assets/cert-2.png',
    code: 'EU-Type ATEX Zone-0',
    title: 'Camera Certificate AT0207053-X Hazardous Atmospheres',
  },
  {
    id: 3,
    image: '/assets/cert-3.png',
    code: 'ISO 9001:2015 & Patent 592382',
    title: 'Certified Quality & Proprietary Thermal Recovery',
  },
  {
    id: 4,
    image: '/assets/cert-4.png',
    code: 'CPCL Appreciation Letter',
    title: 'Certified 60°C Operating Robotic System',
  },
  {
    id: 5,
    image: '/assets/cert-5.png',
    code: 'IOCL Field Approval',
    title: 'Field Certified Across High-Hazard Refinery Terminals',
  },
];

export default function Certifications() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? CERTIFICATES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === CERTIFICATES.length - 1 ? 0 : prev + 1));
  };

  const currentCert = CERTIFICATES[currentSlide];

  return (
    <section className="atex-cert-section" id="atex-certifications">
      <div className="atex-cert-container">
        {/* Top-Left Content */}
        <div className="atex-left-content">
          <h2 className="atex-main-title">
            No-Man Entry Robotic Solutions - ATEX Zone-0 Certified
          </h2>
          <p className="atex-description">
            Engineered for Zero Life Loss, Unibose’s intrinsically safe systems are designed to replace
            human presence in confined spaces where explosive atmospheres, toxic gases, and oxygen
            instability make manual entry a life-threatening risk. By removing personnel from the hazard
            zone entirely, the system ensures safe, controlled operations
          </p>

          <a href="#innovations" className="atex-explore-widget" aria-label="Explore robotic solutions">
            <span className="atex-explore-label">EXPLORE</span>
            <div className="atex-explore-circle">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="atex-plus-icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V14M2 8H14"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Center-Bottom Robot Arm Vision Head */}
        <div className="atex-robot-head-wrap" aria-hidden="true">
          <img
            src="/assets/crm-3.png"
            alt="ATEX Zone-0 Robotic Inspection & Vision Camera"
            className="atex-robot-img"
          />
        </div>

        {/* Right Certificate Card & Slider */}
        <div className="atex-cert-card-wrap">
          <div className="atex-cert-meta-label">
            <span className="atex-cert-code">{currentCert.code}</span>
            <span className="atex-cert-caption">{currentCert.title}</span>
          </div>

          <div className="atex-cert-card">
            {/* Corner brackets */}
            <div className="atex-corner-bracket top-left">
              <svg width="12" height="12" viewBox="0 0 12 11" fill="none">
                <path d="M1 10.5V0.5H11.5" stroke="#676767" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Expand / Fullscreen icon button */}
            <button
              type="button"
              className="atex-expand-btn"
              onClick={() => setLightboxOpen(true)}
              title="Expand Certificate"
              aria-label="Expand Certificate"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Certificate Preview Image */}
            <div
              className="atex-cert-inner-img"
              onClick={() => setLightboxOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightboxOpen(true)}
            >
              <img
                key={currentCert.id}
                src={currentCert.image}
                alt={currentCert.title}
                className="atex-cert-doc-image"
              />
            </div>

            {/* Bottom-right corner bracket */}
            <div className="atex-corner-bracket bottom-right">
              <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
                <path d="M10.5 0.5L10.5 10.5L0 10.5" stroke="#676767" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Bottom Pagination Controls */}
            <div className="atex-slider-nav">
              <button
                type="button"
                className="atex-nav-arrow"
                onClick={prevSlide}
                aria-label="Previous Certificate"
              >
                <svg width="8" height="12" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="#173042"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <span className="atex-nav-counter">
                {currentSlide + 1} / {CERTIFICATES.length}
              </span>

              <button
                type="button"
                className="atex-nav-arrow"
                onClick={nextSlide}
                aria-label="Next Certificate"
              >
                <svg width="8" height="12" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="#173042"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="atex-lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="atex-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="atex-lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close Preview"
            >
              &times;
            </button>
            <img
              src={currentCert.image}
              alt={currentCert.title}
              className="atex-lightbox-img"
            />
            <div className="atex-lightbox-meta">
              <h4>{currentCert.code}</h4>
              <p>{currentCert.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
