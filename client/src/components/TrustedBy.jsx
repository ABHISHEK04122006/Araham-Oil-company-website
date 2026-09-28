import React from 'react';

const partners = [
  { name: 'Indian Oil Corporation Limited (IOCL)', logo: '/assets/indian-oil.svg' },
  { name: 'Oil India Limited (OIL)', logo: '/assets/oil-india.svg' },
  { name: 'Bharat Petroleum (BPCL)', logo: '/assets/bpcl.svg' },
  { name: 'Hindustan Petroleum (HPCL)', logo: '/assets/hpcl.svg' },
  { name: 'Numaligarh Refinery Limited (NRL)', logo: '/assets/nrl.png' },
  { name: 'Oil and Natural Gas Corporation (ONGC)', logo: '/assets/ongc.svg' },
  { name: 'Cairn Oil & Gas', logo: '/assets/cairn.svg' },
  { name: 'Vedanta Limited', logo: '/assets/vedanta.svg' },
  { name: 'National Aluminium Company (NALCO)', logo: '/assets/nalco.png' },
  { name: 'Chennai Petroleum (CPCL)', logo: '/assets/cpcl.svg' },
  { name: 'Bumi Armada', logo: '/assets/bumi-armada.png' },
];

export default function TrustedBy() {
  return (
    <section className="trusted-by-section">
      <div className="section-container">
        <h2 className="section-sub-title">Trusted By Energy Giants & National Refineries</h2>
        <div className="logos-marquee">
          <div className="marquee-track">
            {partners.map((partner, index) => (
              <div key={`p1-${index}`} className="partner-logo-item" title={partner.name}>
                <img src={partner.logo} alt={partner.name} loading="lazy" />
              </div>
            ))}
            {partners.map((partner, index) => (
              <div key={`p2-${index}`} className="partner-logo-item" title={partner.name}>
                <img src={partner.logo} alt={partner.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
