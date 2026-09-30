import React, { useState } from 'react';

const GEOMETRY_CAPSULES = [
  {
    id: 'flat',
    title: 'Flat Bottom\nStorage Tank',
    image: '/assets/flat-bottom.svg',
    alt: 'Flat Bottom Storage Tank',
    bubbles: [
      { text: 'Crude\nTanks', top: '-4%', right: '28%' },
      { text: 'Cooling Tower\nBasins', top: '3%', right: '2%' },
      { text: 'Slop /\nDistillates', top: '18%', right: '-15%' },
      { text: 'Waste Lagoon\nPits', top: '37%', right: '-18%' },
      { text: 'Chemical\nTanks', top: '56%', right: '-14%' },
      { text: 'White Oil\nTanks', top: '74%', right: '-6%' }
    ]
  },
  {
    id: 'horizontal',
    title: 'Horizontal\nStorage Tank',
    image: '/assets/horizontal-tank.svg',
    alt: 'Horizontal Storage Tank',
    bubbles: [
      { text: 'Chemicals and\nSolvents', top: '-5%', right: '28%' },
      { text: 'Acid\nWagons', top: '3%', right: '2%' },
      { text: 'Petroleum\nProducts', top: '18%', right: '-15%' },
      { text: 'Underground\nVessels', top: '37%', right: '-18%' },
      { text: 'Bullet\nTanks', top: '56%', right: '-14%' }
    ]
  },
  {
    id: 'vertical',
    title: 'Vertical\nTank/Vessels',
    image: '/assets/vertical-tank.svg',
    alt: 'Vertical Tank/Vessels',
    bubbles: [
      { text: 'Columns', top: '-4%', right: '28%' },
      { text: 'Catalyst\nReactors', top: '3%', right: '2%' },
      { text: 'Flash\nVessels', top: '18%', right: '-15%' },
      { text: 'Silos', top: '37%', right: '-18%' },
      { text: 'Horton\nSpheres', top: '56%', right: '-14%' }
    ]
  }
];

export default function Geometries() {
  const [activeCapsule, setActiveCapsule] = useState('horizontal');

  return (
    <section className="geometries-section" id="geometries">
      <div className="section-container">
        <div className="geo-banner-wrap">
          <div className="geo-header-content">
            <div className="geo-award-badge">
              <div className="award-laurel-disc">
                <svg className="award-wreath-icon" viewBox="0 0 38 38" fill="none">
                  <circle cx="19" cy="19" r="16.5" stroke="currentColor" strokeWidth="2" strokeDasharray="3 1.5" />
                  <text x="19" y="23" textAnchor="middle" fontSize="13" fontWeight="800" fill="currentColor" fontFamily="'Helvetica Neue', Helvetica, 'Arimo', Arial, sans-serif">1ˢᵗ</text>
                </svg>
              </div>
              <span className="geo-award-text">ASIA'S 1<sup>ST</sup> ATEX ZONE-0 CERTIFIED ROBOT</span>
            </div>

            <span className="geo-badge">PROVEN ACROSS 50+ PROJECTS • ATEX ZONE-0 ROBOTICS</span>

            <h2 className="geo-main-title">
              Engineered for Every <span className="geo-highlight-green">Hazardous</span> Tank & Basin Geometry
            </h2>

            <h3 className="geo-sub-title">
              Robotic Cleaning & Mechanized Desludging for Storage Tanks, Lagoons, Pits & Vessels
            </h3>
          </div>
        </div>

        {/* 3 Geometry Interactive Capsules */}
        <div className="geo-capsules-grid">
          {GEOMETRY_CAPSULES.map((capsule) => {
            const isActive = activeCapsule === capsule.id;
            return (
              <div
                key={capsule.id}
                className={`geo-capsule-item ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveCapsule(capsule.id)}
                onClick={() => setActiveCapsule(capsule.id)}
              >
                <div className="geo-capsule-card">
                  <div className="geo-capsule-icon-wrap">
                    <img src={capsule.image} alt={capsule.alt} className="geo-capsule-svg" />
                  </div>
                  <h4 className="geo-capsule-title">
                    {capsule.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h4>
                  <div className="geo-capsule-arrow-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>

                {/* Subcategory Floating Bubbles */}
                <div className="geo-capsule-bubbles">
                  {capsule.bubbles.map((b, idx) => (
                    <div
                      key={idx}
                      className="geo-bubble"
                      style={{
                        top: b.top,
                        right: b.right,
                        transitionDelay: `${idx * 45}ms`
                      }}
                    >
                      <span className="geo-bubble-text">
                        {b.text.split('\n').map((t, ti) => (
                          <React.Fragment key={ti}>
                            {t}
                            {ti < b.text.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
