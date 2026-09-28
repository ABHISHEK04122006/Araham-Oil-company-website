import React from 'react';

export default function Technology() {
  return (
    <section className="technology-section" id="technology">
      <div className="tech-grid-container">
        <div className="tech-image-col">
          <div className="tech-img-box">
            <img src="/assets/technology.png" alt="Arham Oil Hazardous Space Robotic Engineering" className="tech-img" />
          </div>
        </div>

        <div className="tech-content-col">
          <div className="tech-card">
            <div className="tech-card-body">
              <h2 className="tech-title">Arham Oil Technology & Domain Mastery</h2>
              <div className="tech-descriptions">
                <p>
                  Founded by Petroleum Engineers from IIT (ISM) Dhanbad, Arham Oil Gas Products and Services (AOGPSPL) pioneers robotic and process engineering for hazardous hydrocarbon waste management. With 1,000,000+ KL sludge treated and 400,000+ KL crude recovered across 50+ refinery deployments, we turn hazardous liabilities into valuable commercial revenue.
                </p>
                <p>
                  Integrating specialized crawlers (Robot MUSHAQ 2.0 & GAJANAN 1.0) with our Indian Patent No. 592382 Heating Coil System, Low Steam Processing Units (LSPU), and proprietary demulsifiers (ARSC31 / ARSC51), we achieve 90%–95% oil recovery yield while ensuring 100% Zero Human Entry into explosive confined spaces.
                </p>
              </div>
            </div>

            <div className="tech-pills-row">
              <span className="tech-pill">IIT Dhanbad Petroleum Engineers</span>
              <span className="tech-pill">Indian Patent No. 592382</span>
              <span className="tech-pill">1,000,000+ KL Sludge Processed</span>
              <span className="tech-pill">90%–95% Oil Recovery Yield</span>
              <span className="tech-pill">100% Zero Human Confined Entry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
