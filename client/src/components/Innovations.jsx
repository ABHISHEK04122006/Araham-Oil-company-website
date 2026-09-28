import React from 'react';

export default function Innovations() {
  return (
    <section className="innovations-section" id="innovations">
      <div className="section-container">
        {/* Header Row */}
        <div className="innovations-top-row">
          <div className="innovations-title-wrap">
            <h2 className="innovations-main-heading">
              Key Innovations That <br />Set N-MER Apart
            </h2>
          </div>

          {/* Top-Right Badges */}
          <div className="innovations-badges-row">
            <div className="inno-badge-pill">
              <div className="inno-badge-text">
                <span>Proven</span>
                <span>in the field</span>
              </div>
              <div className="inno-badge-icon">
                <img src="/assets/icon-proven.svg" alt="Proven in the field" />
              </div>
            </div>

            <div className="inno-badge-pill">
              <div className="inno-badge-text">
                <span>Protected</span>
                <span>by 7 patents</span>
              </div>
              <div className="inno-badge-icon">
                <img src="/assets/icon-patents.svg" alt="Protected by 7 patents" />
              </div>
            </div>

            <div className="inno-badge-pill">
              <div className="inno-badge-text">
                <span>Designed to do</span>
                <span>what others can't.</span>
              </div>
              <div className="inno-badge-icon">
                <img src="/assets/icon-designed.svg" alt="Designed to do what others can't" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="innovations-features-grid">
          {/* Row 1: Two Large Cards (50% / 50%) */}
          <div className="inno-feature-card card-half card-onboard-pump">
            <div className="inno-card-header">
              <h3 className="inno-feature-title">Onboard Pump Robot</h3>
              <p className="inno-feature-desc">
                World’s first ATEX Zone-0 certified Robot with autonomous pumping capability—10–12 m³/hr.
              </p>
            </div>
            <div className="inno-card-visual right-aligned">
              <img
                src="/assets/onboard-pump-robot.png"
                alt="Onboard Pump Robot Slurry Intake"
                className="inno-card-img"
              />
            </div>
          </div>

          <div className="inno-feature-card card-half card-two-line">
            <div className="inno-card-header">
              <h3 className="inno-feature-title">
                Revolutionary Two-Line Hydraulic Architecture
              </h3>
              <p className="inno-feature-desc">
                Eliminates heavy manual handling and hose-entanglement around roof legs—common with competitors’ 10–16 hose setups.
              </p>
            </div>
            <div className="inno-card-visual right-aligned">
              <img
                src="/assets/two-line-hydraulic-arch.png"
                alt="Revolutionary Two-Line Hydraulic Architecture"
                className="inno-card-img"
              />
            </div>
          </div>

          {/* Row 2: Three Cards (33.3% / 33.3% / 33.3%) */}
          <div className="inno-feature-card card-third card-vision-system">
            <div className="inno-card-header">
              <h3 className="inno-feature-title">ATEX Zone-0 Vision System</h3>
              <p className="inno-feature-desc">
                ATEX Zone-0 low-light cameras with certified LED lighting and PAN-TILT deliver 360° tank visibility, giving operators real-time control for smooth robot operation.
              </p>
            </div>
            <div className="inno-card-visual bottom-left-aligned">
              <img
                src="/assets/atex-vision-system.png"
                alt="ATEX Zone-0 Vision System Pan-Tilt Rig"
                className="inno-card-img vision-img"
              />
            </div>
          </div>

          {/* Card 4 (Center): Visual on Top, Text Centered at Bottom */}
          <div className="inno-feature-card card-third card-fail-safe">
            <div className="inno-card-visual top-center-aligned">
              <img
                src="/assets/fail-safe-mode.png"
                alt="Exclusive Fail Safe Mode Heavy Duty Caster Wheels"
                className="inno-card-img fail-safe-img"
              />
            </div>
            <div className="inno-card-footer centered-text">
              <h3 className="inno-feature-title">Exclusive Fail Safe Mode</h3>
              <p className="inno-feature-desc">
                First of its kind Emergency Evacuation System retrieves the robot in minutes and enables immediate relaunch, ensuring truly No Man Entry even during failures.
              </p>
            </div>
          </div>

          <div className="inno-feature-card card-third card-automated-handling">
            <div className="inno-card-header">
              <h3 className="inno-feature-title">Advanced Automated Handling</h3>
              <p className="inno-feature-desc">
                Effortless hydraulic and vacuum hose winder eliminates manual labor in managing the heavy hoses.
              </p>
            </div>
            <div className="inno-card-visual bottom-center-aligned">
              <img
                src="/assets/automated-handling-reel.png"
                alt="Advanced Automated Handling Hose Winder"
                className="inno-card-img reel-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
