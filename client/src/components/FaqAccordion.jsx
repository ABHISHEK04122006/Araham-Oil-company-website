import React, { useState } from 'react';

const FAQS = [
  {
    q: 'What does Unibose Technology do?',
    a: 'Unibose Technology designs and manufactures ATEX Zone-0 certified no-man-entry robotic systems for cleaning hazardous confined spaces inside crude oil, fuel oil, chemical, and acid storage tanks. The company eliminates human entry into explosive and toxic environments, reduces operational downtime, and ensures Zero Life Loss during industrial tank maintenance.'
  },
  {
    q: 'Why does manual tank cleaning persist in heavy industry despite the high risk of human fatality?',
    a: 'Human entry in tanks persists because for decades the industry accepted a dangerous trade-off: compromising human safety to achieve operational cleanliness. Early robotic solutions were too bulky, expensive, or incapable of navigating complex tank geometries. Facility managers often defaulted to manual crews simply due to a lack of awareness that modern No-Man Entry robotics have evolved to safely handle Zone-0 hazardous environments. Unibose bridges this gap via RaaS, removing the risk premium without capital expenditure barriers.'
  },
  {
    q: 'How does accumulated sludge in industrial storage tanks impact total facility capacity and revenue?',
    a: 'Sludge acts as a capacity and efficiency thief. Accumulated sludge reduces available storage volume, contaminates new batches, and leads to expensive rework. Traditional manual cleaning requires lengthy shutdowns and extensive venting periods that halt production for weeks. Robotic solutions operate with 40% reduced downtime, reclaiming lost capacity and revenue significantly faster.'
  },
  {
    q: 'Can the Unibose system extract solidified, dense sludge without introducing additional water?',
    a: 'Yes. While many robotic systems act merely as vacuums that clog easily, Unibose systems feature a robust front-mounted auger and sludge cutter mechanism. This system physically breaks down solidified, dense sludge and cake-like deposits that typically require manual chipping. Once broken down, the system pumps the waste out through a high-capacity onboard pump without introducing massive amounts of water that would subsequently require expensive treatment.'
  },
  {
    q: 'Why is the ATEX Zone-0 certification essential for the Unibose robot in hazardous environments?',
    a: 'ATEX Zone-0 is the most stringent safety certification for equipment used in explosive atmospheres, signifying that the robot is safe to operate where explosive gas, vapor, or mist is present continuously. Many "industrial" robots are only rated for Zone-1 or Zone-2 (intermittent danger). Unibose provides Asia’s first Zone-0 certified robot, ensuring intrinsically safe operations within live tanks containing highly volatile substances without sparking an explosion.'
  },
  {
    q: 'How does the Unibose "Robotics-as-a-Service" (RaaS) model overcome barriers to robotic adoption?',
    a: 'The primary barrier to adopting advanced robotics is high upfront CapEx. Many facilities hesitate to purchase a specialized robot used only periodically. Unibose resolves this challenge through a RaaS model, where payment is based on the outcome (a clean tank) rather than asset acquisition, treating tank cleaning as an operational expense (OpEx) with immediate ROI.'
  },
  {
    q: 'How can existing industrial cleaning companies partner with Unibose through the OEM model?',
    a: 'Unibose operates an OEM program supplying certified robotic platforms to established service providers. This allows service partners to upgrade from manual labor crews to tech-enabled robotic squads, elevating their safety ratings and allowing them to bid on high-value tenders requiring mandatory No-Man Entry execution.'
  },
  {
    q: 'How does Unibose technology solve the "Visibility Gap" inside dark storage tanks?',
    a: 'Unibose robots are equipped with ATEX-certified low-light cameras and high-intensity LED systems delivering high-definition, 360° pan-tilt real-time video feeds to external operators. This enables simultaneous cleaning and structural inspection, exposing floor corrosion, pitting, and cracks for predictive maintenance.'
  },
  {
    q: 'In which industrial sectors can Unibose robots be deployed beyond Oil & Gas?',
    a: 'Our systems are industry-agnostic: Chemical Processing (toxic residues), Power Generation (cooling tower basins), Fertilizer & Minerals (phosphoric acid rail wagons), Wastewater Treatment (ETP/STP sludge removal), and Food & Beverage storage vats.'
  },
  {
    q: 'What is the Unibose long-term vision for the future of industrial safety and automation?',
    a: 'To make "Man Entry" into confined spaces a historic obsolescence. We are advancing toward semi-autonomous and fully autonomous AI path-planning and sludge detection, confining human roles to clean, air-conditioned control rooms far away from hazardous zones.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-container faq-split-layout">
        {/* Left Column: Heading */}
        <div className="faq-left-col">
          <h2 className="faq-split-title">
            Frequently Asked<br />Questions
          </h2>
        </div>

        {/* Right Column: Accordion List */}
        <div className="faq-right-col">
          <div className="faq-accordion-list">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-card-item ${isOpen ? 'active' : ''}`}>
                  <button
                    className="faq-card-trigger"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className="faq-chevron-disc">
                      <svg
                        className="faq-chevron-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-card-panel">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
