import React, { useState } from 'react';

export default function Testimonials() {
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <section className="customer-stories-section" id="stories">
      <div className="customer-stories-container">
        {/* Section Heading */}
        <h2 className="customer-stories-title">Customer stories</h2>

        {/* 4-Column Grid */}
        <div className="customer-stories-grid">
          {/* Col 1: Summary Brand Card */}
          <div className="story-col story-col-summary">
            <div className="summary-brand-card">
              <div className="summary-top">
                <div className="summary-brand-logo-wrap">
                  <img
                    src="/assets/arham-logo-dark.png"
                    alt="Arham Oil"
                    className="summary-brand-logo-img"
                  />
                </div>
                <p className="summary-tagline">Trusted by clients worldwide</p>
              </div>

              <div className="summary-bottom">
                <div className="summary-stat-label">
                  Customer<br />satisfaction rate
                </div>
                <div className="summary-footer-row">
                  <div className="summary-client-badges">
                    <span className="badge-circle" title="IndianOil">
                      <img src="/assets/indian-oil.svg" alt="IndianOil" />
                    </span>
                    <span className="badge-circle" title="CPCL">
                      <img src="/assets/cpcl.svg" alt="CPCL" />
                    </span>
                    <span className="badge-circle poly-disc" title="Poly-Tech">
                      <img src="/assets/poly-tech.png" alt="Poly-Tech" />
                    </span>
                  </div>

                  <div className="slider-controls">
                    <button
                      type="button"
                      className="slider-arrow-btn"
                      onClick={() => setScrollIndex((prev) => Math.max(0, prev - 1))}
                      aria-label="Previous story"
                    >
                      &lt;
                    </button>
                    <button
                      type="button"
                      className="slider-arrow-btn"
                      onClick={() => setScrollIndex((prev) => Math.min(2, prev + 1))}
                      aria-label="Next story"
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Top narrative, Bottom author (Poly-Tech) */}
          <div className="story-col">
            <div className="story-narrative-card">
              <p>
                Arham Oil designed, developed, and deployed a custom-engineered robotic system for cleaning Phosphoric Acid carrying rail wagons.
              </p>
              <p>
                This first-of-its-kind application addressed the complex challenge of removing hazardous residue from cylindrical wagon interiors without any human entry. The robot executed the task effectively, delivering thorough cleaning while operating safely over the critical rubber lining without causing damage and eliminating worker exposure to corrosive conditions.
              </p>
              <p>
                The engagement validated Arham Oil's ability to deliver precise, application-specific robotic solutions for demanding industrial cleaning requirements.
              </p>
            </div>

            <div className="story-author-card">
              <div className="author-avatar-badge poly-badge">
                <img src="/assets/poly-tech.png" alt="Poly-Tech" />
              </div>
              <div className="author-info">
                <h4>Mr. Rajakumar P</h4>
                <p className="author-role">Manager – Research &amp; Development</p>
                <p className="author-company">Poly-Tech Maintenance &amp; Industrial Operation, Saudi Arabia</p>
              </div>
            </div>
          </div>

          {/* Col 3: Top author, Bottom narrative (IndianOil) - INVERTED ORDER */}
          <div className="story-col story-col-inverted">
            <div className="story-author-card">
              <div className="author-avatar-badge iocl-badge">
                <img src="/assets/indian-oil.svg" alt="IndianOil" />
              </div>
              <div className="author-info">
                <h4>Mr. K. Suresh Bacon</h4>
                <p className="author-role">Chief General Manager (Tamil Nadu State Operations Dept)</p>
                <p className="author-company">Indian oil corporation limited</p>
              </div>
            </div>

            <div className="story-narrative-card">
              <p>
                Arham Oil successfully deployed their ATEX Zone-0 Certified robot to clean both High Speed Diesel and Furnace Oil tanks at IOCL terminals, achieving complete cleaning with zero manual entry. This innovative approach significantly reduced water usage and cut tank downtime by more than 90% compared to manual methods.
              </p>
              <p>
                IOCL is enormously satisfied and appreciative of this initiative and look forward to engage with M/s Arham Oil Private Limited to undertake many more cleaning activities.
              </p>
            </div>
          </div>

          {/* Col 4: Top narrative, Bottom author (CPCL) */}
          <div className="story-col">
            <div className="story-narrative-card">
              <p>
                During a four-day trial at the Manali Refinery, the No-Man Entry Robot (NMER) was utilized to clean high viscous and greasy Lube oil sludge from an intermediate storage tank. The system proved its capability by effectively removing residual sludge in a hazardous environment without putting human workers at risk.
              </p>
              <p>
                The Robotic system effectively cleaned out about 90KL of sludge and is suitable to work in ZONE-0 hazardous environment without any man entry inside the storage tank.
              </p>
            </div>

            <div className="story-author-card">
              <div className="author-avatar-badge cpcl-badge">
                <img src="/assets/cpcl.svg" alt="CPCL" />
              </div>
              <div className="author-info">
                <h4>Mr. S.P. Velavan</h4>
                <p className="author-role">Deputy General Manager (TS - Inspection)</p>
                <p className="author-company">CPCL manali refinery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
