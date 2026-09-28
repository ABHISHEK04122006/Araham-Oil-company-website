import React from 'react';

export default function SplitShowcase() {
  return (
    <section className="split-showcase-section" id="raas">
      <div className="split-col split-left">
        <div className="split-bg-box">
          <img src="/assets/mushaq-bg.png" alt="Arham Oil MUSHAQ 2.0 Non-Man Entry Tank Robot" className="split-img" />
          <div className="split-shade"></div>
        </div>
        <div className="split-overlay-content">
          <div className="split-text-group">
            <h2 className="split-heading">MUSHAQ 2.0</h2>
            <p className="split-subtag">(NON-MAN ENTRY TANK ROBOT)</p>
            <p className="split-desc">Ultra-compact 30x20x8 inch ATEX Zone 0 crawler robot with 15 HP hydraulic power pack, 1 to 50 bar jetting, and 25 mm solids handling pump for 100% human risk elimination.</p>
          </div>
        </div>
      </div>

      <div className="split-col split-right">
        <div className="split-bg-box">
          <img src="/assets/robo-verse-bg.png" alt="Arham Oil Robo-Verse Turnkey Refinery Services" className="split-img" />
          <div className="split-shade"></div>
        </div>
        <div className="split-overlay-content">
          <div className="split-text-group">
            <h2 className="split-heading">Robo-Verse™</h2>
            <p className="split-subtag">(TURNKEY REFINERY SERVICES & RAAS)</p>
            <p className="split-desc">Comprehensive zero-capex turnkey robotics and RaaS model delivering robotic cleaning, patented sludge oil recovery, online mechanical desludging, and NDT inspection.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
