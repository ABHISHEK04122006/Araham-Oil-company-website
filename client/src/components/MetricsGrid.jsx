import React from 'react';

export default function MetricsGrid() {
  const metrics = [
    {
      id: 'sludge-processed',
      icon: '/assets/metric-icon-1.png',
      number: '1,000,000',
      sublabel: 'KL SLUDGE PROCESSED',
      heading: '1 Million KiloLitres Handled',
      desc: 'Safely treated across 50+ high-hazard refinery deployments with 100% safety compliance.',
      bottomImg: '/assets/metric-card-1.png',
      hasDash: false
    },
    {
      id: 'oil-recovered',
      icon: '/assets/metric-icon-2.png',
      number: '400,000',
      sublabel: 'KL OIL RECOVERED',
      heading: '40% Average Recovery Yield',
      desc: 'Recovered pipeline-grade crude oil returned directly to refinery battery limits for commercial revenue.',
      bottomImg: '/assets/metric-card-2.png',
      hasDash: false
    },
    {
      id: 'recovery-efficiency',
      icon: '/assets/metric-icon-3.png',
      number: '90% – 95%',
      sublabel: 'RECOVERY EFFICIENCY',
      heading: 'Hydrocarbon Separation Purity',
      desc: 'Combined thermal LSPU, patented coils (Patent 592382), and 3-phase centrifugation achieving <1-2% BS&W.',
      bottomImg: '/assets/metric-card-3.png',
      hasDash: true
    },
    {
      id: 'safety-incidents',
      icon: '/assets/metric-icon-4.png',
      number: '0',
      sublabel: 'SAFETY INCIDENTS',
      heading: '100% Zero-Man Entry Record',
      desc: 'Complete elimination of toxic H2S exposure, explosive atmospheres, and confined space fatalities.',
      bottomImg: '/assets/metric-card-4.png',
      hasDash: false
    }
  ];

  return (
    <section className="metrics-section ref-metrics-layout" id="impact">
      {/* Background Overlay */}
      <div className="metrics-ref-bg-overlay" aria-hidden="true" />

      <div className="section-container metrics-ref-container">
        {/* Top Header */}
        <div className="metrics-ref-header">
          <div className="metrics-ref-green-dash" aria-hidden="true" />
          <h2 className="metrics-ref-title">
            Proven Operational Scale &amp;
            <span className="metrics-ref-title-green">Environmental Impact</span>
          </h2>
        </div>

        {/* 4 Cards Grid Matching Reference Image Exactly */}
        <div className="metrics-ref-grid">
          {metrics.map((card) => (
            <div key={card.id} className="metrics-ref-card">
              {/* Top Circular Icon */}
              <div className="metrics-ref-icon-disc">
                <img src={card.icon} alt="" className="metrics-ref-icon-img" />
              </div>

              {/* Bold Green Number */}
              <div className="metrics-ref-number">{card.number}</div>

              {/* Uppercase Sub-label */}
              <div className="metrics-ref-sublabel">
                {card.sublabel}
                {card.hasDash && <div className="metrics-ref-card-dash" aria-hidden="true" />}
              </div>

              {/* Heading */}
              <h3 className="metrics-ref-heading">{card.heading}</h3>

              {/* Description Body */}
              <p className="metrics-ref-desc">{card.desc}</p>

              {/* Bottom Image with Green Arc Overlay */}
              <div className="metrics-ref-bottom-wrap">
                <img
                  src={card.bottomImg}
                  alt={card.heading}
                  className="metrics-ref-bottom-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
